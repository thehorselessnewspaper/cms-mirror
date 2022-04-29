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


export interface ContentEntitiesHorselessSession { 
    id?: string;
    displayName?: string | null;
    objectId?: string | null;
    isSoftDeleted?: boolean | null;
    createdAt?: string | null;
    sessionId?: string | null;
    iss?: string | null;
    aud?: string | null;
    sub?: string | null;
    isAnonymous?: boolean | null;
    horselessSessionPrincipalId?: string | null;
    horselessSessionPrincipal?: ContentEntitiesPrincipal;
    accessControlEntries?: Array<ContentEntitiesAccessControlEntry> | null;
    owners?: Array<ContentEntitiesPrincipal> | null;
    timestamp?: string | null;
    updatedAt?: string | null;
}

