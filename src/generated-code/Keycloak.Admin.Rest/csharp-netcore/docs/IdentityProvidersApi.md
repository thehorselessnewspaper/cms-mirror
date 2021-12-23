# Horseless.Keycloak.Admin.Rest.Api.IdentityProvidersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmIdentityProviderImportConfigPost**](IdentityProvidersApi.md#realmidentityproviderimportconfigpost) | **POST** /{realm}/identity-provider/import-config | Import identity provider from uploaded JSON file
[**RealmIdentityProviderInstancesAliasDelete**](IdentityProvidersApi.md#realmidentityproviderinstancesaliasdelete) | **DELETE** /{realm}/identity-provider/instances/{alias} | Delete the identity provider
[**RealmIdentityProviderInstancesAliasExportGet**](IdentityProvidersApi.md#realmidentityproviderinstancesaliasexportget) | **GET** /{realm}/identity-provider/instances/{alias}/export | Export public broker configuration for identity provider
[**RealmIdentityProviderInstancesAliasGet**](IdentityProvidersApi.md#realmidentityproviderinstancesaliasget) | **GET** /{realm}/identity-provider/instances/{alias} | Get the identity provider
[**RealmIdentityProviderInstancesAliasManagementPermissionsGet**](IdentityProvidersApi.md#realmidentityproviderinstancesaliasmanagementpermissionsget) | **GET** /{realm}/identity-provider/instances/{alias}/management/permissions | Return object stating whether client Authorization permissions have been initialized or not and a reference
[**RealmIdentityProviderInstancesAliasManagementPermissionsPut**](IdentityProvidersApi.md#realmidentityproviderinstancesaliasmanagementpermissionsput) | **PUT** /{realm}/identity-provider/instances/{alias}/management/permissions | Return object stating whether client Authorization permissions have been initialized or not and a reference
[**RealmIdentityProviderInstancesAliasMapperTypesGet**](IdentityProvidersApi.md#realmidentityproviderinstancesaliasmappertypesget) | **GET** /{realm}/identity-provider/instances/{alias}/mapper-types | Get mapper types for identity provider
[**RealmIdentityProviderInstancesAliasMappersGet**](IdentityProvidersApi.md#realmidentityproviderinstancesaliasmappersget) | **GET** /{realm}/identity-provider/instances/{alias}/mappers | Get mappers for identity provider
[**RealmIdentityProviderInstancesAliasMappersIdDelete**](IdentityProvidersApi.md#realmidentityproviderinstancesaliasmappersiddelete) | **DELETE** /{realm}/identity-provider/instances/{alias}/mappers/{id} | Delete a mapper for the identity provider
[**RealmIdentityProviderInstancesAliasMappersIdGet**](IdentityProvidersApi.md#realmidentityproviderinstancesaliasmappersidget) | **GET** /{realm}/identity-provider/instances/{alias}/mappers/{id} | Get mapper by id for the identity provider
[**RealmIdentityProviderInstancesAliasMappersIdPut**](IdentityProvidersApi.md#realmidentityproviderinstancesaliasmappersidput) | **PUT** /{realm}/identity-provider/instances/{alias}/mappers/{id} | Update a mapper for the identity provider
[**RealmIdentityProviderInstancesAliasMappersPost**](IdentityProvidersApi.md#realmidentityproviderinstancesaliasmapperspost) | **POST** /{realm}/identity-provider/instances/{alias}/mappers | Add a mapper to identity provider
[**RealmIdentityProviderInstancesAliasPut**](IdentityProvidersApi.md#realmidentityproviderinstancesaliasput) | **PUT** /{realm}/identity-provider/instances/{alias} | Update the identity provider
[**RealmIdentityProviderInstancesGet**](IdentityProvidersApi.md#realmidentityproviderinstancesget) | **GET** /{realm}/identity-provider/instances | Get identity providers
[**RealmIdentityProviderInstancesPost**](IdentityProvidersApi.md#realmidentityproviderinstancespost) | **POST** /{realm}/identity-provider/instances | Create a new identity provider
[**RealmIdentityProviderProvidersProviderIdGet**](IdentityProvidersApi.md#realmidentityproviderprovidersprovideridget) | **GET** /{realm}/identity-provider/providers/{provider_id} | Get identity providers


<a name="realmidentityproviderimportconfigpost"></a>
# **RealmIdentityProviderImportConfigPost**
> Dictionary&lt;string, Object&gt; RealmIdentityProviderImportConfigPost (string realm)

Import identity provider from uploaded JSON file

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderImportConfigPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Import identity provider from uploaded JSON file
                Dictionary<string, Object> result = apiInstance.RealmIdentityProviderImportConfigPost(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderImportConfigPost: " + e.Message );
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

### Return type

**Dictionary<string, Object>**

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

<a name="realmidentityproviderinstancesaliasdelete"></a>
# **RealmIdentityProviderInstancesAliasDelete**
> void RealmIdentityProviderInstancesAliasDelete (string realm, string alias)

Delete the identity provider

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesAliasDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | 

            try
            {
                // Delete the identity provider
                apiInstance.RealmIdentityProviderInstancesAliasDelete(realm, alias);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesAliasDelete: " + e.Message );
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
 **alias** | **string**|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmidentityproviderinstancesaliasexportget"></a>
# **RealmIdentityProviderInstancesAliasExportGet**
> void RealmIdentityProviderInstancesAliasExportGet (string realm, string alias, string format = null)

Export public broker configuration for identity provider

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesAliasExportGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | 
            var format = format_example;  // string | Format to use (optional) 

            try
            {
                // Export public broker configuration for identity provider
                apiInstance.RealmIdentityProviderInstancesAliasExportGet(realm, alias, format);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesAliasExportGet: " + e.Message );
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
 **alias** | **string**|  | 
 **format** | **string**| Format to use | [optional] 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmidentityproviderinstancesaliasget"></a>
# **RealmIdentityProviderInstancesAliasGet**
> IdentityProviderRepresentation RealmIdentityProviderInstancesAliasGet (string realm, string alias)

Get the identity provider

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesAliasGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | 

            try
            {
                // Get the identity provider
                IdentityProviderRepresentation result = apiInstance.RealmIdentityProviderInstancesAliasGet(realm, alias);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesAliasGet: " + e.Message );
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
 **alias** | **string**|  | 

### Return type

[**IdentityProviderRepresentation**](IdentityProviderRepresentation.md)

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

<a name="realmidentityproviderinstancesaliasmanagementpermissionsget"></a>
# **RealmIdentityProviderInstancesAliasManagementPermissionsGet**
> ManagementPermissionReference RealmIdentityProviderInstancesAliasManagementPermissionsGet (string realm, string alias)

Return object stating whether client Authorization permissions have been initialized or not and a reference

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesAliasManagementPermissionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | 

            try
            {
                // Return object stating whether client Authorization permissions have been initialized or not and a reference
                ManagementPermissionReference result = apiInstance.RealmIdentityProviderInstancesAliasManagementPermissionsGet(realm, alias);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesAliasManagementPermissionsGet: " + e.Message );
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
 **alias** | **string**|  | 

### Return type

[**ManagementPermissionReference**](ManagementPermissionReference.md)

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

<a name="realmidentityproviderinstancesaliasmanagementpermissionsput"></a>
# **RealmIdentityProviderInstancesAliasManagementPermissionsPut**
> ManagementPermissionReference RealmIdentityProviderInstancesAliasManagementPermissionsPut (string realm, string alias, ManagementPermissionReference managementPermissionReference)

Return object stating whether client Authorization permissions have been initialized or not and a reference

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesAliasManagementPermissionsPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | 
            var managementPermissionReference = new ManagementPermissionReference(); // ManagementPermissionReference | 

            try
            {
                // Return object stating whether client Authorization permissions have been initialized or not and a reference
                ManagementPermissionReference result = apiInstance.RealmIdentityProviderInstancesAliasManagementPermissionsPut(realm, alias, managementPermissionReference);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesAliasManagementPermissionsPut: " + e.Message );
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
 **alias** | **string**|  | 
 **managementPermissionReference** | [**ManagementPermissionReference**](ManagementPermissionReference.md)|  | 

### Return type

[**ManagementPermissionReference**](ManagementPermissionReference.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmidentityproviderinstancesaliasmappertypesget"></a>
# **RealmIdentityProviderInstancesAliasMapperTypesGet**
> void RealmIdentityProviderInstancesAliasMapperTypesGet (string realm, string alias)

Get mapper types for identity provider

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesAliasMapperTypesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | 

            try
            {
                // Get mapper types for identity provider
                apiInstance.RealmIdentityProviderInstancesAliasMapperTypesGet(realm, alias);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesAliasMapperTypesGet: " + e.Message );
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
 **alias** | **string**|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmidentityproviderinstancesaliasmappersget"></a>
# **RealmIdentityProviderInstancesAliasMappersGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmIdentityProviderInstancesAliasMappersGet (string realm, string alias)

Get mappers for identity provider

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesAliasMappersGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | 

            try
            {
                // Get mappers for identity provider
                List<Dictionary<string, Object>> result = apiInstance.RealmIdentityProviderInstancesAliasMappersGet(realm, alias);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesAliasMappersGet: " + e.Message );
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
 **alias** | **string**|  | 

### Return type

**List<Dictionary<string, Object>>**

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

<a name="realmidentityproviderinstancesaliasmappersiddelete"></a>
# **RealmIdentityProviderInstancesAliasMappersIdDelete**
> void RealmIdentityProviderInstancesAliasMappersIdDelete (string realm, string alias, string id)

Delete a mapper for the identity provider

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesAliasMappersIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | 
            var id = id_example;  // string | Mapper id

            try
            {
                // Delete a mapper for the identity provider
                apiInstance.RealmIdentityProviderInstancesAliasMappersIdDelete(realm, alias, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesAliasMappersIdDelete: " + e.Message );
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
 **alias** | **string**|  | 
 **id** | **string**| Mapper id | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmidentityproviderinstancesaliasmappersidget"></a>
# **RealmIdentityProviderInstancesAliasMappersIdGet**
> IdentityProviderMapperRepresentation RealmIdentityProviderInstancesAliasMappersIdGet (string realm, string alias, string id)

Get mapper by id for the identity provider

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesAliasMappersIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | 
            var id = id_example;  // string | Mapper id

            try
            {
                // Get mapper by id for the identity provider
                IdentityProviderMapperRepresentation result = apiInstance.RealmIdentityProviderInstancesAliasMappersIdGet(realm, alias, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesAliasMappersIdGet: " + e.Message );
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
 **alias** | **string**|  | 
 **id** | **string**| Mapper id | 

### Return type

[**IdentityProviderMapperRepresentation**](IdentityProviderMapperRepresentation.md)

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

<a name="realmidentityproviderinstancesaliasmappersidput"></a>
# **RealmIdentityProviderInstancesAliasMappersIdPut**
> void RealmIdentityProviderInstancesAliasMappersIdPut (string realm, string alias, string id, IdentityProviderMapperRepresentation identityProviderMapperRepresentation)

Update a mapper for the identity provider

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesAliasMappersIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | 
            var id = id_example;  // string | Mapper id
            var identityProviderMapperRepresentation = new IdentityProviderMapperRepresentation(); // IdentityProviderMapperRepresentation | 

            try
            {
                // Update a mapper for the identity provider
                apiInstance.RealmIdentityProviderInstancesAliasMappersIdPut(realm, alias, id, identityProviderMapperRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesAliasMappersIdPut: " + e.Message );
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
 **alias** | **string**|  | 
 **id** | **string**| Mapper id | 
 **identityProviderMapperRepresentation** | [**IdentityProviderMapperRepresentation**](IdentityProviderMapperRepresentation.md)|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmidentityproviderinstancesaliasmapperspost"></a>
# **RealmIdentityProviderInstancesAliasMappersPost**
> void RealmIdentityProviderInstancesAliasMappersPost (string realm, string alias, IdentityProviderMapperRepresentation identityProviderMapperRepresentation)

Add a mapper to identity provider

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesAliasMappersPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | 
            var identityProviderMapperRepresentation = new IdentityProviderMapperRepresentation(); // IdentityProviderMapperRepresentation | 

            try
            {
                // Add a mapper to identity provider
                apiInstance.RealmIdentityProviderInstancesAliasMappersPost(realm, alias, identityProviderMapperRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesAliasMappersPost: " + e.Message );
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
 **alias** | **string**|  | 
 **identityProviderMapperRepresentation** | [**IdentityProviderMapperRepresentation**](IdentityProviderMapperRepresentation.md)|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmidentityproviderinstancesaliasput"></a>
# **RealmIdentityProviderInstancesAliasPut**
> void RealmIdentityProviderInstancesAliasPut (string realm, string alias, IdentityProviderRepresentation identityProviderRepresentation)

Update the identity provider

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesAliasPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var alias = alias_example;  // string | 
            var identityProviderRepresentation = new IdentityProviderRepresentation(); // IdentityProviderRepresentation | 

            try
            {
                // Update the identity provider
                apiInstance.RealmIdentityProviderInstancesAliasPut(realm, alias, identityProviderRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesAliasPut: " + e.Message );
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
 **alias** | **string**|  | 
 **identityProviderRepresentation** | [**IdentityProviderRepresentation**](IdentityProviderRepresentation.md)|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmidentityproviderinstancesget"></a>
# **RealmIdentityProviderInstancesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmIdentityProviderInstancesGet (string realm)

Get identity providers

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get identity providers
                List<Dictionary<string, Object>> result = apiInstance.RealmIdentityProviderInstancesGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesGet: " + e.Message );
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

### Return type

**List<Dictionary<string, Object>>**

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

<a name="realmidentityproviderinstancespost"></a>
# **RealmIdentityProviderInstancesPost**
> void RealmIdentityProviderInstancesPost (string realm, IdentityProviderRepresentation identityProviderRepresentation)

Create a new identity provider

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderInstancesPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var identityProviderRepresentation = new IdentityProviderRepresentation(); // IdentityProviderRepresentation | JSON body

            try
            {
                // Create a new identity provider
                apiInstance.RealmIdentityProviderInstancesPost(realm, identityProviderRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderInstancesPost: " + e.Message );
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
 **identityProviderRepresentation** | [**IdentityProviderRepresentation**](IdentityProviderRepresentation.md)| JSON body | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmidentityproviderprovidersprovideridget"></a>
# **RealmIdentityProviderProvidersProviderIdGet**
> void RealmIdentityProviderProvidersProviderIdGet (string realm, string providerId)

Get identity providers

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmIdentityProviderProvidersProviderIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IdentityProvidersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var providerId = providerId_example;  // string | Provider id

            try
            {
                // Get identity providers
                apiInstance.RealmIdentityProviderProvidersProviderIdGet(realm, providerId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IdentityProvidersApi.RealmIdentityProviderProvidersProviderIdGet: " + e.Message );
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
 **providerId** | **string**| Provider id | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

