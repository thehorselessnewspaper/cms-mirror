# TheHorselessNewspaper.CSharp.Rest.Api.DynamicViewServerApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**PresentationDynamicViewServerGetDynamicView**](DynamicViewServerApi.md#presentationdynamicviewservergetdynamicview) | **GET** /{__tenant__}/api/DynamicViewServer/GetDynamicView |  |

<a name="presentationdynamicviewservergetdynamicview"></a>
# **PresentationDynamicViewServerGetDynamicView**
> MvcPartialViewResult PresentationDynamicViewServerGetDynamicView (string tenant, string? viewPhysicalPath = null, Guid? parentContentCollectionObjectId = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class PresentationDynamicViewServerGetDynamicViewExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new DynamicViewServerApi(config);
            var tenant = "tenant_example";  // string | 
            var viewPhysicalPath = "viewPhysicalPath_example";  // string? |  (optional) 
            var parentContentCollectionObjectId = "parentContentCollectionObjectId_example";  // Guid? |  (optional) 

            try
            {
                MvcPartialViewResult result = apiInstance.PresentationDynamicViewServerGetDynamicView(tenant, viewPhysicalPath, parentContentCollectionObjectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DynamicViewServerApi.PresentationDynamicViewServerGetDynamicView: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PresentationDynamicViewServerGetDynamicViewWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<MvcPartialViewResult> response = apiInstance.PresentationDynamicViewServerGetDynamicViewWithHttpInfo(tenant, viewPhysicalPath, parentContentCollectionObjectId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DynamicViewServerApi.PresentationDynamicViewServerGetDynamicViewWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tenant** | **string** |  |  |
| **viewPhysicalPath** | **string?** |  | [optional]  |
| **parentContentCollectionObjectId** | **Guid?** |  | [optional]  |

### Return type

[**MvcPartialViewResult**](MvcPartialViewResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

