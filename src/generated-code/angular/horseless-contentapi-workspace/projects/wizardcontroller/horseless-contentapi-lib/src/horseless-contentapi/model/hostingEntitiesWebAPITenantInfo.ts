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
import { HostingEntitiesAccessControlEntry } from './hostingEntitiesAccessControlEntry';
import { HostingEntitiesPrincipal } from './hostingEntitiesPrincipal';
import { HostingEntitiesTenantInfo } from './hostingEntitiesTenantInfo';


export interface HostingEntitiesWebAPITenantInfo { 
    accessControlList?: Array<HostingEntitiesAccessControlEntry> | null;
    owners?: Array<HostingEntitiesPrincipal> | null;
    timestamp?: string | null;
    id?: string;
    displayName?: string | null;
    objectId?: string | null;
    isSoftDeleted?: boolean | null;
    createdAt?: string | null;
    identifier?: string | null;
    name?: string | null;
    connectionString?: string | null;
    webAPIBaseUrl?: string | null;
    tenantInfoId?: string | null;
    tenantInfo?: HostingEntitiesTenantInfo;
}

