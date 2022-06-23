import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { OperatorSurfaceComponent } from './operatorSurface/operatorSurface.component';
import { OperatorSurfaceModule } from './operatorSurface/operatorSurface.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    OperatorSurfaceModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule  implements DoBootstrap {
  constructor(private injector: Injector){

  }

  ngDoBootstrap(app: ApplicationRef) {
    // Convert `PopupComponent` to a custom element.
    const operatorSurfaceElement = createCustomElement(OperatorSurfaceComponent, {
      injector: this.injector,
    });
    // Register the custom element with the browser.
    customElements.define('horseless-content-editor', operatorSurfaceElement);
  }
}
