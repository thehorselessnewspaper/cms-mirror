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


export interface MvcPartialViewResult { 
    StatusCode?: number | null;
    ViewName?: string | null;
    readonly Model?: any | null;
    ViewData?: { [key: string]: any; } | null;
    TempData?: { [key: string]: any; } | null;
    ViewEngine?: object;
    ContentType?: string | null;
}
