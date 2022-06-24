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
import { ContentEntitiesPrincipalClaimContainer } from './contentEntitiesPrincipalClaimContainer';
import { ContentEntitiesAccessControlEntry } from './contentEntitiesAccessControlEntry';
import { ContentEntitiesHorselessSession } from './contentEntitiesHorselessSession';
import { ContentEntitiesTenant } from './contentEntitiesTenant';


export interface ContentEntitiesPrincipal { 
    Id?: string;
    DisplayName?: string | null;
    ObjectId?: string | null;
    IsSoftDeleted?: boolean | null;
    CreatedAt?: string | null;
    Iss?: string | null;
    Aud?: string | null;
    Sub?: string | null;
    HorselessSessions?: Array<ContentEntitiesHorselessSession> | null;
    AccessControlEntries?: Array<ContentEntitiesAccessControlEntry> | null;
    OwnedAccessControlEntries?: Array<ContentEntitiesAccessControlEntry> | null;
    OwnedHorselessSessions?: Array<ContentEntitiesHorselessSession> | null;
    OwnedPrincipals?: Array<ContentEntitiesPrincipal> | null;
    OwnedTenants?: Array<ContentEntitiesTenant> | null;
    Owners?: Array<ContentEntitiesPrincipal> | null;
    TenantAccounts?: Array<ContentEntitiesTenant> | null;
    IsAnonymous?: boolean;
    UPN?: string | null;
    Email?: string | null;
    PreferredUserName?: string | null;
    Timestamp?: string | null;
    PrincipalClaimContainer?: ContentEntitiesPrincipalClaimContainer;
    UpdatedAt?: string | null;
    DictionaryKey?: string | null;
}

