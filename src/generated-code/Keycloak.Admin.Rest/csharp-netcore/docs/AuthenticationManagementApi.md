# Org.OpenAPITools.Api.AuthenticationManagementApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmAuthenticationAuthenticatorProvidersGet**](AuthenticationManagementApi.md#realmauthenticationauthenticatorprovidersget) | **GET** /{realm}/authentication/authenticator-providers | Get authenticator providers   Returns a stream of authenticator providers.
[**RealmAuthenticationClientAuthenticatorProvidersGet**](AuthenticationManagementApi.md#realmauthenticationclientauthenticatorprovidersget) | **GET** /{realm}/authentication/client-authenticator-providers | Get client authenticator providers   Returns a stream of client authenticator providers.
[**RealmAuthenticationConfigDescriptionProviderIdGet**](AuthenticationManagementApi.md#realmauthenticationconfigdescriptionprovideridget) | **GET** /{realm}/authentication/config-description/{providerId} | Get authenticator provider’s configuration description
[**RealmAuthenticationConfigIdDelete**](AuthenticationManagementApi.md#realmauthenticationconfigiddelete) | **DELETE** /{realm}/authentication/config/{id} | Delete authenticator configuration
[**RealmAuthenticationConfigIdGet**](AuthenticationManagementApi.md#realmauthenticationconfigidget) | **GET** /{realm}/authentication/config/{id} | Get authenticator configuration
[**RealmAuthenticationConfigIdPut**](AuthenticationManagementApi.md#realmauthenticationconfigidput) | **PUT** /{realm}/authentication/config/{id} | Update authenticator configuration
[**RealmAuthenticationExecutionsExecutionIdConfigPost**](AuthenticationManagementApi.md#realmauthenticationexecutionsexecutionidconfigpost) | **POST** /{realm}/authentication/executions/{executionId}/config | Update execution with new configuration
[**RealmAuthenticationExecutionsExecutionIdDelete**](AuthenticationManagementApi.md#realmauthenticationexecutionsexecutioniddelete) | **DELETE** /{realm}/authentication/executions/{executionId} | Delete execution
[**RealmAuthenticationExecutionsExecutionIdGet**](AuthenticationManagementApi.md#realmauthenticationexecutionsexecutionidget) | **GET** /{realm}/authentication/executions/{executionId} | Get Single Execution
[**RealmAuthenticationExecutionsExecutionIdLowerPriorityPost**](AuthenticationManagementApi.md#realmauthenticationexecutionsexecutionidlowerprioritypost) | **POST** /{realm}/authentication/executions/{executionId}/lower-priority | Lower execution’s priority
[**RealmAuthenticationExecutionsExecutionIdRaisePriorityPost**](AuthenticationManagementApi.md#realmauthenticationexecutionsexecutionidraiseprioritypost) | **POST** /{realm}/authentication/executions/{executionId}/raise-priority | Raise execution’s priority
[**RealmAuthenticationExecutionsPost**](AuthenticationManagementApi.md#realmauthenticationexecutionspost) | **POST** /{realm}/authentication/executions | Add new authentication execution
[**RealmAuthenticationFlowsFlowAliasCopyPost**](AuthenticationManagementApi.md#realmauthenticationflowsflowaliascopypost) | **POST** /{realm}/authentication/flows/{flowAlias}/copy | Copy existing authentication flow under a new name   The new name is given as &#39;newName&#39; attribute of the passed JSON object
[**RealmAuthenticationFlowsFlowAliasExecutionsExecutionPost**](AuthenticationManagementApi.md#realmauthenticationflowsflowaliasexecutionsexecutionpost) | **POST** /{realm}/authentication/flows/{flowAlias}/executions/execution | Add new authentication execution to a flow
[**RealmAuthenticationFlowsFlowAliasExecutionsFlowPost**](AuthenticationManagementApi.md#realmauthenticationflowsflowaliasexecutionsflowpost) | **POST** /{realm}/authentication/flows/{flowAlias}/executions/flow | Add new flow with new execution to existing flow
[**RealmAuthenticationFlowsFlowAliasExecutionsGet**](AuthenticationManagementApi.md#realmauthenticationflowsflowaliasexecutionsget) | **GET** /{realm}/authentication/flows/{flowAlias}/executions | Get authentication executions for a flow
[**RealmAuthenticationFlowsFlowAliasExecutionsPut**](AuthenticationManagementApi.md#realmauthenticationflowsflowaliasexecutionsput) | **PUT** /{realm}/authentication/flows/{flowAlias}/executions | Update authentication executions of a Flow
[**RealmAuthenticationFlowsGet**](AuthenticationManagementApi.md#realmauthenticationflowsget) | **GET** /{realm}/authentication/flows | Get authentication flows   Returns a stream of authentication flows.
[**RealmAuthenticationFlowsIdDelete**](AuthenticationManagementApi.md#realmauthenticationflowsiddelete) | **DELETE** /{realm}/authentication/flows/{id} | Delete an authentication flow
[**RealmAuthenticationFlowsIdGet**](AuthenticationManagementApi.md#realmauthenticationflowsidget) | **GET** /{realm}/authentication/flows/{id} | Get authentication flow for id
[**RealmAuthenticationFlowsIdPut**](AuthenticationManagementApi.md#realmauthenticationflowsidput) | **PUT** /{realm}/authentication/flows/{id} | Update an authentication flow
[**RealmAuthenticationFlowsPost**](AuthenticationManagementApi.md#realmauthenticationflowspost) | **POST** /{realm}/authentication/flows | Create a new authentication flow
[**RealmAuthenticationFormActionProvidersGet**](AuthenticationManagementApi.md#realmauthenticationformactionprovidersget) | **GET** /{realm}/authentication/form-action-providers | Get form action providers   Returns a stream of form action providers.
[**RealmAuthenticationFormProvidersGet**](AuthenticationManagementApi.md#realmauthenticationformprovidersget) | **GET** /{realm}/authentication/form-providers | Get form providers   Returns a stream of form providers.
[**RealmAuthenticationPerClientConfigDescriptionGet**](AuthenticationManagementApi.md#realmauthenticationperclientconfigdescriptionget) | **GET** /{realm}/authentication/per-client-config-description | Get configuration descriptions for all clients
[**RealmAuthenticationRegisterRequiredActionPost**](AuthenticationManagementApi.md#realmauthenticationregisterrequiredactionpost) | **POST** /{realm}/authentication/register-required-action | Register a new required actions
[**RealmAuthenticationRequiredActionsAliasDelete**](AuthenticationManagementApi.md#realmauthenticationrequiredactionsaliasdelete) | **DELETE** /{realm}/authentication/required-actions/{alias} | Delete required action
[**RealmAuthenticationRequiredActionsAliasGet**](AuthenticationManagementApi.md#realmauthenticationrequiredactionsaliasget) | **GET** /{realm}/authentication/required-actions/{alias} | Get required action for alias
[**RealmAuthenticationRequiredActionsAliasLowerPriorityPost**](AuthenticationManagementApi.md#realmauthenticationrequiredactionsaliaslowerprioritypost) | **POST** /{realm}/authentication/required-actions/{alias}/lower-priority | Lower required action’s priority
[**RealmAuthenticationRequiredActionsAliasPut**](AuthenticationManagementApi.md#realmauthenticationrequiredactionsaliasput) | **PUT** /{realm}/authentication/required-actions/{alias} | Update required action
[**RealmAuthenticationRequiredActionsAliasRaisePriorityPost**](AuthenticationManagementApi.md#realmauthenticationrequiredactionsaliasraiseprioritypost) | **POST** /{realm}/authentication/required-actions/{alias}/raise-priority | Raise required action’s priority
[**RealmAuthenticationRequiredActionsGet**](AuthenticationManagementApi.md#realmauthenticationrequiredactionsget) | **GET** /{realm}/authentication/required-actions | Get required actions   Returns a stream of required actions.
[**RealmAuthenticationUnregisteredRequiredActionsGet**](AuthenticationManagementApi.md#realmauthenticationunregisteredrequiredactionsget) | **GET** /{realm}/authentication/unregistered-required-actions | Get unregistered required actions   Returns a stream of unregistered required actions.


<a name="realmauthenticationauthenticatorprovidersget"></a>
# **RealmAuthenticationAuthenticatorProvidersGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmAuthenticationAuthenticatorProvidersGet (string realm)

Get authenticator providers   Returns a stream of authenticator providers.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationAuthenticatorProvidersGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get authenticator providers   Returns a stream of authenticator providers.
                List<Dictionary<string, Object>> result = apiInstance.RealmAuthenticationAuthenticatorProvidersGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationAuthenticatorProvidersGet: " + e.Message );
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

<a name="realmauthenticationclientauthenticatorprovidersget"></a>
# **RealmAuthenticationClientAuthenticatorProvidersGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmAuthenticationClientAuthenticatorProvidersGet (string realm)

Get client authenticator providers   Returns a stream of client authenticator providers.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationClientAuthenticatorProvidersGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get client authenticator providers   Returns a stream of client authenticator providers.
                List<Dictionary<string, Object>> result = apiInstance.RealmAuthenticationClientAuthenticatorProvidersGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationClientAuthenticatorProvidersGet: " + e.Message );
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

<a name="realmauthenticationconfigdescriptionprovideridget"></a>
# **RealmAuthenticationConfigDescriptionProviderIdGet**
> AuthenticatorConfigInfoRepresentation RealmAuthenticationConfigDescriptionProviderIdGet (string realm, string providerId)

Get authenticator provider’s configuration description

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationConfigDescriptionProviderIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var providerId = providerId_example;  // string | 

            try
            {
                // Get authenticator provider’s configuration description
                AuthenticatorConfigInfoRepresentation result = apiInstance.RealmAuthenticationConfigDescriptionProviderIdGet(realm, providerId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationConfigDescriptionProviderIdGet: " + e.Message );
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
 **providerId** | **string**|  | 

### Return type

[**AuthenticatorConfigInfoRepresentation**](AuthenticatorConfigInfoRepresentation.md)

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

<a name="realmauthenticationconfigiddelete"></a>
# **RealmAuthenticationConfigIdDelete**
> void RealmAuthenticationConfigIdDelete (string realm, string id)

Delete authenticator configuration

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationConfigIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | Configuration id

            try
            {
                // Delete authenticator configuration
                apiInstance.RealmAuthenticationConfigIdDelete(realm, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationConfigIdDelete: " + e.Message );
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
 **id** | **string**| Configuration id | 

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

<a name="realmauthenticationconfigidget"></a>
# **RealmAuthenticationConfigIdGet**
> AuthenticatorConfigRepresentation RealmAuthenticationConfigIdGet (string realm, string id)

Get authenticator configuration

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationConfigIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | Configuration id

            try
            {
                // Get authenticator configuration
                AuthenticatorConfigRepresentation result = apiInstance.RealmAuthenticationConfigIdGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationConfigIdGet: " + e.Message );
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
 **id** | **string**| Configuration id | 

### Return type

[**AuthenticatorConfigRepresentation**](AuthenticatorConfigRepresentation.md)

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

<a name="realmauthenticationconfigidput"></a>
# **RealmAuthenticationConfigIdPut**
> void RealmAuthenticationConfigIdPut (string realm, string id, AuthenticatorConfigRepresentation authenticatorConfigRepresentation)

Update authenticator configuration

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationConfigIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | Configuration id
            var authenticatorConfigRepresentation = new AuthenticatorConfigRepresentation(); // AuthenticatorConfigRepresentation | JSON describing new state of authenticator configuration

            try
            {
                // Update authenticator configuration
                apiInstance.RealmAuthenticationConfigIdPut(realm, id, authenticatorConfigRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationConfigIdPut: " + e.Message );
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
 **id** | **string**| Configuration id | 
 **authenticatorConfigRepresentation** | [**AuthenticatorConfigRepresentation**](AuthenticatorConfigRepresentation.md)| JSON describing new state of authenticator configuration | 

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

<a name="realmauthenticationexecutionsexecutionidconfigpost"></a>
# **RealmAuthenticationExecutionsExecutionIdConfigPost**
> void RealmAuthenticationExecutionsExecutionIdConfigPost (string realm, string executionId, AuthenticatorConfigRepresentation authenticatorConfigRepresentation)

Update execution with new configuration

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationExecutionsExecutionIdConfigPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var executionId = executionId_example;  // string | Execution id
            var authenticatorConfigRepresentation = new AuthenticatorConfigRepresentation(); // AuthenticatorConfigRepresentation | JSON with new configuration

            try
            {
                // Update execution with new configuration
                apiInstance.RealmAuthenticationExecutionsExecutionIdConfigPost(realm, executionId, authenticatorConfigRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationExecutionsExecutionIdConfigPost: " + e.Message );
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
 **executionId** | **string**| Execution id | 
 **authenticatorConfigRepresentation** | [**AuthenticatorConfigRepresentation**](AuthenticatorConfigRepresentation.md)| JSON with new configuration | 

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

<a name="realmauthenticationexecutionsexecutioniddelete"></a>
# **RealmAuthenticationExecutionsExecutionIdDelete**
> void RealmAuthenticationExecutionsExecutionIdDelete (string realm, string executionId)

Delete execution

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationExecutionsExecutionIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var executionId = executionId_example;  // string | Execution id

            try
            {
                // Delete execution
                apiInstance.RealmAuthenticationExecutionsExecutionIdDelete(realm, executionId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationExecutionsExecutionIdDelete: " + e.Message );
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
 **executionId** | **string**| Execution id | 

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

<a name="realmauthenticationexecutionsexecutionidget"></a>
# **RealmAuthenticationExecutionsExecutionIdGet**
> void RealmAuthenticationExecutionsExecutionIdGet (string realm, string executionId)

Get Single Execution

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationExecutionsExecutionIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var executionId = executionId_example;  // string | Execution id

            try
            {
                // Get Single Execution
                apiInstance.RealmAuthenticationExecutionsExecutionIdGet(realm, executionId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationExecutionsExecutionIdGet: " + e.Message );
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
 **executionId** | **string**| Execution id | 

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

<a name="realmauthenticationexecutionsexecutionidlowerprioritypost"></a>
# **RealmAuthenticationExecutionsExecutionIdLowerPriorityPost**
> void RealmAuthenticationExecutionsExecutionIdLowerPriorityPost (string realm, string executionId)

Lower execution’s priority

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationExecutionsExecutionIdLowerPriorityPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var executionId = executionId_example;  // string | Execution id

            try
            {
                // Lower execution’s priority
                apiInstance.RealmAuthenticationExecutionsExecutionIdLowerPriorityPost(realm, executionId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationExecutionsExecutionIdLowerPriorityPost: " + e.Message );
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
 **executionId** | **string**| Execution id | 

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

<a name="realmauthenticationexecutionsexecutionidraiseprioritypost"></a>
# **RealmAuthenticationExecutionsExecutionIdRaisePriorityPost**
> void RealmAuthenticationExecutionsExecutionIdRaisePriorityPost (string realm, string executionId)

Raise execution’s priority

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationExecutionsExecutionIdRaisePriorityPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var executionId = executionId_example;  // string | Execution id

            try
            {
                // Raise execution’s priority
                apiInstance.RealmAuthenticationExecutionsExecutionIdRaisePriorityPost(realm, executionId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationExecutionsExecutionIdRaisePriorityPost: " + e.Message );
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
 **executionId** | **string**| Execution id | 

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

<a name="realmauthenticationexecutionspost"></a>
# **RealmAuthenticationExecutionsPost**
> void RealmAuthenticationExecutionsPost (string realm, AuthenticationExecutionRepresentation authenticationExecutionRepresentation)

Add new authentication execution

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationExecutionsPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var authenticationExecutionRepresentation = new AuthenticationExecutionRepresentation(); // AuthenticationExecutionRepresentation | JSON model describing authentication execution

            try
            {
                // Add new authentication execution
                apiInstance.RealmAuthenticationExecutionsPost(realm, authenticationExecutionRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationExecutionsPost: " + e.Message );
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
 **authenticationExecutionRepresentation** | [**AuthenticationExecutionRepresentation**](AuthenticationExecutionRepresentation.md)| JSON model describing authentication execution | 

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

<a name="realmauthenticationflowsflowaliascopypost"></a>
# **RealmAuthenticationFlowsFlowAliasCopyPost**
> void RealmAuthenticationFlowsFlowAliasCopyPost (string realm, string flowAlias, Dictionary<string, Object> requestBody)

Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationFlowsFlowAliasCopyPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var flowAlias = flowAlias_example;  // string | Name of the existing authentication flow
            var requestBody = new Dictionary<string, Object>(); // Dictionary<string, Object> | JSON containing 'newName' attribute

            try
            {
                // Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object
                apiInstance.RealmAuthenticationFlowsFlowAliasCopyPost(realm, flowAlias, requestBody);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationFlowsFlowAliasCopyPost: " + e.Message );
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
 **flowAlias** | **string**| Name of the existing authentication flow | 
 **requestBody** | [**Dictionary&lt;string, Object&gt;**](Object.md)| JSON containing &#39;newName&#39; attribute | 

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

<a name="realmauthenticationflowsflowaliasexecutionsexecutionpost"></a>
# **RealmAuthenticationFlowsFlowAliasExecutionsExecutionPost**
> void RealmAuthenticationFlowsFlowAliasExecutionsExecutionPost (string realm, string flowAlias, Dictionary<string, Object> requestBody)

Add new authentication execution to a flow

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationFlowsFlowAliasExecutionsExecutionPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var flowAlias = flowAlias_example;  // string | Alias of parent flow
            var requestBody = new Dictionary<string, Object>(); // Dictionary<string, Object> | New execution JSON data containing 'provider' attribute

            try
            {
                // Add new authentication execution to a flow
                apiInstance.RealmAuthenticationFlowsFlowAliasExecutionsExecutionPost(realm, flowAlias, requestBody);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationFlowsFlowAliasExecutionsExecutionPost: " + e.Message );
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
 **flowAlias** | **string**| Alias of parent flow | 
 **requestBody** | [**Dictionary&lt;string, Object&gt;**](Object.md)| New execution JSON data containing &#39;provider&#39; attribute | 

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

<a name="realmauthenticationflowsflowaliasexecutionsflowpost"></a>
# **RealmAuthenticationFlowsFlowAliasExecutionsFlowPost**
> void RealmAuthenticationFlowsFlowAliasExecutionsFlowPost (string realm, string flowAlias, Dictionary<string, Object> requestBody)

Add new flow with new execution to existing flow

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationFlowsFlowAliasExecutionsFlowPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var flowAlias = flowAlias_example;  // string | Alias of parent authentication flow
            var requestBody = new Dictionary<string, Object>(); // Dictionary<string, Object> | New authentication flow / execution JSON data containing 'alias', 'type', 'provider', and 'description' attributes

            try
            {
                // Add new flow with new execution to existing flow
                apiInstance.RealmAuthenticationFlowsFlowAliasExecutionsFlowPost(realm, flowAlias, requestBody);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationFlowsFlowAliasExecutionsFlowPost: " + e.Message );
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
 **flowAlias** | **string**| Alias of parent authentication flow | 
 **requestBody** | [**Dictionary&lt;string, Object&gt;**](Object.md)| New authentication flow / execution JSON data containing &#39;alias&#39;, &#39;type&#39;, &#39;provider&#39;, and &#39;description&#39; attributes | 

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

<a name="realmauthenticationflowsflowaliasexecutionsget"></a>
# **RealmAuthenticationFlowsFlowAliasExecutionsGet**
> void RealmAuthenticationFlowsFlowAliasExecutionsGet (string realm, string flowAlias)

Get authentication executions for a flow

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationFlowsFlowAliasExecutionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var flowAlias = flowAlias_example;  // string | Flow alias

            try
            {
                // Get authentication executions for a flow
                apiInstance.RealmAuthenticationFlowsFlowAliasExecutionsGet(realm, flowAlias);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationFlowsFlowAliasExecutionsGet: " + e.Message );
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
 **flowAlias** | **string**| Flow alias | 

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

<a name="realmauthenticationflowsflowaliasexecutionsput"></a>
# **RealmAuthenticationFlowsFlowAliasExecutionsPut**
> void RealmAuthenticationFlowsFlowAliasExecutionsPut (string realm, string flowAlias, AuthenticationExecutionInfoRepresentation authenticationExecutionInfoRepresentation)

Update authentication executions of a Flow

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationFlowsFlowAliasExecutionsPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var flowAlias = flowAlias_example;  // string | Flow alias
            var authenticationExecutionInfoRepresentation = new AuthenticationExecutionInfoRepresentation(); // AuthenticationExecutionInfoRepresentation | AuthenticationExecutionInfoRepresentation

            try
            {
                // Update authentication executions of a Flow
                apiInstance.RealmAuthenticationFlowsFlowAliasExecutionsPut(realm, flowAlias, authenticationExecutionInfoRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationFlowsFlowAliasExecutionsPut: " + e.Message );
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
 **flowAlias** | **string**| Flow alias | 
 **authenticationExecutionInfoRepresentation** | [**AuthenticationExecutionInfoRepresentation**](AuthenticationExecutionInfoRepresentation.md)| AuthenticationExecutionInfoRepresentation | 

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

<a name="realmauthenticationflowsget"></a>
# **RealmAuthenticationFlowsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmAuthenticationFlowsGet (string realm)

Get authentication flows   Returns a stream of authentication flows.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationFlowsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get authentication flows   Returns a stream of authentication flows.
                List<Dictionary<string, Object>> result = apiInstance.RealmAuthenticationFlowsGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationFlowsGet: " + e.Message );
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

<a name="realmauthenticationflowsiddelete"></a>
# **RealmAuthenticationFlowsIdDelete**
> void RealmAuthenticationFlowsIdDelete (string realm, string id)

Delete an authentication flow

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationFlowsIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | Flow id

            try
            {
                // Delete an authentication flow
                apiInstance.RealmAuthenticationFlowsIdDelete(realm, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationFlowsIdDelete: " + e.Message );
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
 **id** | **string**| Flow id | 

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

<a name="realmauthenticationflowsidget"></a>
# **RealmAuthenticationFlowsIdGet**
> AuthenticationFlowRepresentation RealmAuthenticationFlowsIdGet (string realm, string id)

Get authentication flow for id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationFlowsIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | Flow id

            try
            {
                // Get authentication flow for id
                AuthenticationFlowRepresentation result = apiInstance.RealmAuthenticationFlowsIdGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationFlowsIdGet: " + e.Message );
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
 **id** | **string**| Flow id | 

### Return type

[**AuthenticationFlowRepresentation**](AuthenticationFlowRepresentation.md)

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

<a name="realmauthenticationflowsidput"></a>
# **RealmAuthenticationFlowsIdPut**
> void RealmAuthenticationFlowsIdPut (string realm, string id, AuthenticationFlowRepresentation authenticationFlowRepresentation)

Update an authentication flow

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationFlowsIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | Flow id
            var authenticationFlowRepresentation = new AuthenticationFlowRepresentation(); // AuthenticationFlowRepresentation | Authentication flow representation

            try
            {
                // Update an authentication flow
                apiInstance.RealmAuthenticationFlowsIdPut(realm, id, authenticationFlowRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationFlowsIdPut: " + e.Message );
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
 **id** | **string**| Flow id | 
 **authenticationFlowRepresentation** | [**AuthenticationFlowRepresentation**](AuthenticationFlowRepresentation.md)| Authentication flow representation | 

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

<a name="realmauthenticationflowspost"></a>
# **RealmAuthenticationFlowsPost**
> void RealmAuthenticationFlowsPost (string realm, AuthenticationFlowRepresentation authenticationFlowRepresentation)

Create a new authentication flow

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationFlowsPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var authenticationFlowRepresentation = new AuthenticationFlowRepresentation(); // AuthenticationFlowRepresentation | Authentication flow representation

            try
            {
                // Create a new authentication flow
                apiInstance.RealmAuthenticationFlowsPost(realm, authenticationFlowRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationFlowsPost: " + e.Message );
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
 **authenticationFlowRepresentation** | [**AuthenticationFlowRepresentation**](AuthenticationFlowRepresentation.md)| Authentication flow representation | 

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

<a name="realmauthenticationformactionprovidersget"></a>
# **RealmAuthenticationFormActionProvidersGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmAuthenticationFormActionProvidersGet (string realm)

Get form action providers   Returns a stream of form action providers.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationFormActionProvidersGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get form action providers   Returns a stream of form action providers.
                List<Dictionary<string, Object>> result = apiInstance.RealmAuthenticationFormActionProvidersGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationFormActionProvidersGet: " + e.Message );
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

<a name="realmauthenticationformprovidersget"></a>
# **RealmAuthenticationFormProvidersGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmAuthenticationFormProvidersGet (string realm)

Get form providers   Returns a stream of form providers.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationFormProvidersGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get form providers   Returns a stream of form providers.
                List<Dictionary<string, Object>> result = apiInstance.RealmAuthenticationFormProvidersGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationFormProvidersGet: " + e.Message );
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

<a name="realmauthenticationperclientconfigdescriptionget"></a>
# **RealmAuthenticationPerClientConfigDescriptionGet**
> Dictionary&lt;string, Object&gt; RealmAuthenticationPerClientConfigDescriptionGet (string realm)

Get configuration descriptions for all clients

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationPerClientConfigDescriptionGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get configuration descriptions for all clients
                Dictionary<string, Object> result = apiInstance.RealmAuthenticationPerClientConfigDescriptionGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationPerClientConfigDescriptionGet: " + e.Message );
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

<a name="realmauthenticationregisterrequiredactionpost"></a>
# **RealmAuthenticationRegisterRequiredActionPost**
> void RealmAuthenticationRegisterRequiredActionPost (string realm, Dictionary<string, Object> requestBody)

Register a new required actions

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationRegisterRequiredActionPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var requestBody = new Dictionary<string, Object>(); // Dictionary<string, Object> | JSON containing 'providerId', and 'name' attributes.

            try
            {
                // Register a new required actions
                apiInstance.RealmAuthenticationRegisterRequiredActionPost(realm, requestBody);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationRegisterRequiredActionPost: " + e.Message );
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
 **requestBody** | [**Dictionary&lt;string, Object&gt;**](Object.md)| JSON containing &#39;providerId&#39;, and &#39;name&#39; attributes. | 

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

<a name="realmauthenticationrequiredactionsaliasdelete"></a>
# **RealmAuthenticationRequiredActionsAliasDelete**
> void RealmAuthenticationRequiredActionsAliasDelete (string realm, string alias)

Delete required action

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationRequiredActionsAliasDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | Alias of required action

            try
            {
                // Delete required action
                apiInstance.RealmAuthenticationRequiredActionsAliasDelete(realm, alias);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationRequiredActionsAliasDelete: " + e.Message );
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
 **alias** | **string**| Alias of required action | 

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

<a name="realmauthenticationrequiredactionsaliasget"></a>
# **RealmAuthenticationRequiredActionsAliasGet**
> RequiredActionProviderRepresentation RealmAuthenticationRequiredActionsAliasGet (string realm, string alias)

Get required action for alias

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationRequiredActionsAliasGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | Alias of required action

            try
            {
                // Get required action for alias
                RequiredActionProviderRepresentation result = apiInstance.RealmAuthenticationRequiredActionsAliasGet(realm, alias);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationRequiredActionsAliasGet: " + e.Message );
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
 **alias** | **string**| Alias of required action | 

### Return type

[**RequiredActionProviderRepresentation**](RequiredActionProviderRepresentation.md)

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

<a name="realmauthenticationrequiredactionsaliaslowerprioritypost"></a>
# **RealmAuthenticationRequiredActionsAliasLowerPriorityPost**
> void RealmAuthenticationRequiredActionsAliasLowerPriorityPost (string realm, string alias)

Lower required action’s priority

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationRequiredActionsAliasLowerPriorityPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | Alias of required action

            try
            {
                // Lower required action’s priority
                apiInstance.RealmAuthenticationRequiredActionsAliasLowerPriorityPost(realm, alias);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationRequiredActionsAliasLowerPriorityPost: " + e.Message );
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
 **alias** | **string**| Alias of required action | 

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

<a name="realmauthenticationrequiredactionsaliasput"></a>
# **RealmAuthenticationRequiredActionsAliasPut**
> void RealmAuthenticationRequiredActionsAliasPut (string realm, string alias, RequiredActionProviderRepresentation requiredActionProviderRepresentation)

Update required action

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationRequiredActionsAliasPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | Alias of required action
            var requiredActionProviderRepresentation = new RequiredActionProviderRepresentation(); // RequiredActionProviderRepresentation | JSON describing new state of required action

            try
            {
                // Update required action
                apiInstance.RealmAuthenticationRequiredActionsAliasPut(realm, alias, requiredActionProviderRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationRequiredActionsAliasPut: " + e.Message );
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
 **alias** | **string**| Alias of required action | 
 **requiredActionProviderRepresentation** | [**RequiredActionProviderRepresentation**](RequiredActionProviderRepresentation.md)| JSON describing new state of required action | 

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

<a name="realmauthenticationrequiredactionsaliasraiseprioritypost"></a>
# **RealmAuthenticationRequiredActionsAliasRaisePriorityPost**
> void RealmAuthenticationRequiredActionsAliasRaisePriorityPost (string realm, string alias)

Raise required action’s priority

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationRequiredActionsAliasRaisePriorityPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | Alias of required action

            try
            {
                // Raise required action’s priority
                apiInstance.RealmAuthenticationRequiredActionsAliasRaisePriorityPost(realm, alias);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationRequiredActionsAliasRaisePriorityPost: " + e.Message );
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
 **alias** | **string**| Alias of required action | 

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

<a name="realmauthenticationrequiredactionsget"></a>
# **RealmAuthenticationRequiredActionsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmAuthenticationRequiredActionsGet (string realm)

Get required actions   Returns a stream of required actions.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationRequiredActionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get required actions   Returns a stream of required actions.
                List<Dictionary<string, Object>> result = apiInstance.RealmAuthenticationRequiredActionsGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationRequiredActionsGet: " + e.Message );
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

<a name="realmauthenticationunregisteredrequiredactionsget"></a>
# **RealmAuthenticationUnregisteredRequiredActionsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmAuthenticationUnregisteredRequiredActionsGet (string realm)

Get unregistered required actions   Returns a stream of unregistered required actions.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmAuthenticationUnregisteredRequiredActionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthenticationManagementApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get unregistered required actions   Returns a stream of unregistered required actions.
                List<Dictionary<string, Object>> result = apiInstance.RealmAuthenticationUnregisteredRequiredActionsGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthenticationManagementApi.RealmAuthenticationUnregisteredRequiredActionsGet: " + e.Message );
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

