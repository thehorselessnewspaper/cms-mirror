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
import { BehaviorSubject, mergeMap, skip, catchError, EMPTY, map, Observable, ReplaySubject, take, tap, concatMap } from 'rxjs';
import { ConfigurationEndpointService } from '../../../services/configuration-endpoint.service';


@AutoUnsubscribe()
@Injectable({
  providedIn: 'any',
})
export class TenantChooserService {
  clientConfigService!: ConfigurationEndpointService;

  hostingEntitiesTenantsSubject!: BehaviorSubject<HostingEntitiesTenant[] | null>;
  hostingEntitiesTenantsCount!: number;

  contentEntitiesTenantsSubject!: BehaviorSubject<ContentEntitiesTenant[] | null> ;
  contentEntitiesTenantsCount!: number;

  restClientConfiguration$: BehaviorSubject<SecurityRestClientConfiguration> = new  BehaviorSubject<SecurityRestClientConfiguration>({});

  constructor(
    clientConfigSvc: ConfigurationEndpointService,
    private factory: ODataServiceFactory,
    private tenantService: TenantRESTService
  ) {
    console.log("TenantChooserService starting");
    this.clientConfigService = clientConfigSvc;
    this.restClientConfiguration$ =
      this.clientConfigService.clientConfiguration$;

      this.hostingEntitiesTenantsSubject = new BehaviorSubject<HostingEntitiesTenant[] | null>(new Array<HostingEntitiesTenant>());

      this.contentEntitiesTenantsSubject = new BehaviorSubject<ContentEntitiesTenant[] | null>(new Array<ContentEntitiesTenant>());

  }

  pullHostingEntitiesTenantsByOffset (offset: number, rowCount: number): void {

    console.log(`pullHostingEntitiesTenantsByOffset starting`);
    //init service
    let contentTenantsSvc = this.factory.entitySet<HostingEntitiesTenant>(
      'Tenant',
      'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant'
    );

    console.log(
      `pullHostingEntitiesTenantsByOffset is getting client configuration`
    );

    this.clientConfigService.probeClientConfiguration().pipe(
      map((clientConfig) => {
        console.log(
          `pullHostingEntitiesTenantsByOffset finished getting client configuration: data was ` +
            clientConfig
        );

        let baseUrl = clientConfig.ODataEndpoint + `/${clientConfig.TenantIdentifier}/ODataHosting/`;
        contentTenantsSvc.api.serviceRootUrl = baseUrl as string;

        return clientConfig;
      }),
      concatMap(clientConfig => {

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

        console.log(`pullHostingEntitiesTenantsByOffset fetching`);

        return tenantEntities
          .fetch({ withCount: true, headers: headers })
          .pipe(
            map((entities) =>{

              console.log(`pullHostingEntitiesTenantsByOffset is emitting entities`);
              if(entities != null && entities != undefined &&
                entities.entities != null && entities.entities != undefined)
                {
                  this.hostingEntitiesTenantsSubject.next(entities.entities);
                  this.contentEntitiesTenantsCount = entities.annots.count as number;
                }

            }),
            catchError(err => {
              console.log(`pullHostingEntitiesTenantsByOffset handling error ${err}`);
              return new Array<HostingEntitiesTenant>();
            })
          );

      }),
      catchError(err => {
        console.log(`pullHostingEntitiesTenantsByOffset handling error ${err}`);
        return new Array<HostingEntitiesTenant>();
      })
    ).subscribe();

  }

  pullContentEntitiesTenantsByOffset(offset: number, rowCount: number): void {


    console.log(`pullContentEntitiesTenantsByOffset starting`);
    //init service
    let contentTenantsSvc = this.factory.entitySet<ContentEntitiesTenant>(
      'Tenant',
      'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant'
    );

    let tenantEntities = contentTenantsSvc.entities();

    this.clientConfigService.probeClientConfiguration()
    .pipe(

      map((clientConfig) => {
        console.log(`pullContentEntitiesTenantsByOffset has client config`);
        let baseUrl = clientConfig.ODataEndpoint + `/${clientConfig.TenantIdentifier}/ODataContent/`;
        contentTenantsSvc.api.serviceRootUrl = baseUrl as string;

        console.log(
          'odata service root url= ' + contentTenantsSvc.api.serviceRootUrl
        );

        return clientConfig;

      }),
      concatMap((clientConfig) =>{


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

        console.log(`pullContentEntitiesTenantsByOffset is fetching`);

        return tenantEntities
          .fetch({ withCount: true, headers: headers })
          .pipe(
            map((entities) => {
              console.log(`pullContentEntitiesTenantsByOffset is emitting entities`);
                if(entities != null && entities != undefined
                  && entities.entities != null && entities.entities != undefined)
                  {
                    this.contentEntitiesTenantsSubject.next(entities.entities);
                    this.contentEntitiesTenantsCount = entities.annots.count as number;

                  }
                  return entities;
            }),
            catchError(err => {
              console.log(`pullContentEntitiesTenantsByOffset handling error ${err}`);
              return new Array<ContentEntitiesTenant>();
            })
          );

      })
    ).subscribe();

  }

  pullContentEntitiesTenantsCount(): void {
    let ret: ContentEntitiesTenant[] = new Array<ContentEntitiesTenant>();
    console.log(
      `pullContentEntitiesTenantsCount is getting client configuration`
    );

    //init service
    let contentTenantsSvc = this.factory.entitySet<ContentEntitiesTenant>(
      'Tenant',
      'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant'
    );

    this.clientConfigService.probeClientConfiguration().pipe(

      map((clientConfig) => {
        let baseUrl = clientConfig.ODataEndpoint + `/${clientConfig.TenantIdentifier}/ODataContent/`;
        contentTenantsSvc.api.serviceRootUrl = baseUrl as string;
        return clientConfig;
      }),
      concatMap(clientConfig =>{

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${clientConfig.AccessToken}`,
          'Accept': 'odata.metadata=full',
          '__tenant__' : clientConfig.TenantIdentifier as string
        })

        console.log(
          'pullContentEntitiesTenantsCount odata service root url= ' + contentTenantsSvc.api.serviceRootUrl
        );
        let tenantEntities = contentTenantsSvc.entities();

        return tenantEntities.count().fetch({   headers: headers })
          .pipe(
            map(odataResponse => {
              console.log("pullContentEntitiesTenantsCount has a count");
              this.contentEntitiesTenantsCount = odataResponse;
              return odataResponse;
            })
        );
      })
    ).subscribe();

  }

  pullHostingEntitiesTenantsCount(): void {
    let ret: HostingEntitiesTenant[] = new Array<HostingEntitiesTenant>();
    console.log(
      `pullHostingEntitiesTenantsCount is getting client configuration`
    );

    //init service
    let contentTenantsSvc = this.factory.entitySet<HostingEntitiesTenant>(
      'Tenant',
      'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant'
    );

    this.clientConfigService.probeClientConfiguration().pipe(
      map((clientConfig) => {
        console.log(
          `pullHostingEntitiesTenantsCount finished getting client configuration with data ` +
            clientConfig
        );

        let baseUrl = clientConfig.ODataEndpoint +  `${clientConfig.TenantIdentifier}/ODataHosting/`;
        contentTenantsSvc.api.serviceRootUrl = baseUrl as string;
        return clientConfig;
      }),
      concatMap(clientConfig => {

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${clientConfig.AccessToken}`,
          'Accept': 'odata.metadata=full',
          '__tenant__' : clientConfig.TenantIdentifier as string
        })

        console.log(
          'odata service root url= ' + contentTenantsSvc.api.serviceRootUrl
        );
        let tenantEntities = contentTenantsSvc.entities();

        return tenantEntities.count()
        .fetch({ headers: headers })
          .pipe(
            map(oDataResponse => {
              this.hostingEntitiesTenantsCount = oDataResponse;
              return oDataResponse;
            }));
      })
    ).subscribe();

  }

  ngOnDestroy() {
    // We'll throw an error if it doesn't
  }
}
