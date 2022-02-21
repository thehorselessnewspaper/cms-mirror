import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorselessTagsComponent } from './horseless-tags.component';
import { ApiModule, Configuration, ConfigurationParameters } from '@wizardcontroller/horseless-contentapi-lib';
import { NewTenantComponent } from './new-tenant/new-tenant.component';
import { TenantEditorComponent } from '@wizardcontroller/horseless-tags-library/lib/modules/tenant-editor/tenant-editor.component';

export function apiConfigFactory (): Configuration {
  const params: ConfigurationParameters = {
    // can't do this
    // basePath: 'https://staging.jsonplaceholder.typicode.com'
  }
  return new Configuration(params);
}

@NgModule({
  imports: [
    CommonModule, ApiModule.forRoot(apiConfigFactory)
  ],
  declarations: [HorselessTagsComponent, NewTenantComponent],
  exports: [HorselessTagsComponent, NewTenantComponent]
})
export class HorselessTagsModule { }
