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
import { TheHorselessNewspaperSchemasHostingModelHostingEntitiesTenantInfo } from './theHorselessNewspaperSchemasHostingModelHostingEntitiesTenantInfo';
import { TheHorselessNewspaperSchemasHostingModelHostingEntitiesAccessControlEntry } from './theHorselessNewspaperSchemasHostingModelHostingEntitiesAccessControlEntry';
import { TheHorselessNewspaperSchemasHostingModelHostingEntitiesPrincipal } from './theHorselessNewspaperSchemasHostingModelHostingEntitiesPrincipal';


export interface TheHorselessNewspaperSchemasHostingModelHostingEntitiesWebAPITenantInfo { 
    accessControlList?: Array<TheHorselessNewspaperSchemasHostingModelHostingEntitiesAccessControlEntry> | null;
    owners?: Array<TheHorselessNewspaperSchemasHostingModelHostingEntitiesPrincipal> | null;
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
    tenantInfo?: TheHorselessNewspaperSchemasHostingModelHostingEntitiesTenantInfo;
}

