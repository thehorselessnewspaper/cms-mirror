# TheHorselessNewspaper.CSharp.Rest.Api.HolonymRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContentEntitiesHolonymRESTCreate**](HolonymRESTApi.md#contententitiesholonymrestcreate) | **POST** /{__tenant__}/api/HorselessContentModel/Holonym/Create | 
[**ContentEntitiesHolonymRESTGetByObjectId**](HolonymRESTApi.md#contententitiesholonymrestgetbyobjectid) | **GET** /{__tenant__}/api/HorselessContentModel/Holonym/GetByObjectId | 
[**ContentEntitiesHolonymRESTUpdate**](HolonymRESTApi.md#contententitiesholonymrestupdate) | **POST** /{__tenant__}/api/HorselessContentModel/Holonym/Update/{contentCollectionId} | 


<a name="contententitiesholonymrestcreate"></a>
# **ContentEntitiesHolonymRESTCreate**
> ContentEntitiesHolonym ContentEntitiesHolonymRESTCreate (string tenant, ContentEntitiesHolonym? contentEntitiesHolonym = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHolonymRESTCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HolonymRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var contentEntitiesHolonym = new ContentEntitiesHolonym?(); // ContentEntitiesHolonym? |  (optional) 

            try
            {
                ContentEntitiesHolonym result = apiInstance.ContentEntitiesHolonymRESTCreate(tenant, contentEntitiesHolonym);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HolonymRESTApi.ContentEntitiesHolonymRESTCreate: " + e.Message );
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

<a name="contententitiesholonymrestgetbyobjectid"></a>
# **ContentEntitiesHolonymRESTGetByObjectId**
> ContentEntitiesHolonym ContentEntitiesHolonymRESTGetByObjectId (string objectId, string tenant)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHolonymRESTGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HolonymRESTApi(config);
            var objectId = "objectId_example";  // string | 
            var tenant = "tenant_example";  // string | 

            try
            {
                ContentEntitiesHolonym result = apiInstance.ContentEntitiesHolonymRESTGetByObjectId(objectId, tenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HolonymRESTApi.ContentEntitiesHolonymRESTGetByObjectId: " + e.Message );
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

<a name="contententitiesholonymrestupdate"></a>
# **ContentEntitiesHolonymRESTUpdate**
> ContentEntitiesHolonym ContentEntitiesHolonymRESTUpdate (string contentCollectionId, string tenant, ContentEntitiesHolonym? contentEntitiesHolonym = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHolonymRESTUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HolonymRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var tenant = "tenant_example";  // string | 
            var contentEntitiesHolonym = new ContentEntitiesHolonym?(); // ContentEntitiesHolonym? |  (optional) 

            try
            {
                ContentEntitiesHolonym result = apiInstance.ContentEntitiesHolonymRESTUpdate(contentCollectionId, tenant, contentEntitiesHolonym);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HolonymRESTApi.ContentEntitiesHolonymRESTUpdate: " + e.Message );
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

