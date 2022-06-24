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
    Id?: string;
    DisplayName?: string | null;
    ObjectId?: string | null;
    IsSoftDeleted?: boolean | null;
    CreatedAt?: string | null;
    FilesystemAssetId?: string | null;
    JSONAssetId?: string | null;
    MIMETypeId?: string | null;
    IsPublished?: boolean | null;
    PublishedURL?: string | null;
    PreviewURL?: string | null;
    FilesystemAsset?: ContentEntitiesFilesystemAsset;
    JSONAsset?: ContentEntitiesJSONAsset;
    MIMEType?: ContentEntitiesMIMEType;
    ContentCollections?: Array<ContentEntitiesContentCollection> | null;
    AccessControlEntries?: Array<ContentEntitiesAccessControlEntry> | null;
    Owners?: Array<ContentEntitiesPrincipal> | null;
    Timestamp?: string | null;
    UpdatedAt?: string | null;
    DictionaryKey?: string | null;
}
