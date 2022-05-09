import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
@Component({
  selector: 'app-tenantblade',
  templateUrl: './TenantBlade.component.html',
  styleUrls: ['./TenantBlade.component.css']
})
export class TenantBladeComponent implements OnInit {

  isAuthenticated : Boolean = false;
  constructor(public oidcSecurityService: OidcSecurityService) { }

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
      /*...*/
      this.isAuthenticated = isAuthenticated;
    });
  }

}
