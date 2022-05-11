# TheHorselessNewspaper.CSharp.Rest.Api.MimeTypeRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContentEntitiesMimeTypeRESTCreate**](MimeTypeRESTApi.md#contententitiesmimetyperestcreate) | **POST** /{__tenant__}/api/HorselessContentModel/MIMEType/Create | 
[**ContentEntitiesMimeTypeRESTGetByObjectId**](MimeTypeRESTApi.md#contententitiesmimetyperestgetbyobjectid) | **GET** /{__tenant__}/api/HorselessContentModel/MIMEType/GetByObjectId | 
[**ContentEntitiesMimeTypeRESTUpdate**](MimeTypeRESTApi.md#contententitiesmimetyperestupdate) | **POST** /{__tenant__}/api/HorselessContentModel/MIMEType/Update/{contentCollectionId} | 


<a name="contententitiesmimetyperestcreate"></a>
# **ContentEntitiesMimeTypeRESTCreate**
> ContentEntitiesMIMEType ContentEntitiesMimeTypeRESTCreate (string tenant, ContentEntitiesMIMEType? contentEntitiesMIMEType = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesMimeTypeRESTCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new MimeTypeRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var contentEntitiesMIMEType = new ContentEntitiesMIMEType?(); // ContentEntitiesMIMEType? |  (optional) 

            try
            {
                ContentEntitiesMIMEType result = apiInstance.ContentEntitiesMimeTypeRESTCreate(tenant, contentEntitiesMIMEType);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MimeTypeRESTApi.ContentEntitiesMimeTypeRESTCreate: " + e.Message );
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

<a name="contententitiesmimetyperestgetbyobjectid"></a>
# **ContentEntitiesMimeTypeRESTGetByObjectId**
> ContentEntitiesMIMEType ContentEntitiesMimeTypeRESTGetByObjectId (string objectId, string tenant)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesMimeTypeRESTGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new MimeTypeRESTApi(config);
            var objectId = "objectId_example";  // string | 
            var tenant = "tenant_example";  // string | 

            try
            {
                ContentEntitiesMIMEType result = apiInstance.ContentEntitiesMimeTypeRESTGetByObjectId(objectId, tenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MimeTypeRESTApi.ContentEntitiesMimeTypeRESTGetByObjectId: " + e.Message );
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

<a name="contententitiesmimetyperestupdate"></a>
# **ContentEntitiesMimeTypeRESTUpdate**
> ContentEntitiesMIMEType ContentEntitiesMimeTypeRESTUpdate (string contentCollectionId, string tenant, ContentEntitiesMIMEType? contentEntitiesMIMEType = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesMimeTypeRESTUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new MimeTypeRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var tenant = "tenant_example";  // string | 
            var contentEntitiesMIMEType = new ContentEntitiesMIMEType?(); // ContentEntitiesMIMEType? |  (optional) 

            try
            {
                ContentEntitiesMIMEType result = apiInstance.ContentEntitiesMimeTypeRESTUpdate(contentCollectionId, tenant, contentEntitiesMIMEType);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MimeTypeRESTApi.ContentEntitiesMimeTypeRESTUpdate: " + e.Message );
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

