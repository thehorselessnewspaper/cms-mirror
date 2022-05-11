import { Component, OnInit } from '@angular/core';
import { HostingEntitiesTenant, TenantInfoRESTService, TenantRESTService } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'lib-tenant-chooser',
  templateUrl: './tenant-chooser.component.html',
  styleUrls: ['./tenant-chooser.component.css']
})
export class TenantChooserComponent implements OnInit {

  tenants!: HostingEntitiesTenant[];
  isAuthenticated : boolean = false;

  private tenantService : TenantRESTService;
  private oidcService : OidcSecurityService;

  constructor(tenantSvc: TenantRESTService, oidcAuthSvc : OidcSecurityService) {
    this.tenantService = tenantSvc;
    this.oidcService = oidcAuthSvc;
  }

  ngOnInit(): void {
    this.oidcService.checkAuth(window.location.href).subscribe(x => this.isAuthenticated = x.isAuthenticated);
  }

  loadTeants(): void {

  }

}
