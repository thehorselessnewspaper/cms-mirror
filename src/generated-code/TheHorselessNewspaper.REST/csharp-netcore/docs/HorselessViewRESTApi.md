# TheHorselessNewspaper.CSharp.Rest.Api.HorselessViewRESTApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ContentEntitiesHorselessViewRESTCreate**](HorselessViewRESTApi.md#contententitieshorselessviewrestcreate) | **POST** /{__tenant__}/api/HorselessContentModel/HorselessView/Create |  |
| [**ContentEntitiesHorselessViewRESTGetByObjectId**](HorselessViewRESTApi.md#contententitieshorselessviewrestgetbyobjectid) | **GET** /{__tenant__}/api/HorselessContentModel/HorselessView/GetByObjectId |  |
| [**ContentEntitiesHorselessViewRESTGetByPageNumber**](HorselessViewRESTApi.md#contententitieshorselessviewrestgetbypagenumber) | **GET** /{__tenant__}/api/HorselessContentModel/HorselessView/GetByPageNumber |  |
| [**ContentEntitiesHorselessViewRESTUpdate**](HorselessViewRESTApi.md#contententitieshorselessviewrestupdate) | **POST** /{__tenant__}/api/HorselessContentModel/HorselessView/Update/{contentCollectionId} |  |

<a name="contententitieshorselessviewrestcreate"></a>
# **ContentEntitiesHorselessViewRESTCreate**
> ContentEntitiesHorselessView ContentEntitiesHorselessViewRESTCreate (string tenant, ContentEntitiesHorselessView? contentEntitiesHorselessView = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHorselessViewRESTCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessViewRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var contentEntitiesHorselessView = new ContentEntitiesHorselessView?(); // ContentEntitiesHorselessView? |  (optional) 

            try
            {
                ContentEntitiesHorselessView result = apiInstance.ContentEntitiesHorselessViewRESTCreate(tenant, contentEntitiesHorselessView);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessViewRESTApi.ContentEntitiesHorselessViewRESTCreate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ContentEntitiesHorselessViewRESTCreateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<ContentEntitiesHorselessView> response = apiInstance.ContentEntitiesHorselessViewRESTCreateWithHttpInfo(tenant, contentEntitiesHorselessView);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HorselessViewRESTApi.ContentEntitiesHorselessViewRESTCreateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tenant** | **string** |  |  |
| **contentEntitiesHorselessView** | [**ContentEntitiesHorselessView?**](ContentEntitiesHorselessView?.md) |  | [optional]  |

### Return type

[**ContentEntitiesHorselessView**](ContentEntitiesHorselessView.md)

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

<a name="contententitieshorselessviewrestgetbyobjectid"></a>
# **ContentEntitiesHorselessViewRESTGetByObjectId**
> ContentEntitiesHorselessView ContentEntitiesHorselessViewRESTGetByObjectId (string objectId, string tenant)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHorselessViewRESTGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessViewRESTApi(config);
            var objectId = "objectId_example";  // string | 
            var tenant = "tenant_example";  // string | 

            try
            {
                ContentEntitiesHorselessView result = apiInstance.ContentEntitiesHorselessViewRESTGetByObjectId(objectId, tenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessViewRESTApi.ContentEntitiesHorselessViewRESTGetByObjectId: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ContentEntitiesHorselessViewRESTGetByObjectIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<ContentEntitiesHorselessView> response = apiInstance.ContentEntitiesHorselessViewRESTGetByObjectIdWithHttpInfo(objectId, tenant);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HorselessViewRESTApi.ContentEntitiesHorselessViewRESTGetByObjectIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **objectId** | **string** |  |  |
| **tenant** | **string** |  |  |

### Return type

[**ContentEntitiesHorselessView**](ContentEntitiesHorselessView.md)

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

<a name="contententitieshorselessviewrestgetbypagenumber"></a>
# **ContentEntitiesHorselessViewRESTGetByPageNumber**
> List&lt;ContentEntitiesHorselessView&gt; ContentEntitiesHorselessViewRESTGetByPageNumber (string tenant, int? pageSize = null, int? pageNumber = null, int? pageCount = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHorselessViewRESTGetByPageNumberExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessViewRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var pageSize = 10;  // int? |  (optional)  (default to 10)
            var pageNumber = 1;  // int? |  (optional)  (default to 1)
            var pageCount = 1;  // int? |  (optional)  (default to 1)

            try
            {
                List<ContentEntitiesHorselessView> result = apiInstance.ContentEntitiesHorselessViewRESTGetByPageNumber(tenant, pageSize, pageNumber, pageCount);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessViewRESTApi.ContentEntitiesHorselessViewRESTGetByPageNumber: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ContentEntitiesHorselessViewRESTGetByPageNumberWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<List<ContentEntitiesHorselessView>> response = apiInstance.ContentEntitiesHorselessViewRESTGetByPageNumberWithHttpInfo(tenant, pageSize, pageNumber, pageCount);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HorselessViewRESTApi.ContentEntitiesHorselessViewRESTGetByPageNumberWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tenant** | **string** |  |  |
| **pageSize** | **int?** |  | [optional] [default to 10] |
| **pageNumber** | **int?** |  | [optional] [default to 1] |
| **pageCount** | **int?** |  | [optional] [default to 1] |

### Return type

[**List&lt;ContentEntitiesHorselessView&gt;**](ContentEntitiesHorselessView.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="contententitieshorselessviewrestupdate"></a>
# **ContentEntitiesHorselessViewRESTUpdate**
> ContentEntitiesHorselessView ContentEntitiesHorselessViewRESTUpdate (string contentCollectionId, string tenant, ContentEntitiesHorselessView? contentEntitiesHorselessView = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesHorselessViewRESTUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new HorselessViewRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var tenant = "tenant_example";  // string | 
            var contentEntitiesHorselessView = new ContentEntitiesHorselessView?(); // ContentEntitiesHorselessView? |  (optional) 

            try
            {
                ContentEntitiesHorselessView result = apiInstance.ContentEntitiesHorselessViewRESTUpdate(contentCollectionId, tenant, contentEntitiesHorselessView);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HorselessViewRESTApi.ContentEntitiesHorselessViewRESTUpdate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ContentEntitiesHorselessViewRESTUpdateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<ContentEntitiesHorselessView> response = apiInstance.ContentEntitiesHorselessViewRESTUpdateWithHttpInfo(contentCollectionId, tenant, contentEntitiesHorselessView);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HorselessViewRESTApi.ContentEntitiesHorselessViewRESTUpdateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contentCollectionId** | **string** |  |  |
| **tenant** | **string** |  |  |
| **contentEntitiesHorselessView** | [**ContentEntitiesHorselessView?**](ContentEntitiesHorselessView?.md) |  | [optional]  |

### Return type

[**ContentEntitiesHorselessView**](ContentEntitiesHorselessView.md)

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

