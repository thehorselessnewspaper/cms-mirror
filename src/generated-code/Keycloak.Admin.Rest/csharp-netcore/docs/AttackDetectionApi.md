# Horseless.Keycloak.Admin.Rest.Api.AttackDetectionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmAttackDetectionBruteForceUsersDelete**](AttackDetectionApi.md#realmattackdetectionbruteforceusersdelete) | **DELETE** /{realm}/attack-detection/brute-force/users | Clear any user login failures for all users   This can release temporary disabled users
[**RealmAttackDetectionBruteForceUsersUserIdDelete**](AttackDetectionApi.md#realmattackdetectionbruteforceusersuseriddelete) | **DELETE** /{realm}/attack-detection/brute-force/users/{userId} | Clear any user login failures for the user   This can release temporary disabled user
[**RealmAttackDetectionBruteForceUsersUserIdGet**](AttackDetectionApi.md#realmattackdetectionbruteforceusersuseridget) | **GET** /{realm}/attack-detection/brute-force/users/{userId} | Get status of a username in brute force detection


<a name="realmattackdetectionbruteforceusersdelete"></a>
# **RealmAttackDetectionBruteForceUsersDelete**
> void RealmAttackDetectionBruteForceUsersDelete (string realm)

Clear any user login failures for all users   This can release temporary disabled users

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmAttackDetectionBruteForceUsersDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AttackDetectionApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Clear any user login failures for all users   This can release temporary disabled users
                apiInstance.RealmAttackDetectionBruteForceUsersDelete(realm);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AttackDetectionApi.RealmAttackDetectionBruteForceUsersDelete: " + e.Message );
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

<a name="realmattackdetectionbruteforceusersuseriddelete"></a>
# **RealmAttackDetectionBruteForceUsersUserIdDelete**
> void RealmAttackDetectionBruteForceUsersUserIdDelete (string realm, string userId)

Clear any user login failures for the user   This can release temporary disabled user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmAttackDetectionBruteForceUsersUserIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AttackDetectionApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var userId = userId_example;  // string | 

            try
            {
                // Clear any user login failures for the user   This can release temporary disabled user
                apiInstance.RealmAttackDetectionBruteForceUsersUserIdDelete(realm, userId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AttackDetectionApi.RealmAttackDetectionBruteForceUsersUserIdDelete: " + e.Message );
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
 **userId** | **string**|  | 

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

<a name="realmattackdetectionbruteforceusersuseridget"></a>
# **RealmAttackDetectionBruteForceUsersUserIdGet**
> Dictionary&lt;string, Object&gt; RealmAttackDetectionBruteForceUsersUserIdGet (string realm, string userId)

Get status of a username in brute force detection

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmAttackDetectionBruteForceUsersUserIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AttackDetectionApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var userId = userId_example;  // string | 

            try
            {
                // Get status of a username in brute force detection
                Dictionary<string, Object> result = apiInstance.RealmAttackDetectionBruteForceUsersUserIdGet(realm, userId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AttackDetectionApi.RealmAttackDetectionBruteForceUsersUserIdGet: " + e.Message );
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
 **userId** | **string**|  | 

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

