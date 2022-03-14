# TheHorselessNewspaper.CSharp.Rest.Api.NavigationMenuItemRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**NavigationMenuItemRESTControllerCreate**](NavigationMenuItemRESTApi.md#navigationmenuitemrestcontrollercreate) | **POST** /api/HorselessContentModel/NavigationMenuItem/Create | 
[**NavigationMenuItemRESTControllerGetByObjectId**](NavigationMenuItemRESTApi.md#navigationmenuitemrestcontrollergetbyobjectid) | **GET** /api/HorselessContentModel/NavigationMenuItem/GetByObjectId | 
[**NavigationMenuItemRESTControllerUpdate**](NavigationMenuItemRESTApi.md#navigationmenuitemrestcontrollerupdate) | **POST** /api/HorselessContentModel/NavigationMenuItem/Update/{contentCollectionId} | 


<a name="navigationmenuitemrestcontrollercreate"></a>
# **NavigationMenuItemRESTControllerCreate**
> ContentEntitiesNavigationMenuItem NavigationMenuItemRESTControllerCreate (ContentEntitiesNavigationMenuItem? contentEntitiesNavigationMenuItem = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class NavigationMenuItemRESTControllerCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new NavigationMenuItemRESTApi(config);
            var contentEntitiesNavigationMenuItem = new ContentEntitiesNavigationMenuItem?(); // ContentEntitiesNavigationMenuItem? |  (optional) 

            try
            {
                ContentEntitiesNavigationMenuItem result = apiInstance.NavigationMenuItemRESTControllerCreate(contentEntitiesNavigationMenuItem);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NavigationMenuItemRESTApi.NavigationMenuItemRESTControllerCreate: " + e.Message );
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
 **contentEntitiesNavigationMenuItem** | [**ContentEntitiesNavigationMenuItem?**](ContentEntitiesNavigationMenuItem?.md)|  | [optional] 

### Return type

[**ContentEntitiesNavigationMenuItem**](ContentEntitiesNavigationMenuItem.md)

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

<a name="navigationmenuitemrestcontrollergetbyobjectid"></a>
# **NavigationMenuItemRESTControllerGetByObjectId**
> ContentEntitiesNavigationMenuItem NavigationMenuItemRESTControllerGetByObjectId (string objectId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class NavigationMenuItemRESTControllerGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new NavigationMenuItemRESTApi(config);
            var objectId = "objectId_example";  // string | 

            try
            {
                ContentEntitiesNavigationMenuItem result = apiInstance.NavigationMenuItemRESTControllerGetByObjectId(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NavigationMenuItemRESTApi.NavigationMenuItemRESTControllerGetByObjectId: " + e.Message );
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

[**ContentEntitiesNavigationMenuItem**](ContentEntitiesNavigationMenuItem.md)

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

<a name="navigationmenuitemrestcontrollerupdate"></a>
# **NavigationMenuItemRESTControllerUpdate**
> ContentEntitiesNavigationMenuItem NavigationMenuItemRESTControllerUpdate (string contentCollectionId, ContentEntitiesNavigationMenuItem? contentEntitiesNavigationMenuItem = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class NavigationMenuItemRESTControllerUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new NavigationMenuItemRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var contentEntitiesNavigationMenuItem = new ContentEntitiesNavigationMenuItem?(); // ContentEntitiesNavigationMenuItem? |  (optional) 

            try
            {
                ContentEntitiesNavigationMenuItem result = apiInstance.NavigationMenuItemRESTControllerUpdate(contentCollectionId, contentEntitiesNavigationMenuItem);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NavigationMenuItemRESTApi.NavigationMenuItemRESTControllerUpdate: " + e.Message );
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
 **contentEntitiesNavigationMenuItem** | [**ContentEntitiesNavigationMenuItem?**](ContentEntitiesNavigationMenuItem?.md)|  | [optional] 

### Return type

[**ContentEntitiesNavigationMenuItem**](ContentEntitiesNavigationMenuItem.md)

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

