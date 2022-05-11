# TheHorselessNewspaper.CSharp.Rest.Api.TenantRESTApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContentEntitiesTenantRESTGetByObjectId**](TenantRESTApi.md#contententitiestenantrestgetbyobjectid) | **GET** /{__tenant__}/api/HorselessContentModel/Tenant/GetByObjectId | 
[**ContentEntitiesTenantRESTUpdate**](TenantRESTApi.md#contententitiestenantrestupdate) | **POST** /{__tenant__}/api/HorselessContentModel/Tenant/Update/{contentCollectionId} | 
[**ContentEntitiesTenantRESTUpdateProperties**](TenantRESTApi.md#contententitiestenantrestupdateproperties) | **POST** /{__tenant__}/api/HorselessContentModel/Tenant/UpdateProperties/{contentCollectionId} | 
[**HostingEntitiesTenantRESTCreate**](TenantRESTApi.md#hostingentitiestenantrestcreate) | **POST** /api/HorselessHostingModel/TenantREST/HostingEntitiesTenantCreate | 
[**HostingEntitiesTenantRESTGetByObjectId**](TenantRESTApi.md#hostingentitiestenantrestgetbyobjectid) | **GET** /api/HorselessHostingModel/TenantREST/HostingEntitiesTenantGetByObjectId | 
[**HostingEntitiesTenantRESTUpdate**](TenantRESTApi.md#hostingentitiestenantrestupdate) | **POST** /api/HorselessHostingModel/TenantREST/HostingEntitiesTenantUpdate/{entityCollectionId} | 
[**TenantApiHorselessContentModelTenantCreatePost**](TenantRESTApi.md#tenantapihorselesscontentmodeltenantcreatepost) | **POST** /{__tenant__}/api/HorselessContentModel/Tenant/Create | 


<a name="contententitiestenantrestgetbyobjectid"></a>
# **ContentEntitiesTenantRESTGetByObjectId**
> ContentEntitiesTenant ContentEntitiesTenantRESTGetByObjectId (string objectId, string tenant)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesTenantRESTGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRESTApi(config);
            var objectId = "objectId_example";  // string | 
            var tenant = "tenant_example";  // string | 

            try
            {
                ContentEntitiesTenant result = apiInstance.ContentEntitiesTenantRESTGetByObjectId(objectId, tenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.ContentEntitiesTenantRESTGetByObjectId: " + e.Message );
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

<a name="contententitiestenantrestupdate"></a>
# **ContentEntitiesTenantRESTUpdate**
> ContentEntitiesTenant ContentEntitiesTenantRESTUpdate (string contentCollectionId, string tenant, ContentEntitiesTenant? contentEntitiesTenant = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesTenantRESTUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var tenant = "tenant_example";  // string | 
            var contentEntitiesTenant = new ContentEntitiesTenant?(); // ContentEntitiesTenant? |  (optional) 

            try
            {
                ContentEntitiesTenant result = apiInstance.ContentEntitiesTenantRESTUpdate(contentCollectionId, tenant, contentEntitiesTenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.ContentEntitiesTenantRESTUpdate: " + e.Message );
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

<a name="contententitiestenantrestupdateproperties"></a>
# **ContentEntitiesTenantRESTUpdateProperties**
> ContentEntitiesTenant ContentEntitiesTenantRESTUpdateProperties (string contentCollectionId, string tenant, List<string>? updatedProperties = null, ContentEntitiesTenant? contentEntitiesTenant = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesTenantRESTUpdatePropertiesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var tenant = "tenant_example";  // string | 
            var updatedProperties = new List<string>?(); // List<string>? |  (optional) 
            var contentEntitiesTenant = new ContentEntitiesTenant?(); // ContentEntitiesTenant? |  (optional) 

            try
            {
                ContentEntitiesTenant result = apiInstance.ContentEntitiesTenantRESTUpdateProperties(contentCollectionId, tenant, updatedProperties, contentEntitiesTenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.ContentEntitiesTenantRESTUpdateProperties: " + e.Message );
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
 **updatedProperties** | [**List&lt;string&gt;?**](string.md)|  | [optional] 
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

<a name="hostingentitiestenantrestcreate"></a>
# **HostingEntitiesTenantRESTCreate**
> HostingEntitiesTenant HostingEntitiesTenantRESTCreate (HostingEntitiesTenant? hostingEntitiesTenant = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HostingEntitiesTenantRESTCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRESTApi(config);
            var hostingEntitiesTenant = new HostingEntitiesTenant?(); // HostingEntitiesTenant? |  (optional) 

            try
            {
                HostingEntitiesTenant result = apiInstance.HostingEntitiesTenantRESTCreate(hostingEntitiesTenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.HostingEntitiesTenantRESTCreate: " + e.Message );
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

<a name="hostingentitiestenantrestgetbyobjectid"></a>
# **HostingEntitiesTenantRESTGetByObjectId**
> HostingEntitiesTenant HostingEntitiesTenantRESTGetByObjectId (string objectId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HostingEntitiesTenantRESTGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRESTApi(config);
            var objectId = "objectId_example";  // string | 

            try
            {
                HostingEntitiesTenant result = apiInstance.HostingEntitiesTenantRESTGetByObjectId(objectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.HostingEntitiesTenantRESTGetByObjectId: " + e.Message );
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

<a name="hostingentitiestenantrestupdate"></a>
# **HostingEntitiesTenantRESTUpdate**
> HostingEntitiesTenant HostingEntitiesTenantRESTUpdate (string entityCollectionId, HostingEntitiesTenant? hostingEntitiesTenant = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class HostingEntitiesTenantRESTUpdateExample
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
                HostingEntitiesTenant result = apiInstance.HostingEntitiesTenantRESTUpdate(entityCollectionId, hostingEntitiesTenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.HostingEntitiesTenantRESTUpdate: " + e.Message );
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

<a name="tenantapihorselesscontentmodeltenantcreatepost"></a>
# **TenantApiHorselessContentModelTenantCreatePost**
> ContentEntitiesTenant TenantApiHorselessContentModelTenantCreatePost (string tenant, ContentEntitiesTenant? contentEntitiesTenant = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantApiHorselessContentModelTenantCreatePostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var contentEntitiesTenant = new ContentEntitiesTenant?(); // ContentEntitiesTenant? |  (optional) 

            try
            {
                ContentEntitiesTenant result = apiInstance.TenantApiHorselessContentModelTenantCreatePost(tenant, contentEntitiesTenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRESTApi.TenantApiHorselessContentModelTenantCreatePost: " + e.Message );
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

