import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OperatorSurfaceModule } from './operatorSurface/operatorSurface.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorSurfaceComponent } from './operatorSurface/operatorSurface.component';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
    customElements.define('horseless-tenant-admin', operatorSurfaceElement);
  }
 }
