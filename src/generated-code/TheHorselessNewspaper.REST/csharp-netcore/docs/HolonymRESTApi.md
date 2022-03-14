# TheHorselessNewspaper.CSharp.Rest.Api.HolonymRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**HolonymRESTControllerCreate**](HolonymRESTApi.md#holonymrestcontrollercreate) | **POST** /api/HorselessContentModel/Holonym/Create | 
[**HolonymRESTControllerGetByObjectId**](HolonymRESTApi.md#holonymrestcontrollergetbyobjectid) | **GET** /api/HorselessContentModel/Holonym/GetByObjectId | 
[**HolonymRESTControllerUpdate**](HolonymRESTApi.md#holonymrestcontrollerupdate) | **POST** /api/HorselessContentModel/Holonym/Update/{contentCollectionId} | 


<a name="holonymrestcontrollercreate"></a>
# **HolonymRESTControllerCreate**
> ContentEntitiesHolonym HolonymRESTControllerCreate (ContentEntitiesHolonym? contentEntitiesHolonym = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HolonymRESTControllerCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HolonymRESTApi(config);
            var contentEntitiesHolonym = new ContentEntitiesHolonym?(); // ContentEntitiesHolonym? |  (optional) 

            try
            {
                ContentEntitiesHolonym result = apiInstance.HolonymRESTControllerCreate(contentEntitiesHolonym);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HolonymRESTApi.HolonymRESTControllerCreate: " + e.Message );
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
 **contentEntitiesHolonym** | [**ContentEntitiesHolonym?**](ContentEntitiesHolonym?.md)|  | [optional] 

### Return type

[**ContentEntitiesHolonym**](ContentEntitiesHolonym.md)

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

<a name="holonymrestcontrollergetbyobjectid"></a>
# **HolonymRESTControllerGetByObjectId**
> ContentEntitiesHolonym HolonymRESTControllerGetByObjectId (string objectId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HolonymRESTControllerGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HolonymRESTApi(config);
            var objectId = "objectId_example";  // string | 

            try
            {
                ContentEntitiesHolonym result = apiInstance.HolonymRESTControllerGetByObjectId(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HolonymRESTApi.HolonymRESTControllerGetByObjectId: " + e.Message );
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

[**ContentEntitiesHolonym**](ContentEntitiesHolonym.md)

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

<a name="holonymrestcontrollerupdate"></a>
# **HolonymRESTControllerUpdate**
> ContentEntitiesHolonym HolonymRESTControllerUpdate (string contentCollectionId, ContentEntitiesHolonym? contentEntitiesHolonym = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HolonymRESTControllerUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HolonymRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var contentEntitiesHolonym = new ContentEntitiesHolonym?(); // ContentEntitiesHolonym? |  (optional) 

            try
            {
                ContentEntitiesHolonym result = apiInstance.HolonymRESTControllerUpdate(contentCollectionId, contentEntitiesHolonym);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HolonymRESTApi.HolonymRESTControllerUpdate: " + e.Message );
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
 **contentEntitiesHolonym** | [**ContentEntitiesHolonym?**](ContentEntitiesHolonym?.md)|  | [optional] 

### Return type

[**ContentEntitiesHolonym**](ContentEntitiesHolonym.md)

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

