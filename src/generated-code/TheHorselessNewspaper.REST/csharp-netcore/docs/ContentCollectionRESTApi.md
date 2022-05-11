# TheHorselessNewspaper.CSharp.Rest.Api.ContentCollectionRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContentEntitiesContentCollectionRESTCreate**](ContentCollectionRESTApi.md#contententitiescontentcollectionrestcreate) | **POST** /{__tenant__}/api/HorselessContentModel/ContentCollection/Create | 
[**ContentEntitiesContentCollectionRESTGetByObjectId**](ContentCollectionRESTApi.md#contententitiescontentcollectionrestgetbyobjectid) | **GET** /{__tenant__}/api/HorselessContentModel/ContentCollection/GetByObjectId | 
[**ContentEntitiesContentCollectionRESTGetByPageNumber**](ContentCollectionRESTApi.md#contententitiescontentcollectionrestgetbypagenumber) | **GET** /{__tenant__}/api/HorselessContentModel/ContentCollection/GetByPageNumber | 
[**ContentEntitiesContentCollectionRESTUpdate**](ContentCollectionRESTApi.md#contententitiescontentcollectionrestupdate) | **POST** /{__tenant__}/api/HorselessContentModel/ContentCollection/Update/{contentCollectionId} | 


<a name="contententitiescontentcollectionrestcreate"></a>
# **ContentEntitiesContentCollectionRESTCreate**
> ContentEntitiesContentCollection ContentEntitiesContentCollectionRESTCreate (string tenant, ContentEntitiesContentCollection? contentEntitiesContentCollection = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesContentCollectionRESTCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new ContentCollectionRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var contentEntitiesContentCollection = new ContentEntitiesContentCollection?(); // ContentEntitiesContentCollection? |  (optional) 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.ContentEntitiesContentCollectionRESTCreate(tenant, contentEntitiesContentCollection);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContentCollectionRESTApi.ContentEntitiesContentCollectionRESTCreate: " + e.Message );
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

<a name="contententitiescontentcollectionrestgetbyobjectid"></a>
# **ContentEntitiesContentCollectionRESTGetByObjectId**
> ContentEntitiesContentCollection ContentEntitiesContentCollectionRESTGetByObjectId (string tenant, string? objectId = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesContentCollectionRESTGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new ContentCollectionRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var objectId = "objectId_example";  // string? |  (optional) 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.ContentEntitiesContentCollectionRESTGetByObjectId(tenant, objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContentCollectionRESTApi.ContentEntitiesContentCollectionRESTGetByObjectId: " + e.Message );
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

<a name="contententitiescontentcollectionrestgetbypagenumber"></a>
# **ContentEntitiesContentCollectionRESTGetByPageNumber**
> ContentEntitiesContentCollection ContentEntitiesContentCollectionRESTGetByPageNumber (string tenant, int? offset = null, int? pagesize = null, int? pageNumber = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesContentCollectionRESTGetByPageNumberExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new ContentCollectionRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var offset = 56;  // int? |  (optional) 
            var pagesize = 56;  // int? |  (optional) 
            var pageNumber = 56;  // int? |  (optional) 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.ContentEntitiesContentCollectionRESTGetByPageNumber(tenant, offset, pagesize, pageNumber);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContentCollectionRESTApi.ContentEntitiesContentCollectionRESTGetByPageNumber: " + e.Message );
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
 **offset** | **int?**|  | [optional] 
 **pagesize** | **int?**|  | [optional] 
 **pageNumber** | **int?**|  | [optional] 

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

<a name="contententitiescontentcollectionrestupdate"></a>
# **ContentEntitiesContentCollectionRESTUpdate**
> ContentEntitiesContentCollection ContentEntitiesContentCollectionRESTUpdate (string contentCollectionId, string tenant, ContentEntitiesContentCollection? contentEntitiesContentCollection = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesContentCollectionRESTUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new ContentCollectionRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var tenant = "tenant_example";  // string | 
            var contentEntitiesContentCollection = new ContentEntitiesContentCollection?(); // ContentEntitiesContentCollection? |  (optional) 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.ContentEntitiesContentCollectionRESTUpdate(contentCollectionId, tenant, contentEntitiesContentCollection);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContentCollectionRESTApi.ContentEntitiesContentCollectionRESTUpdate: " + e.Message );
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

