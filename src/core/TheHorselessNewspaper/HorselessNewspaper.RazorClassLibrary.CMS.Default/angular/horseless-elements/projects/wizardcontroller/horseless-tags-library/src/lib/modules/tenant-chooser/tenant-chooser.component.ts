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
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ConfigurationEndpointService } from '../../services/configuration-endpoint.service';
import { Router, NavigationStart } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { TenantChooserService } from './services/TenantChooser.service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'lib-tenant-chooser',
  templateUrl: './tenant-chooser.component.html',
  styleUrls: ['./tenant-chooser.component.css'],
})
export class TenantChooserComponent implements OnInit {
  clientConfiguration$!: Observable<SecurityRestClientConfiguration>;

  tenants!: ContentEntitiesTenant[];
  hostingModelTenants!: HostingEntitiesTenant[];

  isAuthenticated: boolean = false;

  pageSize: number | undefined = 10;
  pageCount: number | undefined = 2;
  pageNumber: number | undefined = 1;
  defaultTenant: string = 'phantom';

  private tenantService: TenantRESTService;
  private oidcService: OidcSecurityService;


  constructor(
    private router: Router,
    tenantSvc: TenantRESTService,
    oidcAuthSvc: OidcSecurityService,
    private tenantChooserService: TenantChooserService,
    private clientConfigService: ConfigurationEndpointService
  ) {
    this.tenantService = tenantSvc;
    this.oidcService = oidcAuthSvc;
  }

  ngOnInit(): void {

    let applicationJson = new HttpHeaders();
    applicationJson.append("Accept", "application/json");

    console.log('tenant chooser component is pulling configuration');

    this.clientConfigService.pullClientConfiguration();

    this.clientConfigService.clientConfiguration$
    .pipe(
      take(1),
      tap(t => {
        console.log(`tenant chooser component has new client configuration `, t);
      }),
      map(m => {
        console.log("setting tenant rest base path to %s", m.RESTEndpoint);
        this.tenantService.configuration.basePath = m.RESTEndpoint as string | undefined;


        console.log("authenticated state transition with token %s", m.AccessToken);
        this.isAuthenticated = true;

        this.tenantService.hostingEntitiesTenantRESTGetByPageNumber(10, 1, 1, "body", true,
        {
          httpHeaderAccept : "application/json"
        })
        .pipe(
          map(actionResult  =>{
            // the rest api actually returns
            // asp.net core ActionResult<T>
            let realResult = actionResult as any;
            return realResult.Value;

          }),
          map(t =>{
            if (t != undefined) console.log("tenant service has returned %s results");
            this.hostingModelTenants = t;
          }
         )
        )
        .subscribe();

      })
    )
    .subscribe();

    
    this.oidcService
      .checkAuth(window.location.href)
      .subscribe((x) => (this.isAuthenticated = x.isAuthenticated));
      
  }
}
