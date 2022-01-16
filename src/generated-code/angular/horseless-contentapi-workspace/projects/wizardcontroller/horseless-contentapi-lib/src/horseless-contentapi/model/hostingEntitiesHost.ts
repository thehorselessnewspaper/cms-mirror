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
import { HostingEntitiesRoutingDiscriminator } from './hostingEntitiesRoutingDiscriminator';
import { HostingEntitiesPrincipal } from './hostingEntitiesPrincipal';


export interface HostingEntitiesHost { 
    accessControlList?: Array<HostingEntitiesAccessControlEntry> | null;
    owners?: Array<HostingEntitiesPrincipal> | null;
    isSoftDeleted?: boolean | null;
    id?: string;
    tcpHost?: string | null;
    isTenanantDiscriminator?: string | null;
    routingDiscriminatorId?: string | null;
    objectId?: string | null;
    displayName?: string | null;
    htmlLayoutFilename?: string | null;
    createdAt?: string | null;
    httpPort?: string | null;
    routingDiscriminator?: HostingEntitiesRoutingDiscriminator;
}
