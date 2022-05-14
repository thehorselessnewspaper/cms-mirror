import { Component, OnInit } from '@angular/core';
import { ContentEntitiesTenant } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { HostingEntitiesTenant, TenantInfoRESTService, TenantRESTService } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'lib-tenant-chooser',
  templateUrl: './tenant-chooser.component.html',
  styleUrls: ['./tenant-chooser.component.css']
})
export class TenantChooserComponent implements OnInit {

  tenants!: ContentEntitiesTenant[];
  isAuthenticated : boolean = false;

  pageSize: number | undefined = 10;
  pageCount: number | undefined = 2;
  pageNumber: number | undefined = 1;

  private tenantService : TenantRESTService;
  private oidcService : OidcSecurityService;

  constructor(tenantSvc: TenantRESTService, oidcAuthSvc : OidcSecurityService) {
    this.tenantService = tenantSvc;
    this.oidcService = oidcAuthSvc;

  }

  ngOnInit(): void {
    console.log("ngOnInit starting");
    this.loadTeants();
    this.oidcService.checkAuth(window.location.href).subscribe(x => this.isAuthenticated = x.isAuthenticated);
  }

  public loadTeants(): void {

    console.log("about to get content entities tenants")
    this.tenantService.contentEntitiesTenantRESTGetByPageNumber("phantom",this.pageSize, this.pageNumber, this.pageCount)
                        .subscribe(tenantQueryResult => {
                            console.log("handling tenant request response");
                            tenantQueryResult.forEach(f => this.tenants.push(f));
                        });
    console.log("retreved %d tents", this.tenants.length);

  }

}
