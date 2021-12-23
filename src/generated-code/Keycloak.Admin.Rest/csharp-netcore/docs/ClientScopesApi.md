# Horseless.Keycloak.Admin.Rest.Api.ClientScopesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmClientScopesGet**](ClientScopesApi.md#realmclientscopesget) | **GET** /{realm}/client-scopes | Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
[**RealmClientScopesIdDelete**](ClientScopesApi.md#realmclientscopesiddelete) | **DELETE** /{realm}/client-scopes/{id} | Delete the client scope
[**RealmClientScopesIdGet**](ClientScopesApi.md#realmclientscopesidget) | **GET** /{realm}/client-scopes/{id} | Get representation of the client scope
[**RealmClientScopesIdPut**](ClientScopesApi.md#realmclientscopesidput) | **PUT** /{realm}/client-scopes/{id} | Update the client scope
[**RealmClientScopesPost**](ClientScopesApi.md#realmclientscopespost) | **POST** /{realm}/client-scopes | Create a new client scope   Client Scope’s name must be unique!


<a name="realmclientscopesget"></a>
# **RealmClientScopesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientScopesGet (string realm)

Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientScopesApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
                List<Dictionary<string, Object>> result = apiInstance.RealmClientScopesGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientScopesApi.RealmClientScopesGet: " + e.Message );
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

<a name="realmclientscopesiddelete"></a>
# **RealmClientScopesIdDelete**
> void RealmClientScopesIdDelete (string realm, string id)

Delete the client scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientScopesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)

            try
            {
                // Delete the client scope
                apiInstance.RealmClientScopesIdDelete(realm, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientScopesApi.RealmClientScopesIdDelete: " + e.Message );
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
 **id** | **string**| id of client scope (not name) | 

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

<a name="realmclientscopesidget"></a>
# **RealmClientScopesIdGet**
> ClientScopeRepresentation RealmClientScopesIdGet (string realm, string id)

Get representation of the client scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientScopesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)

            try
            {
                // Get representation of the client scope
                ClientScopeRepresentation result = apiInstance.RealmClientScopesIdGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientScopesApi.RealmClientScopesIdGet: " + e.Message );
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
 **id** | **string**| id of client scope (not name) | 

### Return type

[**ClientScopeRepresentation**](ClientScopeRepresentation.md)

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

<a name="realmclientscopesidput"></a>
# **RealmClientScopesIdPut**
> void RealmClientScopesIdPut (string realm, string id, ClientScopeRepresentation clientScopeRepresentation)

Update the client scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientScopesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)
            var clientScopeRepresentation = new ClientScopeRepresentation(); // ClientScopeRepresentation | 

            try
            {
                // Update the client scope
                apiInstance.RealmClientScopesIdPut(realm, id, clientScopeRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientScopesApi.RealmClientScopesIdPut: " + e.Message );
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
 **id** | **string**| id of client scope (not name) | 
 **clientScopeRepresentation** | [**ClientScopeRepresentation**](ClientScopeRepresentation.md)|  | 

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

<a name="realmclientscopespost"></a>
# **RealmClientScopesPost**
> void RealmClientScopesPost (string realm, ClientScopeRepresentation clientScopeRepresentation)

Create a new client scope   Client Scope’s name must be unique!

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientScopesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var clientScopeRepresentation = new ClientScopeRepresentation(); // ClientScopeRepresentation | 

            try
            {
                // Create a new client scope   Client Scope’s name must be unique!
                apiInstance.RealmClientScopesPost(realm, clientScopeRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientScopesApi.RealmClientScopesPost: " + e.Message );
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
 **clientScopeRepresentation** | [**ClientScopeRepresentation**](ClientScopeRepresentation.md)|  | 

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

