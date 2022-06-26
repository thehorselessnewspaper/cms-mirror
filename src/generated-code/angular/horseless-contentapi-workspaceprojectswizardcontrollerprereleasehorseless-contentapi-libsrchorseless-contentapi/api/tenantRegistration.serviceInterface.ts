/**
 * Horseless Content API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';



import { HorselessConfiguration }                                     from '../configuration';



export interface TenantRegistrationServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: HorselessConfiguration;

    /**
     * 
     * 
     * @param tenantId 
     */
    approveTenantIdGet(tenantId: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param tenantId 
     * @param displayName 
     * @param tenantIdentifier 
     * @param Id 
     */
    approveTenantIdPost(tenantId: string, displayName: string, tenantIdentifier: string, Id?: string, extraHttpRequestParams?: any): Observable<{}>;

}
