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


export interface HostingEntitiesPrincipal { 
    timestamp?: string | null;
    accessControlList?: Array<HostingEntitiesAccessControlEntry> | null;
    owners?: Array<HostingEntitiesPrincipal> | null;
    id?: string;
    displayName?: string | null;
    objectId?: string | null;
    isSoftDeleted?: boolean | null;
    createdAt?: string | null;
    iss?: string | null;
    aud?: string | null;
    sub?: string | null;
}

