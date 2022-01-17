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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { ContentEntitiesMIMEType } from '../model/contentEntitiesMIMEType';
// @ts-ignore
import { MvcProblemDetails } from '../model/mvcProblemDetails';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class MimeTypeRESTService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * @param contentEntitiesMIMEType 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public mimeTypeRESTControllerCreate(contentEntitiesMIMEType?: ContentEntitiesMIMEType, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;minimal' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;full' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;none' | 'application/json;odata.streaming&#x3D;true' | 'application/json;odata.streaming&#x3D;false' | 'application/json' | 'application/xml' | 'text/plain' | 'application/octet-stream' | 'text/json', context?: HttpContext}): Observable<ContentEntitiesMIMEType>;
    public mimeTypeRESTControllerCreate(contentEntitiesMIMEType?: ContentEntitiesMIMEType, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;minimal' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;full' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;none' | 'application/json;odata.streaming&#x3D;true' | 'application/json;odata.streaming&#x3D;false' | 'application/json' | 'application/xml' | 'text/plain' | 'application/octet-stream' | 'text/json', context?: HttpContext}): Observable<HttpResponse<ContentEntitiesMIMEType>>;
    public mimeTypeRESTControllerCreate(contentEntitiesMIMEType?: ContentEntitiesMIMEType, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;minimal' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;full' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;none' | 'application/json;odata.streaming&#x3D;true' | 'application/json;odata.streaming&#x3D;false' | 'application/json' | 'application/xml' | 'text/plain' | 'application/octet-stream' | 'text/json', context?: HttpContext}): Observable<HttpEvent<ContentEntitiesMIMEType>>;
    public mimeTypeRESTControllerCreate(contentEntitiesMIMEType?: ContentEntitiesMIMEType, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;minimal' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;full' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;none' | 'application/json;odata.streaming&#x3D;true' | 'application/json;odata.streaming&#x3D;false' | 'application/json' | 'application/xml' | 'text/plain' | 'application/octet-stream' | 'text/json', context?: HttpContext}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json;odata.metadata=minimal;odata.streaming=true',
                'application/json;odata.metadata=minimal;odata.streaming=false',
                'application/json;odata.metadata=minimal',
                'application/json;odata.metadata=full;odata.streaming=true',
                'application/json;odata.metadata=full;odata.streaming=false',
                'application/json;odata.metadata=full',
                'application/json;odata.metadata=none;odata.streaming=true',
                'application/json;odata.metadata=none;odata.streaming=false',
                'application/json;odata.metadata=none',
                'application/json;odata.streaming=true',
                'application/json;odata.streaming=false',
                'application/json',
                'application/xml',
                'text/plain',
                'application/octet-stream',
                'text/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<ContentEntitiesMIMEType>(`${this.configuration.basePath}/api/MIMEType/Create`,
            contentEntitiesMIMEType,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param objectId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public mimeTypeRESTControllerGetByObjectId(objectId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;minimal' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;full' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;none' | 'application/json;odata.streaming&#x3D;true' | 'application/json;odata.streaming&#x3D;false' | 'application/json' | 'application/xml' | 'text/plain' | 'application/octet-stream' | 'text/json', context?: HttpContext}): Observable<ContentEntitiesMIMEType>;
    public mimeTypeRESTControllerGetByObjectId(objectId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;minimal' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;full' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;none' | 'application/json;odata.streaming&#x3D;true' | 'application/json;odata.streaming&#x3D;false' | 'application/json' | 'application/xml' | 'text/plain' | 'application/octet-stream' | 'text/json', context?: HttpContext}): Observable<HttpResponse<ContentEntitiesMIMEType>>;
    public mimeTypeRESTControllerGetByObjectId(objectId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;minimal' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;full' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;none' | 'application/json;odata.streaming&#x3D;true' | 'application/json;odata.streaming&#x3D;false' | 'application/json' | 'application/xml' | 'text/plain' | 'application/octet-stream' | 'text/json', context?: HttpContext}): Observable<HttpEvent<ContentEntitiesMIMEType>>;
    public mimeTypeRESTControllerGetByObjectId(objectId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;minimal' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;full' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;none' | 'application/json;odata.streaming&#x3D;true' | 'application/json;odata.streaming&#x3D;false' | 'application/json' | 'application/xml' | 'text/plain' | 'application/octet-stream' | 'text/json', context?: HttpContext}): Observable<any> {
        if (objectId === null || objectId === undefined) {
            throw new Error('Required parameter objectId was null or undefined when calling mimeTypeRESTControllerGetByObjectId.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json;odata.metadata=minimal;odata.streaming=true',
                'application/json;odata.metadata=minimal;odata.streaming=false',
                'application/json;odata.metadata=minimal',
                'application/json;odata.metadata=full;odata.streaming=true',
                'application/json;odata.metadata=full;odata.streaming=false',
                'application/json;odata.metadata=full',
                'application/json;odata.metadata=none;odata.streaming=true',
                'application/json;odata.metadata=none;odata.streaming=false',
                'application/json;odata.metadata=none',
                'application/json;odata.streaming=true',
                'application/json;odata.streaming=false',
                'application/json',
                'application/xml',
                'text/plain',
                'application/octet-stream',
                'text/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<ContentEntitiesMIMEType>(`${this.configuration.basePath}/api/MIMEType/GetByObjectId`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param contentCollectionId 
     * @param contentEntitiesMIMEType 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public mimeTypeRESTControllerUpdate(contentCollectionId: string, contentEntitiesMIMEType?: ContentEntitiesMIMEType, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;minimal' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;full' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;none' | 'application/json;odata.streaming&#x3D;true' | 'application/json;odata.streaming&#x3D;false' | 'application/json' | 'application/xml' | 'text/plain' | 'application/octet-stream' | 'text/json', context?: HttpContext}): Observable<ContentEntitiesMIMEType>;
    public mimeTypeRESTControllerUpdate(contentCollectionId: string, contentEntitiesMIMEType?: ContentEntitiesMIMEType, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;minimal' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;full' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;none' | 'application/json;odata.streaming&#x3D;true' | 'application/json;odata.streaming&#x3D;false' | 'application/json' | 'application/xml' | 'text/plain' | 'application/octet-stream' | 'text/json', context?: HttpContext}): Observable<HttpResponse<ContentEntitiesMIMEType>>;
    public mimeTypeRESTControllerUpdate(contentCollectionId: string, contentEntitiesMIMEType?: ContentEntitiesMIMEType, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;minimal' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;full' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;none' | 'application/json;odata.streaming&#x3D;true' | 'application/json;odata.streaming&#x3D;false' | 'application/json' | 'application/xml' | 'text/plain' | 'application/octet-stream' | 'text/json', context?: HttpContext}): Observable<HttpEvent<ContentEntitiesMIMEType>>;
    public mimeTypeRESTControllerUpdate(contentCollectionId: string, contentEntitiesMIMEType?: ContentEntitiesMIMEType, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;minimal;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;minimal' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;full;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;full' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;true' | 'application/json;odata.metadata&#x3D;none;odata.streaming&#x3D;false' | 'application/json;odata.metadata&#x3D;none' | 'application/json;odata.streaming&#x3D;true' | 'application/json;odata.streaming&#x3D;false' | 'application/json' | 'application/xml' | 'text/plain' | 'application/octet-stream' | 'text/json', context?: HttpContext}): Observable<any> {
        if (contentCollectionId === null || contentCollectionId === undefined) {
            throw new Error('Required parameter contentCollectionId was null or undefined when calling mimeTypeRESTControllerUpdate.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json;odata.metadata=minimal;odata.streaming=true',
                'application/json;odata.metadata=minimal;odata.streaming=false',
                'application/json;odata.metadata=minimal',
                'application/json;odata.metadata=full;odata.streaming=true',
                'application/json;odata.metadata=full;odata.streaming=false',
                'application/json;odata.metadata=full',
                'application/json;odata.metadata=none;odata.streaming=true',
                'application/json;odata.metadata=none;odata.streaming=false',
                'application/json;odata.metadata=none',
                'application/json;odata.streaming=true',
                'application/json;odata.streaming=false',
                'application/json',
                'application/xml',
                'text/plain',
                'application/octet-stream',
                'text/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<ContentEntitiesMIMEType>(`${this.configuration.basePath}/api/MIMEType/Update`,
            contentEntitiesMIMEType,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
