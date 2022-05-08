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

import { ContentEntitiesNavigationMenuItem } from '../model/models';
import { MvcProblemDetails } from '../model/models';


import { HorselessConfiguration }                                     from '../configuration';



export interface NavigationMenuItemRESTServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: HorselessConfiguration;

    /**
     * 
     * 
     * @param tenant 
     * @param contentEntitiesNavigationMenuItem 
     */
    navigationMenuItemRESTControllerCreate(tenant: string, contentEntitiesNavigationMenuItem?: ContentEntitiesNavigationMenuItem, extraHttpRequestParams?: any): Observable<ContentEntitiesNavigationMenuItem>;

    /**
     * 
     * 
     * @param objectId 
     * @param tenant 
     */
    navigationMenuItemRESTControllerGetByObjectId(objectId: string, tenant: string, extraHttpRequestParams?: any): Observable<ContentEntitiesNavigationMenuItem>;

    /**
     * 
     * 
     * @param contentCollectionId 
     * @param tenant 
     * @param contentEntitiesNavigationMenuItem 
     */
    navigationMenuItemRESTControllerUpdate(contentCollectionId: string, tenant: string, contentEntitiesNavigationMenuItem?: ContentEntitiesNavigationMenuItem, extraHttpRequestParams?: any): Observable<ContentEntitiesNavigationMenuItem>;

}
