import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { OperatorSurfaceModule } from './operatorSurface/operatorSurface.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorSurfaceComponent } from './operatorSurface/operatorSurface.component';
import { createCustomElement } from '@angular/elements';
import { TenantChooserModule,  TenantEditorModule } from '../../../../wizardcontroller/horseless-tags-library/src/public-api';
import { HorselessClientAuthModule } from '../../../../../src/app/modules/HorselessClientAuth/HorselessClientAuth.module';
import { HorselessApiModule } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import {
  HorselessConfiguration,
  HorselessConfigurationParameters,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ODataModule } from '@vigouredelaruse/angular-odata';
import {HorselessContentModule, HorselessContentConfig} from '@horselessnewspaper/horseless-content-odataapi';
import { HorselessHostingConfig, HorselessHostingModule } from '@horselessnewspaper/horseless-hosting-odataapi';

export function apiConfigFactory(): HorselessConfiguration {
  const params: HorselessConfigurationParameters = {
    // set configuration parameters here.
  };
  return new HorselessConfiguration(params);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    HttpClientModule,
    TenantEditorModule,
    TenantChooserModule,
    HorselessClientAuthModule,
    HorselessApiModule.forRoot(apiConfigFactory),
    OperatorSurfaceModule,
    TenantChooserModule,
    TenantEditorModule,
    ODataModule.forRoot(HorselessContentConfig, HorselessHostingConfig)
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
    customElements.define('horseless-tenant-admin-surface', operatorSurfaceElement);

    // Convert `PopupComponent` to a custom element.
    const appComponent = createCustomElement(AppComponent, {
      injector: this.injector,
     });

    // Register the custom element with the browser.
    customElements.define('horseless-tenant-admin', appComponent);

    app.bootstrap(AppComponent);
  }
 }
