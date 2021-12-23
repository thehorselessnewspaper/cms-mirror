# Org.OpenAPITools.Api.ComponentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmComponentsGet**](ComponentApi.md#realmcomponentsget) | **GET** /{realm}/components | 
[**RealmComponentsIdDelete**](ComponentApi.md#realmcomponentsiddelete) | **DELETE** /{realm}/components/{id} | 
[**RealmComponentsIdGet**](ComponentApi.md#realmcomponentsidget) | **GET** /{realm}/components/{id} | 
[**RealmComponentsIdPut**](ComponentApi.md#realmcomponentsidput) | **PUT** /{realm}/components/{id} | 
[**RealmComponentsIdSubComponentTypesGet**](ComponentApi.md#realmcomponentsidsubcomponenttypesget) | **GET** /{realm}/components/{id}/sub-component-types | List of subcomponent types that are available to configure for a particular parent component.
[**RealmComponentsPost**](ComponentApi.md#realmcomponentspost) | **POST** /{realm}/components | 


<a name="realmcomponentsget"></a>
# **RealmComponentsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmComponentsGet (string realm, string name = null, string parent = null, string type = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmComponentsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ComponentApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var name = name_example;  // string |  (optional) 
            var parent = parent_example;  // string |  (optional) 
            var type = type_example;  // string |  (optional) 

            try
            {
                List<Dictionary<string, Object>> result = apiInstance.RealmComponentsGet(realm, name, parent, type);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComponentApi.RealmComponentsGet: " + e.Message );
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
 **name** | **string**|  | [optional] 
 **parent** | **string**|  | [optional] 
 **type** | **string**|  | [optional] 

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

<a name="realmcomponentsiddelete"></a>
# **RealmComponentsIdDelete**
> void RealmComponentsIdDelete (string realm, string id)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmComponentsIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ComponentApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 

            try
            {
                apiInstance.RealmComponentsIdDelete(realm, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComponentApi.RealmComponentsIdDelete: " + e.Message );
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

<a name="realmcomponentsidget"></a>
# **RealmComponentsIdGet**
> ComponentRepresentation RealmComponentsIdGet (string realm, string id)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmComponentsIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ComponentApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 

            try
            {
                ComponentRepresentation result = apiInstance.RealmComponentsIdGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComponentApi.RealmComponentsIdGet: " + e.Message );
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

[**ComponentRepresentation**](ComponentRepresentation.md)

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

<a name="realmcomponentsidput"></a>
# **RealmComponentsIdPut**
> void RealmComponentsIdPut (string realm, string id, ComponentRepresentation componentRepresentation)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmComponentsIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ComponentApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var componentRepresentation = new ComponentRepresentation(); // ComponentRepresentation | 

            try
            {
                apiInstance.RealmComponentsIdPut(realm, id, componentRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComponentApi.RealmComponentsIdPut: " + e.Message );
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
 **componentRepresentation** | [**ComponentRepresentation**](ComponentRepresentation.md)|  | 

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

<a name="realmcomponentsidsubcomponenttypesget"></a>
# **RealmComponentsIdSubComponentTypesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmComponentsIdSubComponentTypesGet (string realm, string id, string type = null)

List of subcomponent types that are available to configure for a particular parent component.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmComponentsIdSubComponentTypesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ComponentApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | 
            var type = type_example;  // string |  (optional) 

            try
            {
                // List of subcomponent types that are available to configure for a particular parent component.
                List<Dictionary<string, Object>> result = apiInstance.RealmComponentsIdSubComponentTypesGet(realm, id, type);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComponentApi.RealmComponentsIdSubComponentTypesGet: " + e.Message );
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
 **type** | **string**|  | [optional] 

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

<a name="realmcomponentspost"></a>
# **RealmComponentsPost**
> void RealmComponentsPost (string realm, ComponentRepresentation componentRepresentation)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmComponentsPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ComponentApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var componentRepresentation = new ComponentRepresentation(); // ComponentRepresentation | 

            try
            {
                apiInstance.RealmComponentsPost(realm, componentRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComponentApi.RealmComponentsPost: " + e.Message );
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
 **componentRepresentation** | [**ComponentRepresentation**](ComponentRepresentation.md)|  | 

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

