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

import { HostingEntitiesTenantInfo } from '../model/models';
import { MultiTenantTenantInfo } from '../model/models';
import { MvcProblemDetails } from '../model/models';


import { HorselessConfiguration }                                     from '../configuration';



export interface TenantInfoRESTServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: HorselessConfiguration;

    /**
     * 
     * 
     * @param pageSize 
     * @param pageNumber 
     * @param pageCount 
     */
    contentEntitiesTenantInfoRESTGetByPageNumber(pageSize?: number, pageNumber?: number, pageCount?: number, extraHttpRequestParams?: any): Observable<Array<MultiTenantTenantInfo>>;

    /**
     * 
     * 
     * @param HostingEntitiesTenantInfo 
     */
    hostingEntitiesTenantInfoRESTCreate(HostingEntitiesTenantInfo?: HostingEntitiesTenantInfo, extraHttpRequestParams?: any): Observable<HostingEntitiesTenantInfo>;

    /**
     * 
     * 
     * @param objectId 
     */
    hostingEntitiesTenantInfoRESTGetByObjectId(objectId: string, extraHttpRequestParams?: any): Observable<HostingEntitiesTenantInfo>;

    /**
     * 
     * 
     * @param entityCollectionId 
     * @param HostingEntitiesTenantInfo 
     */
    hostingEntitiesTenantInfoRESTUpdate(entityCollectionId: string, HostingEntitiesTenantInfo?: HostingEntitiesTenantInfo, extraHttpRequestParams?: any): Observable<HostingEntitiesTenantInfo>;

}
