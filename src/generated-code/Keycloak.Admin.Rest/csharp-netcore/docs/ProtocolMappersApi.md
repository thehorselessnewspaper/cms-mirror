# Org.OpenAPITools.Api.ProtocolMappersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmClientScopesId1ProtocolMappersModelsId2Delete**](ProtocolMappersApi.md#realmclientscopesid1protocolmappersmodelsid2delete) | **DELETE** /{realm}/client-scopes/{id1}/protocol-mappers/models/{id2} | Delete the mapper
[**RealmClientScopesId1ProtocolMappersModelsId2Get**](ProtocolMappersApi.md#realmclientscopesid1protocolmappersmodelsid2get) | **GET** /{realm}/client-scopes/{id1}/protocol-mappers/models/{id2} | Get mapper by id
[**RealmClientScopesId1ProtocolMappersModelsId2Put**](ProtocolMappersApi.md#realmclientscopesid1protocolmappersmodelsid2put) | **PUT** /{realm}/client-scopes/{id1}/protocol-mappers/models/{id2} | Update the mapper
[**RealmClientScopesIdProtocolMappersAddModelsPost**](ProtocolMappersApi.md#realmclientscopesidprotocolmappersaddmodelspost) | **POST** /{realm}/client-scopes/{id}/protocol-mappers/add-models | Create multiple mappers
[**RealmClientScopesIdProtocolMappersModelsGet**](ProtocolMappersApi.md#realmclientscopesidprotocolmappersmodelsget) | **GET** /{realm}/client-scopes/{id}/protocol-mappers/models | Get mappers
[**RealmClientScopesIdProtocolMappersModelsPost**](ProtocolMappersApi.md#realmclientscopesidprotocolmappersmodelspost) | **POST** /{realm}/client-scopes/{id}/protocol-mappers/models | Create a mapper
[**RealmClientScopesIdProtocolMappersProtocolProtocolGet**](ProtocolMappersApi.md#realmclientscopesidprotocolmappersprotocolprotocolget) | **GET** /{realm}/client-scopes/{id}/protocol-mappers/protocol/{protocol} | Get mappers by name for a specific protocol
[**RealmClientsId1ProtocolMappersModelsId2Delete**](ProtocolMappersApi.md#realmclientsid1protocolmappersmodelsid2delete) | **DELETE** /{realm}/clients/{id1}/protocol-mappers/models/{id2} | Delete the mapper
[**RealmClientsId1ProtocolMappersModelsId2Get**](ProtocolMappersApi.md#realmclientsid1protocolmappersmodelsid2get) | **GET** /{realm}/clients/{id1}/protocol-mappers/models/{id2} | Get mapper by id
[**RealmClientsId1ProtocolMappersModelsId2Put**](ProtocolMappersApi.md#realmclientsid1protocolmappersmodelsid2put) | **PUT** /{realm}/clients/{id1}/protocol-mappers/models/{id2} | Update the mapper
[**RealmClientsIdProtocolMappersAddModelsPost**](ProtocolMappersApi.md#realmclientsidprotocolmappersaddmodelspost) | **POST** /{realm}/clients/{id}/protocol-mappers/add-models | Create multiple mappers
[**RealmClientsIdProtocolMappersModelsGet**](ProtocolMappersApi.md#realmclientsidprotocolmappersmodelsget) | **GET** /{realm}/clients/{id}/protocol-mappers/models | Get mappers
[**RealmClientsIdProtocolMappersModelsPost**](ProtocolMappersApi.md#realmclientsidprotocolmappersmodelspost) | **POST** /{realm}/clients/{id}/protocol-mappers/models | Create a mapper
[**RealmClientsIdProtocolMappersProtocolProtocolGet**](ProtocolMappersApi.md#realmclientsidprotocolmappersprotocolprotocolget) | **GET** /{realm}/clients/{id}/protocol-mappers/protocol/{protocol} | Get mappers by name for a specific protocol


<a name="realmclientscopesid1protocolmappersmodelsid2delete"></a>
# **RealmClientScopesId1ProtocolMappersModelsId2Delete**
> void RealmClientScopesId1ProtocolMappersModelsId2Delete (string realm, string id1, string id2)

Delete the mapper

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientScopesId1ProtocolMappersModelsId2DeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id1 = id1_example;  // string | 
            var id2 = id2_example;  // string | 

            try
            {
                // Delete the mapper
                apiInstance.RealmClientScopesId1ProtocolMappersModelsId2Delete(realm, id1, id2);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientScopesId1ProtocolMappersModelsId2Delete: " + e.Message );
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
 **id1** | **string**|  | 
 **id2** | **string**|  | 

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

<a name="realmclientscopesid1protocolmappersmodelsid2get"></a>
# **RealmClientScopesId1ProtocolMappersModelsId2Get**
> ProtocolMapperRepresentation RealmClientScopesId1ProtocolMappersModelsId2Get (string realm, string id1, string id2)

Get mapper by id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientScopesId1ProtocolMappersModelsId2GetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id1 = id1_example;  // string | 
            var id2 = id2_example;  // string | 

            try
            {
                // Get mapper by id
                ProtocolMapperRepresentation result = apiInstance.RealmClientScopesId1ProtocolMappersModelsId2Get(realm, id1, id2);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientScopesId1ProtocolMappersModelsId2Get: " + e.Message );
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
 **id1** | **string**|  | 
 **id2** | **string**|  | 

### Return type

[**ProtocolMapperRepresentation**](ProtocolMapperRepresentation.md)

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

<a name="realmclientscopesid1protocolmappersmodelsid2put"></a>
# **RealmClientScopesId1ProtocolMappersModelsId2Put**
> void RealmClientScopesId1ProtocolMappersModelsId2Put (string realm, string id1, string id2, ProtocolMapperRepresentation protocolMapperRepresentation)

Update the mapper

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientScopesId1ProtocolMappersModelsId2PutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id1 = id1_example;  // string | 
            var id2 = id2_example;  // string | 
            var protocolMapperRepresentation = new ProtocolMapperRepresentation(); // ProtocolMapperRepresentation | 

            try
            {
                // Update the mapper
                apiInstance.RealmClientScopesId1ProtocolMappersModelsId2Put(realm, id1, id2, protocolMapperRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientScopesId1ProtocolMappersModelsId2Put: " + e.Message );
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
 **id1** | **string**|  | 
 **id2** | **string**|  | 
 **protocolMapperRepresentation** | [**ProtocolMapperRepresentation**](ProtocolMapperRepresentation.md)|  | 

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

<a name="realmclientscopesidprotocolmappersaddmodelspost"></a>
# **RealmClientScopesIdProtocolMappersAddModelsPost**
> void RealmClientScopesIdProtocolMappersAddModelsPost (string realm, string id, List<ProtocolMapperRepresentation> protocolMapperRepresentation)

Create multiple mappers

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientScopesIdProtocolMappersAddModelsPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)
            var protocolMapperRepresentation = new List<ProtocolMapperRepresentation>(); // List<ProtocolMapperRepresentation> | 

            try
            {
                // Create multiple mappers
                apiInstance.RealmClientScopesIdProtocolMappersAddModelsPost(realm, id, protocolMapperRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientScopesIdProtocolMappersAddModelsPost: " + e.Message );
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
 **id** | **string**| id of client scope (not name) | 
 **protocolMapperRepresentation** | [**List&lt;ProtocolMapperRepresentation&gt;**](ProtocolMapperRepresentation.md)|  | 

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

<a name="realmclientscopesidprotocolmappersmodelsget"></a>
# **RealmClientScopesIdProtocolMappersModelsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientScopesIdProtocolMappersModelsGet (string realm, string id)

Get mappers

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientScopesIdProtocolMappersModelsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)

            try
            {
                // Get mappers
                List<Dictionary<string, Object>> result = apiInstance.RealmClientScopesIdProtocolMappersModelsGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientScopesIdProtocolMappersModelsGet: " + e.Message );
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
 **id** | **string**| id of client scope (not name) | 

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

<a name="realmclientscopesidprotocolmappersmodelspost"></a>
# **RealmClientScopesIdProtocolMappersModelsPost**
> void RealmClientScopesIdProtocolMappersModelsPost (string realm, string id, ProtocolMapperRepresentation protocolMapperRepresentation)

Create a mapper

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientScopesIdProtocolMappersModelsPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)
            var protocolMapperRepresentation = new ProtocolMapperRepresentation(); // ProtocolMapperRepresentation | 

            try
            {
                // Create a mapper
                apiInstance.RealmClientScopesIdProtocolMappersModelsPost(realm, id, protocolMapperRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientScopesIdProtocolMappersModelsPost: " + e.Message );
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
 **id** | **string**| id of client scope (not name) | 
 **protocolMapperRepresentation** | [**ProtocolMapperRepresentation**](ProtocolMapperRepresentation.md)|  | 

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

<a name="realmclientscopesidprotocolmappersprotocolprotocolget"></a>
# **RealmClientScopesIdProtocolMappersProtocolProtocolGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientScopesIdProtocolMappersProtocolProtocolGet (string realm, string id, string protocol)

Get mappers by name for a specific protocol

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientScopesIdProtocolMappersProtocolProtocolGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client scope (not name)
            var protocol = protocol_example;  // string | 

            try
            {
                // Get mappers by name for a specific protocol
                List<Dictionary<string, Object>> result = apiInstance.RealmClientScopesIdProtocolMappersProtocolProtocolGet(realm, id, protocol);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientScopesIdProtocolMappersProtocolProtocolGet: " + e.Message );
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
 **id** | **string**| id of client scope (not name) | 
 **protocol** | **string**|  | 

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

<a name="realmclientsid1protocolmappersmodelsid2delete"></a>
# **RealmClientsId1ProtocolMappersModelsId2Delete**
> void RealmClientsId1ProtocolMappersModelsId2Delete (string realm, string id1, string id2)

Delete the mapper

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsId1ProtocolMappersModelsId2DeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id1 = id1_example;  // string | 
            var id2 = id2_example;  // string | 

            try
            {
                // Delete the mapper
                apiInstance.RealmClientsId1ProtocolMappersModelsId2Delete(realm, id1, id2);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientsId1ProtocolMappersModelsId2Delete: " + e.Message );
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
 **id1** | **string**|  | 
 **id2** | **string**|  | 

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

<a name="realmclientsid1protocolmappersmodelsid2get"></a>
# **RealmClientsId1ProtocolMappersModelsId2Get**
> ProtocolMapperRepresentation RealmClientsId1ProtocolMappersModelsId2Get (string realm, string id1, string id2)

Get mapper by id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsId1ProtocolMappersModelsId2GetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id1 = id1_example;  // string | 
            var id2 = id2_example;  // string | 

            try
            {
                // Get mapper by id
                ProtocolMapperRepresentation result = apiInstance.RealmClientsId1ProtocolMappersModelsId2Get(realm, id1, id2);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientsId1ProtocolMappersModelsId2Get: " + e.Message );
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
 **id1** | **string**|  | 
 **id2** | **string**|  | 

### Return type

[**ProtocolMapperRepresentation**](ProtocolMapperRepresentation.md)

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

<a name="realmclientsid1protocolmappersmodelsid2put"></a>
# **RealmClientsId1ProtocolMappersModelsId2Put**
> void RealmClientsId1ProtocolMappersModelsId2Put (string realm, string id1, string id2, ProtocolMapperRepresentation protocolMapperRepresentation)

Update the mapper

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsId1ProtocolMappersModelsId2PutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id1 = id1_example;  // string | 
            var id2 = id2_example;  // string | 
            var protocolMapperRepresentation = new ProtocolMapperRepresentation(); // ProtocolMapperRepresentation | 

            try
            {
                // Update the mapper
                apiInstance.RealmClientsId1ProtocolMappersModelsId2Put(realm, id1, id2, protocolMapperRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientsId1ProtocolMappersModelsId2Put: " + e.Message );
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
 **id1** | **string**|  | 
 **id2** | **string**|  | 
 **protocolMapperRepresentation** | [**ProtocolMapperRepresentation**](ProtocolMapperRepresentation.md)|  | 

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

<a name="realmclientsidprotocolmappersaddmodelspost"></a>
# **RealmClientsIdProtocolMappersAddModelsPost**
> void RealmClientsIdProtocolMappersAddModelsPost (string realm, string id, List<ProtocolMapperRepresentation> protocolMapperRepresentation)

Create multiple mappers

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdProtocolMappersAddModelsPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var protocolMapperRepresentation = new List<ProtocolMapperRepresentation>(); // List<ProtocolMapperRepresentation> | 

            try
            {
                // Create multiple mappers
                apiInstance.RealmClientsIdProtocolMappersAddModelsPost(realm, id, protocolMapperRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientsIdProtocolMappersAddModelsPost: " + e.Message );
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
 **protocolMapperRepresentation** | [**List&lt;ProtocolMapperRepresentation&gt;**](ProtocolMapperRepresentation.md)|  | 

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

<a name="realmclientsidprotocolmappersmodelsget"></a>
# **RealmClientsIdProtocolMappersModelsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdProtocolMappersModelsGet (string realm, string id)

Get mappers

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdProtocolMappersModelsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)

            try
            {
                // Get mappers
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdProtocolMappersModelsGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientsIdProtocolMappersModelsGet: " + e.Message );
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

<a name="realmclientsidprotocolmappersmodelspost"></a>
# **RealmClientsIdProtocolMappersModelsPost**
> void RealmClientsIdProtocolMappersModelsPost (string realm, string id, ProtocolMapperRepresentation protocolMapperRepresentation)

Create a mapper

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdProtocolMappersModelsPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var protocolMapperRepresentation = new ProtocolMapperRepresentation(); // ProtocolMapperRepresentation | 

            try
            {
                // Create a mapper
                apiInstance.RealmClientsIdProtocolMappersModelsPost(realm, id, protocolMapperRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientsIdProtocolMappersModelsPost: " + e.Message );
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
 **protocolMapperRepresentation** | [**ProtocolMapperRepresentation**](ProtocolMapperRepresentation.md)|  | 

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

<a name="realmclientsidprotocolmappersprotocolprotocolget"></a>
# **RealmClientsIdProtocolMappersProtocolProtocolGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientsIdProtocolMappersProtocolProtocolGet (string realm, string id, string protocol)

Get mappers by name for a specific protocol

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmClientsIdProtocolMappersProtocolProtocolGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ProtocolMappersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var protocol = protocol_example;  // string | 

            try
            {
                // Get mappers by name for a specific protocol
                List<Dictionary<string, Object>> result = apiInstance.RealmClientsIdProtocolMappersProtocolProtocolGet(realm, id, protocol);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProtocolMappersApi.RealmClientsIdProtocolMappersProtocolProtocolGet: " + e.Message );
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
 **protocol** | **string**|  | 

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

