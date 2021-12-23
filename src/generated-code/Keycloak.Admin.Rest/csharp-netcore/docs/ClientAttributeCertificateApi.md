# Horseless.Keycloak.Admin.Rest.Api.ClientAttributeCertificateApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmClientsIdCertificatesAttrDownloadPost**](ClientAttributeCertificateApi.md#realmclientsidcertificatesattrdownloadpost) | **POST** /{realm}/clients/{id}/certificates/{attr}/download | Get a keystore file for the client, containing private key and public certificate
[**RealmClientsIdCertificatesAttrGenerateAndDownloadPost**](ClientAttributeCertificateApi.md#realmclientsidcertificatesattrgenerateanddownloadpost) | **POST** /{realm}/clients/{id}/certificates/{attr}/generate-and-download | Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
[**RealmClientsIdCertificatesAttrGeneratePost**](ClientAttributeCertificateApi.md#realmclientsidcertificatesattrgeneratepost) | **POST** /{realm}/clients/{id}/certificates/{attr}/generate | Generate a new certificate with new key pair
[**RealmClientsIdCertificatesAttrGet**](ClientAttributeCertificateApi.md#realmclientsidcertificatesattrget) | **GET** /{realm}/clients/{id}/certificates/{attr} | Get key info
[**RealmClientsIdCertificatesAttrUploadCertificatePost**](ClientAttributeCertificateApi.md#realmclientsidcertificatesattruploadcertificatepost) | **POST** /{realm}/clients/{id}/certificates/{attr}/upload-certificate | Upload only certificate, not private key
[**RealmClientsIdCertificatesAttrUploadPost**](ClientAttributeCertificateApi.md#realmclientsidcertificatesattruploadpost) | **POST** /{realm}/clients/{id}/certificates/{attr}/upload | Upload certificate and eventually private key


<a name="realmclientsidcertificatesattrdownloadpost"></a>
# **RealmClientsIdCertificatesAttrDownloadPost**
> byte[] RealmClientsIdCertificatesAttrDownloadPost (string realm, string id, string attr, KeyStoreConfig keyStoreConfig)

Get a keystore file for the client, containing private key and public certificate

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdCertificatesAttrDownloadPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientAttributeCertificateApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var attr = attr_example;  // string | 
            var keyStoreConfig = new KeyStoreConfig(); // KeyStoreConfig | Keystore configuration as JSON

            try
            {
                // Get a keystore file for the client, containing private key and public certificate
                byte[] result = apiInstance.RealmClientsIdCertificatesAttrDownloadPost(realm, id, attr, keyStoreConfig);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientAttributeCertificateApi.RealmClientsIdCertificatesAttrDownloadPost: " + e.Message );
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
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **attr** | **string**|  | 
 **keyStoreConfig** | [**KeyStoreConfig**](KeyStoreConfig.md)| Keystore configuration as JSON | 

### Return type

**byte[]**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidcertificatesattrgenerateanddownloadpost"></a>
# **RealmClientsIdCertificatesAttrGenerateAndDownloadPost**
> byte[] RealmClientsIdCertificatesAttrGenerateAndDownloadPost (string realm, string id, string attr, KeyStoreConfig keyStoreConfig)

Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdCertificatesAttrGenerateAndDownloadPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientAttributeCertificateApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var attr = attr_example;  // string | 
            var keyStoreConfig = new KeyStoreConfig(); // KeyStoreConfig | Keystore configuration as JSON

            try
            {
                // Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
                byte[] result = apiInstance.RealmClientsIdCertificatesAttrGenerateAndDownloadPost(realm, id, attr, keyStoreConfig);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientAttributeCertificateApi.RealmClientsIdCertificatesAttrGenerateAndDownloadPost: " + e.Message );
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
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **attr** | **string**|  | 
 **keyStoreConfig** | [**KeyStoreConfig**](KeyStoreConfig.md)| Keystore configuration as JSON | 

### Return type

**byte[]**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidcertificatesattrgeneratepost"></a>
# **RealmClientsIdCertificatesAttrGeneratePost**
> CertificateRepresentation RealmClientsIdCertificatesAttrGeneratePost (string realm, string id, string attr)

Generate a new certificate with new key pair

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdCertificatesAttrGeneratePostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientAttributeCertificateApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var attr = attr_example;  // string | 

            try
            {
                // Generate a new certificate with new key pair
                CertificateRepresentation result = apiInstance.RealmClientsIdCertificatesAttrGeneratePost(realm, id, attr);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientAttributeCertificateApi.RealmClientsIdCertificatesAttrGeneratePost: " + e.Message );
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
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **attr** | **string**|  | 

### Return type

[**CertificateRepresentation**](CertificateRepresentation.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidcertificatesattrget"></a>
# **RealmClientsIdCertificatesAttrGet**
> CertificateRepresentation RealmClientsIdCertificatesAttrGet (string realm, string id, string attr)

Get key info

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdCertificatesAttrGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientAttributeCertificateApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var attr = attr_example;  // string | 

            try
            {
                // Get key info
                CertificateRepresentation result = apiInstance.RealmClientsIdCertificatesAttrGet(realm, id, attr);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientAttributeCertificateApi.RealmClientsIdCertificatesAttrGet: " + e.Message );
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
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **attr** | **string**|  | 

### Return type

[**CertificateRepresentation**](CertificateRepresentation.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidcertificatesattruploadcertificatepost"></a>
# **RealmClientsIdCertificatesAttrUploadCertificatePost**
> CertificateRepresentation RealmClientsIdCertificatesAttrUploadCertificatePost (string realm, string id, string attr)

Upload only certificate, not private key

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdCertificatesAttrUploadCertificatePostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientAttributeCertificateApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var attr = attr_example;  // string | 

            try
            {
                // Upload only certificate, not private key
                CertificateRepresentation result = apiInstance.RealmClientsIdCertificatesAttrUploadCertificatePost(realm, id, attr);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientAttributeCertificateApi.RealmClientsIdCertificatesAttrUploadCertificatePost: " + e.Message );
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
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **attr** | **string**|  | 

### Return type

[**CertificateRepresentation**](CertificateRepresentation.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientsidcertificatesattruploadpost"></a>
# **RealmClientsIdCertificatesAttrUploadPost**
> CertificateRepresentation RealmClientsIdCertificatesAttrUploadPost (string realm, string id, string attr)

Upload certificate and eventually private key

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientsIdCertificatesAttrUploadPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new ClientAttributeCertificateApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | id of client (not client-id)
            var attr = attr_example;  // string | 

            try
            {
                // Upload certificate and eventually private key
                CertificateRepresentation result = apiInstance.RealmClientsIdCertificatesAttrUploadPost(realm, id, attr);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ClientAttributeCertificateApi.RealmClientsIdCertificatesAttrUploadPost: " + e.Message );
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
 **realm** | **string**| realm name (not id!) | 
 **id** | **string**| id of client (not client-id) | 
 **attr** | **string**|  | 

### Return type

[**CertificateRepresentation**](CertificateRepresentation.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

