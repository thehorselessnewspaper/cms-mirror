import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantChooserComponent } from './tenant-chooser.component';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {
  ClientConfigurationService,
  TenantRESTService,
  HorselessApiModule,
  HorselessConfiguration,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { TenantChooserService } from './services/TenantChooser.service';
import { ConfigurationEndpointService } from '../../services/configuration-endpoint.service';
import { AuthStateService } from 'angular-auth-oidc-client/lib/auth-state/auth-state.service';
import { HttpHeaders } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { ApiConfig, ODataModule } from '@vigouredelaruse/angular-odata';
import { HorselessContentConfig } from '@horselessnewspaper/horseless-content-odataapi';
import { HorselessHostingConfig } from '@horselessnewspaper/horseless-hosting-odataapi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { AccessControlEntryEditorModule } from '../accessControlEntry-editor/accessControlEntry-editor.module';
import { HostingAccessControlEntryTableModule } from '../accessControlEntry-table/hostingAccessControlEntry-table/hostingAccessControlEntry-table.module';
import { ContentAccessControlEntryTableModule } from '../accessControlEntry-table/contentAccessControlEntry-table/contentAccessControlEntry-table.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TenantChooserComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    PanelModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    TabViewModule,
    MatExpansionModule,
    MatIconModule,
    MatSliderModule,
    DataViewModule,
    HorselessApiModule,
    CardModule,
    HostingAccessControlEntryTableModule,
    ContentAccessControlEntryTableModule,
    AccessControlEntryEditorModule,
    ODataModule.forRoot(
      Object.assign(HorselessContentConfig, {
        options: {
          stringAsEnum: false,
        },
      } as ApiConfig),
      Object.assign(HorselessHostingConfig, {
        options: {
          stringAsEnum: false,
        },
      } as ApiConfig)
    ),
  ],
  providers: [
    TenantChooserService,
    {
      provide: HorselessConfiguration,
      useFactory: (authService: ConfigurationEndpointService) =>
        new HorselessConfiguration({
          accessToken: authService.getAccessToken.bind(authService),
        }),
      deps: [ConfigurationEndpointService],
      multi: false,
    },
  ],
  exports: [TenantChooserComponent],
})
export class TenantChooserModule {}
