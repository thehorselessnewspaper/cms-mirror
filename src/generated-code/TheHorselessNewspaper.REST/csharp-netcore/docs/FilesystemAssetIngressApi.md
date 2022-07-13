# TheHorselessNewspaper.CSharp.Rest.Api.FilesystemAssetIngressApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ContentEntitiesFilesystemAssetIngressUploadPhysical**](FilesystemAssetIngressApi.md#contententitiesfilesystemassetingressuploadphysical) | **POST** /{__tenant__}/api/HorselessContentModel/FilesystemAssetIngress/UploadPhysical |  |

<a name="contententitiesfilesystemassetingressuploadphysical"></a>
# **ContentEntitiesFilesystemAssetIngressUploadPhysical**
> void ContentEntitiesFilesystemAssetIngressUploadPhysical (string tenant)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesFilesystemAssetIngressUploadPhysicalExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new FilesystemAssetIngressApi(config);
            var tenant = "tenant_example";  // string | 

            try
            {
                apiInstance.ContentEntitiesFilesystemAssetIngressUploadPhysical(tenant);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FilesystemAssetIngressApi.ContentEntitiesFilesystemAssetIngressUploadPhysical: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ContentEntitiesFilesystemAssetIngressUploadPhysicalWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    apiInstance.ContentEntitiesFilesystemAssetIngressUploadPhysicalWithHttpInfo(tenant);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FilesystemAssetIngressApi.ContentEntitiesFilesystemAssetIngressUploadPhysicalWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tenant** | **string** |  |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

