import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ODataServiceFactory } from '@vigouredelaruse/angular-odata';
import {
  ClientConfigurationService,
  ContentEntitiesTenant,
  HostingEntitiesTenant,
  ContentEntitiesAccessControlEntry,
  ContentEntitiesACEPermission,
  ContentEntitiesACEPermissionType,
  ContentEntitiesACEPermissionScope,
  SecurityRestClientConfiguration,
  TenantRESTService,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { BehaviorSubject, mergeMap, switchMap, skip, catchError, EMPTY, map, Observable, ReplaySubject, take, tap, concatMap, withLatestFrom } from 'rxjs';
import { ConfigurationEndpointService } from '../../../services/configuration-endpoint.service';


@AutoUnsubscribe()
@Injectable({
  providedIn: 'any',
})
export class TenantChooserService {
  // clientConfigService!: ConfigurationEndpointService;

  hostingEntitiesTenant$: BehaviorSubject<HostingEntitiesTenant[] >  = new BehaviorSubject<HostingEntitiesTenant[]>(new Array<HostingEntitiesTenant>());
  hostingEntitiesTenantsCount!: number;

  contentEntitiesTenant$: BehaviorSubject<ContentEntitiesTenant[]> = new BehaviorSubject<ContentEntitiesTenant[] >(new Array<ContentEntitiesTenant>());
  contentEntitiesTenantsCount!: number;



  constructor(
    public clientConfigService: ConfigurationEndpointService,
    private factory: ODataServiceFactory,
    private tenantService: TenantRESTService
  ) {
    console.log("TenantChooserService starting");
    // this.clientConfigService = clientConfigSvc;
  }

  getContentEntitiesTenantsByOffset(offset: number, rowCount: number):  Observable<ContentEntitiesTenant[] | null> {
    console.log(`getContentEntitiesTenantsByOffset starting`);
    return this.clientConfigService.currentConfiguration$.pipe(
      map(clientConfig => {
        console.log(`getContentEntitiesTenantsByOffset pipe map starting`);
        //init service
        let contentTenantsSvc = this.factory.entitySet<ContentEntitiesTenant>(
          'Tenant',
          'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant'
        );

        let tenantEntities = contentTenantsSvc.entities();

        console.log(`getContentEntitiesTenantsByOffset has client config`);
        let baseUrl = clientConfig.ODataEndpoint + `/${clientConfig.TenantIdentifier}/ODataContent/`;
        contentTenantsSvc.api.serviceRootUrl = baseUrl as string;

        console.log(
          'odata service root url= ' + contentTenantsSvc.api.serviceRootUrl
        );

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${clientConfig.AccessToken}`,
          'Accept': 'odata.metadata=full',
          '__tenant__' : clientConfig.TenantIdentifier as string
        })

        // build query
        tenantEntities.query((q) => {
          q.orderBy((h) => h.e().ascending(h.s.CreatedAt));


          q.expand({
            AccessControlEntries : {
              // expand: {
              //   AccessControlEntries: {
              //     select: ["AccessControlEntries"]
              //   }
              // }
            },
            Owners : {
              // expand: {
              //   Owners: {
              //     select: ["Owners"]
              //   }
              // }
            },
            Accounts : {
              // expand: {
              //   OwnedPrincipals: {
              //     select: ["OwnedPrincipals"]
              //   }
              // }
            }
          });

          q.skip(offset);
          q.top(rowCount);
        });

        console.log(`getContentEntitiesTenantsByOffset is fetching`);

        return tenantEntities
          .fetch({ withCount: true, headers: headers })
          .pipe(
            map((entities) => {
              console.log(`getContentEntitiesTenantsByOffset is emitting entities`);

                  return entities.entities;
            }),
          );
      }),
      switchMap(entities =>{
        console.log("getContentEntitiesTenantsByOffset: tenant chooser switchmapped");
        return entities
      }),
      map(entities => {
        let emitted = entities as ContentEntitiesTenant[];
        this.contentEntitiesTenant$.next(emitted);
        this.contentEntitiesTenantsCount = emitted.length as number;
        return entities;
      })
    );
  }

  getHostingEntitiesTenantsByOffset (offset: number, rowCount: number): Observable<HostingEntitiesTenant[] | null> {
    console.log(`getHostingEntitiesTenantsByOffset starting`);
    return this.clientConfigService.currentConfiguration$.pipe(
      map(clientConfig =>{
        console.log(`getHostingEntitiesTenantsByOffset pipe starting`);
        //init service
        let contentTenantsSvc = this.factory.entitySet<HostingEntitiesTenant>(
          'Tenant',
          'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant'
        );

        console.log(
          `getHostingEntitiesTenantsByOffset is setting base url`
        );

        let baseUrl = clientConfig.ODataEndpoint + `/${clientConfig.TenantIdentifier}/ODataHosting/`;
        contentTenantsSvc.api.serviceRootUrl = baseUrl as string;

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${clientConfig.AccessToken}`,
          'Accept': 'odata.metadata=full',
          '__tenant__' : clientConfig.TenantIdentifier as string
        })

        console.log(
          'odata service root url= ' + contentTenantsSvc.api.serviceRootUrl
        );

        let tenantEntities = contentTenantsSvc.entities();

        // build query
        tenantEntities.query((q) => {
          q.orderBy((h) => h.e().ascending(h.s.CreatedAt));

          q.expand({
            AccessControlEntries : {
              // expand: {
              //   AccessControlEntries: {
              //     select: ["AccessControlEntries"]
              //   }
              // }
            },
            Owners : {
              // expand: {
              //   Owners: {
              //     select: ["Owners"]
              //   }
              // }
            },
            Accounts : {
              // expand: {
              //   OwnedPrincipals: {
              //     select: ["OwnedPrincipals"]
              //   }
              // }
            }
          });

          q.skip(offset);
          q.top(rowCount);
        });

        console.log(`getHostingEntitiesTenantsByOffset fetching`);

        return tenantEntities
        .fetch({ withCount: true, headers: headers })
        .pipe(
          map((entities) =>{
               return entities.entities;
          })
        );
      }),
      switchMap(entities => {
        console.log("getHostingEntitiesTenantsByOffset: tenant chooser switchmapped");

        return entities;
      }),
      map(entities =>{
        let emitted = entities as HostingEntitiesTenant[];
        this.hostingEntitiesTenant$.next(emitted);
        this.contentEntitiesTenantsCount = emitted.length as number;
        return entities;
      })
    );
  }

  ngOnDestroy() {
    // We'll throw an error if it doesn't
  }
}
