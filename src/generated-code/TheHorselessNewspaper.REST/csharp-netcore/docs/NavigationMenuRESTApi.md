# TheHorselessNewspaper.CSharp.Rest.Api.NavigationMenuRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContentEntitiesNavigationMenuRESTCreate**](NavigationMenuRESTApi.md#contententitiesnavigationmenurestcreate) | **POST** /{__tenant__}/api/HorselessContentModelModel/NavigationMenu/Create | 
[**ContentEntitiesNavigationMenuRESTGetByObjectId**](NavigationMenuRESTApi.md#contententitiesnavigationmenurestgetbyobjectid) | **GET** /{__tenant__}/api/HorselessContentModelModel/NavigationMenu/GetByObjectId | 
[**ContentEntitiesNavigationMenuRESTUpdate**](NavigationMenuRESTApi.md#contententitiesnavigationmenurestupdate) | **POST** /{__tenant__}/api/HorselessContentModelModel/NavigationMenu/Update/{contentCollectionId} | 


<a name="contententitiesnavigationmenurestcreate"></a>
# **ContentEntitiesNavigationMenuRESTCreate**
> ContentEntitiesMIMEType ContentEntitiesNavigationMenuRESTCreate (string tenant, ContentEntitiesNavigationMenu? contentEntitiesNavigationMenu = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesNavigationMenuRESTCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new NavigationMenuRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var contentEntitiesNavigationMenu = new ContentEntitiesNavigationMenu?(); // ContentEntitiesNavigationMenu? |  (optional) 

            try
            {
                ContentEntitiesMIMEType result = apiInstance.ContentEntitiesNavigationMenuRESTCreate(tenant, contentEntitiesNavigationMenu);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NavigationMenuRESTApi.ContentEntitiesNavigationMenuRESTCreate: " + e.Message );
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

<a name="contententitiesnavigationmenurestgetbyobjectid"></a>
# **ContentEntitiesNavigationMenuRESTGetByObjectId**
> ContentEntitiesMIMEType ContentEntitiesNavigationMenuRESTGetByObjectId (string objectId, string tenant)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesNavigationMenuRESTGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new NavigationMenuRESTApi(config);
            var objectId = "objectId_example";  // string | 
            var tenant = "tenant_example";  // string | 

            try
            {
                ContentEntitiesMIMEType result = apiInstance.ContentEntitiesNavigationMenuRESTGetByObjectId(objectId, tenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NavigationMenuRESTApi.ContentEntitiesNavigationMenuRESTGetByObjectId: " + e.Message );
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

<a name="contententitiesnavigationmenurestupdate"></a>
# **ContentEntitiesNavigationMenuRESTUpdate**
> ContentEntitiesMIMEType ContentEntitiesNavigationMenuRESTUpdate (string contentCollectionId, string tenant, ContentEntitiesNavigationMenu? contentEntitiesNavigationMenu = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesNavigationMenuRESTUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new NavigationMenuRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var tenant = "tenant_example";  // string | 
            var contentEntitiesNavigationMenu = new ContentEntitiesNavigationMenu?(); // ContentEntitiesNavigationMenu? |  (optional) 

            try
            {
                ContentEntitiesMIMEType result = apiInstance.ContentEntitiesNavigationMenuRESTUpdate(contentCollectionId, tenant, contentEntitiesNavigationMenu);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NavigationMenuRESTApi.ContentEntitiesNavigationMenuRESTUpdate: " + e.Message );
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

