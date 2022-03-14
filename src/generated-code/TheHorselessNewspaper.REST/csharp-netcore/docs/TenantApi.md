# TheHorselessNewspaper.CSharp.Rest.Api.TenantApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TenantControllerGet**](TenantApi.md#tenantcontrollerget) | **GET** /HorselessHosting/Tenant | 
[**TenantControllerGet_0**](TenantApi.md#tenantcontrollerget_0) | **GET** /HorselessContent/Tenant | 
[**TenantControllerGet_1**](TenantApi.md#tenantcontrollerget_1) | **GET** /HorselessContent/Tenant/$count | 


<a name="tenantcontrollerget"></a>
# **TenantControllerGet**
> List&lt;HostingEntitiesTenant&gt; TenantControllerGet ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantControllerGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantApi(config);

            try
            {
                List<HostingEntitiesTenant> result = apiInstance.TenantControllerGet();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantApi.TenantControllerGet: " + e.Message );
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

[**List&lt;HostingEntitiesTenant&gt;**](HostingEntitiesTenant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;odata.metadata=minimal;odata.streaming=true, application/json;odata.metadata=minimal;odata.streaming=false, application/json;odata.metadata=minimal, application/json;odata.metadata=full;odata.streaming=true, application/json;odata.metadata=full;odata.streaming=false, application/json;odata.metadata=full, application/json;odata.metadata=none;odata.streaming=true, application/json;odata.metadata=none;odata.streaming=false, application/json;odata.metadata=none, application/json;odata.streaming=true, application/json;odata.streaming=false, application/json, application/xml, text/plain, application/octet-stream, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="tenantcontrollerget_0"></a>
# **TenantControllerGet_0**
> List&lt;HostingEntitiesTenant&gt; TenantControllerGet_0 ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantControllerGet_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantApi(config);

            try
            {
                List<HostingEntitiesTenant> result = apiInstance.TenantControllerGet_0();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantApi.TenantControllerGet_0: " + e.Message );
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

[**List&lt;HostingEntitiesTenant&gt;**](HostingEntitiesTenant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;odata.metadata=minimal;odata.streaming=true, application/json;odata.metadata=minimal;odata.streaming=false, application/json;odata.metadata=minimal, application/json;odata.metadata=full;odata.streaming=true, application/json;odata.metadata=full;odata.streaming=false, application/json;odata.metadata=full, application/json;odata.metadata=none;odata.streaming=true, application/json;odata.metadata=none;odata.streaming=false, application/json;odata.metadata=none, application/json;odata.streaming=true, application/json;odata.streaming=false, application/json, application/xml, text/plain, application/octet-stream, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="tenantcontrollerget_1"></a>
# **TenantControllerGet_1**
> List&lt;HostingEntitiesTenant&gt; TenantControllerGet_1 ()



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantControllerGet_1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantApi(config);

            try
            {
                List<HostingEntitiesTenant> result = apiInstance.TenantControllerGet_1();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantApi.TenantControllerGet_1: " + e.Message );
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

[**List&lt;HostingEntitiesTenant&gt;**](HostingEntitiesTenant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;odata.metadata=minimal;odata.streaming=true, application/json;odata.metadata=minimal;odata.streaming=false, application/json;odata.metadata=minimal, application/json;odata.metadata=full;odata.streaming=true, application/json;odata.metadata=full;odata.streaming=false, application/json;odata.metadata=full, application/json;odata.metadata=none;odata.streaming=true, application/json;odata.metadata=none;odata.streaming=false, application/json;odata.metadata=none, application/json;odata.streaming=true, application/json;odata.streaming=false, application/json, application/xml, text/plain, application/octet-stream, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

