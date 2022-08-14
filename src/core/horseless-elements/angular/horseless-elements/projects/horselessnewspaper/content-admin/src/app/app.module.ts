import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorSurfaceComponent } from './operatorSurface/operatorSurface.component';
import { createCustomElement } from '@angular/elements';
import { OperatorSurfaceModule } from './operatorSurface/operatorSurface.module';
import { RouterModule } from '@angular/router';
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
      injector: this.injector
    });
    // Register the custom element with the browser.
    customElements.define('horseless-content-admin', operatorSurfaceElement);
  }
 }
