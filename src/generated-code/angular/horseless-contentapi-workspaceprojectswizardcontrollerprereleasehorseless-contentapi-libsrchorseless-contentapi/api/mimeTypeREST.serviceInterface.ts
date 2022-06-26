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

import { ContentEntitiesMIMEType } from '../model/models';
import { MvcProblemDetails } from '../model/models';


import { HorselessConfiguration }                                     from '../configuration';



export interface MimeTypeRESTServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: HorselessConfiguration;

    /**
     * 
     * 
     * @param __tenant__ 
     * @param ContentEntitiesMIMEType 
     */
    contentEntitiesMimeTypeRESTCreate(__tenant__: string, ContentEntitiesMIMEType?: ContentEntitiesMIMEType, extraHttpRequestParams?: any): Observable<ContentEntitiesMIMEType>;

    /**
     * 
     * 
     * @param objectId 
     * @param __tenant__ 
     */
    contentEntitiesMimeTypeRESTGetByObjectId(objectId: string, __tenant__: string, extraHttpRequestParams?: any): Observable<ContentEntitiesMIMEType>;

    /**
     * 
     * 
     * @param __tenant__ 
     * @param pageSize 
     * @param pageNumber 
     * @param pageCount 
     */
    contentEntitiesMimeTypeRESTGetByPageNumber(__tenant__: string, pageSize?: number, pageNumber?: number, pageCount?: number, extraHttpRequestParams?: any): Observable<Array<ContentEntitiesMIMEType>>;

    /**
     * 
     * 
     * @param contentCollectionId 
     * @param __tenant__ 
     * @param ContentEntitiesMIMEType 
     */
    contentEntitiesMimeTypeRESTUpdate(contentCollectionId: string, __tenant__: string, ContentEntitiesMIMEType?: ContentEntitiesMIMEType, extraHttpRequestParams?: any): Observable<ContentEntitiesMIMEType>;

}
