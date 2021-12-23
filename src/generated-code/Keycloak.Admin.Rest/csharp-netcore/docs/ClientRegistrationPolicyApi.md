# Org.OpenAPITools.Api.ClientRegistrationPolicyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmClientRegistrationPolicyProvidersGet**](ClientRegistrationPolicyApi.md#realmclientregistrationpolicyprovidersget) | **GET** /{realm}/client-registration-policy/providers | Base path for retrieve providers with the configProperties properly filled


<a name="realmclientregistrationpolicyprovidersget"></a>
# **RealmClientRegistrationPolicyProvidersGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientRegistrationPolicyProvidersGet (string realm)

Base path for retrieve providers with the configProperties properly filled

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientRegistrationPolicyProvidersGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientRegistrationPolicyApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Base path for retrieve providers with the configProperties properly filled
                List<Dictionary<string, Object>> result = apiInstance.RealmClientRegistrationPolicyProvidersGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientRegistrationPolicyApi.RealmClientRegistrationPolicyProvidersGet: " + e.Message );
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

