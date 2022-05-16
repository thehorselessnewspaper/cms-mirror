import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantChooserComponent } from './tenant-chooser.component';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ClientConfigurationService, TenantRESTService } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { TenantChooserService } from './services/TenantChooser.service';
@NgModule({
  declarations: [TenantChooserComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatSliderModule
  ],
  providers: [TenantChooserService],
  exports: [
    TenantChooserComponent]
})
export class TenantChooserModule { }
