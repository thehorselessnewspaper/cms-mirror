# TheHorselessNewspaper.CSharp.Rest.Api.MimeTypeRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MimeTypeRESTControllerCreate**](MimeTypeRESTApi.md#mimetyperestcontrollercreate) | **POST** /api/HorselessContentModel/MIMEType/Create | 
[**MimeTypeRESTControllerGetByObjectId**](MimeTypeRESTApi.md#mimetyperestcontrollergetbyobjectid) | **GET** /api/HorselessContentModel/MIMEType/GetByObjectId | 
[**MimeTypeRESTControllerUpdate**](MimeTypeRESTApi.md#mimetyperestcontrollerupdate) | **POST** /api/HorselessContentModel/MIMEType/Update/{contentCollectionId} | 


<a name="mimetyperestcontrollercreate"></a>
# **MimeTypeRESTControllerCreate**
> ContentEntitiesMIMEType MimeTypeRESTControllerCreate (ContentEntitiesMIMEType? contentEntitiesMIMEType = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class MimeTypeRESTControllerCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new MimeTypeRESTApi(config);
            var contentEntitiesMIMEType = new ContentEntitiesMIMEType?(); // ContentEntitiesMIMEType? |  (optional) 

            try
            {
                ContentEntitiesMIMEType result = apiInstance.MimeTypeRESTControllerCreate(contentEntitiesMIMEType);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MimeTypeRESTApi.MimeTypeRESTControllerCreate: " + e.Message );
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
 **contentEntitiesMIMEType** | [**ContentEntitiesMIMEType?**](ContentEntitiesMIMEType?.md)|  | [optional] 

### Return type

[**ContentEntitiesMIMEType**](ContentEntitiesMIMEType.md)

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

<a name="mimetyperestcontrollergetbyobjectid"></a>
# **MimeTypeRESTControllerGetByObjectId**
> ContentEntitiesMIMEType MimeTypeRESTControllerGetByObjectId (string objectId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class MimeTypeRESTControllerGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new MimeTypeRESTApi(config);
            var objectId = "objectId_example";  // string | 

            try
            {
                ContentEntitiesMIMEType result = apiInstance.MimeTypeRESTControllerGetByObjectId(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MimeTypeRESTApi.MimeTypeRESTControllerGetByObjectId: " + e.Message );
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

[**ContentEntitiesMIMEType**](ContentEntitiesMIMEType.md)

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

<a name="mimetyperestcontrollerupdate"></a>
# **MimeTypeRESTControllerUpdate**
> ContentEntitiesMIMEType MimeTypeRESTControllerUpdate (string contentCollectionId, ContentEntitiesMIMEType? contentEntitiesMIMEType = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class MimeTypeRESTControllerUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new MimeTypeRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var contentEntitiesMIMEType = new ContentEntitiesMIMEType?(); // ContentEntitiesMIMEType? |  (optional) 

            try
            {
                ContentEntitiesMIMEType result = apiInstance.MimeTypeRESTControllerUpdate(contentCollectionId, contentEntitiesMIMEType);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MimeTypeRESTApi.MimeTypeRESTControllerUpdate: " + e.Message );
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
 **contentEntitiesMIMEType** | [**ContentEntitiesMIMEType?**](ContentEntitiesMIMEType?.md)|  | [optional] 

### Return type

[**ContentEntitiesMIMEType**](ContentEntitiesMIMEType.md)

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

