import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TenantChooserComponent } from '@wizardcontroller/horseless-tags-library';
import { TenantEditorComponent } from '@wizardcontroller/horseless-tags-library';
import { HorselessTagsLibraryModule } from '@wizardcontroller/horseless-tags-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, HorselessTagsLibraryModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    // Convert `PopupComponent` to a custom element.
    const tenantChooserElement = createCustomElement(TenantChooserComponent, { injector: this.injector });
    // Register the custom element with the browser.
    customElements.define('horseless-tenant-chooser', tenantChooserElement);

    // Convert `PopupComponent` to a custom element.
    const tenantEditorComponent = createCustomElement(TenantEditorComponent, { injector: this.injector });
    // Register the custom element with the browser.
    customElements.define('horseless-tenant-editor', tenantEditorComponent);
  }
}
