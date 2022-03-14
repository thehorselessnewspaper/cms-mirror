# TheHorselessNewspaper.CSharp.Rest.Api.NavigationMenuRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**NavigationMenuRESTControllerCreate**](NavigationMenuRESTApi.md#navigationmenurestcontrollercreate) | **POST** /api/HorselessContentModelModel/NavigationMenu/Create | 
[**NavigationMenuRESTControllerGetByObjectId**](NavigationMenuRESTApi.md#navigationmenurestcontrollergetbyobjectid) | **GET** /api/HorselessContentModelModel/NavigationMenu/GetByObjectId | 
[**NavigationMenuRESTControllerUpdate**](NavigationMenuRESTApi.md#navigationmenurestcontrollerupdate) | **POST** /api/HorselessContentModelModel/NavigationMenu/Update/{contentCollectionId} | 


<a name="navigationmenurestcontrollercreate"></a>
# **NavigationMenuRESTControllerCreate**
> ContentEntitiesMIMEType NavigationMenuRESTControllerCreate (ContentEntitiesNavigationMenu? contentEntitiesNavigationMenu = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class NavigationMenuRESTControllerCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new NavigationMenuRESTApi(config);
            var contentEntitiesNavigationMenu = new ContentEntitiesNavigationMenu?(); // ContentEntitiesNavigationMenu? |  (optional) 

            try
            {
                ContentEntitiesMIMEType result = apiInstance.NavigationMenuRESTControllerCreate(contentEntitiesNavigationMenu);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NavigationMenuRESTApi.NavigationMenuRESTControllerCreate: " + e.Message );
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
 **contentEntitiesNavigationMenu** | [**ContentEntitiesNavigationMenu?**](ContentEntitiesNavigationMenu?.md)|  | [optional] 

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

<a name="navigationmenurestcontrollergetbyobjectid"></a>
# **NavigationMenuRESTControllerGetByObjectId**
> ContentEntitiesMIMEType NavigationMenuRESTControllerGetByObjectId (string objectId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class NavigationMenuRESTControllerGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new NavigationMenuRESTApi(config);
            var objectId = "objectId_example";  // string | 

            try
            {
                ContentEntitiesMIMEType result = apiInstance.NavigationMenuRESTControllerGetByObjectId(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NavigationMenuRESTApi.NavigationMenuRESTControllerGetByObjectId: " + e.Message );
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

<a name="navigationmenurestcontrollerupdate"></a>
# **NavigationMenuRESTControllerUpdate**
> ContentEntitiesMIMEType NavigationMenuRESTControllerUpdate (string contentCollectionId, ContentEntitiesNavigationMenu? contentEntitiesNavigationMenu = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class NavigationMenuRESTControllerUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new NavigationMenuRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var contentEntitiesNavigationMenu = new ContentEntitiesNavigationMenu?(); // ContentEntitiesNavigationMenu? |  (optional) 

            try
            {
                ContentEntitiesMIMEType result = apiInstance.NavigationMenuRESTControllerUpdate(contentCollectionId, contentEntitiesNavigationMenu);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NavigationMenuRESTApi.NavigationMenuRESTControllerUpdate: " + e.Message );
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
 **contentEntitiesNavigationMenu** | [**ContentEntitiesNavigationMenu?**](ContentEntitiesNavigationMenu?.md)|  | [optional] 

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

