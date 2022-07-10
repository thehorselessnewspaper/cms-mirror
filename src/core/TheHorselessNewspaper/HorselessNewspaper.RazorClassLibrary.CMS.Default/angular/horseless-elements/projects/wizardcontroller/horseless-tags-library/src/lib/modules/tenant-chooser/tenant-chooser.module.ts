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
import {DataViewModule} from 'primeng/dataview';
import { ApiConfig, ODataModule } from '@vigouredelaruse/angular-odata';
import {HorselessContentModule, HorselessContentConfig} from '@horselessnewspaper/horseless-content-odataapi';
import { HorselessHostingConfig, HorselessHostingModule } from '@horselessnewspaper/horseless-hosting-odataapi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
 @NgModule({
  declarations: [TenantChooserComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    PanelModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTabsModule,
    TabViewModule,
    MatSliderModule,
    DataViewModule,
    HorselessApiModule,
    HorselessContentModule,
    HorselessHostingModule,
    CardModule,
    ODataModule.forRoot(
      Object.assign(HorselessContentConfig, {
      options: {
        stringAsEnum: true
      }
    } as ApiConfig),
    Object.assign(HorselessHostingConfig, {
      options: {
        stringAsEnum: true
      }
    } as ApiConfig))
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
