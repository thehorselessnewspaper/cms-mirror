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
import { ContentEntitiesFilesystemAsset } from './contentEntitiesFilesystemAsset';
import { ContentEntitiesAccessControlEntry } from './contentEntitiesAccessControlEntry';
import { ContentEntitiesMIMEType } from './contentEntitiesMIMEType';
import { ContentEntitiesContentCollection } from './contentEntitiesContentCollection';
import { ContentEntitiesPrincipal } from './contentEntitiesPrincipal';
import { ContentEntitiesJSONAsset } from './contentEntitiesJSONAsset';


export interface ContentEntitiesHorselessContent { 
    id?: string;
    displayName?: string | null;
    objectId?: string | null;
    isSoftDeleted?: boolean | null;
    createdAt?: string | null;
    filesystemAssetId?: string | null;
    jsonAssetId?: string | null;
    mimeTypeId?: string | null;
    isPublished?: boolean | null;
    publishedURL?: string | null;
    previewURL?: string | null;
    filesystemAsset?: ContentEntitiesFilesystemAsset;
    jsonAsset?: ContentEntitiesJSONAsset;
    mimeType?: ContentEntitiesMIMEType;
    contentCollections?: Array<ContentEntitiesContentCollection> | null;
    accessControlList?: Array<ContentEntitiesAccessControlEntry> | null;
    owners?: Array<ContentEntitiesPrincipal> | null;
}

