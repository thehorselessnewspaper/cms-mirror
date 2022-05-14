"use strict";
(self["webpackChunkhorseless_elements"] = self["webpackChunkhorseless_elements"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-auth-oidc-client */ 7990);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toolbar */ 1722);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _modules_HorselessClientAuth_components_Login_Login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/HorselessClientAuth/components/Login/Login.component */ 4898);







class AppComponent {
    constructor(oidcSecurityService) {
        this.oidcSecurityService = oidcSecurityService;
        this.title = 'horseless-elements';
    }
    ngOnInit() {
        this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken }) => {
            console.log('app authenticated', isAuthenticated);
            console.log(`Current access token is '${accessToken}'`);
        });
    }
    login() {
        this.oidcSecurityService.authorize();
    }
    logout() {
        this.oidcSecurityService.logoff();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_2__.OidcSecurityService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 0, consts: [[1, "p-toolbar-group-right"], ["routerLink", "/tenants", "routerLinkActive", "active", "label", "Tenant Blade", "icon", "pi"], ["routerLink", "/users", "routerLinkActive", "active", "label", "User Blade", "icon", "pi", "styleClass", "p-button-success"], ["hideToggle", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "horseless client harness: app component");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p-toolbar")(4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p-button", 1)(6, "p-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-expansion-panel", 3)(8, "mat-expansion-panel-header")(9, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " router outlet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " this is where router outlet content is displayed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, directives: [primeng_toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_4__.Button, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__.MatExpansionPanelDescription, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _modules_HorselessClientAuth_components_Login_Login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "apiConfigFactory": () => (/* binding */ apiConfigFactory)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/elements */ 7616);
/* harmony import */ var _wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wizardcontroller/horseless-tags-library */ 4178);
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-auth-oidc-client */ 7990);
/* harmony import */ var _auth_auth_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth-config.module */ 2410);
/* harmony import */ var _modules_HorselessClientAuth_components_Unauthorized_Unauthorized_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/HorselessClientAuth/components/Unauthorized/Unauthorized.component */ 6216);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _modules_HorselessClientAuth_components_TenantBlade_TenantBlade_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/HorselessClientAuth/components/TenantBlade/TenantBlade.component */ 3476);
/* harmony import */ var _modules_HorselessClientAuth_components_UserBlade_UserBlade_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/HorselessClientAuth/components/UserBlade/UserBlade.component */ 4443);
/* harmony import */ var _modules_HorselessClientAuth_components_LandingPage_LandingPage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/HorselessClientAuth/components/LandingPage/LandingPage.component */ 3130);
/* harmony import */ var _modules_HorselessClientAuth_HorselessClientAuth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/HorselessClientAuth/HorselessClientAuth.module */ 8475);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wizardcontrollerprerelease/horseless-contentapi-lib */ 3619);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toolbar */ 1722);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);






















// configuring providers with an authentication service that manages your access tokens








function apiConfigFactory() {
    const params = {
    // set configuration parameters here.
    };
    return new _wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_8__.HorselessConfiguration(params);
}
/*
  oidc client integration as per
  https://github.com/damienbod/angular-auth-oidc-client/blob/main/projects/sample-code-flow-refresh-tokens/src/app/app.module.ts
*/
class AppModule {
    constructor(injector, oidcSecurityService, eventService) {
        this.injector = injector;
        this.oidcSecurityService = oidcSecurityService;
        this.eventService = eventService;
        this.eventService
            .registerForEvents()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)((notification) => notification.type === angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_10__.EventTypes.ConfigLoaded))
            .subscribe((config) => {
            console.log('ConfigLoaded', config);
        });
    }
    ngDoBootstrap(app) {
        // Convert `PopupComponent` to a custom element.
        const tenantChooserElement = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_11__.createCustomElement)(_wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_12__.TenantChooserComponent, {
            injector: this.injector,
        });
        // Register the custom element with the browser.
        customElements.define('horseless-tenant-chooser', tenantChooserElement);
        // Convert `PopupComponent` to a custom element.
        const tenantEditorComponent = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_11__.createCustomElement)(_wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_12__.TenantEditorComponent, {
            injector: this.injector,
        });
        // Register the custom element with the browser.
        customElements.define('horseless-tenant-editor', tenantEditorComponent);
        // Convert `PopupComponent` to a custom element.
        const appComponent = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_11__.createCustomElement)(_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
            injector: this.injector,
        });
        // Register the custom element with the browser.
        customElements.define('horseless-harness', appComponent);
        // app.bootstrap(AppComponent);
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_10__.OidcSecurityService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_10__.PublicEventsService)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_10__.OidcSecurityService,
        { provide: _wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_8__.BASE_PATH, useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.API_BASE_PATH },
        {
            provide: _wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_8__.HorselessConfiguration,
            useFactory: (authService) => new _wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_8__.HorselessConfiguration({
                basePath: _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.API_BASE_PATH,
                credentials: {
                    Bearer: authService.getAccessToken.bind(authService).toString(),
                },
            }),
            deps: [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_10__.OidcSecurityService],
            multi: false,
        },
    ], imports: [[
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_10__.AuthModule.forRoot({
                config: {
                    authority: 'https://awsdev.ataxlab.com:8443/realms/horseless-infrastructure',
                    redirectUrl: window.location.origin + '/tenants',
                    postLogoutRedirectUri: window.location.origin + '/index',
                    clientId: 'horseless-prototype-public',
                    scope: 'openid profile email offline_access',
                    responseType: 'code',
                    silentRenew: true,
                    useRefreshToken: true,
                    logLevel: angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_10__.LogLevel.Debug,
                },
            }),
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__.ToolbarModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_12__.TenantEditorModule,
            _wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_12__.TenantChooserModule,
            _modules_HorselessClientAuth_HorselessClientAuth_module__WEBPACK_IMPORTED_MODULE_6__.HorselessClientAuthModule,
            _wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_8__.HorselessApiModule.forRoot(apiConfigFactory),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
            _auth_auth_config_module__WEBPACK_IMPORTED_MODULE_1__.AuthConfigModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forRoot([
                { path: 'default', component: _modules_HorselessClientAuth_components_LandingPage_LandingPage_component__WEBPACK_IMPORTED_MODULE_5__.LandingPageComponent },
                { path: 'tenants', component: _modules_HorselessClientAuth_components_TenantBlade_TenantBlade_component__WEBPACK_IMPORTED_MODULE_3__.TenantBladeComponent },
                { path: 'users', component: _modules_HorselessClientAuth_components_UserBlade_UserBlade_component__WEBPACK_IMPORTED_MODULE_4__.UserBladeComponent },
                { path: 'forbidden', component: _modules_HorselessClientAuth_components_Unauthorized_Unauthorized_component__WEBPACK_IMPORTED_MODULE_2__.UnauthorizedComponent },
                { path: 'unauthorized', component: _modules_HorselessClientAuth_components_Unauthorized_Unauthorized_component__WEBPACK_IMPORTED_MODULE_2__.UnauthorizedComponent },
                { path: '', redirectTo: 'default', pathMatch: 'full' },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_10__.AuthModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__.ToolbarModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_12__.TenantEditorModule,
        _wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_12__.TenantChooserModule,
        _modules_HorselessClientAuth_HorselessClientAuth_module__WEBPACK_IMPORTED_MODULE_6__.HorselessClientAuthModule, _wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_8__.HorselessApiModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        _auth_auth_config_module__WEBPACK_IMPORTED_MODULE_1__.AuthConfigModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule] }); })();


/***/ }),

/***/ 2410:
/*!********************************************!*\
  !*** ./src/app/auth/auth-config.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthConfigModule": () => (/* binding */ AuthConfigModule)
/* harmony export */ });
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ 7990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class AuthConfigModule {
}
AuthConfigModule.ɵfac = function AuthConfigModule_Factory(t) { return new (t || AuthConfigModule)(); };
AuthConfigModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthConfigModule });
AuthConfigModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__.AuthModule.forRoot({
                config: {
                    authority: 'https://awsdev.ataxlab.com:8443/realms/horseless-infrastructure',
                    redirectUrl: window.location.origin,
                    postLogoutRedirectUri: window.location.origin,
                    clientId: 'horseless-prototype-public',
                    scope: 'openid profile email offline_access',
                    responseType: 'code',
                    silentRenew: true,
                    useRefreshToken: true,
                    renewTimeBeforeTokenExpiresInSeconds: 30,
                }
            })], angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__.AuthModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthConfigModule, { imports: [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__.AuthModule], exports: [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__.AuthModule] }); })();


/***/ }),

/***/ 8215:
/*!******************************************************************************!*\
  !*** ./src/app/modules/HorselessClientAuth/HorselessClientAuth.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorselessClientAuthComponent": () => (/* binding */ HorselessClientAuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HorselessClientAuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
HorselessClientAuthComponent.ɵfac = function HorselessClientAuthComponent_Factory(t) { return new (t || HorselessClientAuthComponent)(); };
HorselessClientAuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorselessClientAuthComponent, selectors: [["lib-HorselessClientAuth"]], decls: 2, vars: 0, template: function HorselessClientAuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " HorselessClientAuth works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJIb3JzZWxlc3NDbGllbnRBdXRoLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8475:
/*!***************************************************************************!*\
  !*** ./src/app/modules/HorselessClientAuth/HorselessClientAuth.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorselessClientAuthModule": () => (/* binding */ HorselessClientAuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _HorselessClientAuth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorselessClientAuth.component */ 8215);
/* harmony import */ var src_app_auth_auth_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth-config.module */ 2410);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _components_Login_Login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Login/Login.component */ 4898);
/* harmony import */ var _components_TenantBlade_TenantBlade_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TenantBlade/TenantBlade.component */ 3476);
/* harmony import */ var _components_Unauthorized_Unauthorized_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Unauthorized/Unauthorized.component */ 6216);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _components_LandingPage_LandingPage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LandingPage/LandingPage.component */ 3130);
/* harmony import */ var _components_UserBlade_UserBlade_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/UserBlade/UserBlade.component */ 4443);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wizardcontroller/horseless-tags-library */ 4178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);














class HorselessClientAuthModule {
}
HorselessClientAuthModule.ɵfac = function HorselessClientAuthModule_Factory(t) { return new (t || HorselessClientAuthModule)(); };
HorselessClientAuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: HorselessClientAuthModule });
HorselessClientAuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, src_app_auth_auth_config_module__WEBPACK_IMPORTED_MODULE_1__.AuthConfigModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_13__.TenantChooserModule, _wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_13__.TenantEditorModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HorselessClientAuthModule, { declarations: [_HorselessClientAuth_component__WEBPACK_IMPORTED_MODULE_0__.HorselessClientAuthComponent, _components_Login_Login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _components_Unauthorized_Unauthorized_component__WEBPACK_IMPORTED_MODULE_4__.UnauthorizedComponent, _components_TenantBlade_TenantBlade_component__WEBPACK_IMPORTED_MODULE_3__.TenantBladeComponent, _components_LandingPage_LandingPage_component__WEBPACK_IMPORTED_MODULE_5__.LandingPageComponent, _components_UserBlade_UserBlade_component__WEBPACK_IMPORTED_MODULE_6__.UserBladeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, src_app_auth_auth_config_module__WEBPACK_IMPORTED_MODULE_1__.AuthConfigModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_13__.TenantChooserModule, _wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_13__.TenantEditorModule], exports: [_HorselessClientAuth_component__WEBPACK_IMPORTED_MODULE_0__.HorselessClientAuthComponent, _components_Login_Login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _components_Unauthorized_Unauthorized_component__WEBPACK_IMPORTED_MODULE_4__.UnauthorizedComponent, _components_TenantBlade_TenantBlade_component__WEBPACK_IMPORTED_MODULE_3__.TenantBladeComponent, _components_LandingPage_LandingPage_component__WEBPACK_IMPORTED_MODULE_5__.LandingPageComponent, _components_UserBlade_UserBlade_component__WEBPACK_IMPORTED_MODULE_6__.UserBladeComponent] }); })();


/***/ }),

/***/ 3130:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/HorselessClientAuth/components/LandingPage/LandingPage.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageComponent": () => (/* binding */ LandingPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["lib-LandingPage"]], decls: 2, vars: 0, template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LandingPage works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJMYW5kaW5nUGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4898:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/HorselessClientAuth/components/Login/Login.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ 7990);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r3.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r5.logoffAndRevokeTokens();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout and revoke tokens");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.revokeAccessToken();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Revoke access token");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r7.revokeRefreshToken();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Revoke refresh token");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r8.refreshSession();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Refresh session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr")(12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " userData ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Is Authenticated: ", ctx_r0.isAuthenticated, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 4, ctx_r0.userData$)));
  }
}

function LoginComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r9.login();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
  }
}

class LoginComponent {
  constructor(oidcSecurityService) {
    this.oidcSecurityService = oidcSecurityService;
    this.isAuthenticated = false;
  }

  ngOnInit() {
    this.configuration$ = this.oidcSecurityService.getConfiguration();
    this.userData$ = this.oidcSecurityService.userData$;
    this.oidcSecurityService.isAuthenticated$.subscribe(({
      isAuthenticated
    }) => {
      this.isAuthenticated = isAuthenticated;
      console.warn('authenticated: ', isAuthenticated);
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  refreshSession() {
    this.oidcSecurityService.forceRefreshSession().subscribe(result => console.log(result));
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

  logoffAndRevokeTokens() {
    this.oidcSecurityService.logoffAndRevokeTokens().subscribe(result => console.log(result));
  }

  revokeRefreshToken() {
    this.oidcSecurityService.revokeRefreshToken().subscribe(result => console.log(result));
  }

  revokeAccessToken() {
    this.oidcSecurityService.revokeAccessToken().subscribe(result => console.log(result));
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__.OidcSecurityService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 23,
  vars: 7,
  consts: [["hideToggle", ""], [4, "ngIf", "ngIfElse"], ["noAuth", ""], [3, "click"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0)(1, "mat-expansion-panel-header")(2, "mat-panel-title")(3, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "user login view");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description")(6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "user login view");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 21, 6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_ng_template_9_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-expansion-panel", 0)(12, "mat-expansion-panel-header")(13, "mat-panel-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " show oidc configuration ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-panel-description");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " show oidc configuration ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Configuration loaded: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 5, ctx.configuration$)));
    }
  },
  directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelDescription, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJMb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ 3476:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/HorselessClientAuth/components/TenantBlade/TenantBlade.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantBladeComponent": () => (/* binding */ TenantBladeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ 7990);
/* harmony import */ var _wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wizardcontroller/horseless-tags-library */ 4178);



class TenantBladeComponent {
    constructor(oidcSecurityService) {
        this.oidcSecurityService = oidcSecurityService;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
            /*...*/
            this.isAuthenticated = isAuthenticated;
        });
    }
}
TenantBladeComponent.ɵfac = function TenantBladeComponent_Factory(t) { return new (t || TenantBladeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__.OidcSecurityService)); };
TenantBladeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TenantBladeComponent, selectors: [["app-tenantblade"]], decls: 1, vars: 0, template: function TenantBladeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "lib-tenant-chooser");
    } }, directives: [_wizardcontroller_horseless_tags_library__WEBPACK_IMPORTED_MODULE_2__.TenantChooserComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJUZW5hbnRCbGFkZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6216:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/HorselessClientAuth/components/Unauthorized/Unauthorized.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnauthorizedComponent": () => (/* binding */ UnauthorizedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class UnauthorizedComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnauthorizedComponent.ɵfac = function UnauthorizedComponent_Factory(t) { return new (t || UnauthorizedComponent)(); };
UnauthorizedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnauthorizedComponent, selectors: [["app-unauthorized"]], decls: 2, vars: 0, template: function UnauthorizedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "401: You have no rights to access this. Please Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJVbmF1dGhvcml6ZWQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4443:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/HorselessClientAuth/components/UserBlade/UserBlade.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserBladeComponent": () => (/* binding */ UserBladeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class UserBladeComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserBladeComponent.ɵfac = function UserBladeComponent_Factory(t) { return new (t || UserBladeComponent)(); };
UserBladeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserBladeComponent, selectors: [["lib-UserBlade"]], decls: 2, vars: 0, template: function UserBladeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " UserBlade works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJVc2VyQmxhZGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_BASE_PATH: 'http://127.0.0.1:8080' // this needs to be updated for horseless newspaper purposes, unless that's actually your api endpoint
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 4178:
/*!***********************************************************************************************************!*\
  !*** ./dist/wizardcontroller/horseless-tags-library/fesm2015/wizardcontroller-horseless-tags-library.mjs ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorselessTagsLibraryComponent": () => (/* binding */ HorselessTagsLibraryComponent),
/* harmony export */   "HorselessTagsLibraryModule": () => (/* binding */ HorselessTagsLibraryModule),
/* harmony export */   "HorselessTagsLibraryService": () => (/* binding */ HorselessTagsLibraryService),
/* harmony export */   "TenantChooserComponent": () => (/* binding */ TenantChooserComponent),
/* harmony export */   "TenantChooserModule": () => (/* binding */ TenantChooserModule),
/* harmony export */   "TenantEditorComponent": () => (/* binding */ TenantEditorComponent),
/* harmony export */   "TenantEditorModule": () => (/* binding */ TenantEditorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wizardcontrollerprerelease/horseless-contentapi-lib */ 3619);
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-auth-oidc-client */ 7990);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/elements */ 7616);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ 1859);
















function TenantChooserComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "tenant list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-list", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function TenantChooserComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "unauthorized");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}

class HorselessTagsLibraryService {
  constructor() {}

}

HorselessTagsLibraryService.ɵfac = function HorselessTagsLibraryService_Factory(t) {
  return new (t || HorselessTagsLibraryService)();
};

HorselessTagsLibraryService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: HorselessTagsLibraryService,
  factory: HorselessTagsLibraryService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorselessTagsLibraryService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

class HorselessTagsLibraryComponent {
  constructor() {}

  ngOnInit() {}

}

HorselessTagsLibraryComponent.ɵfac = function HorselessTagsLibraryComponent_Factory(t) {
  return new (t || HorselessTagsLibraryComponent)();
};

HorselessTagsLibraryComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HorselessTagsLibraryComponent,
  selectors: [["lib-horseless-tags-library"]],
  decls: 2,
  vars: 0,
  template: function HorselessTagsLibraryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " horseless-tags-library works! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorselessTagsLibraryComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'lib-horseless-tags-library',
      template: `
    <p>
      horseless-tags-library works!
    </p>
  `,
      styles: []
    }]
  }], function () {
    return [];
  }, null);
})();

class ConfigurationEndpointService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.clientConfiguration = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable();
    this.ensureConfigurationPipe();
  }
  /**
   * call the client configuration endpoint
   * and set the result to the the observable
   */


  ensureConfigurationPipe() {
    let url = window.location.href;
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders(); // command channel message to the client configuration endpoint middleware

    headers = headers.set('RestClientConfigurationEndpoint', 'get');
    console.log(`getting client configuration for ${url}`);
    this.clientConfiguration$ = this.httpClient.post(url, '', {
      headers: headers
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
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders(); // command channel message to the client configuration endpoint middleware

    headers = headers.set('RestClientConfigurationEndpoint', 'get');
    console.log(`getting client configuration for ${url}`);
    return this.httpClient.post(url, '', {
      headers: headers
    });
  }

}

ConfigurationEndpointService.ɵfac = function ConfigurationEndpointService_Factory(t) {
  return new (t || ConfigurationEndpointService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

ConfigurationEndpointService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ConfigurationEndpointService,
  factory: ConfigurationEndpointService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationEndpointService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
    }];
  }, null);
})();

class TenantChooserComponent {
  constructor(tenantSvc, oidcAuthSvc, clientConfigService) {
    this.clientConfigService = clientConfigService;
    this.isAuthenticated = false;
    this.pageSize = 10;
    this.pageCount = 2;
    this.pageNumber = 1;
    this.tenantService = tenantSvc;
    this.oidcService = oidcAuthSvc;
  }

  ngOnInit() {
    console.log('ngOnInit starting');
    this.subscribeToConfiguration();
    this.oidcService.checkAuth(window.location.href).subscribe(x => this.isAuthenticated = x.isAuthenticated);
  }

  subscribeToConfiguration() {
    this.clientConfigService.probeClientConfiguration().subscribe(clienConfig => {
      console.log("rest endpoint is %s", clienConfig.restEndpoint);
      console.log("odata endpoint is %s", clienConfig.oDataEndpoint);
    });
  }

  loadTeants() {
    console.log('about to get content entities tenants');
    this.tenantService.contentEntitiesTenantRESTGetByPageNumber('phantom', this.pageSize, this.pageNumber, this.pageCount).subscribe(tenantQueryResult => {
      console.log('handling tenant request response');
      tenantQueryResult.forEach(f => this.tenants.push(f));
      console.log('retreved %d tents', this.tenants.length);
    });
  }

}

TenantChooserComponent.ɵfac = function TenantChooserComponent_Factory(t) {
  return new (t || TenantChooserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_3__.TenantRESTService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__.OidcSecurityService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConfigurationEndpointService));
};

TenantChooserComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TenantChooserComponent,
  selectors: [["lib-tenant-chooser"]],
  decls: 5,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["unauthorized", ""], ["tenants", ""]],
  template: function TenantChooserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tenant choosey");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TenantChooserComponent_div_2_Template, 5, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TenantChooserComponent_ng_template_3_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated)("ngIfElse", _r1);
    }
  },
  directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatList, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TenantChooserComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'lib-tenant-chooser',
      template: "<p>tenant choosey</p>\r\n\r\n\r\n<div *ngIf=\"isAuthenticated; else unauthorized\">\r\n<div>tenant list</div>\r\n  <mat-list #tenants>\r\n\r\n</mat-list>\r\n</div>\r\n\r\n<ng-template #unauthorized>\r\n  <div>\r\n    <span>unauthorized</span>\r\n  </div>\r\n</ng-template>\r\n\r\n",
      styles: [""]
    }]
  }], function () {
    return [{
      type: _wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_3__.TenantRESTService
    }, {
      type: angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__.OidcSecurityService
    }, {
      type: ConfigurationEndpointService
    }];
  }, null);
})();

class TenantEditorComponent {
  constructor() {}

  ngOnInit() {}

}

TenantEditorComponent.ɵfac = function TenantEditorComponent_Factory(t) {
  return new (t || TenantEditorComponent)();
};

TenantEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TenantEditorComponent,
  selectors: [["lib-tenant-editor"]],
  decls: 2,
  vars: 0,
  template: function TenantEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tenant-editor works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TenantEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'lib-tenant-editor',
      template: "<p>tenant-editor works!</p>\r\n",
      styles: [""]
    }]
  }], function () {
    return [];
  }, null);
})();

class HorselessTagsLibraryModule {
  constructor(injector) {
    this.injector = injector;
  }

  ngDoBootstrap() {
    // Convert `PopupComponent` to a custom element.
    const tenantChooserElement = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_7__.createCustomElement)(TenantChooserComponent, {
      injector: this.injector
    }); // Register the custom element with the browser.

    customElements.define('horseless-tenant-chooser', tenantChooserElement); // Convert `PopupComponent` to a custom element.

    const tenantEditorElement = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_7__.createCustomElement)(TenantEditorComponent, {
      injector: this.injector
    }); // Register the custom element with the browser.

    customElements.define('horseless-tenant-editor', tenantEditorElement);
  }

}

HorselessTagsLibraryModule.ɵfac = function HorselessTagsLibraryModule_Factory(t) {
  return new (t || HorselessTagsLibraryModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
};

HorselessTagsLibraryModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: HorselessTagsLibraryModule
});
HorselessTagsLibraryModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [ConfigurationEndpointService, ConfigurationEndpointService],
  imports: [[]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorselessTagsLibraryModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [HorselessTagsLibraryComponent],
      imports: [],
      providers: [ConfigurationEndpointService, ConfigurationEndpointService],
      exports: [HorselessTagsLibraryComponent]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }];
  }, null);
})();

class TenantChooserModule {}

TenantChooserModule.ɵfac = function TenantChooserModule_Factory(t) {
  return new (t || TenantChooserModule)();
};

TenantChooserModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: TenantChooserModule
});
TenantChooserModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [_wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_3__.TenantRESTService, _wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_3__.ClientConfigurationService, angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__.OidcSecurityService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSliderModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TenantChooserModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [TenantChooserComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSliderModule],
      providers: [_wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_3__.TenantRESTService, _wizardcontrollerprerelease_horseless_contentapi_lib__WEBPACK_IMPORTED_MODULE_3__.ClientConfigurationService, angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__.OidcSecurityService],
      exports: [TenantChooserComponent]
    }]
  }], null, null);
})();

class TenantEditorModule {}

TenantEditorModule.ɵfac = function TenantEditorModule_Factory(t) {
  return new (t || TenantEditorModule)();
};

TenantEditorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: TenantEditorModule
});
TenantEditorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TenantEditorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [TenantEditorComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
      exports: [TenantEditorComponent]
    }]
  }], null, null);
})();
/*
 * Public API Surface of horseless-tags-library
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map