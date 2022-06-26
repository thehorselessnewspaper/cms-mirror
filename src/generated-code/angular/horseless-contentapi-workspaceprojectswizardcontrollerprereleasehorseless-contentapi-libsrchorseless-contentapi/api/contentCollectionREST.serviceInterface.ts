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
     * @param __tenant__ 
     * @param ContentEntitiesContentCollection 
     */
    contentEntitiesContentCollectionRESTCreate(__tenant__: string, ContentEntitiesContentCollection?: ContentEntitiesContentCollection, extraHttpRequestParams?: any): Observable<ContentEntitiesContentCollection>;

    /**
     * 
     * 
     * @param __tenant__ 
     * @param objectId 
     */
    contentEntitiesContentCollectionRESTGetByObjectId(__tenant__: string, objectId?: string, extraHttpRequestParams?: any): Observable<ContentEntitiesContentCollection>;

    /**
     * 
     * 
     * @param __tenant__ 
     * @param pageSize 
     * @param pageNumber 
     * @param pageCount 
     */
    contentEntitiesContentCollectionRESTGetByPageNumber(__tenant__: string, pageSize?: number, pageNumber?: number, pageCount?: number, extraHttpRequestParams?: any): Observable<Array<ContentEntitiesContentCollection>>;

    /**
     * 
     * 
     * @param contentCollectionId 
     * @param __tenant__ 
     * @param ContentEntitiesContentCollection 
     */
    contentEntitiesContentCollectionRESTUpdate(contentCollectionId: string, __tenant__: string, ContentEntitiesContentCollection?: ContentEntitiesContentCollection, extraHttpRequestParams?: any): Observable<ContentEntitiesContentCollection>;

}
