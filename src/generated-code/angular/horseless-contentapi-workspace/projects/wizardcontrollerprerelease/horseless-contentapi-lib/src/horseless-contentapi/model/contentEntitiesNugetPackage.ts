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
import { ContentEntitiesPrincipal } from './contentEntitiesPrincipal';


export interface ContentEntitiesNugetPackage { 
    Id?: string;
    DisplayName?: string | null;
    ObjectId?: string | null;
    IsSoftDeleted?: boolean | null;
    CreatedAt?: string | null;
    PublishAt?: string | null;
    UnPublishAt?: string | null;
    IsPublished?: boolean | null;
    PackageId?: string | null;
    PackageVersion?: string | null;
    PackageAuthor?: string | null;
    PackageSource?: string | null;
    AccessControlEntries?: Array<ContentEntitiesAccessControlEntry> | null;
    Owners?: Array<ContentEntitiesPrincipal> | null;
    Timestamp?: string | null;
    UpdatedAt?: string | null;
    DictionaryKey?: string | null;
}

