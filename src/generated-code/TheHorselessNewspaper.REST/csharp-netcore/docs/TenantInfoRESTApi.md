# TheHorselessNewspaper.CSharp.Rest.Api.TenantInfoRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TenantInfoRESTControllerCreate**](TenantInfoRESTApi.md#tenantinforestcontrollercreate) | **POST** /api/HorselessHostingModel/TenantInfo/Create | 
[**TenantInfoRESTControllerGetByObjectId**](TenantInfoRESTApi.md#tenantinforestcontrollergetbyobjectid) | **GET** /api/HorselessHostingModel/TenantInfo/GetByObjectId | 
[**TenantInfoRESTControllerUpdate**](TenantInfoRESTApi.md#tenantinforestcontrollerupdate) | **POST** /api/HorselessHostingModel/TenantInfo/Update/{entityCollectionId} | 


<a name="tenantinforestcontrollercreate"></a>
# **TenantInfoRESTControllerCreate**
> HostingEntitiesTenantInfo TenantInfoRESTControllerCreate (HostingEntitiesTenantInfo? hostingEntitiesTenantInfo = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantInfoRESTControllerCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantInfoRESTApi(config);
            var hostingEntitiesTenantInfo = new HostingEntitiesTenantInfo?(); // HostingEntitiesTenantInfo? |  (optional) 

            try
            {
                HostingEntitiesTenantInfo result = apiInstance.TenantInfoRESTControllerCreate(hostingEntitiesTenantInfo);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantInfoRESTApi.TenantInfoRESTControllerCreate: " + e.Message );
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
 **hostingEntitiesTenantInfo** | [**HostingEntitiesTenantInfo?**](HostingEntitiesTenantInfo?.md)|  | [optional] 

### Return type

[**HostingEntitiesTenantInfo**](HostingEntitiesTenantInfo.md)

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

<a name="tenantinforestcontrollergetbyobjectid"></a>
# **TenantInfoRESTControllerGetByObjectId**
> HostingEntitiesTenantInfo TenantInfoRESTControllerGetByObjectId (string objectId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantInfoRESTControllerGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantInfoRESTApi(config);
            var objectId = "objectId_example";  // string | 

            try
            {
                HostingEntitiesTenantInfo result = apiInstance.TenantInfoRESTControllerGetByObjectId(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantInfoRESTApi.TenantInfoRESTControllerGetByObjectId: " + e.Message );
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

[**HostingEntitiesTenantInfo**](HostingEntitiesTenantInfo.md)

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

<a name="tenantinforestcontrollerupdate"></a>
# **TenantInfoRESTControllerUpdate**
> HostingEntitiesTenantInfo TenantInfoRESTControllerUpdate (string entityCollectionId, HostingEntitiesTenantInfo? hostingEntitiesTenantInfo = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantInfoRESTControllerUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantInfoRESTApi(config);
            var entityCollectionId = "entityCollectionId_example";  // string | 
            var hostingEntitiesTenantInfo = new HostingEntitiesTenantInfo?(); // HostingEntitiesTenantInfo? |  (optional) 

            try
            {
                HostingEntitiesTenantInfo result = apiInstance.TenantInfoRESTControllerUpdate(entityCollectionId, hostingEntitiesTenantInfo);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantInfoRESTApi.TenantInfoRESTControllerUpdate: " + e.Message );
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
 **entityCollectionId** | **string**|  | 
 **hostingEntitiesTenantInfo** | [**HostingEntitiesTenantInfo?**](HostingEntitiesTenantInfo?.md)|  | [optional] 

### Return type

[**HostingEntitiesTenantInfo**](HostingEntitiesTenantInfo.md)

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

