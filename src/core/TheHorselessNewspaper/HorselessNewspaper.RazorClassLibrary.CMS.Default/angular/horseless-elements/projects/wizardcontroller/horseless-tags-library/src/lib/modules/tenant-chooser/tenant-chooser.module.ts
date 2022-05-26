import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantChooserComponent } from './tenant-chooser.component';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ClientConfigurationService, TenantRESTService, HorselessApiModule, HorselessConfiguration } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { TenantChooserService } from './services/TenantChooser.service';
import { ConfigurationEndpointService } from '../../services/configuration-endpoint.service';
import { AuthStateService } from 'angular-auth-oidc-client/lib/auth-state/auth-state.service';
import { HttpHeaders } from '@angular/common/http';
@NgModule({
  declarations: [TenantChooserComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatSliderModule,
    HorselessApiModule
  ],
  providers: [TenantChooserService,
  {
    provide: HorselessConfiguration,
    useFactory: (authService: ConfigurationEndpointService) => new HorselessConfiguration(
       {

         accessToken : authService.getAccessToken.bind(authService)
       }
      ),
      deps: [ConfigurationEndpointService],
      multi: false
  }],
  exports: [
    TenantChooserComponent]
})
export class TenantChooserModule { }
