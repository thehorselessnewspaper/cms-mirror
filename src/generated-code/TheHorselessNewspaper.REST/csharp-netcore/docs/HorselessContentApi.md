# TheHorselessNewspaper.CSharp.Rest.Api.HorselessContentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**HorselessContentControllerGet**](HorselessContentApi.md#horselesscontentcontrollerget) | **GET** /HorselessContent/HorselessContent | 
[**HorselessContentControllerGet_0**](HorselessContentApi.md#horselesscontentcontrollerget_0) | **GET** /HorselessContent/HorselessContent/$count | 


<a name="horselesscontentcontrollerget"></a>
# **HorselessContentControllerGet**
> List&lt;ContentEntitiesHorselessContent&gt; HorselessContentControllerGet ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HorselessContentControllerGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessContentApi(config);

            try
            {
                List<ContentEntitiesHorselessContent> result = apiInstance.HorselessContentControllerGet();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessContentApi.HorselessContentControllerGet: " + e.Message );
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

[**List&lt;ContentEntitiesHorselessContent&gt;**](ContentEntitiesHorselessContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="horselesscontentcontrollerget_0"></a>
# **HorselessContentControllerGet_0**
> List&lt;ContentEntitiesHorselessContent&gt; HorselessContentControllerGet_0 ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HorselessContentControllerGet_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessContentApi(config);

            try
            {
                List<ContentEntitiesHorselessContent> result = apiInstance.HorselessContentControllerGet_0();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessContentApi.HorselessContentControllerGet_0: " + e.Message );
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

[**List&lt;ContentEntitiesHorselessContent&gt;**](ContentEntitiesHorselessContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

