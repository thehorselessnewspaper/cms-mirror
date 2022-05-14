import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-tenantblade',
  templateUrl: './TenantBlade.component.html',
  styleUrls: ['./TenantBlade.component.css']
})
export class TenantBladeComponent implements OnInit {

  isAuthenticated : Boolean = false;
  constructor(
    private router: Router,
    public oidcSecurityService: OidcSecurityService) { }

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
      }
    });
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
      /*...*/
      this.isAuthenticated = isAuthenticated;
    });
  }

}
