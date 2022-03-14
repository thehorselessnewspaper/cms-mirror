# TheHorselessNewspaper.CSharp.Rest.Api.HorselessSessionRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**HorselessSessionRESTControllerCreate**](HorselessSessionRESTApi.md#horselesssessionrestcontrollercreate) | **POST** /api/HorselessContentModel/HorselessSession/Create | 
[**HorselessSessionRESTControllerGetByObjectId**](HorselessSessionRESTApi.md#horselesssessionrestcontrollergetbyobjectid) | **GET** /api/HorselessContentModel/HorselessSession/GetByObjectId | 
[**HorselessSessionRESTControllerUpdate**](HorselessSessionRESTApi.md#horselesssessionrestcontrollerupdate) | **POST** /api/HorselessContentModel/HorselessSession/Update/{contentCollectionId} | 


<a name="horselesssessionrestcontrollercreate"></a>
# **HorselessSessionRESTControllerCreate**
> ContentEntitiesContentCollection HorselessSessionRESTControllerCreate (ContentEntitiesHorselessSession? contentEntitiesHorselessSession = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HorselessSessionRESTControllerCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessSessionRESTApi(config);
            var contentEntitiesHorselessSession = new ContentEntitiesHorselessSession?(); // ContentEntitiesHorselessSession? |  (optional) 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.HorselessSessionRESTControllerCreate(contentEntitiesHorselessSession);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessSessionRESTApi.HorselessSessionRESTControllerCreate: " + e.Message );
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

<a name="horselesssessionrestcontrollergetbyobjectid"></a>
# **HorselessSessionRESTControllerGetByObjectId**
> ContentEntitiesContentCollection HorselessSessionRESTControllerGetByObjectId (string objectId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HorselessSessionRESTControllerGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessSessionRESTApi(config);
            var objectId = "objectId_example";  // string | 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.HorselessSessionRESTControllerGetByObjectId(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessSessionRESTApi.HorselessSessionRESTControllerGetByObjectId: " + e.Message );
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

<a name="horselesssessionrestcontrollerupdate"></a>
# **HorselessSessionRESTControllerUpdate**
> ContentEntitiesContentCollection HorselessSessionRESTControllerUpdate (string contentCollectionId, ContentEntitiesHorselessSession? contentEntitiesHorselessSession = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HorselessSessionRESTControllerUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessSessionRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var contentEntitiesHorselessSession = new ContentEntitiesHorselessSession?(); // ContentEntitiesHorselessSession? |  (optional) 

            try
            {
                ContentEntitiesContentCollection result = apiInstance.HorselessSessionRESTControllerUpdate(contentCollectionId, contentEntitiesHorselessSession);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessSessionRESTApi.HorselessSessionRESTControllerUpdate: " + e.Message );
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

