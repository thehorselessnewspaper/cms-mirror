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

import { MvcPartialViewResult } from '../model/models';


import { HorselessConfiguration }                                     from '../configuration';



export interface DynamicViewServerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: HorselessConfiguration;

    /**
     * 
     * 
     * @param __tenant__ 
     * @param viewPhysicalPath 
     * @param parentContentCollectionObjectId 
     */
    presentationDynamicViewServerGetDynamicView(__tenant__: string, viewPhysicalPath?: string, parentContentCollectionObjectId?: string, extraHttpRequestParams?: any): Observable<MvcPartialViewResult>;

}