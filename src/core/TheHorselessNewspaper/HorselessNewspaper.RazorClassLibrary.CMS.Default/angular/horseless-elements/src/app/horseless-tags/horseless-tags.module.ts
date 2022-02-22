import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorselessTagsComponent } from './horseless-tags.component';
import { ApiModule, Configuration, ConfigurationParameters } from '@wizardcontroller/horseless-contentapi-lib';

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
  declarations: [HorselessTagsComponent],
  exports: [HorselessTagsComponent ]
})
export class HorselessTagsModule { }
