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

import { ContentEntitiesContentCollection } from '../model/models';
import { ContentEntitiesHorselessSession } from '../model/models';
import { MvcProblemDetails } from '../model/models';


import { HorselessConfiguration }                                     from '../configuration';



export interface HorselessSessionRESTServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: HorselessConfiguration;

    /**
     * 
     * 
     * @param tenant 
     * @param contentEntitiesHorselessSession 
     */
    contentEntitiesHorselessSessionRESTCreate(tenant: string, contentEntitiesHorselessSession?: ContentEntitiesHorselessSession, extraHttpRequestParams?: any): Observable<ContentEntitiesContentCollection>;

    /**
     * 
     * 
     * @param objectId 
     * @param tenant 
     */
    contentEntitiesHorselessSessionRESTGetByObjectId(objectId: string, tenant: string, extraHttpRequestParams?: any): Observable<ContentEntitiesContentCollection>;

    /**
     * 
     * 
     * @param contentCollectionId 
     * @param tenant 
     * @param contentEntitiesHorselessSession 
     */
    contentEntitiesHorselessSessionRESTUpdate(contentCollectionId: string, tenant: string, contentEntitiesHorselessSession?: ContentEntitiesHorselessSession, extraHttpRequestParams?: any): Observable<ContentEntitiesContentCollection>;

}
