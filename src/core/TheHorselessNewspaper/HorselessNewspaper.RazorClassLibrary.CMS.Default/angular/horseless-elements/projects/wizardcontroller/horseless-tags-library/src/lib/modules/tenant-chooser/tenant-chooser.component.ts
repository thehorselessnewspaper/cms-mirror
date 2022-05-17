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
import { Observable, tap } from 'rxjs';
import { TenantChooserService } from './services/TenantChooser.service';
@Component({
  selector: 'lib-tenant-chooser',
  templateUrl: './tenant-chooser.component.html',
  styleUrls: ['./tenant-chooser.component.css'],
})
export class TenantChooserComponent implements OnInit {
  clientConfiguration$!: Observable<SecurityRestClientConfiguration>;

  tenants!: ContentEntitiesTenant[];
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


    console.log('tenant chooser component is pulling configuration');

    this.clientConfigService.pullClientConfiguration();


    /*
    this.oidcService
      .checkAuth(window.location.href)
      .subscribe((x) => (this.isAuthenticated = x.isAuthenticated));
      */
  }
}
