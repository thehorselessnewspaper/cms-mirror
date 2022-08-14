import { HttpClient } from '@angular/common/http';
import { SecurityRestClientConfiguration } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ConfigurationEndpointService {
    private httpClient;
    clientConfiguration: Observable<SecurityRestClientConfiguration>;
    clientConfiguration$: Observable<SecurityRestClientConfiguration>;
    constructor(httpClient: HttpClient);
    /**
     * call the client configuration endpoint
     * and set the result to the the observable
     */
    ensureConfigurationPipe(): void;
    /**
     * calls the horseless site loaded in the browser
     * and sends control channel commands to the
     * RestClientConfiguration endpoint
     * then
     * @returns Observable<SecurityRestClientConfiguration>
     */
    probeClientConfiguration(): Observable<SecurityRestClientConfiguration>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfigurationEndpointService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfigurationEndpointService>;
}
