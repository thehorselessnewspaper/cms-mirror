import { Component, Inject, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    @Inject(DOCUMENT) public document: Document,
    public oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(({isAuthenticated, userData, accessToken}) => {
      console.log('app authenticated', isAuthenticated);
      console.log(`Current access token is '${accessToken}'`);
    });
  }

  onSwitch(route: string | UrlTree){
    console.log("window href %s and path name %s and location.origin %s", location.href, location.pathname, location.origin );

    let url = new URL(window.location.href);
    console.log("url.search %s, url.hash %s url pathname %s",url.search, url.hash, url.pathname);
    this.router.navigateByUrl(route);
    // this.location.replaceState("/somepath/" + route);
    console.log("switching to route %s", route);
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

  title = 'horseless-elements';


}
