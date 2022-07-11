import { NgModule } from '@angular/core';
import { HorselessTagsLibraryComponent } from './horseless-tags-library.component';
import { TenantChooserComponent } from './modules/tenant-chooser/tenant-chooser.component';
import { TenantEditorComponent } from './modules/tenant-editor/tenant-editor.component';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatListModule } from '@angular/material/list';
import { ConfigurationEndpointService } from './services/configuration-endpoint.service';
import {ACEPermissionPipe} from './pipe/ACEPermission.pipe';
@NgModule({
  declarations: [
    HorselessTagsLibraryComponent, ACEPermissionPipe
  ],
  imports: [
  ],
  providers: [
    ConfigurationEndpointService
  ],
  exports: [
    HorselessTagsLibraryComponent, ACEPermissionPipe
  ]
})

export class HorselessTagsLibraryModule {

  constructor(private injector: Injector) {

  }

}
