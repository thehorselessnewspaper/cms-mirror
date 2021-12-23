# Org.OpenAPITools.Api.UserStorageProviderApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**IdNameGet**](UserStorageProviderApi.md#idnameget) | **GET** /{id}/name | Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
[**RealmUserStorageIdNameGet**](UserStorageProviderApi.md#realmuserstorageidnameget) | **GET** /{realm}/user-storage/{id}/name | Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
[**RealmUserStorageIdRemoveImportedUsersPost**](UserStorageProviderApi.md#realmuserstorageidremoveimporteduserspost) | **POST** /{realm}/user-storage/{id}/remove-imported-users | Remove imported users
[**RealmUserStorageIdSyncPost**](UserStorageProviderApi.md#realmuserstorageidsyncpost) | **POST** /{realm}/user-storage/{id}/sync | Trigger sync of users   Action can be \&quot;triggerFullSync\&quot; or \&quot;triggerChangedUsersSync\&quot;
[**RealmUserStorageIdUnlinkUsersPost**](UserStorageProviderApi.md#realmuserstorageidunlinkuserspost) | **POST** /{realm}/user-storage/{id}/unlink-users | Unlink imported users from a storage provider
[**RealmUserStorageParentIdMappersIdSyncPost**](UserStorageProviderApi.md#realmuserstorageparentidmappersidsyncpost) | **POST** /{realm}/user-storage/{parentId}/mappers/{id}/sync | Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is \&quot;fedToKeycloak\&quot; or \&quot;keycloakToFed\&quot;


<a name="idnameget"></a>
# **IdNameGet**
> Dictionary&lt;string, Object&gt; IdNameGet (string id)

Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class IdNameGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UserStorageProviderApi(config);
            var id = id_example;  // string | 

            try
            {
                // Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
                Dictionary<string, Object> result = apiInstance.IdNameGet(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UserStorageProviderApi.IdNameGet: " + e.Message );
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
 **id** | **string**|  | 

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

<a name="realmuserstorageidnameget"></a>
# **RealmUserStorageIdNameGet**
> Dictionary&lt;string, Object&gt; RealmUserStorageIdNameGet (string realm, string id)

Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUserStorageIdNameGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UserStorageProviderApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 

            try
            {
                // Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
                Dictionary<string, Object> result = apiInstance.RealmUserStorageIdNameGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UserStorageProviderApi.RealmUserStorageIdNameGet: " + e.Message );
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

<a name="realmuserstorageidremoveimporteduserspost"></a>
# **RealmUserStorageIdRemoveImportedUsersPost**
> void RealmUserStorageIdRemoveImportedUsersPost (string realm, string id)

Remove imported users

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUserStorageIdRemoveImportedUsersPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UserStorageProviderApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 

            try
            {
                // Remove imported users
                apiInstance.RealmUserStorageIdRemoveImportedUsersPost(realm, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UserStorageProviderApi.RealmUserStorageIdRemoveImportedUsersPost: " + e.Message );
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

<a name="realmuserstorageidsyncpost"></a>
# **RealmUserStorageIdSyncPost**
> SynchronizationResult RealmUserStorageIdSyncPost (string realm, string id, string action = null)

Trigger sync of users   Action can be \"triggerFullSync\" or \"triggerChangedUsersSync\"

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUserStorageIdSyncPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UserStorageProviderApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var action = action_example;  // string |  (optional) 

            try
            {
                // Trigger sync of users   Action can be \"triggerFullSync\" or \"triggerChangedUsersSync\"
                SynchronizationResult result = apiInstance.RealmUserStorageIdSyncPost(realm, id, action);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UserStorageProviderApi.RealmUserStorageIdSyncPost: " + e.Message );
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
 **action** | **string**|  | [optional] 

### Return type

[**SynchronizationResult**](SynchronizationResult.md)

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

<a name="realmuserstorageidunlinkuserspost"></a>
# **RealmUserStorageIdUnlinkUsersPost**
> void RealmUserStorageIdUnlinkUsersPost (string realm, string id)

Unlink imported users from a storage provider

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUserStorageIdUnlinkUsersPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UserStorageProviderApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 

            try
            {
                // Unlink imported users from a storage provider
                apiInstance.RealmUserStorageIdUnlinkUsersPost(realm, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UserStorageProviderApi.RealmUserStorageIdUnlinkUsersPost: " + e.Message );
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

<a name="realmuserstorageparentidmappersidsyncpost"></a>
# **RealmUserStorageParentIdMappersIdSyncPost**
> SynchronizationResult RealmUserStorageParentIdMappersIdSyncPost (string realm, string parentId, string id, string direction = null)

Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is \"fedToKeycloak\" or \"keycloakToFed\"

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUserStorageParentIdMappersIdSyncPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UserStorageProviderApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var parentId = parentId_example;  // string | 
            var id = id_example;  // string | 
            var direction = direction_example;  // string |  (optional) 

            try
            {
                // Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is \"fedToKeycloak\" or \"keycloakToFed\"
                SynchronizationResult result = apiInstance.RealmUserStorageParentIdMappersIdSyncPost(realm, parentId, id, direction);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UserStorageProviderApi.RealmUserStorageParentIdMappersIdSyncPost: " + e.Message );
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
 **parentId** | **string**|  | 
 **id** | **string**|  | 
 **direction** | **string**|  | [optional] 

### Return type

[**SynchronizationResult**](SynchronizationResult.md)

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

