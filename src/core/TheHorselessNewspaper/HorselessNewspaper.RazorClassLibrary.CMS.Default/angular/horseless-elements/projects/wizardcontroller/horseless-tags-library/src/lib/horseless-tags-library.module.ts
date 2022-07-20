import { NgModule } from '@angular/core';
import { HorselessTagsLibraryComponent } from './horseless-tags-library.component';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatListModule } from '@angular/material/list';
import { ConfigurationEndpointService } from './services/configuration-endpoint.service';

@NgModule({
  declarations: [
    HorselessTagsLibraryComponent
  ],
  imports: [
  ],
  providers: [
    ConfigurationEndpointService
  ],
  exports: [
    HorselessTagsLibraryComponent
  ]
})

export class HorselessTagsLibraryModule {

  constructor(private injector: Injector) {

  }

}
