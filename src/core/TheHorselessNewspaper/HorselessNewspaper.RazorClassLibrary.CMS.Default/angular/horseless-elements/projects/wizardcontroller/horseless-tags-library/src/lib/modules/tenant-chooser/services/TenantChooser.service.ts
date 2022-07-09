import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ODataServiceFactory } from '@vigouredelaruse/angular-odata';
import {
  ClientConfigurationService,
  ContentEntitiesTenant,
  HostingEntitiesTenant,
  SecurityRestClientConfiguration,
  TenantRESTService,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { BehaviorSubject, catchError, EMPTY, map, Observable, ReplaySubject, take, tap, concatMap } from 'rxjs';
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

  restClientConfiguration$!: ReplaySubject<SecurityRestClientConfiguration>;

  constructor(
    clientConfigSvc: ConfigurationEndpointService,
    private factory: ODataServiceFactory,
    private tenantService: TenantRESTService
  ) {
    console.log("TenantChooserService starting");
    this.clientConfigService = clientConfigSvc;
    this.restClientConfiguration$ =
      this.clientConfigService.clientConfiguration$;

      this.hostingEntitiesTenantsSubject = new BehaviorSubject<HostingEntitiesTenant[] | null>(null);

      this.contentEntitiesTenantsSubject = new BehaviorSubject<ContentEntitiesTenant[] | null>(null);
  }

  pullHostingEntitiesTenantsByOffset(offset: number, rowCount: number): void {

    console.log(`pullHostingEntitiesTenantsByOffset starting`);
    //init service
    let contentTenantsSvc = this.factory.entitySet<HostingEntitiesTenant>(
      'Tenant',
      'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant'
    );

    console.log(
      `pullHostingEntitiesTenantsByOffset is getting client configuration`
    );

    this.restClientConfiguration$.pipe(
      map((clientConfig) => {
        console.log(
          `pullHostingEntitiesTenantsByOffset finished getting client configuration: data was ` +
            clientConfig
        );

        let baseUrl = clientConfig.ODataEndpoint + "/ODataHosting/";
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
          q.skip(offset);
          q.top(rowCount);
        });

        console.log(`pullHostingEntitiesTenantsByOffset fetching`);

        return tenantEntities
          .fetch({ withCount: true, headers: headers })
          .pipe(
            map((entities) =>{

              console.log(`pullHostingEntitiesTenantsByOffset is emitting entities`);
              this.hostingEntitiesTenantsSubject.next(entities.entities);
              this.contentEntitiesTenantsCount = entities.annots.count as number;
            }),
            catchError(err => {
              console.log(`pullHostingEntitiesTenantsByOffset handling error ${err}`);
              return EMPTY;
            })
          );

      }),
      catchError(err => {
        console.log(`pullHostingEntitiesTenantsByOffset handling error ${err}`);
        return EMPTY;
      })
    )
      .subscribe(piped => {
        console.log(`restClientConfiguration$ pipe subscriber executed`)
      });


  }

  pullContentEntitiesTenantsByOffset(offset: number, rowCount: number): void {

    console.log(`pullContentEntitiesTenantsByOffset starting`);
    //init service
    let contentTenantsSvc = this.factory.entitySet<ContentEntitiesTenant>(
      'Tenant',
      'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant'
    );

    let tenantEntities = contentTenantsSvc.entities();

    this.restClientConfiguration$.pipe(
      map((clientConfig) => {
        console.log(`pullContentEntitiesTenantsByOffset has client config`);
        let baseUrl = clientConfig.ODataEndpoint + "/ODataContent/";
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
          q.skip(offset);
          q.top(rowCount);
        });

        console.log(`pullContentEntitiesTenantsByOffset is fetching`);

        return tenantEntities
          .fetch({ withCount: true, headers: headers })
          .pipe(
            map((entities) => {
              console.log(`pullContentEntitiesTenantsByOffset is emitting entities`);
              this.contentEntitiesTenantsSubject.next(entities.entities);
              this.contentEntitiesTenantsCount = entities.annots.count as number;
            }),
            catchError(err => {
              console.log(`pullContentEntitiesTenantsByOffset handling error ${err}`);
              return EMPTY;
            })
          );

      })
    )
      .subscribe(piped => {
        console.log(`this.restClientConfiguration$.pipe subscriber is emitting entities`);
      });
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

    this.restClientConfiguration$.pipe(
      concatMap((clientConfig) => {
        let baseUrl = clientConfig.ODataEndpoint + "/ODataContent/";
        contentTenantsSvc.api.serviceRootUrl = baseUrl as string;

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${clientConfig.AccessToken}`,
          'Accept': 'odata.metadata=full',
          '__tenant__' : clientConfig.TenantIdentifier as string
        })

        console.log(
          'pullContentEntitiesTenantsCount odata service root url= ' + contentTenantsSvc.api.serviceRootUrl
        );
        let tenantEntities = contentTenantsSvc.entities();

        return tenantEntities.count().fetch({  headers: headers })
          .pipe(
            map(odataResponse => {
              console.log("pullContentEntitiesTenantsCount has a count");
              this.contentEntitiesTenantsCount = odataResponse;
            })
        );
      })
    )
      .subscribe(piped => {
        console.log(`this.restClientConfiguration$.pipe subscriber executing`);
      });
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

    this.restClientConfiguration$.pipe(
      concatMap((clientConfig) => {
        console.log(
          `pullHostingEntitiesTenantsCount finished getting client configuration with data ` +
            clientConfig
        );

        let baseUrl = clientConfig.ODataEndpoint +  "/ODataHosting/";
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

        return tenantEntities.count().fetch({ headers: headers })
          .pipe(
            map(oDataResponse => {
              this.hostingEntitiesTenantsCount = oDataResponse;
            }));
      })
    )
      .subscribe(piped => {
        console.log(`this.restClientConfiguration$.pipe subscriber executing`);
      });
  }

  ngOnDestroy() {
    // We'll throw an error if it doesn't
  }
}
