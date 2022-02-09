import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

const mockHostingModelTenant = {
  "tenantIdentifierStrategies": [
    {
      "strategy": "STATIC"
    }
  ],
  "accessControlList": [
    {
      "scope": 0,
      "permission": 0,
      "permissionType": 0,
      "subjectPrincipals": [
        {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "displayName": "string",
          "objectId": "string",
          "isSoftDeleted": true,
          "createdAt": "2022-01-19T19:01:03.251Z",
          "iss": "string",
          "aud": "string",
          "sub": "string"
        }
      ],
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "objectId": "string",
      "createdAt": "2022-01-19T19:01:03.251Z",
      "displayName": "string",
      "isSoftDeleted": true
    }
  ],
  "owners": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "displayName": "string",
      "objectId": "string",
      "isSoftDeleted": true,
      "createdAt": "2022-01-19T19:01:03.251Z",
      "iss": "string",
      "aud": "string",
      "sub": "string"
    }
  ],
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "displayName": "string",
  "objectId": "string",
  "isSoftDeleted": true,
  "createdAt": "2022-01-19T19:01:03.251Z",
  "horselessClaimsPrincipals": [
    {
      "accessControlList": [
        {
          "scope": 0,
          "permission": 0,
          "permissionType": 0,
          "subjectPrincipals": [
            {
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "displayName": "string",
              "objectId": "string",
              "isSoftDeleted": true,
              "createdAt": "2022-01-19T19:01:03.251Z",
              "iss": "string",
              "aud": "string",
              "sub": "string"
            }
          ],
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "objectId": "string",
          "createdAt": "2022-01-19T19:01:03.251Z",
          "displayName": "string",
          "isSoftDeleted": true
        }
      ],
      "owners": [
        {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "displayName": "string",
          "objectId": "string",
          "isSoftDeleted": true,
          "createdAt": "2022-01-19T19:01:03.251Z",
          "iss": "string",
          "aud": "string",
          "sub": "string"
        }
      ],
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "displayName": "string",
      "objectId": "string",
      "isSoftDeleted": true,
      "createdAt": "2022-01-19T19:01:03.251Z",
      "iss": "string",
      "aud": "string",
      "sub": "string",
      "tenantId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "tenant": "string"
    }
  ],
  "routingDiscriminators": [
    {
      "accessControlList": [
        {
          "scope": 0,
          "permission": 0,
          "permissionType": 0,
          "subjectPrincipals": [
            {
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "displayName": "string",
              "objectId": "string",
              "isSoftDeleted": true,
              "createdAt": "2022-01-19T19:01:03.251Z",
              "iss": "string",
              "aud": "string",
              "sub": "string"
            }
          ],
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "objectId": "string",
          "createdAt": "2022-01-19T19:01:03.251Z",
          "displayName": "string",
          "isSoftDeleted": true
        }
      ],
      "owners": [
        {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "displayName": "string",
          "objectId": "string",
          "isSoftDeleted": true,
          "createdAt": "2022-01-19T19:01:03.251Z",
          "iss": "string",
          "aud": "string",
          "sub": "string"
        }
      ],
      "isSoftDeleted": true,
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "isActive": true,
      "objectId": "string",
      "displayName": "string",
      "createdAt": "2022-01-19T19:01:03.251Z",
      "tenantId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "tenant": "string",
      "hosts": [
        {
          "accessControlList": [
            {
              "scope": 0,
              "permission": 0,
              "permissionType": 0,
              "subjectPrincipals": [
                {
                  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  "displayName": "string",
                  "objectId": "string",
                  "isSoftDeleted": true,
                  "createdAt": "2022-01-19T19:01:03.251Z",
                  "iss": "string",
                  "aud": "string",
                  "sub": "string"
                }
              ],
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "objectId": "string",
              "createdAt": "2022-01-19T19:01:03.251Z",
              "displayName": "string",
              "isSoftDeleted": true
            }
          ],
          "owners": [
            {
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "displayName": "string",
              "objectId": "string",
              "isSoftDeleted": true,
              "createdAt": "2022-01-19T19:01:03.251Z",
              "iss": "string",
              "aud": "string",
              "sub": "string"
            }
          ],
          "isSoftDeleted": true,
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "tcpHost": "string",
          "isTenanantDiscriminator": "string",
          "routingDiscriminatorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "objectId": "string",
          "displayName": "string",
          "htmlLayoutFilename": "string",
          "createdAt": "2022-01-19T19:01:03.251Z",
          "httpPort": "string",
          "routingDiscriminator": "string"
        }
      ],
      "uriPaths": [
        {
          "accessControlList": [
            {
              "scope": 0,
              "permission": 0,
              "permissionType": 0,
              "subjectPrincipals": [
                {
                  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  "displayName": "string",
                  "objectId": "string",
                  "isSoftDeleted": true,
                  "createdAt": "2022-01-19T19:01:03.251Z",
                  "iss": "string",
                  "aud": "string",
                  "sub": "string"
                }
              ],
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "objectId": "string",
              "createdAt": "2022-01-19T19:01:03.251Z",
              "displayName": "string",
              "isSoftDeleted": true
            }
          ],
          "owners": [
            {
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "displayName": "string",
              "objectId": "string",
              "isSoftDeleted": true,
              "createdAt": "2022-01-19T19:01:03.251Z",
              "iss": "string",
              "aud": "string",
              "sub": "string"
            }
          ],
          "isSoftDeleted": true,
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "absoluteURL": "string",
          "isTenantDiscriminator": "string",
          "routingDiscriminatorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "objectId": "string",
          "displayName": "string",
          "createdAt": "2022-01-19T19:01:03.251Z",
          "httpPort": "string",
          "httpScheme": "string",
          "tcpHost": "string",
          "routingDiscriminator": "string"
        }
      ]
    }
  ],
  "tenantInfos": [
    {
      "accessControlList": [
        {
          "scope": 0,
          "permission": 0,
          "permissionType": 0,
          "subjectPrincipals": [
            {
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "displayName": "string",
              "objectId": "string",
              "isSoftDeleted": true,
              "createdAt": "2022-01-19T19:01:03.251Z",
              "iss": "string",
              "aud": "string",
              "sub": "string"
            }
          ],
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "objectId": "string",
          "createdAt": "2022-01-19T19:01:03.251Z",
          "displayName": "string",
          "isSoftDeleted": true
        }
      ],
      "owners": [
        {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "displayName": "string",
          "objectId": "string",
          "isSoftDeleted": true,
          "createdAt": "2022-01-19T19:01:03.251Z",
          "iss": "string",
          "aud": "string",
          "sub": "string"
        }
      ],
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "displayName": "string",
      "objectId": "string",
      "isSoftDeleted": true,
      "createdAt": "2022-01-19T19:01:03.251Z",
      "identifier": "string",
      "name": "string",
      "connectionString": "string",
      "tenantBaseUrl": "string",
      "tenant_Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "tenant": "string",
      "keyCloakConfigurations": [
        {
          "accessControlList": [
            {
              "scope": 0,
              "permission": 0,
              "permissionType": 0,
              "subjectPrincipals": [
                {
                  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  "displayName": "string",
                  "objectId": "string",
                  "isSoftDeleted": true,
                  "createdAt": "2022-01-19T19:01:03.251Z",
                  "iss": "string",
                  "aud": "string",
                  "sub": "string"
                }
              ],
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "objectId": "string",
              "createdAt": "2022-01-19T19:01:03.251Z",
              "displayName": "string",
              "isSoftDeleted": true
            }
          ],
          "owners": [
            {
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "displayName": "string",
              "objectId": "string",
              "isSoftDeleted": true,
              "createdAt": "2022-01-19T19:01:03.251Z",
              "iss": "string",
              "aud": "string",
              "sub": "string"
            }
          ],
          "isSoftDeleted": true,
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "displayName": "string",
          "authority": "string",
          "realm": "string",
          "objectId": "string",
          "createdAt": "2022-01-19T19:01:03.251Z",
          "iss": "string",
          "aud": "string",
          "tenantInfoId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "tenantInfo": "string"
        }
      ],
      "webAPITenantInfos": [
        {
          "accessControlList": [
            {
              "scope": 0,
              "permission": 0,
              "permissionType": 0,
              "subjectPrincipals": [
                {
                  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  "displayName": "string",
                  "objectId": "string",
                  "isSoftDeleted": true,
                  "createdAt": "2022-01-19T19:01:03.251Z",
                  "iss": "string",
                  "aud": "string",
                  "sub": "string"
                }
              ],
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "objectId": "string",
              "createdAt": "2022-01-19T19:01:03.251Z",
              "displayName": "string",
              "isSoftDeleted": true
            }
          ],
          "owners": [
            {
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "displayName": "string",
              "objectId": "string",
              "isSoftDeleted": true,
              "createdAt": "2022-01-19T19:01:03.251Z",
              "iss": "string",
              "aud": "string",
              "sub": "string"
            }
          ],
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "displayName": "string",
          "objectId": "string",
          "isSoftDeleted": true,
          "createdAt": "2022-01-19T19:01:03.251Z",
          "identifier": "string",
          "name": "string",
          "connectionString": "string",
          "webAPIBaseUrl": "string",
          "tenantInfoId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "tenantInfo": "string"
        }
    ]
  }
]
};

@Injectable()
export class MockHostingmodelInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestClone = request.clone();
    if( window.origin.includes(":4200")
    ||
    window.origin.includes(":9876")  )
    {
      if(requestClone.url.toLowerCase().includes("horselesshosting") &&
          requestClone.url.toLowerCase().includes("tenant"))
      {
        console.log("returning mocked pagemodel");
        return of(new HttpResponse({status: 200, body: mockHostingModelTenant}));
      }
    }
    return next.handle(request);
  }
}
