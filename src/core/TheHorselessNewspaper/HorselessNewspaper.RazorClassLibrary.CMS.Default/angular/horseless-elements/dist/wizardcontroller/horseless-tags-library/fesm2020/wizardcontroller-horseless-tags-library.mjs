import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { Observable, tap } from 'rxjs';
import * as i1$1 from '@angular/router';
import * as i2 from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { TenantRESTService, ClientConfigurationService } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import * as i3 from 'angular-auth-oidc-client';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import * as i1 from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as i5 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i6 from '@angular/common';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { MatSliderModule } from '@angular/material/slider';

class HorselessTagsLibraryService {
    constructor() { }
}
HorselessTagsLibraryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HorselessTagsLibraryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class HorselessTagsLibraryComponent {
    constructor() { }
    ngOnInit() {
    }
}
HorselessTagsLibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HorselessTagsLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: HorselessTagsLibraryComponent, selector: "lib-horseless-tags-library", ngImport: i0, template: `
    <p>
      horseless-tags-library works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-horseless-tags-library',
                    template: `
    <p>
      horseless-tags-library works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class ConfigurationEndpointService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.clientConfiguration = new Observable();
        this.ensureConfigurationPipe();
    }
    /**
     * call the client configuration endpoint
     * and set the result to the the observable
     */
    ensureConfigurationPipe() {
        let url = window.location.href;
        let headers = new HttpHeaders();
        // command channel message to the client configuration endpoint middleware
        headers = headers.set('RestClientConfigurationEndpoint', 'get');
        console.log(`getting client configuration for ${url}`);
        this.clientConfiguration$ =
            this.httpClient.post(url, '', {
                headers: headers,
            });
    }
    /**
     * calls the horseless site loaded in the browser
     * and sends control channel commands to the
     * RestClientConfiguration endpoint
     * then
     * @returns Observable<SecurityRestClientConfiguration>
     */
    probeClientConfiguration() {
        let url = window.location.href;
        let headers = new HttpHeaders();
        // command channel message to the client configuration endpoint middleware
        headers = headers.set('RestClientConfigurationEndpoint', 'get');
        console.log(`getting client configuration for ${url}`);
        return this.httpClient.post(url, '', {
            headers: headers,
        });
    }
}
ConfigurationEndpointService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConfigurationEndpointService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
ConfigurationEndpointService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConfigurationEndpointService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConfigurationEndpointService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

class TenantChooserComponent {
    constructor(router, tenantSvc, oidcAuthSvc, clientConfigService) {
        this.router = router;
        this.clientConfigService = clientConfigService;
        this.isAuthenticated = false;
        this.pageSize = 10;
        this.pageCount = 2;
        this.pageNumber = 1;
        this.tenantService = tenantSvc;
        this.oidcService = oidcAuthSvc;
    }
    ngOnInit() {
        this.oidcService
            .checkAuth(window.location.href)
            .subscribe((x) => (this.isAuthenticated = x.isAuthenticated));
    }
    subscribeToConfiguration() {
        this.clientConfiguration$ = this.clientConfigService.probeClientConfiguration()
            .pipe(tap(data => {
            console.log(`got client config for current url: ${window.location.href};`);
            console.log(`got access token for current url: ${data.accessToken};`);
        }));
        /*
        .subscribe(clienConfig => {
          console.log("rest endpoint is %s",clienConfig.restEndpoint);
          console.log("odata endpoint is %s", clienConfig.oDataEndpoint);
        });
        */
    }
    loadTeants() {
        console.log('about to get content entities tenants');
        this.tenantService
            .contentEntitiesTenantRESTGetByPageNumber('phantom', this.pageSize, this.pageNumber, this.pageCount)
            .subscribe((tenantQueryResult) => {
            console.log('handling tenant request response');
            tenantQueryResult.forEach((f) => this.tenants.push(f));
            console.log('retreved %d tents', this.tenants.length);
        });
    }
}
TenantChooserComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantChooserComponent, deps: [{ token: i1$1.Router }, { token: i2.TenantRESTService }, { token: i3.OidcSecurityService }, { token: ConfigurationEndpointService }], target: i0.ɵɵFactoryTarget.Component });
TenantChooserComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: TenantChooserComponent, selector: "lib-tenant-chooser", ngImport: i0, template: "<p>tenant choosey</p>\r\n\r\n\r\n<div *ngIf=\"isAuthenticated; else unauthorized\">\r\n<div>tenant list</div>\r\n  <mat-list #tenants>\r\n\r\n</mat-list>\r\n</div>\r\n\r\n<ng-template #unauthorized>\r\n  <div>\r\n    <span>unauthorized</span>\r\n  </div>\r\n</ng-template>\r\n\r\n", styles: [""], components: [{ type: i5.MatList, selector: "mat-list, mat-action-list", inputs: ["disableRipple", "disabled"], exportAs: ["matList"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantChooserComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-tenant-chooser', template: "<p>tenant choosey</p>\r\n\r\n\r\n<div *ngIf=\"isAuthenticated; else unauthorized\">\r\n<div>tenant list</div>\r\n  <mat-list #tenants>\r\n\r\n</mat-list>\r\n</div>\r\n\r\n<ng-template #unauthorized>\r\n  <div>\r\n    <span>unauthorized</span>\r\n  </div>\r\n</ng-template>\r\n\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i2.TenantRESTService }, { type: i3.OidcSecurityService }, { type: ConfigurationEndpointService }]; } });

class TenantEditorComponent {
    constructor() { }
    ngOnInit() {
    }
}
TenantEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TenantEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: TenantEditorComponent, selector: "lib-tenant-editor", ngImport: i0, template: "<p>tenant-editor works!</p>\r\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-tenant-editor', template: "<p>tenant-editor works!</p>\r\n", styles: [""] }]
        }], ctorParameters: function () { return []; } });

class HorselessTagsLibraryModule {
    constructor(injector) {
        this.injector = injector;
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
HorselessTagsLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
HorselessTagsLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryModule, declarations: [HorselessTagsLibraryComponent], exports: [HorselessTagsLibraryComponent] });
HorselessTagsLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryModule, providers: [
        ConfigurationEndpointService
    ], imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HorselessTagsLibraryComponent
                    ],
                    imports: [],
                    providers: [
                        ConfigurationEndpointService
                    ],
                    exports: [
                        HorselessTagsLibraryComponent
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

class TenantChooserModule {
}
TenantChooserModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantChooserModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TenantChooserModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantChooserModule, declarations: [TenantChooserComponent], imports: [CommonModule,
        MatListModule,
        MatSliderModule], exports: [TenantChooserComponent] });
TenantChooserModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantChooserModule, providers: [
        TenantRESTService,
        ClientConfigurationService,
        OidcSecurityService
    ], imports: [[
            CommonModule,
            MatListModule,
            MatSliderModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantChooserModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TenantChooserComponent],
                    imports: [
                        CommonModule,
                        MatListModule,
                        MatSliderModule
                    ],
                    providers: [
                        TenantRESTService,
                        ClientConfigurationService,
                        OidcSecurityService
                    ],
                    exports: [
                        TenantChooserComponent
                    ]
                }]
        }] });

class TenantEditorModule {
}
TenantEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TenantEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantEditorModule, declarations: [TenantEditorComponent], imports: [CommonModule], exports: [TenantEditorComponent] });
TenantEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantEditorModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TenantEditorComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        TenantEditorComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of horseless-tags-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HorselessTagsLibraryComponent, HorselessTagsLibraryModule, HorselessTagsLibraryService, TenantChooserComponent, TenantChooserModule, TenantEditorComponent, TenantEditorModule };
//# sourceMappingURL=wizardcontroller-horseless-tags-library.mjs.map
