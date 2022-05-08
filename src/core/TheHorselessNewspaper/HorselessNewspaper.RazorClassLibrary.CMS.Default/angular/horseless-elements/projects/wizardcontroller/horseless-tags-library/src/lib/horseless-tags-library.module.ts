import { NgModule } from '@angular/core';
import { HorselessTagsLibraryComponent } from './horseless-tags-library.component';
import { TenantChooserComponent } from './modules/tenant-chooser/tenant-chooser.component';
import { TenantEditorComponent } from './modules/tenant-editor/tenant-editor.component';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    HorselessTagsLibraryComponent
  ],
  imports: [
  ],
  exports: [
    HorselessTagsLibraryComponent
  ]
})
export class HorselessTagsLibraryModule {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    // Convert `PopupComponent` to a custom element.
    const tenantChooserElement = createCustomElement(TenantChooserComponent, { injector: this.injector });
    // Register the custom element with the browser.
    customElements.define('horseless-tenant-chooser', tenantChooserElement);

    // Convert `PopupComponent` to a custom element.
    const tenantEditorElement = createCustomElement(TenantEditorComponent, { injector: this.injector });
    // Register the custom element with the browser.
    customElements.define('horseless-tenant-editor', tenantEditorElement);
  }
}
