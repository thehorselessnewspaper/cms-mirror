# TheHorselessNewspaper.CSharp.Rest.Api.MeronymRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MeronymRESTControllerCreate**](MeronymRESTApi.md#meronymrestcontrollercreate) | **POST** /api/HorselessContentModel/Meronym/Create | 
[**MeronymRESTControllerGetByObjectId**](MeronymRESTApi.md#meronymrestcontrollergetbyobjectid) | **GET** /api/HorselessContentModel/Meronym/GetByObjectId | 
[**MeronymRESTControllerUpdate**](MeronymRESTApi.md#meronymrestcontrollerupdate) | **POST** /api/HorselessContentModel/Meronym/Update/{contentCollectionId} | 


<a name="meronymrestcontrollercreate"></a>
# **MeronymRESTControllerCreate**
> ContentEntitiesMeronym MeronymRESTControllerCreate (ContentEntitiesMeronym? contentEntitiesMeronym = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class MeronymRESTControllerCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new MeronymRESTApi(config);
            var contentEntitiesMeronym = new ContentEntitiesMeronym?(); // ContentEntitiesMeronym? |  (optional) 

            try
            {
                ContentEntitiesMeronym result = apiInstance.MeronymRESTControllerCreate(contentEntitiesMeronym);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MeronymRESTApi.MeronymRESTControllerCreate: " + e.Message );
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
 **contentEntitiesMeronym** | [**ContentEntitiesMeronym?**](ContentEntitiesMeronym?.md)|  | [optional] 

### Return type

[**ContentEntitiesMeronym**](ContentEntitiesMeronym.md)

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

<a name="meronymrestcontrollergetbyobjectid"></a>
# **MeronymRESTControllerGetByObjectId**
> ContentEntitiesMeronym MeronymRESTControllerGetByObjectId (string objectId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class MeronymRESTControllerGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new MeronymRESTApi(config);
            var objectId = "objectId_example";  // string | 

            try
            {
                ContentEntitiesMeronym result = apiInstance.MeronymRESTControllerGetByObjectId(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MeronymRESTApi.MeronymRESTControllerGetByObjectId: " + e.Message );
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

[**ContentEntitiesMeronym**](ContentEntitiesMeronym.md)

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

<a name="meronymrestcontrollerupdate"></a>
# **MeronymRESTControllerUpdate**
> ContentEntitiesMeronym MeronymRESTControllerUpdate (string contentCollectionId, ContentEntitiesMeronym? contentEntitiesMeronym = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class MeronymRESTControllerUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new MeronymRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var contentEntitiesMeronym = new ContentEntitiesMeronym?(); // ContentEntitiesMeronym? |  (optional) 

            try
            {
                ContentEntitiesMeronym result = apiInstance.MeronymRESTControllerUpdate(contentCollectionId, contentEntitiesMeronym);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MeronymRESTApi.MeronymRESTControllerUpdate: " + e.Message );
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
 **contentEntitiesMeronym** | [**ContentEntitiesMeronym?**](ContentEntitiesMeronym?.md)|  | [optional] 

### Return type

[**ContentEntitiesMeronym**](ContentEntitiesMeronym.md)

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

