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

import { ContentEntitiesHorselessContent } from '../model/models';
import { MvcProblemDetails } from '../model/models';


import { HorselessConfiguration }                                     from '../configuration';



export interface HorselessContentRESTServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: HorselessConfiguration;

    /**
     * 
     * 
     * @param tenant 
     * @param contentEntitiesHorselessContent 
     */
    contentEntitiesHorselessContentRESTCreate(tenant: string, contentEntitiesHorselessContent?: ContentEntitiesHorselessContent, extraHttpRequestParams?: any): Observable<ContentEntitiesHorselessContent>;

    /**
     * 
     * 
     * @param objectId 
     * @param tenant 
     */
    contentEntitiesHorselessContentRESTGetByObjectId(objectId: string, tenant: string, extraHttpRequestParams?: any): Observable<ContentEntitiesHorselessContent>;

    /**
     * 
     * 
     * @param contentCollectionId 
     * @param tenant 
     * @param contentEntitiesHorselessContent 
     */
    contentEntitiesHorselessContentRESTUpdate(contentCollectionId: string, tenant: string, contentEntitiesHorselessContent?: ContentEntitiesHorselessContent, extraHttpRequestParams?: any): Observable<ContentEntitiesHorselessContent>;

}
