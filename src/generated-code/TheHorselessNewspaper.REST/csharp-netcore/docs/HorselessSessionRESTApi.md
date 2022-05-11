# TheHorselessNewspaper.CSharp.Rest.Api.HorselessSessionRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContentEntitiesHorselessSessionRESTCreate**](HorselessSessionRESTApi.md#contententitieshorselesssessionrestcreate) | **POST** /{__tenant__}/api/HorselessContentModel/HorselessSession/Create | 
[**ContentEntitiesHorselessSessionRESTGetByObjectId**](HorselessSessionRESTApi.md#contententitieshorselesssessionrestgetbyobjectid) | **GET** /{__tenant__}/api/HorselessContentModel/HorselessSession/GetByObjectId | 
[**ContentEntitiesHorselessSessionRESTUpdate**](HorselessSessionRESTApi.md#contententitieshorselesssessionrestupdate) | **POST** /{__tenant__}/api/HorselessContentModel/HorselessSession/Update/{contentCollectionId} | 


<a name="contententitieshorselesssessionrestcreate"></a>
# **ContentEntitiesHorselessSessionRESTCreate**
> ContentEntitiesContentCollection ContentEntitiesHorselessSessionRESTCreate (string tenant, ContentEntitiesHorselessSession? contentEntitiesHorselessSession = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHorselessSessionRESTCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessSessionRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var contentEntitiesHorselessSession = new ContentEntitiesHorselessSession?(); // ContentEntitiesHorselessSession? |  (optional) 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.ContentEntitiesHorselessSessionRESTCreate(tenant, contentEntitiesHorselessSession);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessSessionRESTApi.ContentEntitiesHorselessSessionRESTCreate: " + e.Message );
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
 **tenant** | **string**|  | 
 **contentEntitiesHorselessSession** | [**ContentEntitiesHorselessSession?**](ContentEntitiesHorselessSession?.md)|  | [optional] 

### Return type

[**ContentEntitiesContentCollection**](ContentEntitiesContentCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;odata.metadata=minimal;odata.streaming=true, application/json;odata.metadata=minimal;odata.streaming=false, application/json;odata.metadata=minimal, application/json;odata.metadata=full;odata.streaming=true, application/json;odata.metadata=full;odata.streaming=false, application/json;odata.metadata=full, application/json;odata.metadata=none;odata.streaming=true, application/json;odata.metadata=none;odata.streaming=false, application/json;odata.metadata=none, application/json;odata.streaming=true, application/json;odata.streaming=false, application/json, application/xml, text/plain, application/octet-stream, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **400** | Bad Request |  -  |
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="contententitieshorselesssessionrestgetbyobjectid"></a>
# **ContentEntitiesHorselessSessionRESTGetByObjectId**
> ContentEntitiesContentCollection ContentEntitiesHorselessSessionRESTGetByObjectId (string objectId, string tenant)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHorselessSessionRESTGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessSessionRESTApi(config);
            var objectId = "objectId_example";  // string | 
            var tenant = "tenant_example";  // string | 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.ContentEntitiesHorselessSessionRESTGetByObjectId(objectId, tenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessSessionRESTApi.ContentEntitiesHorselessSessionRESTGetByObjectId: " + e.Message );
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
 **objectId** | **string**|  | 
 **tenant** | **string**|  | 

### Return type

[**ContentEntitiesContentCollection**](ContentEntitiesContentCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;odata.metadata=minimal;odata.streaming=true, application/json;odata.metadata=minimal;odata.streaming=false, application/json;odata.metadata=minimal, application/json;odata.metadata=full;odata.streaming=true, application/json;odata.metadata=full;odata.streaming=false, application/json;odata.metadata=full, application/json;odata.metadata=none;odata.streaming=true, application/json;odata.metadata=none;odata.streaming=false, application/json;odata.metadata=none, application/json;odata.streaming=true, application/json;odata.streaming=false, application/json, application/xml, text/plain, application/octet-stream, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="contententitieshorselesssessionrestupdate"></a>
# **ContentEntitiesHorselessSessionRESTUpdate**
> ContentEntitiesContentCollection ContentEntitiesHorselessSessionRESTUpdate (string contentCollectionId, string tenant, ContentEntitiesHorselessSession? contentEntitiesHorselessSession = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHorselessSessionRESTUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessSessionRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var tenant = "tenant_example";  // string | 
            var contentEntitiesHorselessSession = new ContentEntitiesHorselessSession?(); // ContentEntitiesHorselessSession? |  (optional) 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.ContentEntitiesHorselessSessionRESTUpdate(contentCollectionId, tenant, contentEntitiesHorselessSession);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessSessionRESTApi.ContentEntitiesHorselessSessionRESTUpdate: " + e.Message );
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
 **contentCollectionId** | **string**|  | 
 **tenant** | **string**|  | 
 **contentEntitiesHorselessSession** | [**ContentEntitiesHorselessSession?**](ContentEntitiesHorselessSession?.md)|  | [optional] 

### Return type

[**ContentEntitiesContentCollection**](ContentEntitiesContentCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;odata.metadata=minimal;odata.streaming=true, application/json;odata.metadata=minimal;odata.streaming=false, application/json;odata.metadata=minimal, application/json;odata.metadata=full;odata.streaming=true, application/json;odata.metadata=full;odata.streaming=false, application/json;odata.metadata=full, application/json;odata.metadata=none;odata.streaming=true, application/json;odata.metadata=none;odata.streaming=false, application/json;odata.metadata=none, application/json;odata.streaming=true, application/json;odata.streaming=false, application/json, application/xml, text/plain, application/octet-stream, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **400** | Bad Request |  -  |
| **202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

