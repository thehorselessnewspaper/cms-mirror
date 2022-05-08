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

import { ContentEntitiesFilesystemAsset } from '../model/models';
import { MvcProblemDetails } from '../model/models';


import { HorselessConfiguration }                                     from '../configuration';



export interface FilesystemAssetRESTServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: HorselessConfiguration;

    /**
     * 
     * 
     * @param tenant 
     * @param contentEntitiesFilesystemAsset 
     */
    filesystemAssetRESTControllerCreate(tenant: string, contentEntitiesFilesystemAsset?: ContentEntitiesFilesystemAsset, extraHttpRequestParams?: any): Observable<ContentEntitiesFilesystemAsset>;

    /**
     * 
     * 
     * @param objectId 
     * @param tenant 
     */
    filesystemAssetRESTControllerGetByObjectId(objectId: string, tenant: string, extraHttpRequestParams?: any): Observable<ContentEntitiesFilesystemAsset>;

    /**
     * 
     * 
     * @param contentCollectionId 
     * @param tenant 
     * @param contentEntitiesFilesystemAsset 
     */
    filesystemAssetRESTControllerUpdate(contentCollectionId: string, tenant: string, contentEntitiesFilesystemAsset?: ContentEntitiesFilesystemAsset, extraHttpRequestParams?: any): Observable<ContentEntitiesFilesystemAsset>;

}
