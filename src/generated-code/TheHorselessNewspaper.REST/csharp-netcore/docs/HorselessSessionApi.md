# TheHorselessNewspaper.CSharp.Rest.Api.HorselessSessionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**HorselessSessionControllerGet**](HorselessSessionApi.md#horselesssessioncontrollerget) | **GET** /HorselessContent/HorselessSession | 
[**HorselessSessionControllerGet_0**](HorselessSessionApi.md#horselesssessioncontrollerget_0) | **GET** /HorselessContent/HorselessSession/$count | 


<a name="horselesssessioncontrollerget"></a>
# **HorselessSessionControllerGet**
> List&lt;ContentEntitiesHorselessSession&gt; HorselessSessionControllerGet ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HorselessSessionControllerGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessSessionApi(config);

            try
            {
                List<ContentEntitiesHorselessSession> result = apiInstance.HorselessSessionControllerGet();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessSessionApi.HorselessSessionControllerGet: " + e.Message );
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

[**List&lt;ContentEntitiesHorselessSession&gt;**](ContentEntitiesHorselessSession.md)

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

<a name="horselesssessioncontrollerget_0"></a>
# **HorselessSessionControllerGet_0**
> List&lt;ContentEntitiesHorselessSession&gt; HorselessSessionControllerGet_0 ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HorselessSessionControllerGet_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessSessionApi(config);

            try
            {
                List<ContentEntitiesHorselessSession> result = apiInstance.HorselessSessionControllerGet_0();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessSessionApi.HorselessSessionControllerGet_0: " + e.Message );
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

[**List&lt;ContentEntitiesHorselessSession&gt;**](ContentEntitiesHorselessSession.md)

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

