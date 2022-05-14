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
import { MvcProblemDetails } from '../model/models';


import { HorselessConfiguration }                                     from '../configuration';



export interface ContentCollectionRESTServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: HorselessConfiguration;

    /**
     * 
     * 
     * @param tenant 
     * @param contentEntitiesContentCollection 
     */
    contentEntitiesContentCollectionRESTCreate(tenant: string, contentEntitiesContentCollection?: ContentEntitiesContentCollection, extraHttpRequestParams?: any): Observable<ContentEntitiesContentCollection>;

    /**
     * 
     * 
     * @param tenant 
     * @param objectId 
     */
    contentEntitiesContentCollectionRESTGetByObjectId(tenant: string, objectId?: string, extraHttpRequestParams?: any): Observable<ContentEntitiesContentCollection>;

    /**
     * 
     * 
     * @param tenant 
     * @param pageSize 
     * @param pageNumber 
     * @param pageCount 
     */
    contentEntitiesContentCollectionRESTGetByPageNumber(tenant: string, pageSize?: number, pageNumber?: number, pageCount?: number, extraHttpRequestParams?: any): Observable<Array<ContentEntitiesContentCollection>>;

    /**
     * 
     * 
     * @param contentCollectionId 
     * @param tenant 
     * @param contentEntitiesContentCollection 
     */
    contentEntitiesContentCollectionRESTUpdate(contentCollectionId: string, tenant: string, contentEntitiesContentCollection?: ContentEntitiesContentCollection, extraHttpRequestParams?: any): Observable<ContentEntitiesContentCollection>;

}
