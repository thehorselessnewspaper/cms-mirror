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
     * @param tenant 
     * @param contentEntitiesMIMEType 
     */
    contentEntitiesMimeTypeRESTCreate(tenant: string, contentEntitiesMIMEType?: ContentEntitiesMIMEType, extraHttpRequestParams?: any): Observable<ContentEntitiesMIMEType>;

    /**
     * 
     * 
     * @param objectId 
     * @param tenant 
     */
    contentEntitiesMimeTypeRESTGetByObjectId(objectId: string, tenant: string, extraHttpRequestParams?: any): Observable<ContentEntitiesMIMEType>;

    /**
     * 
     * 
     * @param tenant 
     * @param pageSize 
     * @param pageNumber 
     * @param pageCount 
     */
    contentEntitiesMimeTypeRESTGetByPageNumber(tenant: string, pageSize?: number, pageNumber?: number, pageCount?: number, extraHttpRequestParams?: any): Observable<Array<ContentEntitiesMIMEType>>;

    /**
     * 
     * 
     * @param contentCollectionId 
     * @param tenant 
     * @param contentEntitiesMIMEType 
     */
    contentEntitiesMimeTypeRESTUpdate(contentCollectionId: string, tenant: string, contentEntitiesMIMEType?: ContentEntitiesMIMEType, extraHttpRequestParams?: any): Observable<ContentEntitiesMIMEType>;

}
