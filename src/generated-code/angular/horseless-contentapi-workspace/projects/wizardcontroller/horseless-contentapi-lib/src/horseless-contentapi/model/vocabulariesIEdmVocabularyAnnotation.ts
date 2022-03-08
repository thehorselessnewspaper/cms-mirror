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
import { EdmIEdmExpression } from './edmIEdmExpression';
import { VocabulariesIEdmTerm } from './vocabulariesIEdmTerm';


export interface VocabulariesIEdmVocabularyAnnotation { 
    readonly qualifier?: string | null;
    term?: VocabulariesIEdmTerm;
    target?: object;
    value?: EdmIEdmExpression;
}
