import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HorselessTagsLibraryModule, TenantChooserComponent, TenantEditorComponent } from '@wizardcontroller/horseless-tags-library';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { EventTypes, PublicEventsService } from 'angular-auth-oidc-client';
import { AuthConfigModule } from './auth/auth-config.module';
import { LoginComponent } from './modules/HorselessClientAuth/components/Login/Login.component';
import { UnauthorizedComponent } from './modules/HorselessClientAuth/components/Unauthorized/Unauthorized.component';
import { filter } from 'rxjs';
import { ApplicationRef } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, UnauthorizedComponent
  ],
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://awsdev.ataxlab.com:8443/realms/horseless-infrastructure',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'horseless-prototype-public',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      }
    }),
    BrowserModule, HttpClientModule, BrowserAnimationsModule, HorselessTagsLibraryModule, AuthConfigModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: LoginComponent },
      { path: 'forbidden', component: UnauthorizedComponent },
      { path: 'unauthorized', component: UnauthorizedComponent },
    ]),
  ],
  exports: [],
  providers: [],
  bootstrap: [],
  entryComponents: [TenantChooserComponent, TenantEditorComponent]
})

/*
  oidc client integration as per
  https://github.com/damienbod/angular-auth-oidc-client/blob/main/projects/sample-code-flow-refresh-tokens/src/app/app.module.ts
*/
export class AppModule {

  constructor(private injector: Injector, private readonly eventService: PublicEventsService) {

    this.eventService
    .registerForEvents()
    .pipe(filter((notification) => notification.type === EventTypes.ConfigLoaded))
    .subscribe((config) => {
      console.log('ConfigLoaded', config);
    });

  }

  ngDoBootstrap(app: ApplicationRef) {
    // Convert `PopupComponent` to a custom element.
    const tenantChooserElement = createCustomElement(TenantChooserComponent, { injector: this.injector });
    // Register the custom element with the browser.
    customElements.define('horseless-tenant-chooser', tenantChooserElement);

    // Convert `PopupComponent` to a custom element.
    const tenantEditorComponent = createCustomElement(TenantEditorComponent, { injector: this.injector });
    // Register the custom element with the browser.
    customElements.define('horseless-tenant-editor', tenantEditorComponent);

    app.bootstrap(AppComponent);
  }



}


