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

import { ContentEntitiesNugetPackage } from '../model/models';
import { MvcProblemDetails } from '../model/models';


import { HorselessConfiguration }                                     from '../configuration';



export interface NugetPackageRESTServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: HorselessConfiguration;

    /**
     * 
     * 
     * @param __tenant__ 
     * @param ContentEntitiesNugetPackage 
     */
    contentEntitiesNugetPackageRESTCreate(__tenant__: string, ContentEntitiesNugetPackage?: ContentEntitiesNugetPackage, extraHttpRequestParams?: any): Observable<ContentEntitiesNugetPackage>;

    /**
     * 
     * 
     * @param objectId 
     * @param __tenant__ 
     */
    contentEntitiesNugetPackageRESTGetByObjectId(objectId: string, __tenant__: string, extraHttpRequestParams?: any): Observable<ContentEntitiesNugetPackage>;

    /**
     * 
     * 
     * @param __tenant__ 
     * @param pageSize 
     * @param pageNumber 
     * @param pageCount 
     */
    contentEntitiesNugetPackageRESTGetByPageNumber(__tenant__: string, pageSize?: number, pageNumber?: number, pageCount?: number, extraHttpRequestParams?: any): Observable<Array<ContentEntitiesNugetPackage>>;

    /**
     * 
     * 
     * @param contentCollectionId 
     * @param __tenant__ 
     * @param ContentEntitiesNugetPackage 
     */
    contentEntitiesNugetPackageRESTUpdate(contentCollectionId: string, __tenant__: string, ContentEntitiesNugetPackage?: ContentEntitiesNugetPackage, extraHttpRequestParams?: any): Observable<ContentEntitiesNugetPackage>;

}
