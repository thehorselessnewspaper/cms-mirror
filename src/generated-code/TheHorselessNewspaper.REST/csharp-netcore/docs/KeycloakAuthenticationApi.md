# TheHorselessNewspaper.CSharp.Rest.Api.KeycloakAuthenticationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**KeycloakAuthenticationControllerSignIn**](KeycloakAuthenticationApi.md#keycloakauthenticationcontrollersignin) | **GET** /Keycloak/SignIn | 
[**KeycloakAuthenticationControllerSignIn_0**](KeycloakAuthenticationApi.md#keycloakauthenticationcontrollersignin_0) | **POST** /Keycloak/SignIn | 
[**KeycloakAuthenticationControllerSignOutCurrentUser**](KeycloakAuthenticationApi.md#keycloakauthenticationcontrollersignoutcurrentuser) | **POST** /Keycloak/Signout | 


<a name="keycloakauthenticationcontrollersignin"></a>
# **KeycloakAuthenticationControllerSignIn**
> void KeycloakAuthenticationControllerSignIn ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class KeycloakAuthenticationControllerSignInExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new KeycloakAuthenticationApi(config);

            try
            {
                apiInstance.KeycloakAuthenticationControllerSignIn();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling KeycloakAuthenticationApi.KeycloakAuthenticationControllerSignIn: " + e.Message );
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

<a name="keycloakauthenticationcontrollersignin_0"></a>
# **KeycloakAuthenticationControllerSignIn_0**
> void KeycloakAuthenticationControllerSignIn_0 (string? provider = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class KeycloakAuthenticationControllerSignIn_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new KeycloakAuthenticationApi(config);
            var provider = "provider_example";  // string? |  (optional) 

            try
            {
                apiInstance.KeycloakAuthenticationControllerSignIn_0(provider);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling KeycloakAuthenticationApi.KeycloakAuthenticationControllerSignIn_0: " + e.Message );
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

<a name="keycloakauthenticationcontrollersignoutcurrentuser"></a>
# **KeycloakAuthenticationControllerSignOutCurrentUser**
> void KeycloakAuthenticationControllerSignOutCurrentUser ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class KeycloakAuthenticationControllerSignOutCurrentUserExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new KeycloakAuthenticationApi(config);

            try
            {
                apiInstance.KeycloakAuthenticationControllerSignOutCurrentUser();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling KeycloakAuthenticationApi.KeycloakAuthenticationControllerSignOutCurrentUser: " + e.Message );
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

