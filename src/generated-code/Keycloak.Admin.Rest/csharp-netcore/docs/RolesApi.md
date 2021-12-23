# Org.OpenAPITools.Api.RolesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmClientsIdRolesGet**](RolesApi.md#realmclientsidrolesget) | **GET** /{realm}/clients/{id}/roles | Get all roles for the realm or client
[**RealmClientsIdRolesPost**](RolesApi.md#realmclientsidrolespost) | **POST** /{realm}/clients/{id}/roles | Create a new role for the realm or client
[**RealmClientsIdRolesRoleNameCompositesClientsClientUuidGet**](RolesApi.md#realmclientsidrolesrolenamecompositesclientsclientuuidget) | **GET** /{realm}/clients/{id}/roles/{role-name}/composites/clients/{clientUuid} | Get client-level roles for the client that are in the role’s composite
[**RealmClientsIdRolesRoleNameCompositesDelete**](RolesApi.md#realmclientsidrolesrolenamecompositesdelete) | **DELETE** /{realm}/clients/{id}/roles/{role-name}/composites | Remove roles from the role’s composite
[**RealmClientsIdRolesRoleNameCompositesGet**](RolesApi.md#realmclientsidrolesrolenamecompositesget) | **GET** /{realm}/clients/{id}/roles/{role-name}/composites | Get composites of the role
[**RealmClientsIdRolesRoleNameCompositesPost**](RolesApi.md#realmclientsidrolesrolenamecompositespost) | **POST** /{realm}/clients/{id}/roles/{role-name}/composites | Add a composite to the role
[**RealmClientsIdRolesRoleNameCompositesRealmGet**](RolesApi.md#realmclientsidrolesrolenamecompositesrealmget) | **GET** /{realm}/clients/{id}/roles/{role-name}/composites/realm | Get realm-level roles of the role’s composite
[**RealmClientsIdRolesRoleNameDelete**](RolesApi.md#realmclientsidrolesrolenamedelete) | **DELETE** /{realm}/clients/{id}/roles/{role-name} | Delete a role by name
[**RealmClientsIdRolesRoleNameGet**](RolesApi.md#realmclientsidrolesrolenameget) | **GET** /{realm}/clients/{id}/roles/{role-name} | Get a role by name
[**RealmClientsIdRolesRoleNameGroupsGet**](RolesApi.md#realmclientsidrolesrolenamegroupsget) | **GET** /{realm}/clients/{id}/roles/{role-name}/groups | Returns a stream of groups that have the specified role name
[**RealmClientsIdRolesRoleNameManagementPermissionsGet**](RolesApi.md#realmclientsidrolesrolenamemanagementpermissionsget) | **GET** /{realm}/clients/{id}/roles/{role-name}/management/permissions | Return object stating whether role Authorization permissions have been initialized or not and a reference
[**RealmClientsIdRolesRoleNameManagementPermissionsPut**](RolesApi.md#realmclientsidrolesrolenamemanagementpermissionsput) | **PUT** /{realm}/clients/{id}/roles/{role-name}/management/permissions | Return object stating whether role Authorization permissions have been initialized or not and a reference
[**RealmClientsIdRolesRoleNamePut**](RolesApi.md#realmclientsidrolesrolenameput) | **PUT** /{realm}/clients/{id}/roles/{role-name} | Update a role by name
[**RealmClientsIdRolesRoleNameUsersGet**](RolesApi.md#realmclientsidrolesrolenameusersget) | **GET** /{realm}/clients/{id}/roles/{role-name}/users | Returns a stream of users that have the specified role name.
[**RealmRolesGet**](RolesApi.md#realmrolesget) | **GET** /{realm}/roles | Get all roles for the realm or client
[**RealmRolesPost**](RolesApi.md#realmrolespost) | **POST** /{realm}/roles | Create a new role for the realm or client
[**RealmRolesRoleNameCompositesClientsClientUuidGet**](RolesApi.md#realmrolesrolenamecompositesclientsclientuuidget) | **GET** /{realm}/roles/{role-name}/composites/clients/{clientUuid} | Get client-level roles for the client that are in the role’s composite
[**RealmRolesRoleNameCompositesDelete**](RolesApi.md#realmrolesrolenamecompositesdelete) | **DELETE** /{realm}/roles/{role-name}/composites | Remove roles from the role’s composite
[**RealmRolesRoleNameCompositesGet**](RolesApi.md#realmrolesrolenamecompositesget) | **GET** /{realm}/roles/{role-name}/composites | Get composites of the role
[**RealmRolesRoleNameCompositesPost**](RolesApi.md#realmrolesrolenamecompositespost) | **POST** /{realm}/roles/{role-name}/composites | Add a composite to the role
[**RealmRolesRoleNameCompositesRealmGet**](RolesApi.md#realmrolesrolenamecompositesrealmget) | **GET** /{realm}/roles/{role-name}/composites/realm | Get realm-level roles of the role’s composite
[**RealmRolesRoleNameDelete**](RolesApi.md#realmrolesrolenamedelete) | **DELETE** /{realm}/roles/{role-name} | Delete a role by name
[**RealmRolesRoleNameGet**](RolesApi.md#realmrolesrolenameget) | **GET** /{realm}/roles/{role-name} | Get a role by name
[**RealmRolesRoleNameGroupsGet**](RolesApi.md#realmrolesrolenamegroupsget) | **GET** /{realm}/roles/{role-name}/groups | Returns a stream of groups that have the specified role name
[**RealmRolesRoleNameManagementPermissionsGet**](RolesApi.md#realmrolesrolenamemanagementpermissionsget) | **GET** /{realm}/roles/{role-name}/management/permissions | Return object stating whether role Authorization permissions have been initialized or not and a reference
[**RealmRolesRoleNameManagementPermissionsPut**](RolesApi.md#realmrolesrolenamemanagementpermissionsput) | **PUT** /{realm}/roles/{role-name}/management/permissions | Return object stating whether role Authorization permissions have been initialized or not and a reference
[**RealmRolesRoleNamePut**](RolesApi.md#realmrolesrolenameput) | **PUT** /{realm}/roles/{role-name} | Update a role by name
[**RealmRolesRoleNameUsersGet**](RolesApi.md#realmrolesrolenameusersget) | **GET** /{realm}/roles/{role-name}/users | Returns a stream of users that have the specified role name.


<a name="realmclientsidrolesget"></a>
# **RealmClientsIdRolesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdRolesGet (string realm, string id, bool? briefRepresentation = null, int? first = null, int? max = null, string search = null)

Get all roles for the realm or client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var briefRepresentation = true;  // bool? |  (optional) 
            var first = 56;  // int? |  (optional) 
            var max = 56;  // int? |  (optional) 
            var search = search_example;  // string |  (optional) 

            try
            {
                // Get all roles for the realm or client
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdRolesGet(realm, id, briefRepresentation, first, max, search);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesGet: " + e.Message );
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
 **briefRepresentation** | **bool?**|  | [optional] 
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

<a name="realmclientsidrolespost"></a>
# **RealmClientsIdRolesPost**
> void RealmClientsIdRolesPost (string realm, string id, RoleRepresentation roleRepresentation)

Create a new role for the realm or client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleRepresentation = new RoleRepresentation(); // RoleRepresentation | 

            try
            {
                // Create a new role for the realm or client
                apiInstance.RealmClientsIdRolesPost(realm, id, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesPost: " + e.Message );
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

<a name="realmclientsidrolesrolenamecompositesclientsclientuuidget"></a>
# **RealmClientsIdRolesRoleNameCompositesClientsClientUuidGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdRolesRoleNameCompositesClientsClientUuidGet (string realm, string id, string roleName, string clientUuid)

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
    public class RealmClientsIdRolesRoleNameCompositesClientsClientUuidGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleName = roleName_example;  // string | role’s name (not id!)
            var clientUuid = clientUuid_example;  // string | 

            try
            {
                // Get client-level roles for the client that are in the role’s composite
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdRolesRoleNameCompositesClientsClientUuidGet(realm, id, roleName, clientUuid);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesRoleNameCompositesClientsClientUuidGet: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 
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

<a name="realmclientsidrolesrolenamecompositesdelete"></a>
# **RealmClientsIdRolesRoleNameCompositesDelete**
> void RealmClientsIdRolesRoleNameCompositesDelete (string realm, string id, string roleName, List<RoleRepresentation> roleRepresentation)

Remove roles from the role’s composite

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesRoleNameCompositesDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleName = roleName_example;  // string | role’s name (not id!)
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | roles to remove

            try
            {
                // Remove roles from the role’s composite
                apiInstance.RealmClientsIdRolesRoleNameCompositesDelete(realm, id, roleName, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesRoleNameCompositesDelete: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)| roles to remove | 

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

<a name="realmclientsidrolesrolenamecompositesget"></a>
# **RealmClientsIdRolesRoleNameCompositesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdRolesRoleNameCompositesGet (string realm, string id, string roleName)

Get composites of the role

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesRoleNameCompositesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleName = roleName_example;  // string | role’s name (not id!)

            try
            {
                // Get composites of the role
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdRolesRoleNameCompositesGet(realm, id, roleName);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesRoleNameCompositesGet: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 

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

<a name="realmclientsidrolesrolenamecompositespost"></a>
# **RealmClientsIdRolesRoleNameCompositesPost**
> void RealmClientsIdRolesRoleNameCompositesPost (string realm, string id, string roleName, List<RoleRepresentation> roleRepresentation)

Add a composite to the role

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesRoleNameCompositesPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleName = roleName_example;  // string | role’s name (not id!)
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Add a composite to the role
                apiInstance.RealmClientsIdRolesRoleNameCompositesPost(realm, id, roleName, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesRoleNameCompositesPost: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 
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

<a name="realmclientsidrolesrolenamecompositesrealmget"></a>
# **RealmClientsIdRolesRoleNameCompositesRealmGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdRolesRoleNameCompositesRealmGet (string realm, string id, string roleName)

Get realm-level roles of the role’s composite

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesRoleNameCompositesRealmGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleName = roleName_example;  // string | role’s name (not id!)

            try
            {
                // Get realm-level roles of the role’s composite
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdRolesRoleNameCompositesRealmGet(realm, id, roleName);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesRoleNameCompositesRealmGet: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 

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

<a name="realmclientsidrolesrolenamedelete"></a>
# **RealmClientsIdRolesRoleNameDelete**
> void RealmClientsIdRolesRoleNameDelete (string realm, string id, string roleName)

Delete a role by name

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesRoleNameDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleName = roleName_example;  // string | role’s name (not id!)

            try
            {
                // Delete a role by name
                apiInstance.RealmClientsIdRolesRoleNameDelete(realm, id, roleName);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesRoleNameDelete: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 

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

<a name="realmclientsidrolesrolenameget"></a>
# **RealmClientsIdRolesRoleNameGet**
> RoleRepresentation RealmClientsIdRolesRoleNameGet (string realm, string id, string roleName)

Get a role by name

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesRoleNameGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleName = roleName_example;  // string | role’s name (not id!)

            try
            {
                // Get a role by name
                RoleRepresentation result = apiInstance.RealmClientsIdRolesRoleNameGet(realm, id, roleName);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesRoleNameGet: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 

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

<a name="realmclientsidrolesrolenamegroupsget"></a>
# **RealmClientsIdRolesRoleNameGroupsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdRolesRoleNameGroupsGet (string realm, string id, string roleName, bool? briefRepresentation = null, int? first = null, int? max = null)

Returns a stream of groups that have the specified role name

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesRoleNameGroupsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleName = roleName_example;  // string | the role name.
            var briefRepresentation = true;  // bool? | if false, return a full representation of the {@code GroupRepresentation} objects. (optional) 
            var first = 56;  // int? | first result to return. Ignored if negative or {@code null}. (optional) 
            var max = 56;  // int? | maximum number of results to return. Ignored if negative or {@code null}. (optional) 

            try
            {
                // Returns a stream of groups that have the specified role name
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdRolesRoleNameGroupsGet(realm, id, roleName, briefRepresentation, first, max);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesRoleNameGroupsGet: " + e.Message );
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
 **roleName** | **string**| the role name. | 
 **briefRepresentation** | **bool?**| if false, return a full representation of the {@code GroupRepresentation} objects. | [optional] 
 **first** | **int?**| first result to return. Ignored if negative or {@code null}. | [optional] 
 **max** | **int?**| maximum number of results to return. Ignored if negative or {@code null}. | [optional] 

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

<a name="realmclientsidrolesrolenamemanagementpermissionsget"></a>
# **RealmClientsIdRolesRoleNameManagementPermissionsGet**
> ManagementPermissionReference RealmClientsIdRolesRoleNameManagementPermissionsGet (string realm, string id, string roleName)

Return object stating whether role Authorization permissions have been initialized or not and a reference

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesRoleNameManagementPermissionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleName = roleName_example;  // string | 

            try
            {
                // Return object stating whether role Authorization permissions have been initialized or not and a reference
                ManagementPermissionReference result = apiInstance.RealmClientsIdRolesRoleNameManagementPermissionsGet(realm, id, roleName);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesRoleNameManagementPermissionsGet: " + e.Message );
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
 **roleName** | **string**|  | 

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

<a name="realmclientsidrolesrolenamemanagementpermissionsput"></a>
# **RealmClientsIdRolesRoleNameManagementPermissionsPut**
> ManagementPermissionReference RealmClientsIdRolesRoleNameManagementPermissionsPut (string realm, string id, string roleName, ManagementPermissionReference managementPermissionReference)

Return object stating whether role Authorization permissions have been initialized or not and a reference

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesRoleNameManagementPermissionsPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleName = roleName_example;  // string | 
            var managementPermissionReference = new ManagementPermissionReference(); // ManagementPermissionReference | 

            try
            {
                // Return object stating whether role Authorization permissions have been initialized or not and a reference
                ManagementPermissionReference result = apiInstance.RealmClientsIdRolesRoleNameManagementPermissionsPut(realm, id, roleName, managementPermissionReference);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesRoleNameManagementPermissionsPut: " + e.Message );
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
 **roleName** | **string**|  | 
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

<a name="realmclientsidrolesrolenameput"></a>
# **RealmClientsIdRolesRoleNamePut**
> void RealmClientsIdRolesRoleNamePut (string realm, string id, string roleName, RoleRepresentation roleRepresentation)

Update a role by name

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesRoleNamePutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleName = roleName_example;  // string | role’s name (not id!)
            var roleRepresentation = new RoleRepresentation(); // RoleRepresentation | 

            try
            {
                // Update a role by name
                apiInstance.RealmClientsIdRolesRoleNamePut(realm, id, roleName, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesRoleNamePut: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 
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

<a name="realmclientsidrolesrolenameusersget"></a>
# **RealmClientsIdRolesRoleNameUsersGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdRolesRoleNameUsersGet (string realm, string id, string roleName, int? first = null, int? max = null)

Returns a stream of users that have the specified role name.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdRolesRoleNameUsersGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var roleName = roleName_example;  // string | the role name.
            var first = 56;  // int? | first result to return. Ignored if negative or {@code null}. (optional) 
            var max = 56;  // int? | maximum number of results to return. Ignored if negative or {@code null}. (optional) 

            try
            {
                // Returns a stream of users that have the specified role name.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdRolesRoleNameUsersGet(realm, id, roleName, first, max);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmClientsIdRolesRoleNameUsersGet: " + e.Message );
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
 **roleName** | **string**| the role name. | 
 **first** | **int?**| first result to return. Ignored if negative or {@code null}. | [optional] 
 **max** | **int?**| maximum number of results to return. Ignored if negative or {@code null}. | [optional] 

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

<a name="realmrolesget"></a>
# **RealmRolesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmRolesGet (string realm, bool? briefRepresentation = null, int? first = null, int? max = null, string search = null)

Get all roles for the realm or client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var briefRepresentation = true;  // bool? |  (optional) 
            var first = 56;  // int? |  (optional) 
            var max = 56;  // int? |  (optional) 
            var search = search_example;  // string |  (optional) 

            try
            {
                // Get all roles for the realm or client
                List<Dictionary<string, Object>> result = apiInstance.RealmRolesGet(realm, briefRepresentation, first, max, search);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesGet: " + e.Message );
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
 **briefRepresentation** | **bool?**|  | [optional] 
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

<a name="realmrolespost"></a>
# **RealmRolesPost**
> void RealmRolesPost (string realm, RoleRepresentation roleRepresentation)

Create a new role for the realm or client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleRepresentation = new RoleRepresentation(); // RoleRepresentation | 

            try
            {
                // Create a new role for the realm or client
                apiInstance.RealmRolesPost(realm, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesPost: " + e.Message );
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

<a name="realmrolesrolenamecompositesclientsclientuuidget"></a>
# **RealmRolesRoleNameCompositesClientsClientUuidGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmRolesRoleNameCompositesClientsClientUuidGet (string realm, string roleName, string clientUuid)

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
    public class RealmRolesRoleNameCompositesClientsClientUuidGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleName = roleName_example;  // string | role’s name (not id!)
            var clientUuid = clientUuid_example;  // string | 

            try
            {
                // Get client-level roles for the client that are in the role’s composite
                List<Dictionary<string, Object>> result = apiInstance.RealmRolesRoleNameCompositesClientsClientUuidGet(realm, roleName, clientUuid);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesRoleNameCompositesClientsClientUuidGet: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 
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

<a name="realmrolesrolenamecompositesdelete"></a>
# **RealmRolesRoleNameCompositesDelete**
> void RealmRolesRoleNameCompositesDelete (string realm, string roleName, List<RoleRepresentation> roleRepresentation)

Remove roles from the role’s composite

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesRoleNameCompositesDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleName = roleName_example;  // string | role’s name (not id!)
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | roles to remove

            try
            {
                // Remove roles from the role’s composite
                apiInstance.RealmRolesRoleNameCompositesDelete(realm, roleName, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesRoleNameCompositesDelete: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 
 **roleRepresentation** | [**List&lt;RoleRepresentation&gt;**](RoleRepresentation.md)| roles to remove | 

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

<a name="realmrolesrolenamecompositesget"></a>
# **RealmRolesRoleNameCompositesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmRolesRoleNameCompositesGet (string realm, string roleName)

Get composites of the role

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesRoleNameCompositesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleName = roleName_example;  // string | role’s name (not id!)

            try
            {
                // Get composites of the role
                List<Dictionary<string, Object>> result = apiInstance.RealmRolesRoleNameCompositesGet(realm, roleName);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesRoleNameCompositesGet: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 

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

<a name="realmrolesrolenamecompositespost"></a>
# **RealmRolesRoleNameCompositesPost**
> void RealmRolesRoleNameCompositesPost (string realm, string roleName, List<RoleRepresentation> roleRepresentation)

Add a composite to the role

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesRoleNameCompositesPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleName = roleName_example;  // string | role’s name (not id!)
            var roleRepresentation = new List<RoleRepresentation>(); // List<RoleRepresentation> | 

            try
            {
                // Add a composite to the role
                apiInstance.RealmRolesRoleNameCompositesPost(realm, roleName, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesRoleNameCompositesPost: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 
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

<a name="realmrolesrolenamecompositesrealmget"></a>
# **RealmRolesRoleNameCompositesRealmGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmRolesRoleNameCompositesRealmGet (string realm, string roleName)

Get realm-level roles of the role’s composite

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesRoleNameCompositesRealmGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleName = roleName_example;  // string | role’s name (not id!)

            try
            {
                // Get realm-level roles of the role’s composite
                List<Dictionary<string, Object>> result = apiInstance.RealmRolesRoleNameCompositesRealmGet(realm, roleName);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesRoleNameCompositesRealmGet: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 

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

<a name="realmrolesrolenamedelete"></a>
# **RealmRolesRoleNameDelete**
> void RealmRolesRoleNameDelete (string realm, string roleName)

Delete a role by name

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesRoleNameDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleName = roleName_example;  // string | role’s name (not id!)

            try
            {
                // Delete a role by name
                apiInstance.RealmRolesRoleNameDelete(realm, roleName);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesRoleNameDelete: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 

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

<a name="realmrolesrolenameget"></a>
# **RealmRolesRoleNameGet**
> RoleRepresentation RealmRolesRoleNameGet (string realm, string roleName)

Get a role by name

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesRoleNameGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleName = roleName_example;  // string | role’s name (not id!)

            try
            {
                // Get a role by name
                RoleRepresentation result = apiInstance.RealmRolesRoleNameGet(realm, roleName);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesRoleNameGet: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 

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

<a name="realmrolesrolenamegroupsget"></a>
# **RealmRolesRoleNameGroupsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmRolesRoleNameGroupsGet (string realm, string roleName, bool? briefRepresentation = null, int? first = null, int? max = null)

Returns a stream of groups that have the specified role name

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesRoleNameGroupsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleName = roleName_example;  // string | the role name.
            var briefRepresentation = true;  // bool? | if false, return a full representation of the {@code GroupRepresentation} objects. (optional) 
            var first = 56;  // int? | first result to return. Ignored if negative or {@code null}. (optional) 
            var max = 56;  // int? | maximum number of results to return. Ignored if negative or {@code null}. (optional) 

            try
            {
                // Returns a stream of groups that have the specified role name
                List<Dictionary<string, Object>> result = apiInstance.RealmRolesRoleNameGroupsGet(realm, roleName, briefRepresentation, first, max);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesRoleNameGroupsGet: " + e.Message );
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
 **roleName** | **string**| the role name. | 
 **briefRepresentation** | **bool?**| if false, return a full representation of the {@code GroupRepresentation} objects. | [optional] 
 **first** | **int?**| first result to return. Ignored if negative or {@code null}. | [optional] 
 **max** | **int?**| maximum number of results to return. Ignored if negative or {@code null}. | [optional] 

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

<a name="realmrolesrolenamemanagementpermissionsget"></a>
# **RealmRolesRoleNameManagementPermissionsGet**
> ManagementPermissionReference RealmRolesRoleNameManagementPermissionsGet (string realm, string roleName)

Return object stating whether role Authorization permissions have been initialized or not and a reference

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesRoleNameManagementPermissionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleName = roleName_example;  // string | 

            try
            {
                // Return object stating whether role Authorization permissions have been initialized or not and a reference
                ManagementPermissionReference result = apiInstance.RealmRolesRoleNameManagementPermissionsGet(realm, roleName);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesRoleNameManagementPermissionsGet: " + e.Message );
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
 **roleName** | **string**|  | 

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

<a name="realmrolesrolenamemanagementpermissionsput"></a>
# **RealmRolesRoleNameManagementPermissionsPut**
> ManagementPermissionReference RealmRolesRoleNameManagementPermissionsPut (string realm, string roleName, ManagementPermissionReference managementPermissionReference)

Return object stating whether role Authorization permissions have been initialized or not and a reference

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesRoleNameManagementPermissionsPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleName = roleName_example;  // string | 
            var managementPermissionReference = new ManagementPermissionReference(); // ManagementPermissionReference | 

            try
            {
                // Return object stating whether role Authorization permissions have been initialized or not and a reference
                ManagementPermissionReference result = apiInstance.RealmRolesRoleNameManagementPermissionsPut(realm, roleName, managementPermissionReference);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesRoleNameManagementPermissionsPut: " + e.Message );
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
 **roleName** | **string**|  | 
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

<a name="realmrolesrolenameput"></a>
# **RealmRolesRoleNamePut**
> void RealmRolesRoleNamePut (string realm, string roleName, RoleRepresentation roleRepresentation)

Update a role by name

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesRoleNamePutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleName = roleName_example;  // string | role’s name (not id!)
            var roleRepresentation = new RoleRepresentation(); // RoleRepresentation | 

            try
            {
                // Update a role by name
                apiInstance.RealmRolesRoleNamePut(realm, roleName, roleRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesRoleNamePut: " + e.Message );
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
 **roleName** | **string**| role’s name (not id!) | 
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

<a name="realmrolesrolenameusersget"></a>
# **RealmRolesRoleNameUsersGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmRolesRoleNameUsersGet (string realm, string roleName, int? first = null, int? max = null)

Returns a stream of users that have the specified role name.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmRolesRoleNameUsersGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RolesApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var roleName = roleName_example;  // string | the role name.
            var first = 56;  // int? | first result to return. Ignored if negative or {@code null}. (optional) 
            var max = 56;  // int? | maximum number of results to return. Ignored if negative or {@code null}. (optional) 

            try
            {
                // Returns a stream of users that have the specified role name.
                List<Dictionary<string, Object>> result = apiInstance.RealmRolesRoleNameUsersGet(realm, roleName, first, max);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RolesApi.RealmRolesRoleNameUsersGet: " + e.Message );
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
 **roleName** | **string**| the role name. | 
 **first** | **int?**| first result to return. Ignored if negative or {@code null}. | [optional] 
 **max** | **int?**| maximum number of results to return. Ignored if negative or {@code null}. | [optional] 

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

