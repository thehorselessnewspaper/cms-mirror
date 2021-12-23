# Org.OpenAPITools.Api.RolesByIDApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmRolesByIdRoleIdCompositesClientsClientUuidGet**](RolesByIDApi.md#realmrolesbyidroleidcompositesclientsclientuuidget) | **GET** /{realm}/roles-by-id/{role-id}/composites/clients/{clientUuid} | Get client-level roles for the client that are in the role’s composite
[**RealmRolesByIdRoleIdCompositesDelete**](RolesByIDApi.md#realmrolesbyidroleidcompositesdelete) | **DELETE** /{realm}/roles-by-id/{role-id}/composites | Remove a set of roles from the role’s composite
[**RealmRolesByIdRoleIdCompositesGet**](RolesByIDApi.md#realmrolesbyidroleidcompositesget) | **GET** /{realm}/roles-by-id/{role-id}/composites | Get role’s children   Returns a set of role’s children provided the role is a composite.
[**RealmRolesByIdRoleIdCompositesPost**](RolesByIDApi.md#realmrolesbyidroleidcompositespost) | **POST** /{realm}/roles-by-id/{role-id}/composites | Make the role a composite role by associating some child roles
[**RealmRolesByIdRoleIdCompositesRealmGet**](RolesByIDApi.md#realmrolesbyidroleidcompositesrealmget) | **GET** /{realm}/roles-by-id/{role-id}/composites/realm | Get realm-level roles that are in the role’s composite
[**RealmRolesByIdRoleIdDelete**](RolesByIDApi.md#realmrolesbyidroleiddelete) | **DELETE** /{realm}/roles-by-id/{role-id} | Delete the role
[**RealmRolesByIdRoleIdGet**](RolesByIDApi.md#realmrolesbyidroleidget) | **GET** /{realm}/roles-by-id/{role-id} | Get a specific role’s representation
[**RealmRolesByIdRoleIdManagementPermissionsGet**](RolesByIDApi.md#realmrolesbyidroleidmanagementpermissionsget) | **GET** /{realm}/roles-by-id/{role-id}/management/permissions | Return object stating whether role Authoirzation permissions have been initialized or not and a reference
[**RealmRolesByIdRoleIdManagementPermissionsPut**](RolesByIDApi.md#realmrolesbyidroleidmanagementpermissionsput) | **PUT** /{realm}/roles-by-id/{role-id}/management/permissions | Return object stating whether role Authoirzation permissions have been initialized or not and a reference
[**RealmRolesByIdRoleIdPut**](RolesByIDApi.md#realmrolesbyidroleidput) | **PUT** /{realm}/roles-by-id/{role-id} | Update the role


<a name="realmrolesbyidroleidcompositesclientsclientuuidget"></a>
# **RealmRolesByIdRoleIdCompositesClientsClientUuidGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmRolesByIdRoleIdCompositesClientsClientUuidGet (string realm, string roleId, string clientUuid)

Get client-level roles for the client that are in the role’s composite

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesByIdRoleIdCompositesClientsClientUuidGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesByIDApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleId = roleId_example;  // string | 
            var clientUuid = clientUuid_example;  // string | 

            try
            {
                // Get client-level roles for the client that are in the role’s composite
                List<Dictionary<string, Object>> result = apiInstance.RealmRolesByIdRoleIdCompositesClientsClientUuidGet(realm, roleId, clientUuid);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesByIDApi.RealmRolesByIdRoleIdCompositesClientsClientUuidGet: " + e.Message );
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
 **roleId** | **string**|  | 
 **clientUuid** | **string**|  | 

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

<a name="realmrolesbyidroleidcompositesdelete"></a>
# **RealmRolesByIdRoleIdCompositesDelete**
> void RealmRolesByIdRoleIdCompositesDelete (string realm, string roleId, List<RoleRepresentation> roleRepresentation)

Remove a set of roles from the role’s composite

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesByIdRoleIdCompositesDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesByIDApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleId = roleId_example;  // string | Role id
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | A set of roles to be removed

            try
            {
                // Remove a set of roles from the role’s composite
                apiInstance.RealmRolesByIdRoleIdCompositesDelete(realm, roleId, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesByIDApi.RealmRolesByIdRoleIdCompositesDelete: " + e.Message );
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
 **roleId** | **string**| Role id | 
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)| A set of roles to be removed | 

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

<a name="realmrolesbyidroleidcompositesget"></a>
# **RealmRolesByIdRoleIdCompositesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmRolesByIdRoleIdCompositesGet (string realm, string roleId, int? first = null, int? max = null, string search = null)

Get role’s children   Returns a set of role’s children provided the role is a composite.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesByIdRoleIdCompositesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesByIDApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleId = roleId_example;  // string | Role id
            var first = 56;  // int? |  (optional) 
            var max = 56;  // int? |  (optional) 
            var search = search_example;  // string |  (optional) 

            try
            {
                // Get role’s children   Returns a set of role’s children provided the role is a composite.
                List<Dictionary<string, Object>> result = apiInstance.RealmRolesByIdRoleIdCompositesGet(realm, roleId, first, max, search);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesByIDApi.RealmRolesByIdRoleIdCompositesGet: " + e.Message );
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
 **roleId** | **string**| Role id | 
 **first** | **int?**|  | [optional] 
 **max** | **int?**|  | [optional] 
 **search** | **string**|  | [optional] 

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

<a name="realmrolesbyidroleidcompositespost"></a>
# **RealmRolesByIdRoleIdCompositesPost**
> void RealmRolesByIdRoleIdCompositesPost (string realm, string roleId, List<RoleRepresentation> roleRepresentation)

Make the role a composite role by associating some child roles

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesByIdRoleIdCompositesPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesByIDApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleId = roleId_example;  // string | Role id
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Make the role a composite role by associating some child roles
                apiInstance.RealmRolesByIdRoleIdCompositesPost(realm, roleId, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesByIDApi.RealmRolesByIdRoleIdCompositesPost: " + e.Message );
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
 **roleId** | **string**| Role id | 
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

<a name="realmrolesbyidroleidcompositesrealmget"></a>
# **RealmRolesByIdRoleIdCompositesRealmGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmRolesByIdRoleIdCompositesRealmGet (string realm, string roleId)

Get realm-level roles that are in the role’s composite

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesByIdRoleIdCompositesRealmGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesByIDApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleId = roleId_example;  // string | 

            try
            {
                // Get realm-level roles that are in the role’s composite
                List<Dictionary<string, Object>> result = apiInstance.RealmRolesByIdRoleIdCompositesRealmGet(realm, roleId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesByIDApi.RealmRolesByIdRoleIdCompositesRealmGet: " + e.Message );
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
 **roleId** | **string**|  | 

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

<a name="realmrolesbyidroleiddelete"></a>
# **RealmRolesByIdRoleIdDelete**
> void RealmRolesByIdRoleIdDelete (string realm, string roleId)

Delete the role

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesByIdRoleIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesByIDApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleId = roleId_example;  // string | id of role

            try
            {
                // Delete the role
                apiInstance.RealmRolesByIdRoleIdDelete(realm, roleId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesByIDApi.RealmRolesByIdRoleIdDelete: " + e.Message );
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
 **roleId** | **string**| id of role | 

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

<a name="realmrolesbyidroleidget"></a>
# **RealmRolesByIdRoleIdGet**
> RoleRepresentation RealmRolesByIdRoleIdGet (string realm, string roleId)

Get a specific role’s representation

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesByIdRoleIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesByIDApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleId = roleId_example;  // string | id of role

            try
            {
                // Get a specific role’s representation
                RoleRepresentation result = apiInstance.RealmRolesByIdRoleIdGet(realm, roleId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesByIDApi.RealmRolesByIdRoleIdGet: " + e.Message );
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
 **roleId** | **string**| id of role | 

### Return type

[**RoleRepresentation**](RoleRepresentation.md)

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

<a name="realmrolesbyidroleidmanagementpermissionsget"></a>
# **RealmRolesByIdRoleIdManagementPermissionsGet**
> ManagementPermissionReference RealmRolesByIdRoleIdManagementPermissionsGet (string realm, string roleId)

Return object stating whether role Authoirzation permissions have been initialized or not and a reference

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesByIdRoleIdManagementPermissionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesByIDApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleId = roleId_example;  // string | 

            try
            {
                // Return object stating whether role Authoirzation permissions have been initialized or not and a reference
                ManagementPermissionReference result = apiInstance.RealmRolesByIdRoleIdManagementPermissionsGet(realm, roleId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesByIDApi.RealmRolesByIdRoleIdManagementPermissionsGet: " + e.Message );
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
 **roleId** | **string**|  | 

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

<a name="realmrolesbyidroleidmanagementpermissionsput"></a>
# **RealmRolesByIdRoleIdManagementPermissionsPut**
> ManagementPermissionReference RealmRolesByIdRoleIdManagementPermissionsPut (string realm, string roleId, ManagementPermissionReference managementPermissionReference)

Return object stating whether role Authoirzation permissions have been initialized or not and a reference

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesByIdRoleIdManagementPermissionsPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesByIDApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleId = roleId_example;  // string | 
            var managementPermissionReference = new ManagementPermissionReference(); // ManagementPermissionReference | 

            try
            {
                // Return object stating whether role Authoirzation permissions have been initialized or not and a reference
                ManagementPermissionReference result = apiInstance.RealmRolesByIdRoleIdManagementPermissionsPut(realm, roleId, managementPermissionReference);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesByIDApi.RealmRolesByIdRoleIdManagementPermissionsPut: " + e.Message );
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
 **roleId** | **string**|  | 
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

<a name="realmrolesbyidroleidput"></a>
# **RealmRolesByIdRoleIdPut**
> void RealmRolesByIdRoleIdPut (string realm, string roleId, RoleRepresentation roleRepresentation)

Update the role

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesByIdRoleIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesByIDApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleId = roleId_example;  // string | id of role
            var roleRepresentation = new RoleRepresentation(); // RoleRepresentation | 

            try
            {
                // Update the role
                apiInstance.RealmRolesByIdRoleIdPut(realm, roleId, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesByIDApi.RealmRolesByIdRoleIdPut: " + e.Message );
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
 **roleId** | **string**| id of role | 
 **roleRepresentation** | [**RoleRepresentation**](RoleRepresentation.md)|  | 

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

