# TheHorselessNewspaper.CSharp.Rest.Api.TenantRegistrationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TenantRegistrationControllerApprove**](TenantRegistrationApi.md#tenantregistrationcontrollerapprove) | **GET** /Approve/{tenantId} | 
[**TenantRegistrationControllerApprove_0**](TenantRegistrationApi.md#tenantregistrationcontrollerapprove_0) | **POST** /Approve/{tenantId} | 


<a name="tenantregistrationcontrollerapprove"></a>
# **TenantRegistrationControllerApprove**
> void TenantRegistrationControllerApprove (string tenantId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantRegistrationControllerApproveExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRegistrationApi(config);
            var tenantId = "tenantId_example";  // string | 

            try
            {
                apiInstance.TenantRegistrationControllerApprove(tenantId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRegistrationApi.TenantRegistrationControllerApprove: " + e.Message );
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
 **tenantId** | **string**|  | 

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

<a name="tenantregistrationcontrollerapprove_0"></a>
# **TenantRegistrationControllerApprove_0**
> void TenantRegistrationControllerApprove_0 (string tenantId, string displayName, string tenantIdentifier, Guid? id = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TheHorselessNewspaper.CSharp.Rest.Api;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace Example
{
    public class TenantRegistrationControllerApprove_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new TenantRegistrationApi(config);
            var tenantId = "tenantId_example";  // string | 
            var displayName = "displayName_example";  // string | 
            var tenantIdentifier = "tenantIdentifier_example";  // string | 
            var id = "id_example";  // Guid? |  (optional) 

            try
            {
                apiInstance.TenantRegistrationControllerApprove_0(tenantId, displayName, tenantIdentifier, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TenantRegistrationApi.TenantRegistrationControllerApprove_0: " + e.Message );
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
 **tenantId** | **string**|  | 
 **displayName** | **string**|  | 
 **tenantIdentifier** | **string**|  | 
 **id** | **Guid?**|  | [optional] 

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

