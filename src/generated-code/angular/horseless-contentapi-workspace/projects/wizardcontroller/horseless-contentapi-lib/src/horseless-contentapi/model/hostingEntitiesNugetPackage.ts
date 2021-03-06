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
import { HostingEntitiesTenant } from './hostingEntitiesTenant';


export interface HostingEntitiesNugetPackage { 
    accessControlList?: Array<HostingEntitiesAccessControlEntry> | null;
    owners?: Array<HostingEntitiesPrincipal> | null;
    isSoftDeleted?: boolean | null;
    timestamp?: string | null;
    id?: string;
    objectId?: string | null;
    packageName?: string | null;
    packageId?: string | null;
    publisher?: string | null;
    version?: string | null;
    createdAt?: string | null;
    displayName?: string | null;
    tenantId?: string | null;
    tenant?: HostingEntitiesTenant;
}

