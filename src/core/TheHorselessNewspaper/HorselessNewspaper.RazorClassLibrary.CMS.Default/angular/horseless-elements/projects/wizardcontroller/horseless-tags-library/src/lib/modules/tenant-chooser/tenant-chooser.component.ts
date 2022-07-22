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
import  { HostingPrincipalTableComponent } from '../../modules/principal-table/hosting/hostingPrincipal-table/hostingPrincipal-table.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
@Component({
  selector: 'lib-tenant-chooser',
  templateUrl: './tenant-chooser.component.html',
  styleUrls: ['./tenant-chooser.component.css'],
})
@AutoUnsubscribe()
export class TenantChooserComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState = true;

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


  constructor(
    private router: Router,
    tenantSvc: TenantRESTService,
    oidcAuthSvc: OidcSecurityService,
    tenantChooserSvc: TenantChooserService,
    private clientConfigService: ConfigurationEndpointService
  ) {

    console.log("tehant chooser component constructing");
    this.tenantService = tenantSvc;
    this.oidcService = oidcAuthSvc;
    this.tenantChooserService = tenantChooserSvc;


 console.log("tehant chooser component constructor complete");
  }

  ngOnInit(): void {
    let applicationJson = new HttpHeaders();
    applicationJson.append('Accept', 'application/json');
    console.log("tenant chooser compoent is running ngOnInit and probing client configuraton");

    console.log("tenant chooser compoent is done running ngOnInit and probing client configuraton");

    this.clientConfigService.currentConfiguration$.pipe(
      skip(1),
      map(config => {
        console.log("tenant chooser compoent is testing authenticated status");
        this.isAuthenticated$.next(true);
      })
    ).subscribe();

    this.hostingModelTenant$ =
    this.tenantChooserService.hostingEntitiesTenant$.pipe(
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
          return entities;
        })
      );

    this.contentModelTenant$ =
    this.tenantChooserService.contentEntitiesTenant$.pipe(
        map((entities) => {
          if (entities != null && entities != undefined) {
            console.log(`${entities?.length} entities retrieved`);
            this.contentTenants = entities as ContentEntitiesTenant[];

            this.contentTenantsCount = this.contentTenants.length;
          }
            return entities;
        })
      );


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
    ).subscribe(data => {
      console.log("pullHostingEntitiesTenantsByOffset subscriber executing");
    });


  }

  pullContentEntitiesTenantsByOffset(event: IPagedOffset) {
    //event.first = First row offset
    //event.rows = Number of rows per page

    console.log('pullContentEntitiesTenantsByOffset starting');
    this.tenantChooserService.pullContentEntitiesTenantsByOffset(
      event.first,
      event.rows
    ).subscribe(data => {
      console.log("pullContentEntitiesTenantsByOffset subscriber executing");
    });

  }

  ngOnDestroy() {
    // We'll throw an error if it doesn't
  }

  onSelectionChanged($event: MatTabChangeEvent) : void {
    console.log("selection changed");
    this.tenantChooserService.pullContentEntitiesTenantsByOffset(
      0,
      10
    ).subscribe(data => {
      console.log("spullContentEntitiesTenantsByOffset selection changed subscriber executing");
    });

    this.tenantChooserService.pullHostingEntitiesTenantsByOffset(
      0,
      10
    ).subscribe(data => {
      console.log("pullHostingEntitiesTenantsByOffset selection changed subscriber executing");
    });

  }
}

function AutoDestroy() {
  throw new Error('Function not implemented.');
}

function ngOnDestroy() {
  throw new Error('Function not implemented.');
}
