import { OnInit } from '@angular/core';
import { ContentEntitiesTenant, SecurityRestClientConfiguration } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { TenantRESTService } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ConfigurationEndpointService } from '../../services/configuration-endpoint.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TenantChooserComponent implements OnInit {
    private router;
    private clientConfigService;
    clientConfiguration$: Observable<SecurityRestClientConfiguration>;
    tenants: ContentEntitiesTenant[];
    isAuthenticated: boolean;
    pageSize: number | undefined;
    pageCount: number | undefined;
    pageNumber: number | undefined;
    private tenantService;
    private oidcService;
    constructor(router: Router, tenantSvc: TenantRESTService, oidcAuthSvc: OidcSecurityService, clientConfigService: ConfigurationEndpointService);
    ngOnInit(): void;
    private subscribeToConfiguration;
    loadTeants(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantChooserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TenantChooserComponent, "lib-tenant-chooser", never, {}, {}, never, never>;
}
