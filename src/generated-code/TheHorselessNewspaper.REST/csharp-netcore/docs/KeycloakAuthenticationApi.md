# TheHorselessNewspaper.CSharp.Rest.Api.KeycloakAuthenticationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**KeycloakSignInGet**](KeycloakAuthenticationApi.md#keycloaksigninget) | **GET** /Keycloak/SignIn | 
[**KeycloakSignInPost**](KeycloakAuthenticationApi.md#keycloaksigninpost) | **POST** /Keycloak/SignIn | 
[**KeycloakSignoutPost**](KeycloakAuthenticationApi.md#keycloaksignoutpost) | **POST** /Keycloak/Signout | 


<a name="keycloaksigninget"></a>
# **KeycloakSignInGet**
> void KeycloakSignInGet ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class KeycloakSignInGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new KeycloakAuthenticationApi(config);

            try
            {
                apiInstance.KeycloakSignInGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling KeycloakAuthenticationApi.KeycloakSignInGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="keycloaksigninpost"></a>
# **KeycloakSignInPost**
> void KeycloakSignInPost (string? provider = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class KeycloakSignInPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new KeycloakAuthenticationApi(config);
            var provider = "provider_example";  // string? |  (optional) 

            try
            {
                apiInstance.KeycloakSignInPost(provider);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling KeycloakAuthenticationApi.KeycloakSignInPost: " + e.Message );
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
 **provider** | **string?**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="keycloaksignoutpost"></a>
# **KeycloakSignoutPost**
> void KeycloakSignoutPost ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class KeycloakSignoutPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new KeycloakAuthenticationApi(config);

            try
            {
                apiInstance.KeycloakSignoutPost();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling KeycloakAuthenticationApi.KeycloakSignoutPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

