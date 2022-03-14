# TheHorselessNewspaper.CSharp.Rest.Api.JSONAssetApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**JSONAssetControllerGet**](JSONAssetApi.md#jsonassetcontrollerget) | **GET** /HorselessContent/JSONAsset | 
[**JSONAssetControllerGet_0**](JSONAssetApi.md#jsonassetcontrollerget_0) | **GET** /HorselessContent/JSONAsset/$count | 


<a name="jsonassetcontrollerget"></a>
# **JSONAssetControllerGet**
> List&lt;ContentEntitiesJSONAsset&gt; JSONAssetControllerGet ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class JSONAssetControllerGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new JSONAssetApi(config);

            try
            {
                List<ContentEntitiesJSONAsset> result = apiInstance.JSONAssetControllerGet();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling JSONAssetApi.JSONAssetControllerGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;ContentEntitiesJSONAsset&gt;**](ContentEntitiesJSONAsset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="jsonassetcontrollerget_0"></a>
# **JSONAssetControllerGet_0**
> List&lt;ContentEntitiesJSONAsset&gt; JSONAssetControllerGet_0 ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class JSONAssetControllerGet_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new JSONAssetApi(config);

            try
            {
                List<ContentEntitiesJSONAsset> result = apiInstance.JSONAssetControllerGet_0();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling JSONAssetApi.JSONAssetControllerGet_0: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;ContentEntitiesJSONAsset&gt;**](ContentEntitiesJSONAsset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

