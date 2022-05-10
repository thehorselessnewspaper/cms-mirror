import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorselessClientAuthComponent } from './HorselessClientAuth.component';
import { Pipe, PipeTransform } from '@angular/core';
import { AuthModule, OidcSecurityService, LogLevel } from 'angular-auth-oidc-client';
import { AuthConfigModule } from 'src/app/auth/auth-config.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/Login/Login.component';
import { TenantBladeComponent } from './components/TenantBlade/TenantBlade.component';
import { UnauthorizedComponent } from './components/Unauthorized/Unauthorized.component';
import { FormsModule } from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import { LandingPageComponent } from './components/LandingPage/LandingPage.component';
import { UserBladeComponent } from './components/UserBlade/UserBlade.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatExpansionPanel} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  providers: [],
  imports: [
    CommonModule, AuthConfigModule,   BrowserModule,  FormsModule, MatExpansionModule, BrowserAnimationsModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://awsdev.ataxlab.com:8443/realms/horseless-infrastructure',
        redirectUrl: window.location.origin + "/tenants" ,
        postLogoutRedirectUri: window.location.origin + "/index",
        clientId: 'horseless-prototype-public',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      }
    })
  ],
  declarations: [HorselessClientAuthComponent, LoginComponent, UnauthorizedComponent, TenantBladeComponent, LandingPageComponent, UserBladeComponent],
  exports: [HorselessClientAuthComponent, LoginComponent, UnauthorizedComponent, TenantBladeComponent, LandingPageComponent, UserBladeComponent]

})
export class HorselessClientAuthModule { }
