# Org.OpenAPITools.Api.ClientsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmClientsGet**](ClientsApi.md#realmclientsget) | **GET** /{realm}/clients | Get clients belonging to the realm   Returns a list of clients belonging to the realm
[**RealmClientsIdClientSecretGet**](ClientsApi.md#realmclientsidclientsecretget) | **GET** /{realm}/clients/{id}/client-secret | Get the client secret
[**RealmClientsIdClientSecretPost**](ClientsApi.md#realmclientsidclientsecretpost) | **POST** /{realm}/clients/{id}/client-secret | Generate a new secret for the client
[**RealmClientsIdDefaultClientScopesClientScopeIdDelete**](ClientsApi.md#realmclientsiddefaultclientscopesclientscopeiddelete) | **DELETE** /{realm}/clients/{id}/default-client-scopes/{clientScopeId} | 
[**RealmClientsIdDefaultClientScopesClientScopeIdPut**](ClientsApi.md#realmclientsiddefaultclientscopesclientscopeidput) | **PUT** /{realm}/clients/{id}/default-client-scopes/{clientScopeId} | 
[**RealmClientsIdDefaultClientScopesGet**](ClientsApi.md#realmclientsiddefaultclientscopesget) | **GET** /{realm}/clients/{id}/default-client-scopes | Get default client scopes.
[**RealmClientsIdDelete**](ClientsApi.md#realmclientsiddelete) | **DELETE** /{realm}/clients/{id} | Delete the client
[**RealmClientsIdEvaluateScopesGenerateExampleAccessTokenGet**](ClientsApi.md#realmclientsidevaluatescopesgenerateexampleaccesstokenget) | **GET** /{realm}/clients/{id}/evaluate-scopes/generate-example-access-token | Create JSON with payload of example access token
[**RealmClientsIdEvaluateScopesGenerateExampleIdTokenGet**](ClientsApi.md#realmclientsidevaluatescopesgenerateexampleidtokenget) | **GET** /{realm}/clients/{id}/evaluate-scopes/generate-example-id-token | Create JSON with payload of example id token
[**RealmClientsIdEvaluateScopesGenerateExampleUserinfoGet**](ClientsApi.md#realmclientsidevaluatescopesgenerateexampleuserinfoget) | **GET** /{realm}/clients/{id}/evaluate-scopes/generate-example-userinfo | Create JSON with payload of example user info
[**RealmClientsIdEvaluateScopesProtocolMappersGet**](ClientsApi.md#realmclientsidevaluatescopesprotocolmappersget) | **GET** /{realm}/clients/{id}/evaluate-scopes/protocol-mappers | Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
[**RealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedGet**](ClientsApi.md#realmclientsidevaluatescopesscopemappingsrolecontaineridgrantedget) | **GET** /{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/granted | Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
[**RealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedGet**](ClientsApi.md#realmclientsidevaluatescopesscopemappingsrolecontaineridnotgrantedget) | **GET** /{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted | Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
[**RealmClientsIdGet**](ClientsApi.md#realmclientsidget) | **GET** /{realm}/clients/{id} | Get representation of the client
[**RealmClientsIdInstallationProvidersProviderIdGet**](ClientsApi.md#realmclientsidinstallationprovidersprovideridget) | **GET** /{realm}/clients/{id}/installation/providers/{providerId} | 
[**RealmClientsIdManagementPermissionsGet**](ClientsApi.md#realmclientsidmanagementpermissionsget) | **GET** /{realm}/clients/{id}/management/permissions | Return object stating whether client Authorization permissions have been initialized or not and a reference
[**RealmClientsIdManagementPermissionsPut**](ClientsApi.md#realmclientsidmanagementpermissionsput) | **PUT** /{realm}/clients/{id}/management/permissions | Return object stating whether client Authorization permissions have been initialized or not and a reference
[**RealmClientsIdNodesNodeDelete**](ClientsApi.md#realmclientsidnodesnodedelete) | **DELETE** /{realm}/clients/{id}/nodes/{node} | Unregister a cluster node from the client
[**RealmClientsIdNodesPost**](ClientsApi.md#realmclientsidnodespost) | **POST** /{realm}/clients/{id}/nodes | Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
[**RealmClientsIdOfflineSessionCountGet**](ClientsApi.md#realmclientsidofflinesessioncountget) | **GET** /{realm}/clients/{id}/offline-session-count | Get application offline session count   Returns a number of offline user sessions associated with this client   {      \&quot;count\&quot;: number  }
[**RealmClientsIdOfflineSessionsGet**](ClientsApi.md#realmclientsidofflinesessionsget) | **GET** /{realm}/clients/{id}/offline-sessions | Get offline sessions for client   Returns a list of offline user sessions associated with this client
[**RealmClientsIdOptionalClientScopesClientScopeIdDelete**](ClientsApi.md#realmclientsidoptionalclientscopesclientscopeiddelete) | **DELETE** /{realm}/clients/{id}/optional-client-scopes/{clientScopeId} | 
[**RealmClientsIdOptionalClientScopesClientScopeIdPut**](ClientsApi.md#realmclientsidoptionalclientscopesclientscopeidput) | **PUT** /{realm}/clients/{id}/optional-client-scopes/{clientScopeId} | 
[**RealmClientsIdOptionalClientScopesGet**](ClientsApi.md#realmclientsidoptionalclientscopesget) | **GET** /{realm}/clients/{id}/optional-client-scopes | Get optional client scopes.
[**RealmClientsIdPushRevocationPost**](ClientsApi.md#realmclientsidpushrevocationpost) | **POST** /{realm}/clients/{id}/push-revocation | Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
[**RealmClientsIdPut**](ClientsApi.md#realmclientsidput) | **PUT** /{realm}/clients/{id} | Update the client
[**RealmClientsIdRegistrationAccessTokenPost**](ClientsApi.md#realmclientsidregistrationaccesstokenpost) | **POST** /{realm}/clients/{id}/registration-access-token | Generate a new registration access token for the client
[**RealmClientsIdServiceAccountUserGet**](ClientsApi.md#realmclientsidserviceaccountuserget) | **GET** /{realm}/clients/{id}/service-account-user | Get a user dedicated to the service account
[**RealmClientsIdSessionCountGet**](ClientsApi.md#realmclientsidsessioncountget) | **GET** /{realm}/clients/{id}/session-count | Get application session count   Returns a number of user sessions associated with this client   {      \&quot;count\&quot;: number  }
[**RealmClientsIdTestNodesAvailableGet**](ClientsApi.md#realmclientsidtestnodesavailableget) | **GET** /{realm}/clients/{id}/test-nodes-available | Test if registered cluster nodes are available   Tests availability by sending &#39;ping&#39; request to all cluster nodes.
[**RealmClientsIdUserSessionsGet**](ClientsApi.md#realmclientsidusersessionsget) | **GET** /{realm}/clients/{id}/user-sessions | Get user sessions for client   Returns a list of user sessions associated with this client
[**RealmClientsPost**](ClientsApi.md#realmclientspost) | **POST** /{realm}/clients | Create a new client   Client’s client_id must be unique!


<a name="realmclientsget"></a>
# **RealmClientsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsGet (string realm, string clientId = null, int? first = null, int? max = null, string q = null, bool? search = null, bool? viewableOnly = null)

Get clients belonging to the realm   Returns a list of clients belonging to the realm

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var clientId = clientId_example;  // string | filter by clientId (optional) 
            var first = 56;  // int? | the first result (optional) 
            var max = 56;  // int? | the max results to return (optional) 
            var q = q_example;  // string |  (optional) 
            var search = true;  // bool? | whether this is a search query or a getClientById query (optional) 
            var viewableOnly = true;  // bool? | filter clients that cannot be viewed in full by admin (optional) 

            try
            {
                // Get clients belonging to the realm   Returns a list of clients belonging to the realm
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsGet(realm, clientId, first, max, q, search, viewableOnly);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **clientId** | **string**| filter by clientId | [optional] 
 **first** | **int?**| the first result | [optional] 
 **max** | **int?**| the max results to return | [optional] 
 **q** | **string**|  | [optional] 
 **search** | **bool?**| whether this is a search query or a getClientById query | [optional] 
 **viewableOnly** | **bool?**| filter clients that cannot be viewed in full by admin | [optional] 

### Return type

**List<Dictionary<string, Object>>**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidclientsecretget"></a>
# **RealmClientsIdClientSecretGet**
> CredentialRepresentation RealmClientsIdClientSecretGet (string realm, string id)

Get the client secret

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdClientSecretGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Get the client secret
                CredentialRepresentation result = apiInstance.RealmClientsIdClientSecretGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdClientSecretGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

[**CredentialRepresentation**](CredentialRepresentation.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidclientsecretpost"></a>
# **RealmClientsIdClientSecretPost**
> CredentialRepresentation RealmClientsIdClientSecretPost (string realm, string id)

Generate a new secret for the client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdClientSecretPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Generate a new secret for the client
                CredentialRepresentation result = apiInstance.RealmClientsIdClientSecretPost(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdClientSecretPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

[**CredentialRepresentation**](CredentialRepresentation.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsiddefaultclientscopesclientscopeiddelete"></a>
# **RealmClientsIdDefaultClientScopesClientScopeIdDelete**
> void RealmClientsIdDefaultClientScopesClientScopeIdDelete (string realm, string id, string clientScopeId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdDefaultClientScopesClientScopeIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var clientScopeId = clientScopeId_example;  // string | 

            try
            {
                apiInstance.RealmClientsIdDefaultClientScopesClientScopeIdDelete(realm, id, clientScopeId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdDefaultClientScopesClientScopeIdDelete: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **clientScopeId** | **string**|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsiddefaultclientscopesclientscopeidput"></a>
# **RealmClientsIdDefaultClientScopesClientScopeIdPut**
> void RealmClientsIdDefaultClientScopesClientScopeIdPut (string realm, string id, string clientScopeId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdDefaultClientScopesClientScopeIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var clientScopeId = clientScopeId_example;  // string | 

            try
            {
                apiInstance.RealmClientsIdDefaultClientScopesClientScopeIdPut(realm, id, clientScopeId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdDefaultClientScopesClientScopeIdPut: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **clientScopeId** | **string**|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsiddefaultclientscopesget"></a>
# **RealmClientsIdDefaultClientScopesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdDefaultClientScopesGet (string realm, string id)

Get default client scopes.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdDefaultClientScopesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Get default client scopes.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdDefaultClientScopesGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdDefaultClientScopesGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

**List<Dictionary<string, Object>>**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsiddelete"></a>
# **RealmClientsIdDelete**
> void RealmClientsIdDelete (string realm, string id)

Delete the client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Delete the client
                apiInstance.RealmClientsIdDelete(realm, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdDelete: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidevaluatescopesgenerateexampleaccesstokenget"></a>
# **RealmClientsIdEvaluateScopesGenerateExampleAccessTokenGet**
> AccessToken RealmClientsIdEvaluateScopesGenerateExampleAccessTokenGet (string realm, string id, string scope = null, string userId = null)

Create JSON with payload of example access token

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdEvaluateScopesGenerateExampleAccessTokenGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var scope = scope_example;  // string |  (optional) 
            var userId = userId_example;  // string |  (optional) 

            try
            {
                // Create JSON with payload of example access token
                AccessToken result = apiInstance.RealmClientsIdEvaluateScopesGenerateExampleAccessTokenGet(realm, id, scope, userId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdEvaluateScopesGenerateExampleAccessTokenGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **scope** | **string**|  | [optional] 
 **userId** | **string**|  | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidevaluatescopesgenerateexampleidtokenget"></a>
# **RealmClientsIdEvaluateScopesGenerateExampleIdTokenGet**
> IDToken RealmClientsIdEvaluateScopesGenerateExampleIdTokenGet (string realm, string id, string scope = null, string userId = null)

Create JSON with payload of example id token

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdEvaluateScopesGenerateExampleIdTokenGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var scope = scope_example;  // string |  (optional) 
            var userId = userId_example;  // string |  (optional) 

            try
            {
                // Create JSON with payload of example id token
                IDToken result = apiInstance.RealmClientsIdEvaluateScopesGenerateExampleIdTokenGet(realm, id, scope, userId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdEvaluateScopesGenerateExampleIdTokenGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **scope** | **string**|  | [optional] 
 **userId** | **string**|  | [optional] 

### Return type

[**IDToken**](IDToken.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidevaluatescopesgenerateexampleuserinfoget"></a>
# **RealmClientsIdEvaluateScopesGenerateExampleUserinfoGet**
> Dictionary&lt;string, Object&gt; RealmClientsIdEvaluateScopesGenerateExampleUserinfoGet (string realm, string id, string scope = null, string userId = null)

Create JSON with payload of example user info

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdEvaluateScopesGenerateExampleUserinfoGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var scope = scope_example;  // string |  (optional) 
            var userId = userId_example;  // string |  (optional) 

            try
            {
                // Create JSON with payload of example user info
                Dictionary<string, Object> result = apiInstance.RealmClientsIdEvaluateScopesGenerateExampleUserinfoGet(realm, id, scope, userId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdEvaluateScopesGenerateExampleUserinfoGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **scope** | **string**|  | [optional] 
 **userId** | **string**|  | [optional] 

### Return type

**Dictionary<string, Object>**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidevaluatescopesprotocolmappersget"></a>
# **RealmClientsIdEvaluateScopesProtocolMappersGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdEvaluateScopesProtocolMappersGet (string realm, string id, string scope = null)

Return list of all protocol mappers, which will be used when generating tokens issued for particular client.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdEvaluateScopesProtocolMappersGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var scope = scope_example;  // string |  (optional) 

            try
            {
                // Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdEvaluateScopesProtocolMappersGet(realm, id, scope);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdEvaluateScopesProtocolMappersGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **scope** | **string**|  | [optional] 

### Return type

**List<Dictionary<string, Object>>**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidevaluatescopesscopemappingsrolecontaineridgrantedget"></a>
# **RealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedGet (string realm, string id, string roleContainerId, string scope = null)

Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleContainerId = roleContainerId_example;  // string | either realm name OR client UUID
            var scope = scope_example;  // string |  (optional) 

            try
            {
                // Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedGet(realm, id, roleContainerId, scope);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **roleContainerId** | **string**| either realm name OR client UUID | 
 **scope** | **string**|  | [optional] 

### Return type

**List<Dictionary<string, Object>>**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidevaluatescopesscopemappingsrolecontaineridnotgrantedget"></a>
# **RealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedGet (string realm, string id, string roleContainerId, string scope = null)

Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleContainerId = roleContainerId_example;  // string | either realm name OR client UUID
            var scope = scope_example;  // string |  (optional) 

            try
            {
                // Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedGet(realm, id, roleContainerId, scope);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **roleContainerId** | **string**| either realm name OR client UUID | 
 **scope** | **string**|  | [optional] 

### Return type

**List<Dictionary<string, Object>>**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidget"></a>
# **RealmClientsIdGet**
> ClientRepresentation RealmClientsIdGet (string realm, string id)

Get representation of the client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Get representation of the client
                ClientRepresentation result = apiInstance.RealmClientsIdGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

[**ClientRepresentation**](ClientRepresentation.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidinstallationprovidersprovideridget"></a>
# **RealmClientsIdInstallationProvidersProviderIdGet**
> void RealmClientsIdInstallationProvidersProviderIdGet (string realm, string id, string providerId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdInstallationProvidersProviderIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var providerId = providerId_example;  // string | 

            try
            {
                apiInstance.RealmClientsIdInstallationProvidersProviderIdGet(realm, id, providerId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdInstallationProvidersProviderIdGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **providerId** | **string**|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidmanagementpermissionsget"></a>
# **RealmClientsIdManagementPermissionsGet**
> ManagementPermissionReference RealmClientsIdManagementPermissionsGet (string realm, string id)

Return object stating whether client Authorization permissions have been initialized or not and a reference

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdManagementPermissionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Return object stating whether client Authorization permissions have been initialized or not and a reference
                ManagementPermissionReference result = apiInstance.RealmClientsIdManagementPermissionsGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdManagementPermissionsGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

[**ManagementPermissionReference**](ManagementPermissionReference.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidmanagementpermissionsput"></a>
# **RealmClientsIdManagementPermissionsPut**
> ManagementPermissionReference RealmClientsIdManagementPermissionsPut (string realm, string id, ManagementPermissionReference managementPermissionReference)

Return object stating whether client Authorization permissions have been initialized or not and a reference

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdManagementPermissionsPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var managementPermissionReference = new ManagementPermissionReference(); // ManagementPermissionReference | 

            try
            {
                // Return object stating whether client Authorization permissions have been initialized or not and a reference
                ManagementPermissionReference result = apiInstance.RealmClientsIdManagementPermissionsPut(realm, id, managementPermissionReference);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdManagementPermissionsPut: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **managementPermissionReference** | [**ManagementPermissionReference**](ManagementPermissionReference.md)|  | 

### Return type

[**ManagementPermissionReference**](ManagementPermissionReference.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidnodesnodedelete"></a>
# **RealmClientsIdNodesNodeDelete**
> void RealmClientsIdNodesNodeDelete (string realm, string id, string node)

Unregister a cluster node from the client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdNodesNodeDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var node = node_example;  // string | 

            try
            {
                // Unregister a cluster node from the client
                apiInstance.RealmClientsIdNodesNodeDelete(realm, id, node);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdNodesNodeDelete: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **node** | **string**|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidnodespost"></a>
# **RealmClientsIdNodesPost**
> void RealmClientsIdNodesPost (string realm, string id, Dictionary<string, Object> requestBody)

Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdNodesPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var requestBody = new Dictionary<string, Object>(); // Dictionary<string, Object> | 

            try
            {
                // Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
                apiInstance.RealmClientsIdNodesPost(realm, id, requestBody);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdNodesPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **requestBody** | [**Dictionary&lt;string, Object&gt;**](Object.md)|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidofflinesessioncountget"></a>
# **RealmClientsIdOfflineSessionCountGet**
> Dictionary&lt;string, Object&gt; RealmClientsIdOfflineSessionCountGet (string realm, string id)

Get application offline session count   Returns a number of offline user sessions associated with this client   {      \"count\": number  }

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdOfflineSessionCountGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Get application offline session count   Returns a number of offline user sessions associated with this client   {      \"count\": number  }
                Dictionary<string, Object> result = apiInstance.RealmClientsIdOfflineSessionCountGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdOfflineSessionCountGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

**Dictionary<string, Object>**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidofflinesessionsget"></a>
# **RealmClientsIdOfflineSessionsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdOfflineSessionsGet (string realm, string id, int? first = null, int? max = null)

Get offline sessions for client   Returns a list of offline user sessions associated with this client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdOfflineSessionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var first = 56;  // int? | Paging offset (optional) 
            var max = 56;  // int? | Maximum results size (defaults to 100) (optional) 

            try
            {
                // Get offline sessions for client   Returns a list of offline user sessions associated with this client
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdOfflineSessionsGet(realm, id, first, max);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdOfflineSessionsGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **first** | **int?**| Paging offset | [optional] 
 **max** | **int?**| Maximum results size (defaults to 100) | [optional] 

### Return type

**List<Dictionary<string, Object>>**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidoptionalclientscopesclientscopeiddelete"></a>
# **RealmClientsIdOptionalClientScopesClientScopeIdDelete**
> void RealmClientsIdOptionalClientScopesClientScopeIdDelete (string realm, string id, string clientScopeId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdOptionalClientScopesClientScopeIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var clientScopeId = clientScopeId_example;  // string | 

            try
            {
                apiInstance.RealmClientsIdOptionalClientScopesClientScopeIdDelete(realm, id, clientScopeId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdOptionalClientScopesClientScopeIdDelete: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **clientScopeId** | **string**|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidoptionalclientscopesclientscopeidput"></a>
# **RealmClientsIdOptionalClientScopesClientScopeIdPut**
> void RealmClientsIdOptionalClientScopesClientScopeIdPut (string realm, string id, string clientScopeId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdOptionalClientScopesClientScopeIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var clientScopeId = clientScopeId_example;  // string | 

            try
            {
                apiInstance.RealmClientsIdOptionalClientScopesClientScopeIdPut(realm, id, clientScopeId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdOptionalClientScopesClientScopeIdPut: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **clientScopeId** | **string**|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidoptionalclientscopesget"></a>
# **RealmClientsIdOptionalClientScopesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdOptionalClientScopesGet (string realm, string id)

Get optional client scopes.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdOptionalClientScopesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Get optional client scopes.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdOptionalClientScopesGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdOptionalClientScopesGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

**List<Dictionary<string, Object>>**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidpushrevocationpost"></a>
# **RealmClientsIdPushRevocationPost**
> GlobalRequestResult RealmClientsIdPushRevocationPost (string realm, string id)

Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdPushRevocationPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
                GlobalRequestResult result = apiInstance.RealmClientsIdPushRevocationPost(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdPushRevocationPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

[**GlobalRequestResult**](GlobalRequestResult.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidput"></a>
# **RealmClientsIdPut**
> void RealmClientsIdPut (string realm, string id, ClientRepresentation clientRepresentation)

Update the client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var clientRepresentation = new ClientRepresentation(); // ClientRepresentation | 

            try
            {
                // Update the client
                apiInstance.RealmClientsIdPut(realm, id, clientRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdPut: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **clientRepresentation** | [**ClientRepresentation**](ClientRepresentation.md)|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidregistrationaccesstokenpost"></a>
# **RealmClientsIdRegistrationAccessTokenPost**
> ClientRepresentation RealmClientsIdRegistrationAccessTokenPost (string realm, string id)

Generate a new registration access token for the client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRegistrationAccessTokenPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Generate a new registration access token for the client
                ClientRepresentation result = apiInstance.RealmClientsIdRegistrationAccessTokenPost(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdRegistrationAccessTokenPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

[**ClientRepresentation**](ClientRepresentation.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidserviceaccountuserget"></a>
# **RealmClientsIdServiceAccountUserGet**
> UserRepresentation RealmClientsIdServiceAccountUserGet (string realm, string id)

Get a user dedicated to the service account

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdServiceAccountUserGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Get a user dedicated to the service account
                UserRepresentation result = apiInstance.RealmClientsIdServiceAccountUserGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdServiceAccountUserGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidsessioncountget"></a>
# **RealmClientsIdSessionCountGet**
> Dictionary&lt;string, Object&gt; RealmClientsIdSessionCountGet (string realm, string id)

Get application session count   Returns a number of user sessions associated with this client   {      \"count\": number  }

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdSessionCountGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Get application session count   Returns a number of user sessions associated with this client   {      \"count\": number  }
                Dictionary<string, Object> result = apiInstance.RealmClientsIdSessionCountGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdSessionCountGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

**Dictionary<string, Object>**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidtestnodesavailableget"></a>
# **RealmClientsIdTestNodesAvailableGet**
> GlobalRequestResult RealmClientsIdTestNodesAvailableGet (string realm, string id)

Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdTestNodesAvailableGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.
                GlobalRequestResult result = apiInstance.RealmClientsIdTestNodesAvailableGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdTestNodesAvailableGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 

### Return type

[**GlobalRequestResult**](GlobalRequestResult.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidusersessionsget"></a>
# **RealmClientsIdUserSessionsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdUserSessionsGet (string realm, string id, int? first = null, int? max = null)

Get user sessions for client   Returns a list of user sessions associated with this client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdUserSessionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var first = 56;  // int? | Paging offset (optional) 
            var max = 56;  // int? | Maximum results size (defaults to 100) (optional) 

            try
            {
                // Get user sessions for client   Returns a list of user sessions associated with this client
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdUserSessionsGet(realm, id, first, max);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsIdUserSessionsGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **first** | **int?**| Paging offset | [optional] 
 **max** | **int?**| Maximum results size (defaults to 100) | [optional] 

### Return type

**List<Dictionary<string, Object>>**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientspost"></a>
# **RealmClientsPost**
> void RealmClientsPost (string realm, ClientRepresentation clientRepresentation)

Create a new client   Client’s client_id must be unique!

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var clientRepresentation = new ClientRepresentation(); // ClientRepresentation | 

            try
            {
                // Create a new client   Client’s client_id must be unique!
                apiInstance.RealmClientsPost(realm, clientRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientsApi.RealmClientsPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | **string**| realm name (not id!) | 
 **clientRepresentation** | [**ClientRepresentation**](ClientRepresentation.md)|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

