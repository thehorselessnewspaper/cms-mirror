import { Component, OnInit, ViewChild } from '@angular/core';
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
import {
  map,
  concatMap,
  Observable,
  take,
  tap,
  skip,
  pipe,
  Subscription,
  BehaviorSubject,
  catchError,
  EMPTY,
} from 'rxjs';
import { TenantChooserService } from './services/TenantChooser.service';
import { HttpHeaders } from '@angular/common/http';
import {
  ODataClient,
  ODataServiceFactory,
} from '@vigouredelaruse/angular-odata';
import { IPagedOffset } from '../../interfaces/IPagedOffset';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { MatAccordion } from '@angular/material/expansion';
import { ContentAccessControlEntryEditorComponent } from '../../modules/accessControlEntry-editor/content/contentAccessControlEntry-editor/contentAccessControlEntry-editor.component';
import { ContentAccessControlEntryTableComponent } from '../../modules/accessControlEntry-table/contentAccessControlEntry-table/contentAccessControlEntry-table.component';
import { HostingAccessControlEntryTableComponent } from '../accessControlEntry-table/hostingAccessControlEntry-table/hostingAccessControlEntry-table.component';
import { ContentPrincipalTableComponent } from '../../modules/principal-table/content/contentPrincipal-table/contentPrincipal-table.component';
@Component({
  selector: 'lib-tenant-chooser',
  templateUrl: './tenant-chooser.component.html',
  styleUrls: ['./tenant-chooser.component.css'],
})
@AutoUnsubscribe()
export class TenantChooserComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState = true;

  clientConfiguration$!: Observable<SecurityRestClientConfiguration>;

  currentTenantIdentifier: string = '';

  contentTenants!: ContentEntitiesTenant[];
  contentTenantsCount: number = 0;

  hostingTenants!: HostingEntitiesTenant[];
  hostingTenantsCount: number = 0;

  isAuthenticated$ = new BehaviorSubject<Boolean>(false);

  hostingEntitiesPageSize: number = 5;
  hostingEntitiesPageCount: number = 2;
  hostingEntitiesPageNumber: number = 1;

  contentEntitiesPageSize: number = 5;
  contentEntitiesPageCount: number = 2;
  contentEntitiesPageNumber: number = 1;

  defaultTenant: string = 'lache';

  private tenantService: TenantRESTService;
  private oidcService: OidcSecurityService;
  public tenantChooserService!: TenantChooserService;

  public hostingModelTenant$!: Observable<any>;
  public contentModelTenant$!: Observable<any>;

  hostingEntities$!: Observable<any>;

  contentEntities$! : Observable<any>;

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


    this.hostingModelTenant$ =
    this.tenantChooserService.hostingEntitiesTenantsSubject.pipe(
        map((entities) => {


          if (
            entities != null &&
            entities != undefined &&
            entities.entries != null &&
            entities.entries != undefined
          ) {
            console.log(`${entities?.length} entities retrieved`);
            this.hostingTenants = entities as HostingEntitiesTenant[];
            this.hostingTenantsCount = this.hostingTenants.length;
          }

        })
      );

    this.contentModelTenant$ =
    this.tenantChooserService.contentEntitiesTenantsSubject.pipe(
        map((entities) => {
          if (entities != null && entities != undefined) {
            console.log(`${entities?.length} entities retrieved`);
            this.contentTenants = entities as ContentEntitiesTenant[];

            this.contentTenantsCount = this.contentTenants.length;
          }
            // return entities;
        })
      );

  }

  ngOnInit(): void {
    let applicationJson = new HttpHeaders();
    applicationJson.append('Accept', 'application/json');


    // this.oidcService
    //  .checkAuth(window.location.href)
    //  .subscribe((x) => (this.isAuthenticated = x.isAuthenticated));
    // prime the async pump
  }

  pullHostingEntitiesTenantsByOffset(event: IPagedOffset) {
    //event.first = First row offset
    //event.rows = Number of rows per page
    console.log('pullHostingEntitiesTenantsByOffset starting');
    this.tenantChooserService.pullHostingEntitiesTenantsByOffset(
      event.first,
      event.rows
    );

    console.log(
      `pullHostingEntitiesTenantsByOffset finished event.first ${event.first}, event.rows ${event.rows}`
    );
  }

  pullContentEntitiesTenantsByOffset(event: IPagedOffset) {
    //event.first = First row offset
    //event.rows = Number of rows per page

    console.log('pullContentEntitiesTenantsByOffset starting');
    this.tenantChooserService.pullContentEntitiesTenantsByOffset(
      event.first,
      event.rows
    );

    console.log(
      `pullContentEntitiesTenantsByOffset finished event.first ${event.first}, event.rows ${event.rows}`
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
