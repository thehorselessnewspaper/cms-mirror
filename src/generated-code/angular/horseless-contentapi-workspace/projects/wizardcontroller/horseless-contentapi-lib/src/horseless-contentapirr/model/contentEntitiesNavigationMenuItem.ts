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
import { ContentEntitiesNavigationMenu } from './contentEntitiesNavigationMenu';


export interface ContentEntitiesNavigationMenuItem { 
    id?: string;
    displayName?: string | null;
    objectId?: string | null;
    isSoftDeleted?: boolean | null;
    createdAt?: string | null;
    publishAt?: string | null;
    unPublishAt?: string | null;
    isPublished?: boolean | null;
    menuItemLabel?: string | null;
    menuItemDescription?: string | null;
    menuItemAltText?: string | null;
    childNavigationItems?: Array<ContentEntitiesNavigationMenuItem> | null;
    parentNavigationItems?: Array<ContentEntitiesNavigationMenuItem> | null;
    parentNavigationMenus?: Array<ContentEntitiesNavigationMenu> | null;
    accessControlList?: Array<ContentEntitiesAccessControlEntry> | null;
    owners?: Array<ContentEntitiesPrincipal> | null;
    timestamp?: string | null;
}

