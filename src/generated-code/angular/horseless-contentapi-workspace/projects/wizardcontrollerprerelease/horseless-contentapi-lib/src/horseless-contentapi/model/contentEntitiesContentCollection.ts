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
import { ContentEntitiesHorselessView } from './contentEntitiesHorselessView';
import { ContentEntitiesTaxonomy } from './contentEntitiesTaxonomy';
import { ContentEntitiesHorselessContent } from './contentEntitiesHorselessContent';
import { ContentEntitiesPublication } from './contentEntitiesPublication';
import { ContentEntitiesPrincipal } from './contentEntitiesPrincipal';
import { ContentEntitiesTenant } from './contentEntitiesTenant';


export interface ContentEntitiesContentCollection { 
    Id?: string;
    DisplayName?: string | null;
    ObjectId?: string | null;
    IsSoftDeleted?: boolean | null;
    CreatedAt?: string | null;
    AllowAnonymousRead?: boolean | null;
    IsPublished?: boolean | null;
    PublishedURL?: string | null;
    PreviewURL?: string | null;
    ChildContentCollections?: Array<ContentEntitiesContentCollection> | null;
    HorselessViews?: Array<ContentEntitiesHorselessView> | null;
    MimeContents?: Array<ContentEntitiesHorselessContent> | null;
    ParentContentCollections?: Array<ContentEntitiesContentCollection> | null;
    Publications?: Array<ContentEntitiesPublication> | null;
    Taxonomies?: Array<ContentEntitiesTaxonomy> | null;
    Tenants?: Array<ContentEntitiesTenant> | null;
    AccessControlEntries?: Array<ContentEntitiesAccessControlEntry> | null;
    Owners?: Array<ContentEntitiesPrincipal> | null;
    Timestamp?: string | null;
    UpdatedAt?: string | null;
}

