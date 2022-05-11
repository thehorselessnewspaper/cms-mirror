# TheHorselessNewspaper.CSharp.Rest.Api.HorselessContentRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContentEntitiesHorselessContentRESTCreate**](HorselessContentRESTApi.md#contententitieshorselesscontentrestcreate) | **POST** /{__tenant__}/api/HorselessContentModel/HorselessContent/Create | 
[**ContentEntitiesHorselessContentRESTGetByObjectId**](HorselessContentRESTApi.md#contententitieshorselesscontentrestgetbyobjectid) | **GET** /{__tenant__}/api/HorselessContentModel/HorselessContent/GetByObjectId | 
[**ContentEntitiesHorselessContentRESTUpdate**](HorselessContentRESTApi.md#contententitieshorselesscontentrestupdate) | **POST** /{__tenant__}/api/HorselessContentModel/HorselessContent/Update/{contentCollectionId} | 


<a name="contententitieshorselesscontentrestcreate"></a>
# **ContentEntitiesHorselessContentRESTCreate**
> ContentEntitiesHorselessContent ContentEntitiesHorselessContentRESTCreate (string tenant, ContentEntitiesHorselessContent? contentEntitiesHorselessContent = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHorselessContentRESTCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessContentRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var contentEntitiesHorselessContent = new ContentEntitiesHorselessContent?(); // ContentEntitiesHorselessContent? |  (optional) 

            try
            {
                ContentEntitiesHorselessContent result = apiInstance.ContentEntitiesHorselessContentRESTCreate(tenant, contentEntitiesHorselessContent);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessContentRESTApi.ContentEntitiesHorselessContentRESTCreate: " + e.Message );
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
 **contentEntitiesHorselessContent** | [**ContentEntitiesHorselessContent?**](ContentEntitiesHorselessContent?.md)|  | [optional] 

### Return type

[**ContentEntitiesHorselessContent**](ContentEntitiesHorselessContent.md)

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

<a name="contententitieshorselesscontentrestgetbyobjectid"></a>
# **ContentEntitiesHorselessContentRESTGetByObjectId**
> ContentEntitiesHorselessContent ContentEntitiesHorselessContentRESTGetByObjectId (string objectId, string tenant)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHorselessContentRESTGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessContentRESTApi(config);
            var objectId = "objectId_example";  // string | 
            var tenant = "tenant_example";  // string | 

            try
            {
                ContentEntitiesHorselessContent result = apiInstance.ContentEntitiesHorselessContentRESTGetByObjectId(objectId, tenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessContentRESTApi.ContentEntitiesHorselessContentRESTGetByObjectId: " + e.Message );
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

[**ContentEntitiesHorselessContent**](ContentEntitiesHorselessContent.md)

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

<a name="contententitieshorselesscontentrestupdate"></a>
# **ContentEntitiesHorselessContentRESTUpdate**
> ContentEntitiesHorselessContent ContentEntitiesHorselessContentRESTUpdate (string contentCollectionId, string tenant, ContentEntitiesHorselessContent? contentEntitiesHorselessContent = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHorselessContentRESTUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessContentRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var tenant = "tenant_example";  // string | 
            var contentEntitiesHorselessContent = new ContentEntitiesHorselessContent?(); // ContentEntitiesHorselessContent? |  (optional) 

            try
            {
                ContentEntitiesHorselessContent result = apiInstance.ContentEntitiesHorselessContentRESTUpdate(contentCollectionId, tenant, contentEntitiesHorselessContent);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessContentRESTApi.ContentEntitiesHorselessContentRESTUpdate: " + e.Message );
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
 **contentEntitiesHorselessContent** | [**ContentEntitiesHorselessContent?**](ContentEntitiesHorselessContent?.md)|  | [optional] 

### Return type

[**ContentEntitiesHorselessContent**](ContentEntitiesHorselessContent.md)

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

