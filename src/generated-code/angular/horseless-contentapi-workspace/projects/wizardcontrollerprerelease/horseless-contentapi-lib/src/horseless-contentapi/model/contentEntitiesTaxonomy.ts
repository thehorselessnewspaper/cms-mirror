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
import { ContentEntitiesContentCollection } from './contentEntitiesContentCollection';
import { ContentEntitiesTaxon } from './contentEntitiesTaxon';


export interface ContentEntitiesTaxonomy { 
    Id?: string;
    DisplayName?: string | null;
    ObjectId?: string | null;
    IsSoftDeleted?: boolean | null;
    CreatedAt?: string | null;
    JsonValue?: string | null;
    JsonSchema?: string | null;
    ContentCollections?: Array<ContentEntitiesContentCollection> | null;
    Taxons?: Array<ContentEntitiesTaxon> | null;
}

