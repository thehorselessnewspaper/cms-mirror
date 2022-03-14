# TheHorselessNewspaper.CSharp.Rest.Api.TenantRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TenantRESTControllerCreate**](TenantRESTApi.md#tenantrestcontrollercreate) | **POST** /api/HorselessHostingModel/Tenant/Create | 
[**TenantRESTControllerCreate_0**](TenantRESTApi.md#tenantrestcontrollercreate_0) | **POST** /api/HorselessContentModel/Tenant/Create | 
[**TenantRESTControllerGetByObjectId**](TenantRESTApi.md#tenantrestcontrollergetbyobjectid) | **GET** /api/HorselessHostingModel/Tenant/GetByObjectId | 
[**TenantRESTControllerGetByObjectId_0**](TenantRESTApi.md#tenantrestcontrollergetbyobjectid_0) | **GET** /api/HorselessContentModel/Tenant/GetByObjectId | 
[**TenantRESTControllerUpdate**](TenantRESTApi.md#tenantrestcontrollerupdate) | **POST** /api/HorselessHostingModel/Tenant/Update/{entityCollectionId} | 
[**TenantRESTControllerUpdate_0**](TenantRESTApi.md#tenantrestcontrollerupdate_0) | **POST** /api/HorselessContentModel/Tenant/Update/{contentCollectionId} | 


<a name="tenantrestcontrollercreate"></a>
# **TenantRESTControllerCreate**
> HostingEntitiesTenant TenantRESTControllerCreate (HostingEntitiesTenant? hostingEntitiesTenant = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantRESTControllerCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRESTApi(config);
            var hostingEntitiesTenant = new HostingEntitiesTenant?(); // HostingEntitiesTenant? |  (optional) 

            try
            {
                HostingEntitiesTenant result = apiInstance.TenantRESTControllerCreate(hostingEntitiesTenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.TenantRESTControllerCreate: " + e.Message );
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
 **hostingEntitiesTenant** | [**HostingEntitiesTenant?**](HostingEntitiesTenant?.md)|  | [optional] 

### Return type

[**HostingEntitiesTenant**](HostingEntitiesTenant.md)

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

<a name="tenantrestcontrollercreate_0"></a>
# **TenantRESTControllerCreate_0**
> ContentEntitiesTenant TenantRESTControllerCreate_0 (ContentEntitiesTenant? contentEntitiesTenant = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantRESTControllerCreate_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRESTApi(config);
            var contentEntitiesTenant = new ContentEntitiesTenant?(); // ContentEntitiesTenant? |  (optional) 

            try
            {
                ContentEntitiesTenant result = apiInstance.TenantRESTControllerCreate_0(contentEntitiesTenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.TenantRESTControllerCreate_0: " + e.Message );
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
 **contentEntitiesTenant** | [**ContentEntitiesTenant?**](ContentEntitiesTenant?.md)|  | [optional] 

### Return type

[**ContentEntitiesTenant**](ContentEntitiesTenant.md)

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

<a name="tenantrestcontrollergetbyobjectid"></a>
# **TenantRESTControllerGetByObjectId**
> HostingEntitiesTenant TenantRESTControllerGetByObjectId (string objectId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantRESTControllerGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRESTApi(config);
            var objectId = "objectId_example";  // string | 

            try
            {
                HostingEntitiesTenant result = apiInstance.TenantRESTControllerGetByObjectId(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.TenantRESTControllerGetByObjectId: " + e.Message );
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

[**HostingEntitiesTenant**](HostingEntitiesTenant.md)

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

<a name="tenantrestcontrollergetbyobjectid_0"></a>
# **TenantRESTControllerGetByObjectId_0**
> ContentEntitiesTenant TenantRESTControllerGetByObjectId_0 (string objectId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantRESTControllerGetByObjectId_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRESTApi(config);
            var objectId = "objectId_example";  // string | 

            try
            {
                ContentEntitiesTenant result = apiInstance.TenantRESTControllerGetByObjectId_0(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.TenantRESTControllerGetByObjectId_0: " + e.Message );
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

[**ContentEntitiesTenant**](ContentEntitiesTenant.md)

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

<a name="tenantrestcontrollerupdate"></a>
# **TenantRESTControllerUpdate**
> HostingEntitiesTenant TenantRESTControllerUpdate (string entityCollectionId, HostingEntitiesTenant? hostingEntitiesTenant = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantRESTControllerUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRESTApi(config);
            var entityCollectionId = "entityCollectionId_example";  // string | 
            var hostingEntitiesTenant = new HostingEntitiesTenant?(); // HostingEntitiesTenant? |  (optional) 

            try
            {
                HostingEntitiesTenant result = apiInstance.TenantRESTControllerUpdate(entityCollectionId, hostingEntitiesTenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.TenantRESTControllerUpdate: " + e.Message );
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
 **hostingEntitiesTenant** | [**HostingEntitiesTenant?**](HostingEntitiesTenant?.md)|  | [optional] 

### Return type

[**HostingEntitiesTenant**](HostingEntitiesTenant.md)

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

<a name="tenantrestcontrollerupdate_0"></a>
# **TenantRESTControllerUpdate_0**
> ContentEntitiesTenant TenantRESTControllerUpdate_0 (string contentCollectionId, ContentEntitiesTenant? contentEntitiesTenant = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantRESTControllerUpdate_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var contentEntitiesTenant = new ContentEntitiesTenant?(); // ContentEntitiesTenant? |  (optional) 

            try
            {
                ContentEntitiesTenant result = apiInstance.TenantRESTControllerUpdate_0(contentCollectionId, contentEntitiesTenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.TenantRESTControllerUpdate_0: " + e.Message );
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
 **contentEntitiesTenant** | [**ContentEntitiesTenant?**](ContentEntitiesTenant?.md)|  | [optional] 

### Return type

[**ContentEntitiesTenant**](ContentEntitiesTenant.md)

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

