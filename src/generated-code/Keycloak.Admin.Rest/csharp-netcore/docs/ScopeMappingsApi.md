# Horseless.Keycloak.Admin.Rest.Api.ScopeMappingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmClientScopesIdScopeMappingsClientsClientAvailableGet**](ScopeMappingsApi.md#realmclientscopesidscopemappingsclientsclientavailableget) | **GET** /{realm}/client-scopes/{id}/scope-mappings/clients/{client}/available | The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
[**RealmClientScopesIdScopeMappingsClientsClientCompositeGet**](ScopeMappingsApi.md#realmclientscopesidscopemappingsclientsclientcompositeget) | **GET** /{realm}/client-scopes/{id}/scope-mappings/clients/{client}/composite | Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
[**RealmClientScopesIdScopeMappingsClientsClientDelete**](ScopeMappingsApi.md#realmclientscopesidscopemappingsclientsclientdelete) | **DELETE** /{realm}/client-scopes/{id}/scope-mappings/clients/{client} | Remove client-level roles from the client’s scope.
[**RealmClientScopesIdScopeMappingsClientsClientGet**](ScopeMappingsApi.md#realmclientscopesidscopemappingsclientsclientget) | **GET** /{realm}/client-scopes/{id}/scope-mappings/clients/{client} | Get the roles associated with a client’s scope   Returns roles for the client.
[**RealmClientScopesIdScopeMappingsClientsClientPost**](ScopeMappingsApi.md#realmclientscopesidscopemappingsclientsclientpost) | **POST** /{realm}/client-scopes/{id}/scope-mappings/clients/{client} | Add client-level roles to the client’s scope
[**RealmClientScopesIdScopeMappingsRealmAvailableGet**](ScopeMappingsApi.md#realmclientscopesidscopemappingsrealmavailableget) | **GET** /{realm}/client-scopes/{id}/scope-mappings/realm/available | Get realm-level roles that are available to attach to this client’s scope
[**RealmClientScopesIdScopeMappingsRealmCompositeGet**](ScopeMappingsApi.md#realmclientscopesidscopemappingsrealmcompositeget) | **GET** /{realm}/client-scopes/{id}/scope-mappings/realm/composite | Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
[**RealmClientScopesIdScopeMappingsRealmDelete**](ScopeMappingsApi.md#realmclientscopesidscopemappingsrealmdelete) | **DELETE** /{realm}/client-scopes/{id}/scope-mappings/realm | Remove a set of realm-level roles from the client’s scope
[**RealmClientScopesIdScopeMappingsRealmGet**](ScopeMappingsApi.md#realmclientscopesidscopemappingsrealmget) | **GET** /{realm}/client-scopes/{id}/scope-mappings/realm | Get realm-level roles associated with the client’s scope
[**RealmClientScopesIdScopeMappingsRealmPost**](ScopeMappingsApi.md#realmclientscopesidscopemappingsrealmpost) | **POST** /{realm}/client-scopes/{id}/scope-mappings/realm | Add a set of realm-level roles to the client’s scope
[**RealmClientsIdScopeMappingsClientsClientAvailableGet**](ScopeMappingsApi.md#realmclientsidscopemappingsclientsclientavailableget) | **GET** /{realm}/clients/{id}/scope-mappings/clients/{client}/available | The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
[**RealmClientsIdScopeMappingsClientsClientCompositeGet**](ScopeMappingsApi.md#realmclientsidscopemappingsclientsclientcompositeget) | **GET** /{realm}/clients/{id}/scope-mappings/clients/{client}/composite | Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
[**RealmClientsIdScopeMappingsClientsClientDelete**](ScopeMappingsApi.md#realmclientsidscopemappingsclientsclientdelete) | **DELETE** /{realm}/clients/{id}/scope-mappings/clients/{client} | Remove client-level roles from the client’s scope.
[**RealmClientsIdScopeMappingsClientsClientGet**](ScopeMappingsApi.md#realmclientsidscopemappingsclientsclientget) | **GET** /{realm}/clients/{id}/scope-mappings/clients/{client} | Get the roles associated with a client’s scope   Returns roles for the client.
[**RealmClientsIdScopeMappingsClientsClientPost**](ScopeMappingsApi.md#realmclientsidscopemappingsclientsclientpost) | **POST** /{realm}/clients/{id}/scope-mappings/clients/{client} | Add client-level roles to the client’s scope
[**RealmClientsIdScopeMappingsRealmAvailableGet**](ScopeMappingsApi.md#realmclientsidscopemappingsrealmavailableget) | **GET** /{realm}/clients/{id}/scope-mappings/realm/available | Get realm-level roles that are available to attach to this client’s scope
[**RealmClientsIdScopeMappingsRealmCompositeGet**](ScopeMappingsApi.md#realmclientsidscopemappingsrealmcompositeget) | **GET** /{realm}/clients/{id}/scope-mappings/realm/composite | Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
[**RealmClientsIdScopeMappingsRealmDelete**](ScopeMappingsApi.md#realmclientsidscopemappingsrealmdelete) | **DELETE** /{realm}/clients/{id}/scope-mappings/realm | Remove a set of realm-level roles from the client’s scope
[**RealmClientsIdScopeMappingsRealmGet**](ScopeMappingsApi.md#realmclientsidscopemappingsrealmget) | **GET** /{realm}/clients/{id}/scope-mappings/realm | Get realm-level roles associated with the client’s scope
[**RealmClientsIdScopeMappingsRealmPost**](ScopeMappingsApi.md#realmclientsidscopemappingsrealmpost) | **POST** /{realm}/clients/{id}/scope-mappings/realm | Add a set of realm-level roles to the client’s scope


<a name="realmclientscopesidscopemappingsclientsclientavailableget"></a>
# **RealmClientScopesIdScopeMappingsClientsClientAvailableGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientScopesIdScopeMappingsClientsClientAvailableGet (string realm, string id, string _client)

The available client-level roles   Returns the roles for the client that can be associated with the client’s scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdScopeMappingsClientsClientAvailableGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)
            var _client = _client_example;  // string | 

            try
            {
                // The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
                List<Dictionary<string, Object>> result = apiInstance.RealmClientScopesIdScopeMappingsClientsClientAvailableGet(realm, id, _client);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientScopesIdScopeMappingsClientsClientAvailableGet: " + e.Message );
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
 **_client** | **string**|  | 

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

<a name="realmclientscopesidscopemappingsclientsclientcompositeget"></a>
# **RealmClientScopesIdScopeMappingsClientsClientCompositeGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientScopesIdScopeMappingsClientsClientCompositeGet (string realm, string id, string _client, bool? briefRepresentation = null)

Get effective client roles   Returns the roles for the client that are associated with the client’s scope.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdScopeMappingsClientsClientCompositeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)
            var _client = _client_example;  // string | 
            var briefRepresentation = true;  // bool? | if false, return roles with their attributes (optional) 

            try
            {
                // Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientScopesIdScopeMappingsClientsClientCompositeGet(realm, id, _client, briefRepresentation);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientScopesIdScopeMappingsClientsClientCompositeGet: " + e.Message );
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
 **_client** | **string**|  | 
 **briefRepresentation** | **bool?**| if false, return roles with their attributes | [optional] 

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

<a name="realmclientscopesidscopemappingsclientsclientdelete"></a>
# **RealmClientScopesIdScopeMappingsClientsClientDelete**
> void RealmClientScopesIdScopeMappingsClientsClientDelete (string realm, string id, string _client, List<RoleRepresentation> roleRepresentation)

Remove client-level roles from the client’s scope.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdScopeMappingsClientsClientDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)
            var _client = _client_example;  // string | 
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Remove client-level roles from the client’s scope.
                apiInstance.RealmClientScopesIdScopeMappingsClientsClientDelete(realm, id, _client, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientScopesIdScopeMappingsClientsClientDelete: " + e.Message );
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
 **_client** | **string**|  | 
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)|  | 

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

<a name="realmclientscopesidscopemappingsclientsclientget"></a>
# **RealmClientScopesIdScopeMappingsClientsClientGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientScopesIdScopeMappingsClientsClientGet (string realm, string id, string _client)

Get the roles associated with a client’s scope   Returns roles for the client.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdScopeMappingsClientsClientGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)
            var _client = _client_example;  // string | 

            try
            {
                // Get the roles associated with a client’s scope   Returns roles for the client.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientScopesIdScopeMappingsClientsClientGet(realm, id, _client);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientScopesIdScopeMappingsClientsClientGet: " + e.Message );
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
 **_client** | **string**|  | 

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

<a name="realmclientscopesidscopemappingsclientsclientpost"></a>
# **RealmClientScopesIdScopeMappingsClientsClientPost**
> void RealmClientScopesIdScopeMappingsClientsClientPost (string realm, string id, string _client, List<RoleRepresentation> roleRepresentation)

Add client-level roles to the client’s scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdScopeMappingsClientsClientPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)
            var _client = _client_example;  // string | 
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Add client-level roles to the client’s scope
                apiInstance.RealmClientScopesIdScopeMappingsClientsClientPost(realm, id, _client, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientScopesIdScopeMappingsClientsClientPost: " + e.Message );
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
 **_client** | **string**|  | 
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)|  | 

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

<a name="realmclientscopesidscopemappingsrealmavailableget"></a>
# **RealmClientScopesIdScopeMappingsRealmAvailableGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientScopesIdScopeMappingsRealmAvailableGet (string realm, string id)

Get realm-level roles that are available to attach to this client’s scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdScopeMappingsRealmAvailableGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)

            try
            {
                // Get realm-level roles that are available to attach to this client’s scope
                List<Dictionary<string, Object>> result = apiInstance.RealmClientScopesIdScopeMappingsRealmAvailableGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientScopesIdScopeMappingsRealmAvailableGet: " + e.Message );
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

<a name="realmclientscopesidscopemappingsrealmcompositeget"></a>
# **RealmClientScopesIdScopeMappingsRealmCompositeGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientScopesIdScopeMappingsRealmCompositeGet (string realm, string id, bool? briefRepresentation = null)

Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdScopeMappingsRealmCompositeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)
            var briefRepresentation = true;  // bool? | if false, return roles with their attributes (optional) 

            try
            {
                // Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientScopesIdScopeMappingsRealmCompositeGet(realm, id, briefRepresentation);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientScopesIdScopeMappingsRealmCompositeGet: " + e.Message );
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
 **briefRepresentation** | **bool?**| if false, return roles with their attributes | [optional] 

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

<a name="realmclientscopesidscopemappingsrealmdelete"></a>
# **RealmClientScopesIdScopeMappingsRealmDelete**
> void RealmClientScopesIdScopeMappingsRealmDelete (string realm, string id, List<RoleRepresentation> roleRepresentation)

Remove a set of realm-level roles from the client’s scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdScopeMappingsRealmDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Remove a set of realm-level roles from the client’s scope
                apiInstance.RealmClientScopesIdScopeMappingsRealmDelete(realm, id, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientScopesIdScopeMappingsRealmDelete: " + e.Message );
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
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)|  | 

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

<a name="realmclientscopesidscopemappingsrealmget"></a>
# **RealmClientScopesIdScopeMappingsRealmGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientScopesIdScopeMappingsRealmGet (string realm, string id)

Get realm-level roles associated with the client’s scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdScopeMappingsRealmGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)

            try
            {
                // Get realm-level roles associated with the client’s scope
                List<Dictionary<string, Object>> result = apiInstance.RealmClientScopesIdScopeMappingsRealmGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientScopesIdScopeMappingsRealmGet: " + e.Message );
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

<a name="realmclientscopesidscopemappingsrealmpost"></a>
# **RealmClientScopesIdScopeMappingsRealmPost**
> void RealmClientScopesIdScopeMappingsRealmPost (string realm, string id, List<RoleRepresentation> roleRepresentation)

Add a set of realm-level roles to the client’s scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientScopesIdScopeMappingsRealmPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Add a set of realm-level roles to the client’s scope
                apiInstance.RealmClientScopesIdScopeMappingsRealmPost(realm, id, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientScopesIdScopeMappingsRealmPost: " + e.Message );
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
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)|  | 

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

<a name="realmclientsidscopemappingsclientsclientavailableget"></a>
# **RealmClientsIdScopeMappingsClientsClientAvailableGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdScopeMappingsClientsClientAvailableGet (string realm, string id, string _client)

The available client-level roles   Returns the roles for the client that can be associated with the client’s scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdScopeMappingsClientsClientAvailableGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var _client = _client_example;  // string | 

            try
            {
                // The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdScopeMappingsClientsClientAvailableGet(realm, id, _client);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientsIdScopeMappingsClientsClientAvailableGet: " + e.Message );
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
 **_client** | **string**|  | 

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

<a name="realmclientsidscopemappingsclientsclientcompositeget"></a>
# **RealmClientsIdScopeMappingsClientsClientCompositeGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdScopeMappingsClientsClientCompositeGet (string realm, string id, string _client, bool? briefRepresentation = null)

Get effective client roles   Returns the roles for the client that are associated with the client’s scope.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdScopeMappingsClientsClientCompositeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var _client = _client_example;  // string | 
            var briefRepresentation = true;  // bool? | if false, return roles with their attributes (optional) 

            try
            {
                // Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdScopeMappingsClientsClientCompositeGet(realm, id, _client, briefRepresentation);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientsIdScopeMappingsClientsClientCompositeGet: " + e.Message );
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
 **_client** | **string**|  | 
 **briefRepresentation** | **bool?**| if false, return roles with their attributes | [optional] 

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

<a name="realmclientsidscopemappingsclientsclientdelete"></a>
# **RealmClientsIdScopeMappingsClientsClientDelete**
> void RealmClientsIdScopeMappingsClientsClientDelete (string realm, string id, string _client, List<RoleRepresentation> roleRepresentation)

Remove client-level roles from the client’s scope.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdScopeMappingsClientsClientDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var _client = _client_example;  // string | 
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Remove client-level roles from the client’s scope.
                apiInstance.RealmClientsIdScopeMappingsClientsClientDelete(realm, id, _client, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientsIdScopeMappingsClientsClientDelete: " + e.Message );
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
 **_client** | **string**|  | 
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)|  | 

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

<a name="realmclientsidscopemappingsclientsclientget"></a>
# **RealmClientsIdScopeMappingsClientsClientGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdScopeMappingsClientsClientGet (string realm, string id, string _client)

Get the roles associated with a client’s scope   Returns roles for the client.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdScopeMappingsClientsClientGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var _client = _client_example;  // string | 

            try
            {
                // Get the roles associated with a client’s scope   Returns roles for the client.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdScopeMappingsClientsClientGet(realm, id, _client);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientsIdScopeMappingsClientsClientGet: " + e.Message );
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
 **_client** | **string**|  | 

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

<a name="realmclientsidscopemappingsclientsclientpost"></a>
# **RealmClientsIdScopeMappingsClientsClientPost**
> void RealmClientsIdScopeMappingsClientsClientPost (string realm, string id, string _client, List<RoleRepresentation> roleRepresentation)

Add client-level roles to the client’s scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdScopeMappingsClientsClientPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var _client = _client_example;  // string | 
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Add client-level roles to the client’s scope
                apiInstance.RealmClientsIdScopeMappingsClientsClientPost(realm, id, _client, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientsIdScopeMappingsClientsClientPost: " + e.Message );
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
 **_client** | **string**|  | 
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)|  | 

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

<a name="realmclientsidscopemappingsrealmavailableget"></a>
# **RealmClientsIdScopeMappingsRealmAvailableGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdScopeMappingsRealmAvailableGet (string realm, string id)

Get realm-level roles that are available to attach to this client’s scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdScopeMappingsRealmAvailableGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Get realm-level roles that are available to attach to this client’s scope
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdScopeMappingsRealmAvailableGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientsIdScopeMappingsRealmAvailableGet: " + e.Message );
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

<a name="realmclientsidscopemappingsrealmcompositeget"></a>
# **RealmClientsIdScopeMappingsRealmCompositeGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdScopeMappingsRealmCompositeGet (string realm, string id, bool? briefRepresentation = null)

Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdScopeMappingsRealmCompositeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var briefRepresentation = true;  // bool? | if false, return roles with their attributes (optional) 

            try
            {
                // Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdScopeMappingsRealmCompositeGet(realm, id, briefRepresentation);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientsIdScopeMappingsRealmCompositeGet: " + e.Message );
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
 **briefRepresentation** | **bool?**| if false, return roles with their attributes | [optional] 

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

<a name="realmclientsidscopemappingsrealmdelete"></a>
# **RealmClientsIdScopeMappingsRealmDelete**
> void RealmClientsIdScopeMappingsRealmDelete (string realm, string id, List<RoleRepresentation> roleRepresentation)

Remove a set of realm-level roles from the client’s scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdScopeMappingsRealmDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Remove a set of realm-level roles from the client’s scope
                apiInstance.RealmClientsIdScopeMappingsRealmDelete(realm, id, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientsIdScopeMappingsRealmDelete: " + e.Message );
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
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)|  | 

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

<a name="realmclientsidscopemappingsrealmget"></a>
# **RealmClientsIdScopeMappingsRealmGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdScopeMappingsRealmGet (string realm, string id)

Get realm-level roles associated with the client’s scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdScopeMappingsRealmGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Get realm-level roles associated with the client’s scope
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdScopeMappingsRealmGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientsIdScopeMappingsRealmGet: " + e.Message );
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

<a name="realmclientsidscopemappingsrealmpost"></a>
# **RealmClientsIdScopeMappingsRealmPost**
> void RealmClientsIdScopeMappingsRealmPost (string realm, string id, List<RoleRepresentation> roleRepresentation)

Add a set of realm-level roles to the client’s scope

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdScopeMappingsRealmPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ScopeMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Add a set of realm-level roles to the client’s scope
                apiInstance.RealmClientsIdScopeMappingsRealmPost(realm, id, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScopeMappingsApi.RealmClientsIdScopeMappingsRealmPost: " + e.Message );
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
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)|  | 

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

