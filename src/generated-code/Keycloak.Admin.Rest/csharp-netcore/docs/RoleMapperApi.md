# Horseless.Keycloak.Admin.Rest.Api.RoleMapperApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmGroupsIdRoleMappingsGet**](RoleMapperApi.md#realmgroupsidrolemappingsget) | **GET** /{realm}/groups/{id}/role-mappings | Get role mappings
[**RealmGroupsIdRoleMappingsRealmAvailableGet**](RoleMapperApi.md#realmgroupsidrolemappingsrealmavailableget) | **GET** /{realm}/groups/{id}/role-mappings/realm/available | Get realm-level roles that can be mapped
[**RealmGroupsIdRoleMappingsRealmCompositeGet**](RoleMapperApi.md#realmgroupsidrolemappingsrealmcompositeget) | **GET** /{realm}/groups/{id}/role-mappings/realm/composite | Get effective realm-level role mappings   This will recurse all composite roles to get the result.
[**RealmGroupsIdRoleMappingsRealmDelete**](RoleMapperApi.md#realmgroupsidrolemappingsrealmdelete) | **DELETE** /{realm}/groups/{id}/role-mappings/realm | Delete realm-level role mappings
[**RealmGroupsIdRoleMappingsRealmGet**](RoleMapperApi.md#realmgroupsidrolemappingsrealmget) | **GET** /{realm}/groups/{id}/role-mappings/realm | Get realm-level role mappings
[**RealmGroupsIdRoleMappingsRealmPost**](RoleMapperApi.md#realmgroupsidrolemappingsrealmpost) | **POST** /{realm}/groups/{id}/role-mappings/realm | Add realm-level role mappings to the user
[**RealmUsersIdRoleMappingsGet**](RoleMapperApi.md#realmusersidrolemappingsget) | **GET** /{realm}/users/{id}/role-mappings | Get role mappings
[**RealmUsersIdRoleMappingsRealmAvailableGet**](RoleMapperApi.md#realmusersidrolemappingsrealmavailableget) | **GET** /{realm}/users/{id}/role-mappings/realm/available | Get realm-level roles that can be mapped
[**RealmUsersIdRoleMappingsRealmCompositeGet**](RoleMapperApi.md#realmusersidrolemappingsrealmcompositeget) | **GET** /{realm}/users/{id}/role-mappings/realm/composite | Get effective realm-level role mappings   This will recurse all composite roles to get the result.
[**RealmUsersIdRoleMappingsRealmDelete**](RoleMapperApi.md#realmusersidrolemappingsrealmdelete) | **DELETE** /{realm}/users/{id}/role-mappings/realm | Delete realm-level role mappings
[**RealmUsersIdRoleMappingsRealmGet**](RoleMapperApi.md#realmusersidrolemappingsrealmget) | **GET** /{realm}/users/{id}/role-mappings/realm | Get realm-level role mappings
[**RealmUsersIdRoleMappingsRealmPost**](RoleMapperApi.md#realmusersidrolemappingsrealmpost) | **POST** /{realm}/users/{id}/role-mappings/realm | Add realm-level role mappings to the user


<a name="realmgroupsidrolemappingsget"></a>
# **RealmGroupsIdRoleMappingsGet**
> MappingsRepresentation RealmGroupsIdRoleMappingsGet (string realm, string id)

Get role mappings

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGroupsIdRoleMappingsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RoleMapperApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 

            try
            {
                // Get role mappings
                MappingsRepresentation result = apiInstance.RealmGroupsIdRoleMappingsGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RoleMapperApi.RealmGroupsIdRoleMappingsGet: " + e.Message );
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

### Return type

[**MappingsRepresentation**](MappingsRepresentation.md)

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

<a name="realmgroupsidrolemappingsrealmavailableget"></a>
# **RealmGroupsIdRoleMappingsRealmAvailableGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmGroupsIdRoleMappingsRealmAvailableGet (string realm, string id)

Get realm-level roles that can be mapped

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGroupsIdRoleMappingsRealmAvailableGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RoleMapperApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 

            try
            {
                // Get realm-level roles that can be mapped
                List<Dictionary<string, Object>> result = apiInstance.RealmGroupsIdRoleMappingsRealmAvailableGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RoleMapperApi.RealmGroupsIdRoleMappingsRealmAvailableGet: " + e.Message );
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

<a name="realmgroupsidrolemappingsrealmcompositeget"></a>
# **RealmGroupsIdRoleMappingsRealmCompositeGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmGroupsIdRoleMappingsRealmCompositeGet (string realm, string id, bool? briefRepresentation = null)

Get effective realm-level role mappings   This will recurse all composite roles to get the result.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGroupsIdRoleMappingsRealmCompositeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RoleMapperApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var briefRepresentation = true;  // bool? | if false, return roles with their attributes (optional) 

            try
            {
                // Get effective realm-level role mappings   This will recurse all composite roles to get the result.
                List<Dictionary<string, Object>> result = apiInstance.RealmGroupsIdRoleMappingsRealmCompositeGet(realm, id, briefRepresentation);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RoleMapperApi.RealmGroupsIdRoleMappingsRealmCompositeGet: " + e.Message );
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

<a name="realmgroupsidrolemappingsrealmdelete"></a>
# **RealmGroupsIdRoleMappingsRealmDelete**
> void RealmGroupsIdRoleMappingsRealmDelete (string realm, string id, List<RoleRepresentation> roleRepresentation)

Delete realm-level role mappings

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGroupsIdRoleMappingsRealmDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RoleMapperApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Delete realm-level role mappings
                apiInstance.RealmGroupsIdRoleMappingsRealmDelete(realm, id, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RoleMapperApi.RealmGroupsIdRoleMappingsRealmDelete: " + e.Message );
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

<a name="realmgroupsidrolemappingsrealmget"></a>
# **RealmGroupsIdRoleMappingsRealmGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmGroupsIdRoleMappingsRealmGet (string realm, string id)

Get realm-level role mappings

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGroupsIdRoleMappingsRealmGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RoleMapperApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 

            try
            {
                // Get realm-level role mappings
                List<Dictionary<string, Object>> result = apiInstance.RealmGroupsIdRoleMappingsRealmGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RoleMapperApi.RealmGroupsIdRoleMappingsRealmGet: " + e.Message );
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

<a name="realmgroupsidrolemappingsrealmpost"></a>
# **RealmGroupsIdRoleMappingsRealmPost**
> void RealmGroupsIdRoleMappingsRealmPost (string realm, string id, List<RoleRepresentation> roleRepresentation)

Add realm-level role mappings to the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGroupsIdRoleMappingsRealmPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RoleMapperApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | Roles to add

            try
            {
                // Add realm-level role mappings to the user
                apiInstance.RealmGroupsIdRoleMappingsRealmPost(realm, id, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RoleMapperApi.RealmGroupsIdRoleMappingsRealmPost: " + e.Message );
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
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)| Roles to add | 

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

<a name="realmusersidrolemappingsget"></a>
# **RealmUsersIdRoleMappingsGet**
> MappingsRepresentation RealmUsersIdRoleMappingsGet (string realm, string id)

Get role mappings

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersIdRoleMappingsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RoleMapperApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id

            try
            {
                // Get role mappings
                MappingsRepresentation result = apiInstance.RealmUsersIdRoleMappingsGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RoleMapperApi.RealmUsersIdRoleMappingsGet: " + e.Message );
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

### Return type

[**MappingsRepresentation**](MappingsRepresentation.md)

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

<a name="realmusersidrolemappingsrealmavailableget"></a>
# **RealmUsersIdRoleMappingsRealmAvailableGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdRoleMappingsRealmAvailableGet (string realm, string id)

Get realm-level roles that can be mapped

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersIdRoleMappingsRealmAvailableGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RoleMapperApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id

            try
            {
                // Get realm-level roles that can be mapped
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdRoleMappingsRealmAvailableGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RoleMapperApi.RealmUsersIdRoleMappingsRealmAvailableGet: " + e.Message );
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

<a name="realmusersidrolemappingsrealmcompositeget"></a>
# **RealmUsersIdRoleMappingsRealmCompositeGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdRoleMappingsRealmCompositeGet (string realm, string id, bool? briefRepresentation = null)

Get effective realm-level role mappings   This will recurse all composite roles to get the result.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersIdRoleMappingsRealmCompositeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RoleMapperApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var briefRepresentation = true;  // bool? | if false, return roles with their attributes (optional) 

            try
            {
                // Get effective realm-level role mappings   This will recurse all composite roles to get the result.
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdRoleMappingsRealmCompositeGet(realm, id, briefRepresentation);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RoleMapperApi.RealmUsersIdRoleMappingsRealmCompositeGet: " + e.Message );
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

<a name="realmusersidrolemappingsrealmdelete"></a>
# **RealmUsersIdRoleMappingsRealmDelete**
> void RealmUsersIdRoleMappingsRealmDelete (string realm, string id, List<RoleRepresentation> roleRepresentation)

Delete realm-level role mappings

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersIdRoleMappingsRealmDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RoleMapperApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Delete realm-level role mappings
                apiInstance.RealmUsersIdRoleMappingsRealmDelete(realm, id, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RoleMapperApi.RealmUsersIdRoleMappingsRealmDelete: " + e.Message );
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

<a name="realmusersidrolemappingsrealmget"></a>
# **RealmUsersIdRoleMappingsRealmGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdRoleMappingsRealmGet (string realm, string id)

Get realm-level role mappings

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersIdRoleMappingsRealmGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RoleMapperApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id

            try
            {
                // Get realm-level role mappings
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdRoleMappingsRealmGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RoleMapperApi.RealmUsersIdRoleMappingsRealmGet: " + e.Message );
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

<a name="realmusersidrolemappingsrealmpost"></a>
# **RealmUsersIdRoleMappingsRealmPost**
> void RealmUsersIdRoleMappingsRealmPost (string realm, string id, List<RoleRepresentation> roleRepresentation)

Add realm-level role mappings to the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersIdRoleMappingsRealmPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RoleMapperApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | Roles to add

            try
            {
                // Add realm-level role mappings to the user
                apiInstance.RealmUsersIdRoleMappingsRealmPost(realm, id, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RoleMapperApi.RealmUsersIdRoleMappingsRealmPost: " + e.Message );
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
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)| Roles to add | 

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

