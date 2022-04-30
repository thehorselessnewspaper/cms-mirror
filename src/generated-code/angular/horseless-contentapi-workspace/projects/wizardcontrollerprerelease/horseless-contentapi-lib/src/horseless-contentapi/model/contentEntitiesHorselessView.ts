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
import { ContentEntitiesContentCollection } from './contentEntitiesContentCollection';
import { ContentEntitiesPrincipal } from './contentEntitiesPrincipal';


export interface ContentEntitiesHorselessView { 
    id?: string;
    displayName?: string | null;
    objectId?: string | null;
    isSoftDeleted?: boolean | null;
    createdAt?: string | null;
    isActive?: boolean | null;
    contentCollections?: Array<ContentEntitiesContentCollection> | null;
    accessControlEntries?: Array<ContentEntitiesAccessControlEntry> | null;
    owners?: Array<ContentEntitiesPrincipal> | null;
    updatedAt?: string | null;
    timestamp?: string | null;
    exists?: boolean;
    isDirectory?: boolean;
    lastModified?: string;
    length?: number;
    name?: string | null;
    physicalPath?: string | null;
    viewContent?: string | null;
}

