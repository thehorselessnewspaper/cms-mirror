import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NewTenantComponent } from './horseless-tags/new-tenant/new-tenant.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'horseless-elements';

  constructor(injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const NewTenantElement = createCustomElement(NewTenantComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('horseless-new-tenant', NewTenantElement);
  }
}
