# TheHorselessNewspaper.CSharp.Rest.Api.ContentCollectionRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContentCollectionRESTControllerCreate**](ContentCollectionRESTApi.md#contentcollectionrestcontrollercreate) | **POST** /api/HorselessContentModel/ContentCollection/Create | 
[**ContentCollectionRESTControllerGetByObjectId**](ContentCollectionRESTApi.md#contentcollectionrestcontrollergetbyobjectid) | **GET** /api/HorselessContentModel/ContentCollection/GetByObjectId | 
[**ContentCollectionRESTControllerUpdate**](ContentCollectionRESTApi.md#contentcollectionrestcontrollerupdate) | **POST** /api/HorselessContentModel/ContentCollection/Update/{contentCollectionId} | 


<a name="contentcollectionrestcontrollercreate"></a>
# **ContentCollectionRESTControllerCreate**
> ContentEntitiesContentCollection ContentCollectionRESTControllerCreate (ContentEntitiesContentCollection? contentEntitiesContentCollection = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentCollectionRESTControllerCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new ContentCollectionRESTApi(config);
            var contentEntitiesContentCollection = new ContentEntitiesContentCollection?(); // ContentEntitiesContentCollection? |  (optional) 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.ContentCollectionRESTControllerCreate(contentEntitiesContentCollection);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContentCollectionRESTApi.ContentCollectionRESTControllerCreate: " + e.Message );
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
 **contentEntitiesContentCollection** | [**ContentEntitiesContentCollection?**](ContentEntitiesContentCollection?.md)|  | [optional] 

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

<a name="contentcollectionrestcontrollergetbyobjectid"></a>
# **ContentCollectionRESTControllerGetByObjectId**
> ContentEntitiesContentCollection ContentCollectionRESTControllerGetByObjectId (string? objectId = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentCollectionRESTControllerGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new ContentCollectionRESTApi(config);
            var objectId = "objectId_example";  // string? |  (optional) 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.ContentCollectionRESTControllerGetByObjectId(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContentCollectionRESTApi.ContentCollectionRESTControllerGetByObjectId: " + e.Message );
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
 **objectId** | **string?**|  | [optional] 

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

<a name="contentcollectionrestcontrollerupdate"></a>
# **ContentCollectionRESTControllerUpdate**
> ContentEntitiesContentCollection ContentCollectionRESTControllerUpdate (string contentCollectionId, ContentEntitiesContentCollection? contentEntitiesContentCollection = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentCollectionRESTControllerUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new ContentCollectionRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var contentEntitiesContentCollection = new ContentEntitiesContentCollection?(); // ContentEntitiesContentCollection? |  (optional) 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.ContentCollectionRESTControllerUpdate(contentCollectionId, contentEntitiesContentCollection);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContentCollectionRESTApi.ContentCollectionRESTControllerUpdate: " + e.Message );
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
 **contentEntitiesContentCollection** | [**ContentEntitiesContentCollection?**](ContentEntitiesContentCollection?.md)|  | [optional] 

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

