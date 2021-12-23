# Org.OpenAPITools.Api.GroupsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmGroupsCountGet**](GroupsApi.md#realmgroupscountget) | **GET** /{realm}/groups/count | Returns the groups counts.
[**RealmGroupsGet**](GroupsApi.md#realmgroupsget) | **GET** /{realm}/groups | Get group hierarchy.
[**RealmGroupsIdChildrenPost**](GroupsApi.md#realmgroupsidchildrenpost) | **POST** /{realm}/groups/{id}/children | Set or create child.
[**RealmGroupsIdDelete**](GroupsApi.md#realmgroupsiddelete) | **DELETE** /{realm}/groups/{id} | 
[**RealmGroupsIdGet**](GroupsApi.md#realmgroupsidget) | **GET** /{realm}/groups/{id} | 
[**RealmGroupsIdManagementPermissionsGet**](GroupsApi.md#realmgroupsidmanagementpermissionsget) | **GET** /{realm}/groups/{id}/management/permissions | Return object stating whether client Authorization permissions have been initialized or not and a reference
[**RealmGroupsIdManagementPermissionsPut**](GroupsApi.md#realmgroupsidmanagementpermissionsput) | **PUT** /{realm}/groups/{id}/management/permissions | Return object stating whether client Authorization permissions have been initialized or not and a reference
[**RealmGroupsIdMembersGet**](GroupsApi.md#realmgroupsidmembersget) | **GET** /{realm}/groups/{id}/members | Get users   Returns a stream of users, filtered according to query parameters
[**RealmGroupsIdPut**](GroupsApi.md#realmgroupsidput) | **PUT** /{realm}/groups/{id} | Update group, ignores subgroups.
[**RealmGroupsPost**](GroupsApi.md#realmgroupspost) | **POST** /{realm}/groups | create or add a top level realm groupSet or create child.


<a name="realmgroupscountget"></a>
# **RealmGroupsCountGet**
> Dictionary&lt;string, Object&gt; RealmGroupsCountGet (string realm, string search = null, bool? top = null)

Returns the groups counts.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmGroupsCountGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GroupsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var search = search_example;  // string |  (optional) 
            var top = true;  // bool? |  (optional) 

            try
            {
                // Returns the groups counts.
                Dictionary<string, Object> result = apiInstance.RealmGroupsCountGet(realm, search, top);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.RealmGroupsCountGet: " + e.Message );
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
 **search** | **string**|  | [optional] 
 **top** | **bool?**|  | [optional] 

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

<a name="realmgroupsget"></a>
# **RealmGroupsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmGroupsGet (string realm, bool? briefRepresentation = null, int? first = null, int? max = null, string search = null)

Get group hierarchy.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmGroupsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GroupsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var briefRepresentation = true;  // bool? |  (optional) 
            var first = 56;  // int? |  (optional) 
            var max = 56;  // int? |  (optional) 
            var search = search_example;  // string |  (optional) 

            try
            {
                // Get group hierarchy.
                List<Dictionary<string, Object>> result = apiInstance.RealmGroupsGet(realm, briefRepresentation, first, max, search);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.RealmGroupsGet: " + e.Message );
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

<a name="realmgroupsidchildrenpost"></a>
# **RealmGroupsIdChildrenPost**
> void RealmGroupsIdChildrenPost (string realm, string id, GroupRepresentation groupRepresentation)

Set or create child.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmGroupsIdChildrenPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GroupsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var groupRepresentation = new GroupRepresentation(); // GroupRepresentation | 

            try
            {
                // Set or create child.
                apiInstance.RealmGroupsIdChildrenPost(realm, id, groupRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.RealmGroupsIdChildrenPost: " + e.Message );
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
 **groupRepresentation** | [**GroupRepresentation**](GroupRepresentation.md)|  | 

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

<a name="realmgroupsiddelete"></a>
# **RealmGroupsIdDelete**
> void RealmGroupsIdDelete (string realm, string id)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmGroupsIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GroupsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 

            try
            {
                apiInstance.RealmGroupsIdDelete(realm, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.RealmGroupsIdDelete: " + e.Message );
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

<a name="realmgroupsidget"></a>
# **RealmGroupsIdGet**
> GroupRepresentation RealmGroupsIdGet (string realm, string id)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmGroupsIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GroupsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 

            try
            {
                GroupRepresentation result = apiInstance.RealmGroupsIdGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.RealmGroupsIdGet: " + e.Message );
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

[**GroupRepresentation**](GroupRepresentation.md)

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

<a name="realmgroupsidmanagementpermissionsget"></a>
# **RealmGroupsIdManagementPermissionsGet**
> ManagementPermissionReference RealmGroupsIdManagementPermissionsGet (string realm, string id)

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
    public class RealmGroupsIdManagementPermissionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GroupsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 

            try
            {
                // Return object stating whether client Authorization permissions have been initialized or not and a reference
                ManagementPermissionReference result = apiInstance.RealmGroupsIdManagementPermissionsGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.RealmGroupsIdManagementPermissionsGet: " + e.Message );
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

<a name="realmgroupsidmanagementpermissionsput"></a>
# **RealmGroupsIdManagementPermissionsPut**
> ManagementPermissionReference RealmGroupsIdManagementPermissionsPut (string realm, string id, ManagementPermissionReference managementPermissionReference)

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
    public class RealmGroupsIdManagementPermissionsPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GroupsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var managementPermissionReference = new ManagementPermissionReference(); // ManagementPermissionReference | 

            try
            {
                // Return object stating whether client Authorization permissions have been initialized or not and a reference
                ManagementPermissionReference result = apiInstance.RealmGroupsIdManagementPermissionsPut(realm, id, managementPermissionReference);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.RealmGroupsIdManagementPermissionsPut: " + e.Message );
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

<a name="realmgroupsidmembersget"></a>
# **RealmGroupsIdMembersGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmGroupsIdMembersGet (string realm, string id, bool? briefRepresentation = null, int? first = null, int? max = null)

Get users   Returns a stream of users, filtered according to query parameters

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmGroupsIdMembersGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GroupsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var briefRepresentation = true;  // bool? | Only return basic information (only guaranteed to return id, username, created, first and last name,  email, enabled state, email verification state, federation link, and access.  Note that it means that namely user attributes, required actions, and not before are not returned.) (optional) 
            var first = 56;  // int? | Pagination offset (optional) 
            var max = 56;  // int? | Maximum results size (defaults to 100) (optional) 

            try
            {
                // Get users   Returns a stream of users, filtered according to query parameters
                List<Dictionary<string, Object>> result = apiInstance.RealmGroupsIdMembersGet(realm, id, briefRepresentation, first, max);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.RealmGroupsIdMembersGet: " + e.Message );
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
 **briefRepresentation** | **bool?**| Only return basic information (only guaranteed to return id, username, created, first and last name,  email, enabled state, email verification state, federation link, and access.  Note that it means that namely user attributes, required actions, and not before are not returned.) | [optional] 
 **first** | **int?**| Pagination offset | [optional] 
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

<a name="realmgroupsidput"></a>
# **RealmGroupsIdPut**
> void RealmGroupsIdPut (string realm, string id, GroupRepresentation groupRepresentation)

Update group, ignores subgroups.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmGroupsIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GroupsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var groupRepresentation = new GroupRepresentation(); // GroupRepresentation | 

            try
            {
                // Update group, ignores subgroups.
                apiInstance.RealmGroupsIdPut(realm, id, groupRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.RealmGroupsIdPut: " + e.Message );
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
 **groupRepresentation** | [**GroupRepresentation**](GroupRepresentation.md)|  | 

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

<a name="realmgroupspost"></a>
# **RealmGroupsPost**
> void RealmGroupsPost (string realm, GroupRepresentation groupRepresentation)

create or add a top level realm groupSet or create child.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmGroupsPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GroupsApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var groupRepresentation = new GroupRepresentation(); // GroupRepresentation | 

            try
            {
                // create or add a top level realm groupSet or create child.
                apiInstance.RealmGroupsPost(realm, groupRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.RealmGroupsPost: " + e.Message );
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
 **groupRepresentation** | [**GroupRepresentation**](GroupRepresentation.md)|  | 

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

