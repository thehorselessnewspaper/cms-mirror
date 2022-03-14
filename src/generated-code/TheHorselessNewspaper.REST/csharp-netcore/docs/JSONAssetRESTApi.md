# TheHorselessNewspaper.CSharp.Rest.Api.JSONAssetRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**JSONAssetRESTControllerCreate**](JSONAssetRESTApi.md#jsonassetrestcontrollercreate) | **POST** /api/HorselessContentModel/JSONAsset/Create | 
[**JSONAssetRESTControllerGetByObjectId**](JSONAssetRESTApi.md#jsonassetrestcontrollergetbyobjectid) | **GET** /api/HorselessContentModel/JSONAsset/GetByObjectId | 
[**JSONAssetRESTControllerUpdate**](JSONAssetRESTApi.md#jsonassetrestcontrollerupdate) | **POST** /api/HorselessContentModel/JSONAsset/Update/{contentCollectionId} | 


<a name="jsonassetrestcontrollercreate"></a>
# **JSONAssetRESTControllerCreate**
> ContentEntitiesJSONAsset JSONAssetRESTControllerCreate (ContentEntitiesJSONAsset? contentEntitiesJSONAsset = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class JSONAssetRESTControllerCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new JSONAssetRESTApi(config);
            var contentEntitiesJSONAsset = new ContentEntitiesJSONAsset?(); // ContentEntitiesJSONAsset? |  (optional) 

            try
            {
                ContentEntitiesJSONAsset result = apiInstance.JSONAssetRESTControllerCreate(contentEntitiesJSONAsset);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling JSONAssetRESTApi.JSONAssetRESTControllerCreate: " + e.Message );
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
 **contentEntitiesJSONAsset** | [**ContentEntitiesJSONAsset?**](ContentEntitiesJSONAsset?.md)|  | [optional] 

### Return type

[**ContentEntitiesJSONAsset**](ContentEntitiesJSONAsset.md)

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

<a name="jsonassetrestcontrollergetbyobjectid"></a>
# **JSONAssetRESTControllerGetByObjectId**
> ContentEntitiesJSONAsset JSONAssetRESTControllerGetByObjectId (string objectId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class JSONAssetRESTControllerGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new JSONAssetRESTApi(config);
            var objectId = "objectId_example";  // string | 

            try
            {
                ContentEntitiesJSONAsset result = apiInstance.JSONAssetRESTControllerGetByObjectId(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling JSONAssetRESTApi.JSONAssetRESTControllerGetByObjectId: " + e.Message );
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

### Return type

[**ContentEntitiesJSONAsset**](ContentEntitiesJSONAsset.md)

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

<a name="jsonassetrestcontrollerupdate"></a>
# **JSONAssetRESTControllerUpdate**
> ContentEntitiesJSONAsset JSONAssetRESTControllerUpdate (string contentCollectionId, ContentEntitiesJSONAsset? contentEntitiesJSONAsset = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class JSONAssetRESTControllerUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new JSONAssetRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var contentEntitiesJSONAsset = new ContentEntitiesJSONAsset?(); // ContentEntitiesJSONAsset? |  (optional) 

            try
            {
                ContentEntitiesJSONAsset result = apiInstance.JSONAssetRESTControllerUpdate(contentCollectionId, contentEntitiesJSONAsset);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling JSONAssetRESTApi.JSONAssetRESTControllerUpdate: " + e.Message );
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
 **contentEntitiesJSONAsset** | [**ContentEntitiesJSONAsset?**](ContentEntitiesJSONAsset?.md)|  | [optional] 

### Return type

[**ContentEntitiesJSONAsset**](ContentEntitiesJSONAsset.md)

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

