# TheHorselessNewspaper.CSharp.Rest.Api.NavigationMenuItemRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContentEntitiesNavigationMenuItemRESTCreate**](NavigationMenuItemRESTApi.md#contententitiesnavigationmenuitemrestcreate) | **POST** /{__tenant__}/api/HorselessContentModel/NavigationMenuItem/Create | 
[**ContentEntitiesNavigationMenuItemRESTGetByObjectId**](NavigationMenuItemRESTApi.md#contententitiesnavigationmenuitemrestgetbyobjectid) | **GET** /{__tenant__}/api/HorselessContentModel/NavigationMenuItem/GetByObjectId | 
[**ContentEntitiesNavigationMenuItemRESTUpdate**](NavigationMenuItemRESTApi.md#contententitiesnavigationmenuitemrestupdate) | **POST** /{__tenant__}/api/HorselessContentModel/NavigationMenuItem/Update/{contentCollectionId} | 


<a name="contententitiesnavigationmenuitemrestcreate"></a>
# **ContentEntitiesNavigationMenuItemRESTCreate**
> ContentEntitiesNavigationMenuItem ContentEntitiesNavigationMenuItemRESTCreate (string tenant, ContentEntitiesNavigationMenuItem? contentEntitiesNavigationMenuItem = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesNavigationMenuItemRESTCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new NavigationMenuItemRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var contentEntitiesNavigationMenuItem = new ContentEntitiesNavigationMenuItem?(); // ContentEntitiesNavigationMenuItem? |  (optional) 

            try
            {
                ContentEntitiesNavigationMenuItem result = apiInstance.ContentEntitiesNavigationMenuItemRESTCreate(tenant, contentEntitiesNavigationMenuItem);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NavigationMenuItemRESTApi.ContentEntitiesNavigationMenuItemRESTCreate: " + e.Message );
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

<a name="contententitiesnavigationmenuitemrestgetbyobjectid"></a>
# **ContentEntitiesNavigationMenuItemRESTGetByObjectId**
> ContentEntitiesNavigationMenuItem ContentEntitiesNavigationMenuItemRESTGetByObjectId (string objectId, string tenant)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesNavigationMenuItemRESTGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new NavigationMenuItemRESTApi(config);
            var objectId = "objectId_example";  // string | 
            var tenant = "tenant_example";  // string | 

            try
            {
                ContentEntitiesNavigationMenuItem result = apiInstance.ContentEntitiesNavigationMenuItemRESTGetByObjectId(objectId, tenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NavigationMenuItemRESTApi.ContentEntitiesNavigationMenuItemRESTGetByObjectId: " + e.Message );
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

<a name="contententitiesnavigationmenuitemrestupdate"></a>
# **ContentEntitiesNavigationMenuItemRESTUpdate**
> ContentEntitiesNavigationMenuItem ContentEntitiesNavigationMenuItemRESTUpdate (string contentCollectionId, string tenant, ContentEntitiesNavigationMenuItem? contentEntitiesNavigationMenuItem = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesNavigationMenuItemRESTUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new NavigationMenuItemRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var tenant = "tenant_example";  // string | 
            var contentEntitiesNavigationMenuItem = new ContentEntitiesNavigationMenuItem?(); // ContentEntitiesNavigationMenuItem? |  (optional) 

            try
            {
                ContentEntitiesNavigationMenuItem result = apiInstance.ContentEntitiesNavigationMenuItemRESTUpdate(contentCollectionId, tenant, contentEntitiesNavigationMenuItem);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NavigationMenuItemRESTApi.ContentEntitiesNavigationMenuItemRESTUpdate: " + e.Message );
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

