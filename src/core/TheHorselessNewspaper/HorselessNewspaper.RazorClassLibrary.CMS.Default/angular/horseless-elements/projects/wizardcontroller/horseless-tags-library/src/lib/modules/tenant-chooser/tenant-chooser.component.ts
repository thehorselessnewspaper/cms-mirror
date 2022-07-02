import { Component, OnInit } from '@angular/core';
import {
  ClientConfigurationService,
  ContentEntitiesTenant,
  SecurityRestClientConfiguration,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import {
  HostingEntitiesTenant,
  TenantInfoRESTService,
  TenantRESTService,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { OidcSecurityService, AuthenticatedResult } from 'angular-auth-oidc-client';
import { ConfigurationEndpointService } from '../../services/configuration-endpoint.service';
import { Router, NavigationStart } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { TenantChooserService } from './services/TenantChooser.service';
import { HttpHeaders } from '@angular/common/http';
import { ODataClient, ODataServiceFactory } from "@vigouredelaruse/angular-odata";
import { IPagedOffset } from './services/IPagedOffset';

@Component({
  selector: 'lib-tenant-chooser',
  templateUrl: './tenant-chooser.component.html',
  styleUrls: ['./tenant-chooser.component.css'],
})
export class TenantChooserComponent implements OnInit {
  clientConfiguration$!: Observable<SecurityRestClientConfiguration>;
  currentTenantIdentifier: string = '';
  tenants!: ContentEntitiesTenant[];
  tenantsCount!: number;

  hostingModelTenants!: HostingEntitiesTenant[];

  isAuthenticated: boolean = false;

  hostingEntitiesPageSize: number = 10;
  hostingEntitiesPageCount: number = 2;
  hostingEntitiesPageNumber: number = 1;

  contentEntitiesPageSize: number = 10;
  contentEntitiesPageCount: number = 2;
  contentEntitiesPageNumber: number = 1;

  defaultTenant: string = 'lache';

  private tenantService: TenantRESTService;
  private oidcService: OidcSecurityService;

  constructor(
    private router: Router,
    tenantSvc: TenantRESTService,
    oidcAuthSvc: OidcSecurityService,
    private tenantChooserService: TenantChooserService,
    private clientConfigService: ConfigurationEndpointService,
    private factory: ODataServiceFactory
  ) {
    this.tenantService = tenantSvc;
    this.oidcService = oidcAuthSvc;
  }

  ngOnInit(): void {
    let applicationJson = new HttpHeaders();
    applicationJson.append('Accept', 'application/json');

    console.log('tenant chooser component is pulling configuration');

    this.clientConfigService.pullClientConfiguration();

    this.pullHostingEntitiesTenants();

    this.oidcService
      .checkAuth(window.location.href)
      .subscribe((x) => (this.isAuthenticated = x.isAuthenticated));
  }

  pullContentEntitiesTenantsCount(){

    let contentTenantsSvc = this.factory.entitySet<HostingEntitiesTenant>("Tenants","TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant");
    let tenantEntities = contentTenantsSvc.entities();
    tenantEntities.fetch({ withCount: true})
    .subscribe(
      ({ entities, annots}) => {
        console.log("got odata response");
        this.tenantsCount = annots.count as number;
      }
    );

  }

  pullContentEntitiesTenants() {
    this.clientConfigService.clientConfiguration$
      .pipe(
        take(1),
        tap((t: SecurityRestClientConfiguration) => {
          console.log(
            `tenant chooser component has new client configuration `,
            t
          );
        }),
        map((m: SecurityRestClientConfiguration) => {
          console.log('setting tenant rest base path to %s', m.RESTEndpoint);
          this.tenantService.configuration.basePath = m.RESTEndpoint as
            | string
            | undefined;
          this.currentTenantIdentifier = m.TenantIdentifier as string;

          console.log(
            'authenticated state transition with token %s',
            m.AccessToken
          );
          this.isAuthenticated = true;

          this.tenantService
            .hostingEntitiesTenantRESTGetByPageNumber(
              this.hostingEntitiesPageSize,
              this.hostingEntitiesPageNumber,
              this.hostingEntitiesPageCount,
              'body',
              true,
              {
                httpHeaderAccept: 'application/json',
              }
            )
            .pipe(
              map((actionResult) => {
                // the rest api actually returns
                // asp.net core ActionResult<T>
                let realResult = actionResult as any;
                return realResult.Value;
              }),
              map((t) => {
                if (t != undefined)
                  console.log('tenant service has returned %s results');
                this.hostingModelTenants = t;

                console.log("getting count");
                this.pullContentEntitiesTenantsCount();
              })
            )
            .subscribe();

          if (this.currentTenantIdentifier.length == 0) {
            this.currentTenantIdentifier = this.defaultTenant;
          }

          this.tenantService
            .contentEntitiesTenantRESTGetByPageNumber(
              this.currentTenantIdentifier,
              this.contentEntitiesPageSize,
              this.contentEntitiesPageNumber,
              this.contentEntitiesPageCount,
              'body',
              true,
              {
                httpHeaderAccept: 'application/json',
              }
            )
            .pipe()
            .subscribe();
        })
      )
      .subscribe();
  }

  pullHostingEntitiesTenants() {
    this.clientConfigService.clientConfiguration$
      .pipe(
        take(1),
        tap((t) => {
          console.log(
            `tenant chooser component has new client configuration `,
            t
          );
        }),
        map((m : SecurityRestClientConfiguration) => {
          console.log('setting tenant rest base path to %s', m.RESTEndpoint);
          this.tenantService.configuration.basePath = m.RESTEndpoint as
            | string
            | undefined;
          this.currentTenantIdentifier = m.TenantIdentifier as string;

          console.log(
            'authenticated state transition with token %s',
            m.AccessToken
          );
          this.isAuthenticated = true;

          this.tenantService
            .hostingEntitiesTenantRESTGetByPageNumber(
              this.hostingEntitiesPageSize,
              this.hostingEntitiesPageNumber,
              this.hostingEntitiesPageCount,
              'body',
              true,
              {
                httpHeaderAccept: 'application/json',
              }
            )
            .pipe(
              map((actionResult) => {
                // the rest api actually returns
                // asp.net core ActionResult<T>
                let realResult = actionResult as any;
                return realResult.Value;
              }),
              map((t) => {
                if (t != undefined)
                  console.log('tenant service has returned %s results');
                this.hostingModelTenants = t;
              })
            )
            .subscribe();

          if (this.currentTenantIdentifier.length == 0) {
            this.currentTenantIdentifier = this.defaultTenant;
          }
        })
      )
      .subscribe();
  }

  pullHostingEntitiesTenantsByOffset(event : IPagedOffset) {
    //event.first = First row offset
    //event.rows = Number of rows per page
    this.tenantChooserService.pullHostingEntitiesTenantsByOffset(event.first, event.rows);

  }

  pullContentEntitiesTenantsByOffset(event : IPagedOffset) {
    //event.first = First row offset
    //event.rows = Number of rows per page
    this.tenantChooserService.pullContentEntitiesTenantsByOffset(event.first, event.rows);

  }

}
