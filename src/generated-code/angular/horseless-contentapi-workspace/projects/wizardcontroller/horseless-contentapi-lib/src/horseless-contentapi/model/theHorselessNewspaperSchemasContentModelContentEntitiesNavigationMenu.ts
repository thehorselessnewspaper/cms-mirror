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
import { TheHorselessNewspaperSchemasContentModelContentEntitiesPrincipal } from './theHorselessNewspaperSchemasContentModelContentEntitiesPrincipal';
import { TheHorselessNewspaperSchemasContentModelContentEntitiesAccessControlEntry } from './theHorselessNewspaperSchemasContentModelContentEntitiesAccessControlEntry';
import { TheHorselessNewspaperSchemasContentModelContentEntitiesNavigationMenuItem } from './theHorselessNewspaperSchemasContentModelContentEntitiesNavigationMenuItem';


export interface TheHorselessNewspaperSchemasContentModelContentEntitiesNavigationMenu { 
    id?: string;
    displayName?: string | null;
    objectId?: string | null;
    isSoftDeleted?: boolean | null;
    createdAt?: string | null;
    publishAt?: string | null;
    unPublishAt?: string | null;
    isPublished?: boolean | null;
    menuLabel?: string | null;
    menuDescription?: string | null;
    menuAltText?: string | null;
    childNavigationMenuItems?: Array<TheHorselessNewspaperSchemasContentModelContentEntitiesNavigationMenuItem> | null;
    children?: Array<TheHorselessNewspaperSchemasContentModelContentEntitiesNavigationMenu> | null;
    parents?: Array<TheHorselessNewspaperSchemasContentModelContentEntitiesNavigationMenu> | null;
    accessControlList?: Array<TheHorselessNewspaperSchemasContentModelContentEntitiesAccessControlEntry> | null;
    owners?: Array<TheHorselessNewspaperSchemasContentModelContentEntitiesPrincipal> | null;
}

