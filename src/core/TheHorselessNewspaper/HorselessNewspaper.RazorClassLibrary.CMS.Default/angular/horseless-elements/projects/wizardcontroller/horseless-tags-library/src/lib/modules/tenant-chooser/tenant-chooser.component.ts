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
import {
  OidcSecurityService,
  AuthenticatedResult,
} from 'angular-auth-oidc-client';
import { ConfigurationEndpointService } from '../../services/configuration-endpoint.service';
import { Router, NavigationStart } from '@angular/router';
import { map, Observable, take, tap, pipe, Subscription, BehaviorSubject, catchError, EMPTY } from 'rxjs';
import { TenantChooserService } from './services/TenantChooser.service';
import { HttpHeaders } from '@angular/common/http';
import {
  ODataClient,
  ODataServiceFactory,
} from '@vigouredelaruse/angular-odata';
import { IPagedOffset } from './services/IPagedOffset';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
@Component({
  selector: 'lib-tenant-chooser',
  templateUrl: './tenant-chooser.component.html',
  styleUrls: ['./tenant-chooser.component.css'],
})

@AutoUnsubscribe()
export class TenantChooserComponent implements OnInit {
  clientConfiguration$!: Observable<SecurityRestClientConfiguration>;

  currentTenantIdentifier: string = '';
  tenants!: ContentEntitiesTenant[];
  tenantsCount!: number;

  isAuthenticated$ =  new BehaviorSubject<Boolean>(false);

  hostingEntitiesPageSize: number = 10;
  hostingEntitiesPageCount: number = 2;
  hostingEntitiesPageNumber: number = 1;

  contentEntitiesPageSize: number = 10;
  contentEntitiesPageCount: number = 2;
  contentEntitiesPageNumber: number = 1;

  defaultTenant: string = 'lache';

  private tenantService: TenantRESTService;
  private oidcService: OidcSecurityService;
  public tenantChooserService!: TenantChooserService;

  public hostingModelTenant$! : Observable<HostingEntitiesTenant[] | null>
  public contentModelTenant$! : Observable<ContentEntitiesTenant[] | null>

  constructor(
    private router: Router,
    tenantSvc: TenantRESTService,
    oidcAuthSvc: OidcSecurityService,
    tenantChooserSvc: TenantChooserService,
    private clientConfigService: ConfigurationEndpointService
  ) {
    this.tenantService = tenantSvc;
    this.oidcService = oidcAuthSvc;
    this.tenantChooserService = tenantChooserSvc;

  }

  ngOnInit(): void {


    this.hostingModelTenant$
    = this.tenantChooserService.hostingEntitiesTenantsSubject as Observable<HostingEntitiesTenant[] | null>;

    this.contentModelTenant$
    = this.tenantChooserService.contentEntitiesTenantsSubject as Observable<ContentEntitiesTenant[] | null>;


    let applicationJson = new HttpHeaders();
    applicationJson.append('Accept', 'application/json');

    console.log('tenant chooser component is pulling configuration');


    try {

      this.tenantChooserService.restClientConfiguration$
          .pipe(
            map(clientConfiguration => {
              console.log("theant chooser component is handling client configuration result");
              if (clientConfiguration.AccessToken != null) {
                this.isAuthenticated$.next(true);
              }
            }),
            catchError(err => {
              console.log(`TenantChooserComponent tenantChooserService.restClientConfiguration$ handling error ${err}`);
              return EMPTY;
            })
          )
          .subscribe(piped => {
            console.log(`tenantChooserService.restClientConfiguration$  pipe subscriber executing`);
          });

    } catch (error) {
      console.log('exception pulling client configiuration');
    }

    // this.oidcService
    //  .checkAuth(window.location.href)
    //  .subscribe((x) => (this.isAuthenticated = x.isAuthenticated));
    // prime the async pump

    this.tenantChooserService.pullContentEntitiesTenantsByOffset(0, this.contentEntitiesPageSize);
    this.tenantChooserService.pullHostingEntitiesTenantsByOffset(0, this.hostingEntitiesPageSize );



  }

  pullHostingEntitiesTenantsByOffset(event: IPagedOffset) {
    //event.first = First row offset
    //event.rows = Number of rows per page
    console.log('pullHostingEntitiesTenantsByOffset starting');
    this.tenantChooserService.pullHostingEntitiesTenantsByOffset(
      event.first,
      event.rows
    );
    console.log('pullHostingEntitiesTenantsByOffset complete');
  }

  pullContentEntitiesTenantsByOffset(event: IPagedOffset) {
    //event.first = First row offset
    //event.rows = Number of rows per page
    this.tenantChooserService.pullContentEntitiesTenantsByOffset(
      event.first,
      event.rows
    );
  }

  ngOnDestroy() {
    // We'll throw an error if it doesn't
  }
}

function AutoDestroy() {
  throw new Error('Function not implemented.');
}

function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

