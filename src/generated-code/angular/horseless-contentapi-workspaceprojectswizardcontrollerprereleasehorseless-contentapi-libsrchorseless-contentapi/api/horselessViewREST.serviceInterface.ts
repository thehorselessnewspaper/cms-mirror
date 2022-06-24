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

import { ContentEntitiesHorselessView } from '../model/models';
import { MvcProblemDetails } from '../model/models';


import { HorselessConfiguration }                                     from '../configuration';



export interface HorselessViewRESTServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: HorselessConfiguration;

    /**
     * 
     * 
     * @param __tenant__ 
     * @param ContentEntitiesHorselessView 
     */
    contentEntitiesHorselessViewRESTCreate(__tenant__: string, ContentEntitiesHorselessView?: ContentEntitiesHorselessView, extraHttpRequestParams?: any): Observable<ContentEntitiesHorselessView>;

    /**
     * 
     * 
     * @param objectId 
     * @param __tenant__ 
     */
    contentEntitiesHorselessViewRESTGetByObjectId(objectId: string, __tenant__: string, extraHttpRequestParams?: any): Observable<ContentEntitiesHorselessView>;

    /**
     * 
     * 
     * @param __tenant__ 
     * @param pageSize 
     * @param pageNumber 
     * @param pageCount 
     */
    contentEntitiesHorselessViewRESTGetByPageNumber(__tenant__: string, pageSize?: number, pageNumber?: number, pageCount?: number, extraHttpRequestParams?: any): Observable<Array<ContentEntitiesHorselessView>>;

    /**
     * 
     * 
     * @param contentCollectionId 
     * @param __tenant__ 
     * @param ContentEntitiesHorselessView 
     */
    contentEntitiesHorselessViewRESTUpdate(contentCollectionId: string, __tenant__: string, ContentEntitiesHorselessView?: ContentEntitiesHorselessView, extraHttpRequestParams?: any): Observable<ContentEntitiesHorselessView>;

}