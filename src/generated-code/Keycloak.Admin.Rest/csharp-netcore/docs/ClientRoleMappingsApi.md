# Horseless.Keycloak.Admin.Rest.Api.ClientRoleMappingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmGroupsIdRoleMappingsClientsClientAvailableGet**](ClientRoleMappingsApi.md#realmgroupsidrolemappingsclientsclientavailableget) | **GET** /{realm}/groups/{id}/role-mappings/clients/{client}/available | Get available client-level roles that can be mapped to the user
[**RealmGroupsIdRoleMappingsClientsClientCompositeGet**](ClientRoleMappingsApi.md#realmgroupsidrolemappingsclientsclientcompositeget) | **GET** /{realm}/groups/{id}/role-mappings/clients/{client}/composite | Get effective client-level role mappings   This recurses any composite roles
[**RealmGroupsIdRoleMappingsClientsClientDelete**](ClientRoleMappingsApi.md#realmgroupsidrolemappingsclientsclientdelete) | **DELETE** /{realm}/groups/{id}/role-mappings/clients/{client} | Delete client-level roles from user role mapping
[**RealmGroupsIdRoleMappingsClientsClientGet**](ClientRoleMappingsApi.md#realmgroupsidrolemappingsclientsclientget) | **GET** /{realm}/groups/{id}/role-mappings/clients/{client} | Get client-level role mappings for the user, and the app
[**RealmGroupsIdRoleMappingsClientsClientPost**](ClientRoleMappingsApi.md#realmgroupsidrolemappingsclientsclientpost) | **POST** /{realm}/groups/{id}/role-mappings/clients/{client} | Add client-level roles to the user role mapping
[**RealmUsersIdRoleMappingsClientsClientAvailableGet**](ClientRoleMappingsApi.md#realmusersidrolemappingsclientsclientavailableget) | **GET** /{realm}/users/{id}/role-mappings/clients/{client}/available | Get available client-level roles that can be mapped to the user
[**RealmUsersIdRoleMappingsClientsClientCompositeGet**](ClientRoleMappingsApi.md#realmusersidrolemappingsclientsclientcompositeget) | **GET** /{realm}/users/{id}/role-mappings/clients/{client}/composite | Get effective client-level role mappings   This recurses any composite roles
[**RealmUsersIdRoleMappingsClientsClientDelete**](ClientRoleMappingsApi.md#realmusersidrolemappingsclientsclientdelete) | **DELETE** /{realm}/users/{id}/role-mappings/clients/{client} | Delete client-level roles from user role mapping
[**RealmUsersIdRoleMappingsClientsClientGet**](ClientRoleMappingsApi.md#realmusersidrolemappingsclientsclientget) | **GET** /{realm}/users/{id}/role-mappings/clients/{client} | Get client-level role mappings for the user, and the app
[**RealmUsersIdRoleMappingsClientsClientPost**](ClientRoleMappingsApi.md#realmusersidrolemappingsclientsclientpost) | **POST** /{realm}/users/{id}/role-mappings/clients/{client} | Add client-level roles to the user role mapping


<a name="realmgroupsidrolemappingsclientsclientavailableget"></a>
# **RealmGroupsIdRoleMappingsClientsClientAvailableGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmGroupsIdRoleMappingsClientsClientAvailableGet (string realm, string id, string _client)

Get available client-level roles that can be mapped to the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGroupsIdRoleMappingsClientsClientAvailableGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientRoleMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var _client = _client_example;  // string | 

            try
            {
                // Get available client-level roles that can be mapped to the user
                List<Dictionary<string, Object>> result = apiInstance.RealmGroupsIdRoleMappingsClientsClientAvailableGet(realm, id, _client);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientRoleMappingsApi.RealmGroupsIdRoleMappingsClientsClientAvailableGet: " + e.Message );
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
 **id** | **string**|  | 
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

<a name="realmgroupsidrolemappingsclientsclientcompositeget"></a>
# **RealmGroupsIdRoleMappingsClientsClientCompositeGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmGroupsIdRoleMappingsClientsClientCompositeGet (string realm, string id, string _client, bool? briefRepresentation = null)

Get effective client-level role mappings   This recurses any composite roles

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGroupsIdRoleMappingsClientsClientCompositeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientRoleMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var _client = _client_example;  // string | 
            var briefRepresentation = true;  // bool? | if false, return roles with their attributes (optional) 

            try
            {
                // Get effective client-level role mappings   This recurses any composite roles
                List<Dictionary<string, Object>> result = apiInstance.RealmGroupsIdRoleMappingsClientsClientCompositeGet(realm, id, _client, briefRepresentation);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientRoleMappingsApi.RealmGroupsIdRoleMappingsClientsClientCompositeGet: " + e.Message );
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
 **id** | **string**|  | 
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

<a name="realmgroupsidrolemappingsclientsclientdelete"></a>
# **RealmGroupsIdRoleMappingsClientsClientDelete**
> void RealmGroupsIdRoleMappingsClientsClientDelete (string realm, string id, string _client, List<RoleRepresentation> roleRepresentation)

Delete client-level roles from user role mapping

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGroupsIdRoleMappingsClientsClientDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientRoleMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var _client = _client_example;  // string | 
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Delete client-level roles from user role mapping
                apiInstance.RealmGroupsIdRoleMappingsClientsClientDelete(realm, id, _client, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientRoleMappingsApi.RealmGroupsIdRoleMappingsClientsClientDelete: " + e.Message );
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
 **id** | **string**|  | 
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

<a name="realmgroupsidrolemappingsclientsclientget"></a>
# **RealmGroupsIdRoleMappingsClientsClientGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmGroupsIdRoleMappingsClientsClientGet (string realm, string id, string _client)

Get client-level role mappings for the user, and the app

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGroupsIdRoleMappingsClientsClientGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientRoleMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var _client = _client_example;  // string | 

            try
            {
                // Get client-level role mappings for the user, and the app
                List<Dictionary<string, Object>> result = apiInstance.RealmGroupsIdRoleMappingsClientsClientGet(realm, id, _client);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientRoleMappingsApi.RealmGroupsIdRoleMappingsClientsClientGet: " + e.Message );
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
 **id** | **string**|  | 
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

<a name="realmgroupsidrolemappingsclientsclientpost"></a>
# **RealmGroupsIdRoleMappingsClientsClientPost**
> void RealmGroupsIdRoleMappingsClientsClientPost (string realm, string id, string _client, List<RoleRepresentation> roleRepresentation)

Add client-level roles to the user role mapping

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGroupsIdRoleMappingsClientsClientPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientRoleMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var _client = _client_example;  // string | 
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Add client-level roles to the user role mapping
                apiInstance.RealmGroupsIdRoleMappingsClientsClientPost(realm, id, _client, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientRoleMappingsApi.RealmGroupsIdRoleMappingsClientsClientPost: " + e.Message );
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
 **id** | **string**|  | 
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

<a name="realmusersidrolemappingsclientsclientavailableget"></a>
# **RealmUsersIdRoleMappingsClientsClientAvailableGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdRoleMappingsClientsClientAvailableGet (string realm, string id, string _client)

Get available client-level roles that can be mapped to the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersIdRoleMappingsClientsClientAvailableGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientRoleMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var _client = _client_example;  // string | 

            try
            {
                // Get available client-level roles that can be mapped to the user
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdRoleMappingsClientsClientAvailableGet(realm, id, _client);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientRoleMappingsApi.RealmUsersIdRoleMappingsClientsClientAvailableGet: " + e.Message );
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
 **id** | **string**| User id | 
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

<a name="realmusersidrolemappingsclientsclientcompositeget"></a>
# **RealmUsersIdRoleMappingsClientsClientCompositeGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdRoleMappingsClientsClientCompositeGet (string realm, string id, string _client, bool? briefRepresentation = null)

Get effective client-level role mappings   This recurses any composite roles

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersIdRoleMappingsClientsClientCompositeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientRoleMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var _client = _client_example;  // string | 
            var briefRepresentation = true;  // bool? | if false, return roles with their attributes (optional) 

            try
            {
                // Get effective client-level role mappings   This recurses any composite roles
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdRoleMappingsClientsClientCompositeGet(realm, id, _client, briefRepresentation);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientRoleMappingsApi.RealmUsersIdRoleMappingsClientsClientCompositeGet: " + e.Message );
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
 **id** | **string**| User id | 
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

<a name="realmusersidrolemappingsclientsclientdelete"></a>
# **RealmUsersIdRoleMappingsClientsClientDelete**
> void RealmUsersIdRoleMappingsClientsClientDelete (string realm, string id, string _client, List<RoleRepresentation> roleRepresentation)

Delete client-level roles from user role mapping

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersIdRoleMappingsClientsClientDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientRoleMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var _client = _client_example;  // string | 
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Delete client-level roles from user role mapping
                apiInstance.RealmUsersIdRoleMappingsClientsClientDelete(realm, id, _client, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientRoleMappingsApi.RealmUsersIdRoleMappingsClientsClientDelete: " + e.Message );
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
 **id** | **string**| User id | 
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

<a name="realmusersidrolemappingsclientsclientget"></a>
# **RealmUsersIdRoleMappingsClientsClientGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdRoleMappingsClientsClientGet (string realm, string id, string _client)

Get client-level role mappings for the user, and the app

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersIdRoleMappingsClientsClientGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientRoleMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var _client = _client_example;  // string | 

            try
            {
                // Get client-level role mappings for the user, and the app
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdRoleMappingsClientsClientGet(realm, id, _client);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientRoleMappingsApi.RealmUsersIdRoleMappingsClientsClientGet: " + e.Message );
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
 **id** | **string**| User id | 
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

<a name="realmusersidrolemappingsclientsclientpost"></a>
# **RealmUsersIdRoleMappingsClientsClientPost**
> void RealmUsersIdRoleMappingsClientsClientPost (string realm, string id, string _client, List<RoleRepresentation> roleRepresentation)

Add client-level roles to the user role mapping

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersIdRoleMappingsClientsClientPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientRoleMappingsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var _client = _client_example;  // string | 
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Add client-level roles to the user role mapping
                apiInstance.RealmUsersIdRoleMappingsClientsClientPost(realm, id, _client, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientRoleMappingsApi.RealmUsersIdRoleMappingsClientsClientPost: " + e.Message );
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
 **id** | **string**| User id | 
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

