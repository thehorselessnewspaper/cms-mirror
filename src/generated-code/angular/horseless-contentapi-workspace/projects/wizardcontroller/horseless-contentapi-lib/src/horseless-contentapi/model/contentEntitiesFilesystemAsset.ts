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
import { ContentEntitiesAccessControlEntry } from './contentEntitiesAccessControlEntry';
import { ContentEntitiesHorselessContent } from './contentEntitiesHorselessContent';
import { ContentEntitiesPrincipal } from './contentEntitiesPrincipal';


export interface ContentEntitiesFilesystemAsset { 
    id?: string;
    displayName?: string | null;
    objectId?: string | null;
    isSoftDeleted?: boolean | null;
    createdAt?: string | null;
    filename?: string | null;
    publishedURL?: string | null;
    previewURL?: string | null;
    horselessContents?: Array<ContentEntitiesHorselessContent> | null;
    accessControlList?: Array<ContentEntitiesAccessControlEntry> | null;
    owners?: Array<ContentEntitiesPrincipal> | null;
    timestamp?: string | null;
}

