import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TenantEditorComponent,  TenantChooserComponent } from '@wizardcontroller/horseless-tags-library';
import { TenantEditorModule} from '@wizardcontroller/horseless-tags-library';
import { TenantChooserModule } from '@wizardcontroller/horseless-tags-library'

import { HorselessTagsLibraryModule } from '@wizardcontroller/horseless-tags-library';
import {
  AuthModule,
  OidcSecurityService,
  LogLevel,
} from 'angular-auth-oidc-client';
import { EventTypes, PublicEventsService } from 'angular-auth-oidc-client';
import { AuthConfigModule } from './auth/auth-config.module';
import { LoginComponent } from './modules/HorselessClientAuth/components/Login/Login.component';
import { UnauthorizedComponent } from './modules/HorselessClientAuth/components/Unauthorized/Unauthorized.component';
import { filter } from 'rxjs';
import { ApplicationRef } from '@angular/core';
import { TenantBladeComponent } from './modules/HorselessClientAuth/components/TenantBlade/TenantBlade.component';
import { UserBladeComponent } from './modules/HorselessClientAuth/components/UserBlade/UserBlade.component';
import { LandingPageComponent } from './modules/HorselessClientAuth/components/LandingPage/LandingPage.component';
import { HorselessClientAuthModule } from './modules/HorselessClientAuth/HorselessClientAuth.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  BASE_PATH,
  TenantRESTService,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { environment } from '../environments/environment';
// configuring providers with an authentication service that manages your access tokens
import { HorselessApiModule } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import {
  HorselessConfiguration,
  HorselessConfigurationParameters,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function apiConfigFactory(): HorselessConfiguration {
  const params: HorselessConfigurationParameters = {
    // set configuration parameters here.
  };
  return new HorselessConfiguration(params);
}

const routes: Routes = [
  { path: 'default', component: LandingPageComponent },
  { path: 'forbidden', component: UnauthorizedComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '', redirectTo: 'default', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthModule.forRoot({
      config: {
        authority:
          'https://awsdev.ataxlab.com:8443/realms/horseless-infrastructure',
        redirectUrl: window.location.origin + '/tenants',
        postLogoutRedirectUri: window.location.origin + '/index',
        clientId: 'horseless-prototype-public',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
    ToolbarModule,
    ButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    HttpClientModule,
    TenantEditorModule,
    TenantChooserModule,
    HorselessClientAuthModule,
    HorselessApiModule.forRoot(apiConfigFactory),
    BrowserModule,
    BrowserAnimationsModule,
    AuthConfigModule,
    NgbModule,
    RouterModule.forRoot(routes),
  ],
  exports: [],
  providers: [
    OidcSecurityService,
    { provide: BASE_PATH, useValue: environment.API_BASE_PATH },
    {
      provide: HorselessConfiguration,
      useFactory: (authService: OidcSecurityService) =>
        new HorselessConfiguration({
          basePath: environment.API_BASE_PATH,
          credentials: {
            Bearer: authService.getAccessToken.bind(authService).toString(),
          },
        }),
      deps: [OidcSecurityService],
      multi: false,
    },
  ],
  bootstrap: [],
  entryComponents: [
    TenantChooserComponent,
    TenantEditorComponent,
    LoginComponent,
    LandingPageComponent,
    AppComponent
  ],
})

/*
  oidc client integration as per
  https://github.com/damienbod/angular-auth-oidc-client/blob/main/projects/sample-code-flow-refresh-tokens/src/app/app.module.ts
*/
export class AppModule {
  constructor(
    private injector: Injector,
    private oidcSecurityService: OidcSecurityService,
    private readonly eventService: PublicEventsService
  ) {
    this.eventService
      .registerForEvents()
      .pipe(
        filter((notification) => notification.type === EventTypes.ConfigLoaded)
      )
      .subscribe((config) => {
        console.log('ConfigLoaded', config);
      });
  }

  ngDoBootstrap(app: ApplicationRef) {
    // Convert `PopupComponent` to a custom element.
    const tenantChooserElement = createCustomElement(TenantChooserComponent, {
      injector: this.injector,
    });
    // Register the custom element with the browser.
    customElements.define('horseless-tenant-chooser', tenantChooserElement);

    // Convert `PopupComponent` to a custom element.
    const tenantEditorComponent = createCustomElement(TenantEditorComponent, {
      injector: this.injector,
    });
    // Register the custom element with the browser.
    customElements.define('horseless-tenant-editor', tenantEditorComponent);

        // Convert `PopupComponent` to a custom element.
        const appComponent = createCustomElement(AppComponent, {
          injector: this.injector,
        });
        // Register the custom element with the browser.
        customElements.define('horseless-harness', appComponent);

    // app.bootstrap(AppComponent);
  }
}
