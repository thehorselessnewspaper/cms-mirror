# TheHorselessNewspaper.CSharp.Rest.Api.JSONAssetRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContentEntitiesJSONAssetRESTCreate**](JSONAssetRESTApi.md#contententitiesjsonassetrestcreate) | **POST** /{__tenant__}/api/HorselessContentModel/JSONAsset/Create | 
[**ContentEntitiesJSONAssetRESTGetByObjectId**](JSONAssetRESTApi.md#contententitiesjsonassetrestgetbyobjectid) | **GET** /{__tenant__}/api/HorselessContentModel/JSONAsset/GetByObjectId | 
[**ContentEntitiesJSONAssetRESTUpdate**](JSONAssetRESTApi.md#contententitiesjsonassetrestupdate) | **POST** /{__tenant__}/api/HorselessContentModel/JSONAsset/Update/{contentCollectionId} | 


<a name="contententitiesjsonassetrestcreate"></a>
# **ContentEntitiesJSONAssetRESTCreate**
> ContentEntitiesJSONAsset ContentEntitiesJSONAssetRESTCreate (string tenant, ContentEntitiesJSONAsset? contentEntitiesJSONAsset = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesJSONAssetRESTCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new JSONAssetRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var contentEntitiesJSONAsset = new ContentEntitiesJSONAsset?(); // ContentEntitiesJSONAsset? |  (optional) 

            try
            {
                ContentEntitiesJSONAsset result = apiInstance.ContentEntitiesJSONAssetRESTCreate(tenant, contentEntitiesJSONAsset);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling JSONAssetRESTApi.ContentEntitiesJSONAssetRESTCreate: " + e.Message );
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

<a name="contententitiesjsonassetrestgetbyobjectid"></a>
# **ContentEntitiesJSONAssetRESTGetByObjectId**
> ContentEntitiesJSONAsset ContentEntitiesJSONAssetRESTGetByObjectId (string objectId, string tenant)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesJSONAssetRESTGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new JSONAssetRESTApi(config);
            var objectId = "objectId_example";  // string | 
            var tenant = "tenant_example";  // string | 

            try
            {
                ContentEntitiesJSONAsset result = apiInstance.ContentEntitiesJSONAssetRESTGetByObjectId(objectId, tenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling JSONAssetRESTApi.ContentEntitiesJSONAssetRESTGetByObjectId: " + e.Message );
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

<a name="contententitiesjsonassetrestupdate"></a>
# **ContentEntitiesJSONAssetRESTUpdate**
> ContentEntitiesJSONAsset ContentEntitiesJSONAssetRESTUpdate (string contentCollectionId, string tenant, ContentEntitiesJSONAsset? contentEntitiesJSONAsset = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesJSONAssetRESTUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new JSONAssetRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var tenant = "tenant_example";  // string | 
            var contentEntitiesJSONAsset = new ContentEntitiesJSONAsset?(); // ContentEntitiesJSONAsset? |  (optional) 

            try
            {
                ContentEntitiesJSONAsset result = apiInstance.ContentEntitiesJSONAssetRESTUpdate(contentCollectionId, tenant, contentEntitiesJSONAsset);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling JSONAssetRESTApi.ContentEntitiesJSONAssetRESTUpdate: " + e.Message );
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

