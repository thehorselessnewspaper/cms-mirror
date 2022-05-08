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
import { ContentEntitiesACEPermissionScope } from './contentEntitiesACEPermissionScope';
import { ContentEntitiesACEPermissionType } from './contentEntitiesACEPermissionType';
import { ContentEntitiesHorselessSession } from './contentEntitiesHorselessSession';
import { ContentEntitiesACEPermission } from './contentEntitiesACEPermission';
import { ContentEntitiesPrincipal } from './contentEntitiesPrincipal';
import { ContentEntitiesTenant } from './contentEntitiesTenant';


export interface ContentEntitiesAccessControlEntry { 
    id?: string;
    displayName?: string | null;
    objectId?: string | null;
    isSoftDeleted?: boolean | null;
    createdAt?: string | null;
    isActive?: boolean | null;
    accessControlEntries?: Array<ContentEntitiesAccessControlEntry> | null;
    owners?: Array<ContentEntitiesPrincipal> | null;
    subjectAccessControlEntries?: Array<ContentEntitiesAccessControlEntry> | null;
    subjectHorselessSessions?: Array<ContentEntitiesHorselessSession> | null;
    subjectPrincipals?: Array<ContentEntitiesPrincipal> | null;
    subjectTenants?: Array<ContentEntitiesTenant> | null;
    scope?: ContentEntitiesACEPermissionScope;
    permission?: ContentEntitiesACEPermission;
    permissionType?: ContentEntitiesACEPermissionType;
    timestamp?: string | null;
    updatedAt?: string | null;
}
