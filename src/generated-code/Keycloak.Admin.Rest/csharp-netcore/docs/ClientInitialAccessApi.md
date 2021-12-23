# Horseless.Keycloak.Admin.Rest.Api.ClientInitialAccessApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmClientsInitialAccessGet**](ClientInitialAccessApi.md#realmclientsinitialaccessget) | **GET** /{realm}/clients-initial-access | 
[**RealmClientsInitialAccessIdDelete**](ClientInitialAccessApi.md#realmclientsinitialaccessiddelete) | **DELETE** /{realm}/clients-initial-access/{id} | 
[**RealmClientsInitialAccessPost**](ClientInitialAccessApi.md#realmclientsinitialaccesspost) | **POST** /{realm}/clients-initial-access | Create a new initial access token.


<a name="realmclientsinitialaccessget"></a>
# **RealmClientsInitialAccessGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsInitialAccessGet (string realm)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsInitialAccessGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientInitialAccessApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsInitialAccessGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientInitialAccessApi.RealmClientsInitialAccessGet: " + e.Message );
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

<a name="realmclientsinitialaccessiddelete"></a>
# **RealmClientsInitialAccessIdDelete**
> void RealmClientsInitialAccessIdDelete (string realm, string id)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsInitialAccessIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientInitialAccessApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 

            try
            {
                apiInstance.RealmClientsInitialAccessIdDelete(realm, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientInitialAccessApi.RealmClientsInitialAccessIdDelete: " + e.Message );
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

<a name="realmclientsinitialaccesspost"></a>
# **RealmClientsInitialAccessPost**
> ClientInitialAccessPresentation RealmClientsInitialAccessPost (string realm, ClientInitialAccessCreatePresentation clientInitialAccessCreatePresentation)

Create a new initial access token.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsInitialAccessPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientInitialAccessApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var clientInitialAccessCreatePresentation = new ClientInitialAccessCreatePresentation(); // ClientInitialAccessCreatePresentation | 

            try
            {
                // Create a new initial access token.
                ClientInitialAccessPresentation result = apiInstance.RealmClientsInitialAccessPost(realm, clientInitialAccessCreatePresentation);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientInitialAccessApi.RealmClientsInitialAccessPost: " + e.Message );
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
 **clientInitialAccessCreatePresentation** | [**ClientInitialAccessCreatePresentation**](ClientInitialAccessCreatePresentation.md)|  | 

### Return type

[**ClientInitialAccessPresentation**](ClientInitialAccessPresentation.md)

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

