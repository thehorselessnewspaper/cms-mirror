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
import { ContentEntitiesTenantIdentifierStrategy } from './contentEntitiesTenantIdentifierStrategy';
import { ContentEntitiesPrincipal } from './contentEntitiesPrincipal';


export interface ContentEntitiesTenant { 
    id?: string;
    displayName?: string | null;
    objectId?: string | null;
    isSoftDeleted?: boolean | null;
    createdAt?: string | null;
    accessControlEntries?: Array<ContentEntitiesAccessControlEntry> | null;
    accounts?: Array<ContentEntitiesPrincipal> | null;
    contentCollections?: Array<ContentEntitiesContentCollection> | null;
    owners?: Array<ContentEntitiesPrincipal> | null;
    isPublished?: boolean;
    baseUrl?: string | null;
    tenantIdentifierStrategy?: ContentEntitiesTenantIdentifierStrategy;
    tenantIdentifier?: string | null;
    timestamp?: string | null;
    updatedAt?: string | null;
}

