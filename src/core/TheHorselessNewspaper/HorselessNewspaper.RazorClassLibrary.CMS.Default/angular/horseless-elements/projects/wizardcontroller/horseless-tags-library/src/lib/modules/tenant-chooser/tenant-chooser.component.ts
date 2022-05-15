import { Component, OnInit } from '@angular/core';
import { ClientConfigurationService, ContentEntitiesTenant, SecurityRestClientConfiguration } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import {
  HostingEntitiesTenant,
  TenantInfoRESTService,
  TenantRESTService,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ConfigurationEndpointService } from '../../services/configuration-endpoint.service';
import { Router,NavigationStart} from '@angular/router';
import { Observable, tap } from 'rxjs';
@Component({
  selector: 'lib-tenant-chooser',
  templateUrl: './tenant-chooser.component.html',
  styleUrls: ['./tenant-chooser.component.css'],
})
export class TenantChooserComponent implements OnInit {

  clientConfiguration$! : Observable<SecurityRestClientConfiguration>;

  tenants!: ContentEntitiesTenant[];
  isAuthenticated: boolean = false;

  pageSize: number | undefined = 10;
  pageCount: number | undefined = 2;
  pageNumber: number | undefined = 1;

  private tenantService: TenantRESTService;
  private oidcService: OidcSecurityService;

  constructor(private router: Router,
                tenantSvc: TenantRESTService,
                oidcAuthSvc: OidcSecurityService,
                private clientConfigService: ConfigurationEndpointService) {
    this.tenantService = tenantSvc;
    this.oidcService = oidcAuthSvc;
  }

  ngOnInit(): void {

    this.subscribeToConfiguration();

    this.oidcService
      .checkAuth(window.location.href)
      .subscribe((x) => (this.isAuthenticated = x.isAuthenticated));
  }

  private subscribeToConfiguration(){

    this.clientConfiguration$ = this.clientConfigService.probeClientConfiguration()
    .pipe(
      tap(data => {
        console.log(`got client config for current url: ${window.location.href};`);
        console.log(`got access token for current url: ${data.accessToken};`);
      })
    );

    /*
    .subscribe(clienConfig => {
      console.log("rest endpoint is %s",clienConfig.restEndpoint);
      console.log("odata endpoint is %s", clienConfig.oDataEndpoint);
    });
    */
  }

  public loadTeants(): void {
    console.log('about to get content entities tenants');
    this.tenantService
      .contentEntitiesTenantRESTGetByPageNumber(
        'phantom',
        this.pageSize,
        this.pageNumber,
        this.pageCount
      )
      .subscribe((tenantQueryResult) => {
        console.log('handling tenant request response');
        tenantQueryResult.forEach((f) => this.tenants.push(f));

        console.log('retreved %d tents', this.tenants.length);
      });
  }
}
