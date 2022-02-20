import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HorselessTagsModule } from './horseless-tags/horseless-tags.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { NewTenantComponent } from './horseless-tags/new-tenant/new-tenant.component';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, HorselessTagsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    // Convert `PopupComponent` to a custom element.
    const NewTenantElement = createCustomElement(NewTenantComponent, { injector: this.injector });
    // Register the custom element with the browser.
    customElements.define('horseless-new-tenant', NewTenantElement);
  }
}
