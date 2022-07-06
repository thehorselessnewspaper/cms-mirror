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
import { BehaviorSubject, catchError, EMPTY, map, Observable, ReplaySubject, take, tap } from 'rxjs';
import { ConfigurationEndpointService } from '../../../services/configuration-endpoint.service';


@AutoUnsubscribe()
@Injectable({
  providedIn: 'any',
})
export class TenantChooserService {
  clientConfigService!: ConfigurationEndpointService;

  hostingEntitiesTenantsSubject!: ReplaySubject<HostingEntitiesTenant[] | null>;
  hostingEntitiesTenantsCount!: number;

  contentEntitiesTenantsSubject!: ReplaySubject<ContentEntitiesTenant[] | null> ;
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

      this.hostingEntitiesTenantsSubject = new ReplaySubject<HostingEntitiesTenant[] | null>(1);

      this.contentEntitiesTenantsSubject = new ReplaySubject<ContentEntitiesTenant[] | null>(1);
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

        let baseUrl = clientConfig.ODataEndpoint + `/${clientConfig.TenantIdentifier}` + "/ODataHosting/";
        contentTenantsSvc.api.serviceRootUrl = baseUrl as string;

        return clientConfig;
      }),
      map(clientConfig => {

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${clientConfig.AccessToken}`,
          'Accept': 'odata.metadata=full'
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
            map((odataResponse) =>{
              console.log(`pullHostingEntitiesTenantsByOffset is emitting entities`);
              this.hostingEntitiesTenantsSubject.next(odataResponse.entities);
              this.contentEntitiesTenantsCount = odataResponse.annots.count as number;
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
        let baseUrl = clientConfig.ODataEndpoint + `/${clientConfig.TenantIdentifier}` + "/ODataContent/";
        contentTenantsSvc.api.serviceRootUrl = baseUrl as string;

        console.log(
          'odata service root url= ' + contentTenantsSvc.api.serviceRootUrl
        );

        return clientConfig;

      }),
      map((clientConfig) =>{


        const headers = new HttpHeaders({
          'Authorization': `Bearer ${clientConfig.AccessToken}`,
          'Accept': 'odata.metadata=full'
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
            map((oDataResponse) => {
              console.log(`pullContentEntitiesTenantsByOffset is emitting entities`);
              this.contentEntitiesTenantsSubject.next(oDataResponse.entities);
              this.contentEntitiesTenantsCount = oDataResponse.annots.count as number;
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
      map((clientConfig) => {
        let baseUrl = clientConfig.ODataEndpoint + `/${clientConfig.TenantIdentifier}` + "/ODataContent/";
        contentTenantsSvc.api.serviceRootUrl = baseUrl as string;

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${clientConfig.AccessToken}`,
          'Accept': 'odata.metadata=full'
        })

        console.log(
          'odata service root url= ' + contentTenantsSvc.api.serviceRootUrl
        );
        let tenantEntities = contentTenantsSvc.entities();

        tenantEntities.count().fetch({  headers: headers })
          .pipe(
            map(odataResponse => {
              this.contentEntitiesTenantsCount = odataResponse;
            })
        )
          .subscribe(piped => {
            console.log(`tenantEntities.count().fetch subscriber executing`);
          });
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
      map((clientConfig) => {
        console.log(
          `pullHostingEntitiesTenantsCount finished getting client configuration with data ` +
            clientConfig
        );

        let baseUrl = clientConfig.ODataEndpoint + `/${clientConfig.TenantIdentifier}` + "/ODataHosting/";
        contentTenantsSvc.api.serviceRootUrl = baseUrl as string;

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${clientConfig.AccessToken}`,
          'Accept': 'odata.metadata=full'
        })

        console.log(
          'odata service root url= ' + contentTenantsSvc.api.serviceRootUrl
        );
        let tenantEntities = contentTenantsSvc.entities();

        tenantEntities.count().fetch({ headers: headers })
          .pipe(
            map(oDataResponse => {
              this.hostingEntitiesTenantsCount = oDataResponse;
            })
        ).subscribe(piped => {
          console.log(`tenantEntities.count().fetch subscriber executing`);
        });
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
