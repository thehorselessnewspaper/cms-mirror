# TheHorselessNewspaper.CSharp.Rest.Api.FilesystemAssetRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**FilesystemAssetRESTControllerCreate**](FilesystemAssetRESTApi.md#filesystemassetrestcontrollercreate) | **POST** /api/HorselessContentModel/FilesystemAsset/Create | 
[**FilesystemAssetRESTControllerGetByObjectId**](FilesystemAssetRESTApi.md#filesystemassetrestcontrollergetbyobjectid) | **GET** /api/HorselessContentModel/FilesystemAsset/GetByObjectId | 
[**FilesystemAssetRESTControllerUpdate**](FilesystemAssetRESTApi.md#filesystemassetrestcontrollerupdate) | **POST** /api/HorselessContentModel/FilesystemAsset/Update/{contentCollectionId} | 


<a name="filesystemassetrestcontrollercreate"></a>
# **FilesystemAssetRESTControllerCreate**
> ContentEntitiesFilesystemAsset FilesystemAssetRESTControllerCreate (ContentEntitiesFilesystemAsset? contentEntitiesFilesystemAsset = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class FilesystemAssetRESTControllerCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new FilesystemAssetRESTApi(config);
            var contentEntitiesFilesystemAsset = new ContentEntitiesFilesystemAsset?(); // ContentEntitiesFilesystemAsset? |  (optional) 

            try
            {
                ContentEntitiesFilesystemAsset result = apiInstance.FilesystemAssetRESTControllerCreate(contentEntitiesFilesystemAsset);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FilesystemAssetRESTApi.FilesystemAssetRESTControllerCreate: " + e.Message );
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
 **contentEntitiesFilesystemAsset** | [**ContentEntitiesFilesystemAsset?**](ContentEntitiesFilesystemAsset?.md)|  | [optional] 

### Return type

[**ContentEntitiesFilesystemAsset**](ContentEntitiesFilesystemAsset.md)

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

<a name="filesystemassetrestcontrollergetbyobjectid"></a>
# **FilesystemAssetRESTControllerGetByObjectId**
> ContentEntitiesFilesystemAsset FilesystemAssetRESTControllerGetByObjectId (string objectId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class FilesystemAssetRESTControllerGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new FilesystemAssetRESTApi(config);
            var objectId = "objectId_example";  // string | 

            try
            {
                ContentEntitiesFilesystemAsset result = apiInstance.FilesystemAssetRESTControllerGetByObjectId(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FilesystemAssetRESTApi.FilesystemAssetRESTControllerGetByObjectId: " + e.Message );
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

[**ContentEntitiesFilesystemAsset**](ContentEntitiesFilesystemAsset.md)

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

<a name="filesystemassetrestcontrollerupdate"></a>
# **FilesystemAssetRESTControllerUpdate**
> ContentEntitiesFilesystemAsset FilesystemAssetRESTControllerUpdate (string contentCollectionId, ContentEntitiesFilesystemAsset? contentEntitiesFilesystemAsset = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class FilesystemAssetRESTControllerUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new FilesystemAssetRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var contentEntitiesFilesystemAsset = new ContentEntitiesFilesystemAsset?(); // ContentEntitiesFilesystemAsset? |  (optional) 

            try
            {
                ContentEntitiesFilesystemAsset result = apiInstance.FilesystemAssetRESTControllerUpdate(contentCollectionId, contentEntitiesFilesystemAsset);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FilesystemAssetRESTApi.FilesystemAssetRESTControllerUpdate: " + e.Message );
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
 **contentEntitiesFilesystemAsset** | [**ContentEntitiesFilesystemAsset?**](ContentEntitiesFilesystemAsset?.md)|  | [optional] 

### Return type

[**ContentEntitiesFilesystemAsset**](ContentEntitiesFilesystemAsset.md)

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

