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
import { ContentEntitiesTenantIdentifierStrategyContainer } from './contentEntitiesTenantIdentifierStrategyContainer';
import { ContentEntitiesTenant } from './contentEntitiesTenant';


export interface ContentEntitiesTenantIdentifierStrategy { 
    id?: string;
    displayName?: string | null;
    objectId?: string | null;
    isSoftDeleted?: boolean | null;
    createdAt?: string | null;
    timestamp?: string | null;
    targetTenant?: ContentEntitiesTenant;
    strategyContainers?: Array<ContentEntitiesTenantIdentifierStrategyContainer> | null;
}

