# TheHorselessNewspaper.CSharp.Rest.Api.AccessControlEntriesRESTApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ContentEntitiesAccessControlEntriesRESTCreate**](AccessControlEntriesRESTApi.md#contententitiesaccesscontrolentriesrestcreate) | **POST** /{__tenant__}/api/HorselessContentModel/AccessControlEntry/Create |  |
| [**ContentEntitiesAccessControlEntriesRESTGetByObjectId**](AccessControlEntriesRESTApi.md#contententitiesaccesscontrolentriesrestgetbyobjectid) | **GET** /{__tenant__}/api/HorselessContentModel/AccessControlEntry/GetByObjectId |  |
| [**ContentEntitiesAccessControlEntriesRESTGetByPageNumber**](AccessControlEntriesRESTApi.md#contententitiesaccesscontrolentriesrestgetbypagenumber) | **GET** /{__tenant__}/api/HorselessContentModel/AccessControlEntry/GetByPageNumber |  |
| [**ContentEntitiesAccessControlEntriesRESTUpdate**](AccessControlEntriesRESTApi.md#contententitiesaccesscontrolentriesrestupdate) | **POST** /{__tenant__}/api/HorselessContentModel/AccessControlEntry/Update/{contentCollectionId} |  |

<a name="contententitiesaccesscontrolentriesrestcreate"></a>
# **ContentEntitiesAccessControlEntriesRESTCreate**
> ContentEntitiesAccessControlEntry ContentEntitiesAccessControlEntriesRESTCreate (string tenant, ContentEntitiesAccessControlEntry? contentEntitiesAccessControlEntry = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesAccessControlEntriesRESTCreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new AccessControlEntriesRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var contentEntitiesAccessControlEntry = new ContentEntitiesAccessControlEntry?(); // ContentEntitiesAccessControlEntry? |  (optional) 

            try
            {
                ContentEntitiesAccessControlEntry result = apiInstance.ContentEntitiesAccessControlEntriesRESTCreate(tenant, contentEntitiesAccessControlEntry);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AccessControlEntriesRESTApi.ContentEntitiesAccessControlEntriesRESTCreate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ContentEntitiesAccessControlEntriesRESTCreateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<ContentEntitiesAccessControlEntry> response = apiInstance.ContentEntitiesAccessControlEntriesRESTCreateWithHttpInfo(tenant, contentEntitiesAccessControlEntry);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AccessControlEntriesRESTApi.ContentEntitiesAccessControlEntriesRESTCreateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tenant** | **string** |  |  |
| **contentEntitiesAccessControlEntry** | [**ContentEntitiesAccessControlEntry?**](ContentEntitiesAccessControlEntry?.md) |  | [optional]  |

### Return type

[**ContentEntitiesAccessControlEntry**](ContentEntitiesAccessControlEntry.md)

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

<a name="contententitiesaccesscontrolentriesrestgetbyobjectid"></a>
# **ContentEntitiesAccessControlEntriesRESTGetByObjectId**
> ContentEntitiesAccessControlEntry ContentEntitiesAccessControlEntriesRESTGetByObjectId (string objectId, string tenant)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesAccessControlEntriesRESTGetByObjectIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new AccessControlEntriesRESTApi(config);
            var objectId = "objectId_example";  // string | 
            var tenant = "tenant_example";  // string | 

            try
            {
                ContentEntitiesAccessControlEntry result = apiInstance.ContentEntitiesAccessControlEntriesRESTGetByObjectId(objectId, tenant);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AccessControlEntriesRESTApi.ContentEntitiesAccessControlEntriesRESTGetByObjectId: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ContentEntitiesAccessControlEntriesRESTGetByObjectIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<ContentEntitiesAccessControlEntry> response = apiInstance.ContentEntitiesAccessControlEntriesRESTGetByObjectIdWithHttpInfo(objectId, tenant);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AccessControlEntriesRESTApi.ContentEntitiesAccessControlEntriesRESTGetByObjectIdWithHttpInfo: " + e.Message);
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

[**ContentEntitiesAccessControlEntry**](ContentEntitiesAccessControlEntry.md)

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

<a name="contententitiesaccesscontrolentriesrestgetbypagenumber"></a>
# **ContentEntitiesAccessControlEntriesRESTGetByPageNumber**
> List&lt;ContentEntitiesAccessControlEntry&gt; ContentEntitiesAccessControlEntriesRESTGetByPageNumber (string tenant, int? pageSize = null, int? pageNumber = null, int? pageCount = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesAccessControlEntriesRESTGetByPageNumberExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new AccessControlEntriesRESTApi(config);
            var tenant = "tenant_example";  // string | 
            var pageSize = 10;  // int? |  (optional)  (default to 10)
            var pageNumber = 1;  // int? |  (optional)  (default to 1)
            var pageCount = 1;  // int? |  (optional)  (default to 1)

            try
            {
                List<ContentEntitiesAccessControlEntry> result = apiInstance.ContentEntitiesAccessControlEntriesRESTGetByPageNumber(tenant, pageSize, pageNumber, pageCount);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AccessControlEntriesRESTApi.ContentEntitiesAccessControlEntriesRESTGetByPageNumber: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ContentEntitiesAccessControlEntriesRESTGetByPageNumberWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<List<ContentEntitiesAccessControlEntry>> response = apiInstance.ContentEntitiesAccessControlEntriesRESTGetByPageNumberWithHttpInfo(tenant, pageSize, pageNumber, pageCount);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AccessControlEntriesRESTApi.ContentEntitiesAccessControlEntriesRESTGetByPageNumberWithHttpInfo: " + e.Message);
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

[**List&lt;ContentEntitiesAccessControlEntry&gt;**](ContentEntitiesAccessControlEntry.md)

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

<a name="contententitiesaccesscontrolentriesrestupdate"></a>
# **ContentEntitiesAccessControlEntriesRESTUpdate**
> ContentEntitiesAccessControlEntry ContentEntitiesAccessControlEntriesRESTUpdate (string contentCollectionId, string tenant, ContentEntitiesAccessControlEntry? contentEntitiesAccessControlEntry = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class ContentEntitiesAccessControlEntriesRESTUpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new AccessControlEntriesRESTApi(config);
            var contentCollectionId = "contentCollectionId_example";  // string | 
            var tenant = "tenant_example";  // string | 
            var contentEntitiesAccessControlEntry = new ContentEntitiesAccessControlEntry?(); // ContentEntitiesAccessControlEntry? |  (optional) 

            try
            {
                ContentEntitiesAccessControlEntry result = apiInstance.ContentEntitiesAccessControlEntriesRESTUpdate(contentCollectionId, tenant, contentEntitiesAccessControlEntry);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AccessControlEntriesRESTApi.ContentEntitiesAccessControlEntriesRESTUpdate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ContentEntitiesAccessControlEntriesRESTUpdateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<ContentEntitiesAccessControlEntry> response = apiInstance.ContentEntitiesAccessControlEntriesRESTUpdateWithHttpInfo(contentCollectionId, tenant, contentEntitiesAccessControlEntry);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AccessControlEntriesRESTApi.ContentEntitiesAccessControlEntriesRESTUpdateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contentCollectionId** | **string** |  |  |
| **tenant** | **string** |  |  |
| **contentEntitiesAccessControlEntry** | [**ContentEntitiesAccessControlEntry?**](ContentEntitiesAccessControlEntry?.md) |  | [optional]  |

### Return type

[**ContentEntitiesAccessControlEntry**](ContentEntitiesAccessControlEntry.md)

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

