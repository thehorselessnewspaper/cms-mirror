# Horseless.Keycloak.Admin.Rest.Api.RealmsAdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmAdminEventsDelete**](RealmsAdminApi.md#realmadmineventsdelete) | **DELETE** /{realm}/admin-events | Delete all admin events
[**RealmAdminEventsGet**](RealmsAdminApi.md#realmadmineventsget) | **GET** /{realm}/admin-events | Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
[**RealmClearKeysCachePost**](RealmsAdminApi.md#realmclearkeyscachepost) | **POST** /{realm}/clear-keys-cache | Clear cache of external public keys (Public keys of clients or Identity providers)
[**RealmClearRealmCachePost**](RealmsAdminApi.md#realmclearrealmcachepost) | **POST** /{realm}/clear-realm-cache | Clear realm cache
[**RealmClearUserCachePost**](RealmsAdminApi.md#realmclearusercachepost) | **POST** /{realm}/clear-user-cache | Clear user cache
[**RealmClientDescriptionConverterPost**](RealmsAdminApi.md#realmclientdescriptionconverterpost) | **POST** /{realm}/client-description-converter | Base path for importing clients under this realm.
[**RealmClientPoliciesPoliciesGet**](RealmsAdminApi.md#realmclientpoliciespoliciesget) | **GET** /{realm}/client-policies/policies | 
[**RealmClientPoliciesPoliciesPut**](RealmsAdminApi.md#realmclientpoliciespoliciesput) | **PUT** /{realm}/client-policies/policies | 
[**RealmClientPoliciesProfilesGet**](RealmsAdminApi.md#realmclientpoliciesprofilesget) | **GET** /{realm}/client-policies/profiles | 
[**RealmClientPoliciesProfilesPut**](RealmsAdminApi.md#realmclientpoliciesprofilesput) | **PUT** /{realm}/client-policies/profiles | 
[**RealmClientSessionStatsGet**](RealmsAdminApi.md#realmclientsessionstatsget) | **GET** /{realm}/client-session-stats | Get client session stats   Returns a JSON map.
[**RealmCredentialRegistratorsGet**](RealmsAdminApi.md#realmcredentialregistratorsget) | **GET** /{realm}/credential-registrators | 
[**RealmDefaultDefaultClientScopesClientScopeIdDelete**](RealmsAdminApi.md#realmdefaultdefaultclientscopesclientscopeiddelete) | **DELETE** /{realm}/default-default-client-scopes/{clientScopeId} | 
[**RealmDefaultDefaultClientScopesClientScopeIdPut**](RealmsAdminApi.md#realmdefaultdefaultclientscopesclientscopeidput) | **PUT** /{realm}/default-default-client-scopes/{clientScopeId} | 
[**RealmDefaultDefaultClientScopesGet**](RealmsAdminApi.md#realmdefaultdefaultclientscopesget) | **GET** /{realm}/default-default-client-scopes | Get realm default client scopes.
[**RealmDefaultGroupsGet**](RealmsAdminApi.md#realmdefaultgroupsget) | **GET** /{realm}/default-groups | Get group hierarchy.
[**RealmDefaultGroupsGroupIdDelete**](RealmsAdminApi.md#realmdefaultgroupsgroupiddelete) | **DELETE** /{realm}/default-groups/{groupId} | 
[**RealmDefaultGroupsGroupIdPut**](RealmsAdminApi.md#realmdefaultgroupsgroupidput) | **PUT** /{realm}/default-groups/{groupId} | 
[**RealmDefaultOptionalClientScopesClientScopeIdDelete**](RealmsAdminApi.md#realmdefaultoptionalclientscopesclientscopeiddelete) | **DELETE** /{realm}/default-optional-client-scopes/{clientScopeId} | 
[**RealmDefaultOptionalClientScopesClientScopeIdPut**](RealmsAdminApi.md#realmdefaultoptionalclientscopesclientscopeidput) | **PUT** /{realm}/default-optional-client-scopes/{clientScopeId} | 
[**RealmDefaultOptionalClientScopesGet**](RealmsAdminApi.md#realmdefaultoptionalclientscopesget) | **GET** /{realm}/default-optional-client-scopes | Get realm optional client scopes.
[**RealmDelete**](RealmsAdminApi.md#realmdelete) | **DELETE** /{realm} | Delete the realm
[**RealmEventsConfigGet**](RealmsAdminApi.md#realmeventsconfigget) | **GET** /{realm}/events/config | Get the events provider configuration   Returns JSON object with events provider configuration
[**RealmEventsConfigPut**](RealmsAdminApi.md#realmeventsconfigput) | **PUT** /{realm}/events/config | Update the events provider   Change the events provider and/or its configuration
[**RealmEventsDelete**](RealmsAdminApi.md#realmeventsdelete) | **DELETE** /{realm}/events | Delete all events
[**RealmEventsGet**](RealmsAdminApi.md#realmeventsget) | **GET** /{realm}/events | Get events   Returns all events, or filters them based on URL query parameters listed here
[**RealmGet**](RealmsAdminApi.md#realmget) | **GET** /{realm} | Get the top-level representation of the realm   It will not include nested information like User and Client representations.
[**RealmGroupByPathPathGet**](RealmsAdminApi.md#realmgroupbypathpathget) | **GET** /{realm}/group-by-path/{path} | 
[**RealmLdapServerCapabilitiesPost**](RealmsAdminApi.md#realmldapservercapabilitiespost) | **POST** /{realm}/ldap-server-capabilities | Get LDAP supported extensions.
[**RealmLocalizationGet**](RealmsAdminApi.md#realmlocalizationget) | **GET** /{realm}/localization | 
[**RealmLocalizationLocaleDelete**](RealmsAdminApi.md#realmlocalizationlocaledelete) | **DELETE** /{realm}/localization/{locale} | 
[**RealmLocalizationLocaleGet**](RealmsAdminApi.md#realmlocalizationlocaleget) | **GET** /{realm}/localization/{locale} | 
[**RealmLocalizationLocaleKeyDelete**](RealmsAdminApi.md#realmlocalizationlocalekeydelete) | **DELETE** /{realm}/localization/{locale}/{key} | 
[**RealmLocalizationLocaleKeyGet**](RealmsAdminApi.md#realmlocalizationlocalekeyget) | **GET** /{realm}/localization/{locale}/{key} | 
[**RealmLocalizationLocaleKeyPut**](RealmsAdminApi.md#realmlocalizationlocalekeyput) | **PUT** /{realm}/localization/{locale}/{key} | 
[**RealmLocalizationLocalePost**](RealmsAdminApi.md#realmlocalizationlocalepost) | **POST** /{realm}/localization/{locale} | 
[**RealmLogoutAllPost**](RealmsAdminApi.md#realmlogoutallpost) | **POST** /{realm}/logout-all | Removes all user sessions.
[**RealmPartialExportPost**](RealmsAdminApi.md#realmpartialexportpost) | **POST** /{realm}/partial-export | Partial export of existing realm into a JSON file.
[**RealmPartialImportPost**](RealmsAdminApi.md#realmpartialimportpost) | **POST** /{realm}/partialImport | Partial import from a JSON file to an existing realm.
[**RealmPushRevocationPost**](RealmsAdminApi.md#realmpushrevocationpost) | **POST** /{realm}/push-revocation | Push the realm’s revocation policy to any client that has an admin url associated with it.
[**RealmPut**](RealmsAdminApi.md#realmput) | **PUT** /{realm} | Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
[**RealmSessionsSessionDelete**](RealmsAdminApi.md#realmsessionssessiondelete) | **DELETE** /{realm}/sessions/{session} | Remove a specific user session.
[**RealmTestLDAPConnectionPost**](RealmsAdminApi.md#realmtestldapconnectionpost) | **POST** /{realm}/testLDAPConnection | Test LDAP connection
[**RealmTestSMTPConnectionPost**](RealmsAdminApi.md#realmtestsmtpconnectionpost) | **POST** /{realm}/testSMTPConnection | 
[**RealmUsersManagementPermissionsGet**](RealmsAdminApi.md#realmusersmanagementpermissionsget) | **GET** /{realm}/users-management-permissions | 
[**RealmUsersManagementPermissionsPut**](RealmsAdminApi.md#realmusersmanagementpermissionsput) | **PUT** /{realm}/users-management-permissions | 
[**RootPost**](RealmsAdminApi.md#rootpost) | **POST** / | Import a realm   Imports a realm from a full representation of that realm.


<a name="realmadmineventsdelete"></a>
# **RealmAdminEventsDelete**
> void RealmAdminEventsDelete (string realm)

Delete all admin events

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmAdminEventsDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Delete all admin events
                apiInstance.RealmAdminEventsDelete(realm);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmAdminEventsDelete: " + e.Message );
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

<a name="realmadmineventsget"></a>
# **RealmAdminEventsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmAdminEventsGet (string realm, string authClient = null, string authIpAddress = null, string authRealm = null, string authUser = null, string dateFrom = null, string dateTo = null, int? first = null, int? max = null, List<string> operationTypes = null, string resourcePath = null, List<string> resourceTypes = null)

Get admin events   Returns all admin events, or filters events based on URL query parameters listed here

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmAdminEventsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var authClient = authClient_example;  // string |  (optional) 
            var authIpAddress = authIpAddress_example;  // string |  (optional) 
            var authRealm = authRealm_example;  // string |  (optional) 
            var authUser = authUser_example;  // string | user id (optional) 
            var dateFrom = dateFrom_example;  // string |  (optional) 
            var dateTo = dateTo_example;  // string |  (optional) 
            var first = 56;  // int? |  (optional) 
            var max = 56;  // int? | Maximum results size (defaults to 100) (optional) 
            var operationTypes = new List<string>(); // List<string> |  (optional) 
            var resourcePath = resourcePath_example;  // string |  (optional) 
            var resourceTypes = new List<string>(); // List<string> |  (optional) 

            try
            {
                // Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
                List<Dictionary<string, Object>> result = apiInstance.RealmAdminEventsGet(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmAdminEventsGet: " + e.Message );
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
 **authClient** | **string**|  | [optional] 
 **authIpAddress** | **string**|  | [optional] 
 **authRealm** | **string**|  | [optional] 
 **authUser** | **string**| user id | [optional] 
 **dateFrom** | **string**|  | [optional] 
 **dateTo** | **string**|  | [optional] 
 **first** | **int?**|  | [optional] 
 **max** | **int?**| Maximum results size (defaults to 100) | [optional] 
 **operationTypes** | [**List&lt;string&gt;**](string.md)|  | [optional] 
 **resourcePath** | **string**|  | [optional] 
 **resourceTypes** | [**List&lt;string&gt;**](string.md)|  | [optional] 

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

<a name="realmclearkeyscachepost"></a>
# **RealmClearKeysCachePost**
> void RealmClearKeysCachePost (string realm)

Clear cache of external public keys (Public keys of clients or Identity providers)

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClearKeysCachePostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Clear cache of external public keys (Public keys of clients or Identity providers)
                apiInstance.RealmClearKeysCachePost(realm);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmClearKeysCachePost: " + e.Message );
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

<a name="realmclearrealmcachepost"></a>
# **RealmClearRealmCachePost**
> void RealmClearRealmCachePost (string realm)

Clear realm cache

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClearRealmCachePostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Clear realm cache
                apiInstance.RealmClearRealmCachePost(realm);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmClearRealmCachePost: " + e.Message );
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

<a name="realmclearusercachepost"></a>
# **RealmClearUserCachePost**
> void RealmClearUserCachePost (string realm)

Clear user cache

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClearUserCachePostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Clear user cache
                apiInstance.RealmClearUserCachePost(realm);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmClearUserCachePost: " + e.Message );
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

<a name="realmclientdescriptionconverterpost"></a>
# **RealmClientDescriptionConverterPost**
> ClientRepresentation RealmClientDescriptionConverterPost (string realm, string body)

Base path for importing clients under this realm.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientDescriptionConverterPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var body = body_example;  // string | 

            try
            {
                // Base path for importing clients under this realm.
                ClientRepresentation result = apiInstance.RealmClientDescriptionConverterPost(realm, body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmClientDescriptionConverterPost: " + e.Message );
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
 **body** | **string**|  | 

### Return type

[**ClientRepresentation**](ClientRepresentation.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmclientpoliciespoliciesget"></a>
# **RealmClientPoliciesPoliciesGet**
> ClientPoliciesRepresentation RealmClientPoliciesPoliciesGet (string realm)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientPoliciesPoliciesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                ClientPoliciesRepresentation result = apiInstance.RealmClientPoliciesPoliciesGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmClientPoliciesPoliciesGet: " + e.Message );
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

[**ClientPoliciesRepresentation**](ClientPoliciesRepresentation.md)

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

<a name="realmclientpoliciespoliciesput"></a>
# **RealmClientPoliciesPoliciesPut**
> void RealmClientPoliciesPoliciesPut (string realm, ClientPoliciesRepresentation clientPoliciesRepresentation)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientPoliciesPoliciesPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var clientPoliciesRepresentation = new ClientPoliciesRepresentation(); // ClientPoliciesRepresentation | 

            try
            {
                apiInstance.RealmClientPoliciesPoliciesPut(realm, clientPoliciesRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmClientPoliciesPoliciesPut: " + e.Message );
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
 **clientPoliciesRepresentation** | [**ClientPoliciesRepresentation**](ClientPoliciesRepresentation.md)|  | 

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

<a name="realmclientpoliciesprofilesget"></a>
# **RealmClientPoliciesProfilesGet**
> ClientProfilesRepresentation RealmClientPoliciesProfilesGet (string realm, bool? includeGlobalProfiles = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientPoliciesProfilesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var includeGlobalProfiles = true;  // bool? |  (optional) 

            try
            {
                ClientProfilesRepresentation result = apiInstance.RealmClientPoliciesProfilesGet(realm, includeGlobalProfiles);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmClientPoliciesProfilesGet: " + e.Message );
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
 **includeGlobalProfiles** | **bool?**|  | [optional] 

### Return type

[**ClientProfilesRepresentation**](ClientProfilesRepresentation.md)

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

<a name="realmclientpoliciesprofilesput"></a>
# **RealmClientPoliciesProfilesPut**
> void RealmClientPoliciesProfilesPut (string realm, ClientProfilesRepresentation clientProfilesRepresentation)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientPoliciesProfilesPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var clientProfilesRepresentation = new ClientProfilesRepresentation(); // ClientProfilesRepresentation | 

            try
            {
                apiInstance.RealmClientPoliciesProfilesPut(realm, clientProfilesRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmClientPoliciesProfilesPut: " + e.Message );
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
 **clientProfilesRepresentation** | [**ClientProfilesRepresentation**](ClientProfilesRepresentation.md)|  | 

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

<a name="realmclientsessionstatsget"></a>
# **RealmClientSessionStatsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmClientSessionStatsGet (string realm)

Get client session stats   Returns a JSON map.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmClientSessionStatsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get client session stats   Returns a JSON map.
                List<Dictionary<string, Object>> result = apiInstance.RealmClientSessionStatsGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmClientSessionStatsGet: " + e.Message );
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

<a name="realmcredentialregistratorsget"></a>
# **RealmCredentialRegistratorsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmCredentialRegistratorsGet (string realm)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmCredentialRegistratorsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                List<Dictionary<string, Object>> result = apiInstance.RealmCredentialRegistratorsGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmCredentialRegistratorsGet: " + e.Message );
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

<a name="realmdefaultdefaultclientscopesclientscopeiddelete"></a>
# **RealmDefaultDefaultClientScopesClientScopeIdDelete**
> void RealmDefaultDefaultClientScopesClientScopeIdDelete (string realm, string clientScopeId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmDefaultDefaultClientScopesClientScopeIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var clientScopeId = clientScopeId_example;  // string | 

            try
            {
                apiInstance.RealmDefaultDefaultClientScopesClientScopeIdDelete(realm, clientScopeId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmDefaultDefaultClientScopesClientScopeIdDelete: " + e.Message );
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
 **clientScopeId** | **string**|  | 

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

<a name="realmdefaultdefaultclientscopesclientscopeidput"></a>
# **RealmDefaultDefaultClientScopesClientScopeIdPut**
> void RealmDefaultDefaultClientScopesClientScopeIdPut (string realm, string clientScopeId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmDefaultDefaultClientScopesClientScopeIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var clientScopeId = clientScopeId_example;  // string | 

            try
            {
                apiInstance.RealmDefaultDefaultClientScopesClientScopeIdPut(realm, clientScopeId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmDefaultDefaultClientScopesClientScopeIdPut: " + e.Message );
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
 **clientScopeId** | **string**|  | 

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

<a name="realmdefaultdefaultclientscopesget"></a>
# **RealmDefaultDefaultClientScopesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmDefaultDefaultClientScopesGet (string realm)

Get realm default client scopes.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmDefaultDefaultClientScopesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get realm default client scopes.
                List<Dictionary<string, Object>> result = apiInstance.RealmDefaultDefaultClientScopesGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmDefaultDefaultClientScopesGet: " + e.Message );
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

<a name="realmdefaultgroupsget"></a>
# **RealmDefaultGroupsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmDefaultGroupsGet (string realm)

Get group hierarchy.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmDefaultGroupsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get group hierarchy.
                List<Dictionary<string, Object>> result = apiInstance.RealmDefaultGroupsGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmDefaultGroupsGet: " + e.Message );
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

<a name="realmdefaultgroupsgroupiddelete"></a>
# **RealmDefaultGroupsGroupIdDelete**
> void RealmDefaultGroupsGroupIdDelete (string realm, string groupId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmDefaultGroupsGroupIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var groupId = groupId_example;  // string | 

            try
            {
                apiInstance.RealmDefaultGroupsGroupIdDelete(realm, groupId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmDefaultGroupsGroupIdDelete: " + e.Message );
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
 **groupId** | **string**|  | 

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

<a name="realmdefaultgroupsgroupidput"></a>
# **RealmDefaultGroupsGroupIdPut**
> void RealmDefaultGroupsGroupIdPut (string realm, string groupId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmDefaultGroupsGroupIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var groupId = groupId_example;  // string | 

            try
            {
                apiInstance.RealmDefaultGroupsGroupIdPut(realm, groupId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmDefaultGroupsGroupIdPut: " + e.Message );
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
 **groupId** | **string**|  | 

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

<a name="realmdefaultoptionalclientscopesclientscopeiddelete"></a>
# **RealmDefaultOptionalClientScopesClientScopeIdDelete**
> void RealmDefaultOptionalClientScopesClientScopeIdDelete (string realm, string clientScopeId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmDefaultOptionalClientScopesClientScopeIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var clientScopeId = clientScopeId_example;  // string | 

            try
            {
                apiInstance.RealmDefaultOptionalClientScopesClientScopeIdDelete(realm, clientScopeId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmDefaultOptionalClientScopesClientScopeIdDelete: " + e.Message );
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
 **clientScopeId** | **string**|  | 

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

<a name="realmdefaultoptionalclientscopesclientscopeidput"></a>
# **RealmDefaultOptionalClientScopesClientScopeIdPut**
> void RealmDefaultOptionalClientScopesClientScopeIdPut (string realm, string clientScopeId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmDefaultOptionalClientScopesClientScopeIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var clientScopeId = clientScopeId_example;  // string | 

            try
            {
                apiInstance.RealmDefaultOptionalClientScopesClientScopeIdPut(realm, clientScopeId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmDefaultOptionalClientScopesClientScopeIdPut: " + e.Message );
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
 **clientScopeId** | **string**|  | 

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

<a name="realmdefaultoptionalclientscopesget"></a>
# **RealmDefaultOptionalClientScopesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmDefaultOptionalClientScopesGet (string realm)

Get realm optional client scopes.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmDefaultOptionalClientScopesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get realm optional client scopes.
                List<Dictionary<string, Object>> result = apiInstance.RealmDefaultOptionalClientScopesGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmDefaultOptionalClientScopesGet: " + e.Message );
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

<a name="realmdelete"></a>
# **RealmDelete**
> void RealmDelete (string realm)

Delete the realm

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Delete the realm
                apiInstance.RealmDelete(realm);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmDelete: " + e.Message );
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

<a name="realmeventsconfigget"></a>
# **RealmEventsConfigGet**
> RealmEventsConfigRepresentation RealmEventsConfigGet (string realm)

Get the events provider configuration   Returns JSON object with events provider configuration

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmEventsConfigGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get the events provider configuration   Returns JSON object with events provider configuration
                RealmEventsConfigRepresentation result = apiInstance.RealmEventsConfigGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmEventsConfigGet: " + e.Message );
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

[**RealmEventsConfigRepresentation**](RealmEventsConfigRepresentation.md)

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

<a name="realmeventsconfigput"></a>
# **RealmEventsConfigPut**
> void RealmEventsConfigPut (string realm, RealmEventsConfigRepresentation realmEventsConfigRepresentation)

Update the events provider   Change the events provider and/or its configuration

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmEventsConfigPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var realmEventsConfigRepresentation = new RealmEventsConfigRepresentation(); // RealmEventsConfigRepresentation | 

            try
            {
                // Update the events provider   Change the events provider and/or its configuration
                apiInstance.RealmEventsConfigPut(realm, realmEventsConfigRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmEventsConfigPut: " + e.Message );
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
 **realmEventsConfigRepresentation** | [**RealmEventsConfigRepresentation**](RealmEventsConfigRepresentation.md)|  | 

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

<a name="realmeventsdelete"></a>
# **RealmEventsDelete**
> void RealmEventsDelete (string realm)

Delete all events

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmEventsDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Delete all events
                apiInstance.RealmEventsDelete(realm);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmEventsDelete: " + e.Message );
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

<a name="realmeventsget"></a>
# **RealmEventsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmEventsGet (string realm, string _client = null, string dateFrom = null, string dateTo = null, int? first = null, string ipAddress = null, int? max = null, List<string> type = null, string user = null)

Get events   Returns all events, or filters them based on URL query parameters listed here

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmEventsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var _client = _client_example;  // string | App or oauth client name (optional) 
            var dateFrom = dateFrom_example;  // string | From date (optional) 
            var dateTo = dateTo_example;  // string | To date (optional) 
            var first = 56;  // int? | Paging offset (optional) 
            var ipAddress = ipAddress_example;  // string | IP address (optional) 
            var max = 56;  // int? | Maximum results size (defaults to 100) (optional) 
            var type = new List<string>(); // List<string> | The types of events to return (optional) 
            var user = user_example;  // string | User id (optional) 

            try
            {
                // Get events   Returns all events, or filters them based on URL query parameters listed here
                List<Dictionary<string, Object>> result = apiInstance.RealmEventsGet(realm, _client, dateFrom, dateTo, first, ipAddress, max, type, user);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmEventsGet: " + e.Message );
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
 **_client** | **string**| App or oauth client name | [optional] 
 **dateFrom** | **string**| From date | [optional] 
 **dateTo** | **string**| To date | [optional] 
 **first** | **int?**| Paging offset | [optional] 
 **ipAddress** | **string**| IP address | [optional] 
 **max** | **int?**| Maximum results size (defaults to 100) | [optional] 
 **type** | [**List&lt;string&gt;**](string.md)| The types of events to return | [optional] 
 **user** | **string**| User id | [optional] 

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

<a name="realmget"></a>
# **RealmGet**
> RealmRepresentation RealmGet (string realm)

Get the top-level representation of the realm   It will not include nested information like User and Client representations.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Get the top-level representation of the realm   It will not include nested information like User and Client representations.
                RealmRepresentation result = apiInstance.RealmGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmGet: " + e.Message );
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

[**RealmRepresentation**](RealmRepresentation.md)

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

<a name="realmgroupbypathpathget"></a>
# **RealmGroupByPathPathGet**
> GroupRepresentation RealmGroupByPathPathGet (string realm, string path)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmGroupByPathPathGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var path = path_example;  // string | 

            try
            {
                GroupRepresentation result = apiInstance.RealmGroupByPathPathGet(realm, path);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmGroupByPathPathGet: " + e.Message );
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
 **path** | **string**|  | 

### Return type

[**GroupRepresentation**](GroupRepresentation.md)

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

<a name="realmldapservercapabilitiespost"></a>
# **RealmLdapServerCapabilitiesPost**
> void RealmLdapServerCapabilitiesPost (string realm, TestLdapConnectionRepresentation testLdapConnectionRepresentation)

Get LDAP supported extensions.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmLdapServerCapabilitiesPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var testLdapConnectionRepresentation = new TestLdapConnectionRepresentation(); // TestLdapConnectionRepresentation | LDAP configuration

            try
            {
                // Get LDAP supported extensions.
                apiInstance.RealmLdapServerCapabilitiesPost(realm, testLdapConnectionRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmLdapServerCapabilitiesPost: " + e.Message );
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
 **testLdapConnectionRepresentation** | [**TestLdapConnectionRepresentation**](TestLdapConnectionRepresentation.md)| LDAP configuration | 

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

<a name="realmlocalizationget"></a>
# **RealmLocalizationGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmLocalizationGet (string realm)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmLocalizationGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                List<Dictionary<string, Object>> result = apiInstance.RealmLocalizationGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmLocalizationGet: " + e.Message );
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

<a name="realmlocalizationlocaledelete"></a>
# **RealmLocalizationLocaleDelete**
> void RealmLocalizationLocaleDelete (string realm, string locale)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmLocalizationLocaleDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var locale = locale_example;  // string | 

            try
            {
                apiInstance.RealmLocalizationLocaleDelete(realm, locale);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmLocalizationLocaleDelete: " + e.Message );
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
 **locale** | **string**|  | 

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

<a name="realmlocalizationlocaleget"></a>
# **RealmLocalizationLocaleGet**
> Dictionary&lt;string, Object&gt; RealmLocalizationLocaleGet (string realm, string locale)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmLocalizationLocaleGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var locale = locale_example;  // string | 

            try
            {
                Dictionary<string, Object> result = apiInstance.RealmLocalizationLocaleGet(realm, locale);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmLocalizationLocaleGet: " + e.Message );
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
 **locale** | **string**|  | 

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

<a name="realmlocalizationlocalekeydelete"></a>
# **RealmLocalizationLocaleKeyDelete**
> void RealmLocalizationLocaleKeyDelete (string realm, string locale, string key)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmLocalizationLocaleKeyDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var locale = locale_example;  // string | 
            var key = key_example;  // string | 

            try
            {
                apiInstance.RealmLocalizationLocaleKeyDelete(realm, locale, key);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmLocalizationLocaleKeyDelete: " + e.Message );
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
 **locale** | **string**|  | 
 **key** | **string**|  | 

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

<a name="realmlocalizationlocalekeyget"></a>
# **RealmLocalizationLocaleKeyGet**
> string RealmLocalizationLocaleKeyGet (string realm, string locale, string key)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmLocalizationLocaleKeyGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var locale = locale_example;  // string | 
            var key = key_example;  // string | 

            try
            {
                string result = apiInstance.RealmLocalizationLocaleKeyGet(realm, locale, key);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmLocalizationLocaleKeyGet: " + e.Message );
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
 **locale** | **string**|  | 
 **key** | **string**|  | 

### Return type

**string**

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmlocalizationlocalekeyput"></a>
# **RealmLocalizationLocaleKeyPut**
> void RealmLocalizationLocaleKeyPut (string realm, string locale, string key, string body)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmLocalizationLocaleKeyPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var locale = locale_example;  // string | 
            var key = key_example;  // string | 
            var body = body_example;  // string | 

            try
            {
                apiInstance.RealmLocalizationLocaleKeyPut(realm, locale, key, body);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmLocalizationLocaleKeyPut: " + e.Message );
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
 **locale** | **string**|  | 
 **key** | **string**|  | 
 **body** | **string**|  | 

### Return type

void (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **2XX** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="realmlocalizationlocalepost"></a>
# **RealmLocalizationLocalePost**
> void RealmLocalizationLocalePost (string realm, string locale, Dictionary<string, Object> requestBody)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmLocalizationLocalePostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var locale = locale_example;  // string | 
            var requestBody = new Dictionary<string, Object>(); // Dictionary<string, Object> | 

            try
            {
                apiInstance.RealmLocalizationLocalePost(realm, locale, requestBody);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmLocalizationLocalePost: " + e.Message );
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
 **locale** | **string**|  | 
 **requestBody** | [**Dictionary&lt;string, Object&gt;**](Object.md)|  | 

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

<a name="realmlogoutallpost"></a>
# **RealmLogoutAllPost**
> GlobalRequestResult RealmLogoutAllPost (string realm)

Removes all user sessions.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmLogoutAllPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Removes all user sessions.
                GlobalRequestResult result = apiInstance.RealmLogoutAllPost(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmLogoutAllPost: " + e.Message );
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

[**GlobalRequestResult**](GlobalRequestResult.md)

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

<a name="realmpartialexportpost"></a>
# **RealmPartialExportPost**
> RealmRepresentation RealmPartialExportPost (string realm, bool? exportClients = null, bool? exportGroupsAndRoles = null)

Partial export of existing realm into a JSON file.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmPartialExportPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var exportClients = true;  // bool? |  (optional) 
            var exportGroupsAndRoles = true;  // bool? |  (optional) 

            try
            {
                // Partial export of existing realm into a JSON file.
                RealmRepresentation result = apiInstance.RealmPartialExportPost(realm, exportClients, exportGroupsAndRoles);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmPartialExportPost: " + e.Message );
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
 **exportClients** | **bool?**|  | [optional] 
 **exportGroupsAndRoles** | **bool?**|  | [optional] 

### Return type

[**RealmRepresentation**](RealmRepresentation.md)

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

<a name="realmpartialimportpost"></a>
# **RealmPartialImportPost**
> void RealmPartialImportPost (string realm, PartialImportRepresentation partialImportRepresentation)

Partial import from a JSON file to an existing realm.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmPartialImportPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var partialImportRepresentation = new PartialImportRepresentation(); // PartialImportRepresentation | 

            try
            {
                // Partial import from a JSON file to an existing realm.
                apiInstance.RealmPartialImportPost(realm, partialImportRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmPartialImportPost: " + e.Message );
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
 **partialImportRepresentation** | [**PartialImportRepresentation**](PartialImportRepresentation.md)|  | 

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

<a name="realmpushrevocationpost"></a>
# **RealmPushRevocationPost**
> void RealmPushRevocationPost (string realm)

Push the realm’s revocation policy to any client that has an admin url associated with it.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmPushRevocationPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                // Push the realm’s revocation policy to any client that has an admin url associated with it.
                apiInstance.RealmPushRevocationPost(realm);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmPushRevocationPost: " + e.Message );
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

<a name="realmput"></a>
# **RealmPut**
> void RealmPut (string realm, RealmRepresentation realmRepresentation)

Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var realmRepresentation = new RealmRepresentation(); // RealmRepresentation | 

            try
            {
                // Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
                apiInstance.RealmPut(realm, realmRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmPut: " + e.Message );
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
 **realmRepresentation** | [**RealmRepresentation**](RealmRepresentation.md)|  | 

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

<a name="realmsessionssessiondelete"></a>
# **RealmSessionsSessionDelete**
> void RealmSessionsSessionDelete (string realm, string session)

Remove a specific user session.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmSessionsSessionDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var session = session_example;  // string | 

            try
            {
                // Remove a specific user session.
                apiInstance.RealmSessionsSessionDelete(realm, session);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmSessionsSessionDelete: " + e.Message );
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
 **session** | **string**|  | 

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

<a name="realmtestldapconnectionpost"></a>
# **RealmTestLDAPConnectionPost**
> void RealmTestLDAPConnectionPost (string realm, TestLdapConnectionRepresentation testLdapConnectionRepresentation)

Test LDAP connection

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmTestLDAPConnectionPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var testLdapConnectionRepresentation = new TestLdapConnectionRepresentation(); // TestLdapConnectionRepresentation | 

            try
            {
                // Test LDAP connection
                apiInstance.RealmTestLDAPConnectionPost(realm, testLdapConnectionRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmTestLDAPConnectionPost: " + e.Message );
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
 **testLdapConnectionRepresentation** | [**TestLdapConnectionRepresentation**](TestLdapConnectionRepresentation.md)|  | 

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

<a name="realmtestsmtpconnectionpost"></a>
# **RealmTestSMTPConnectionPost**
> void RealmTestSMTPConnectionPost (string realm, Dictionary<string, Object> requestBody)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmTestSMTPConnectionPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var requestBody = new Dictionary<string, Object>(); // Dictionary<string, Object> | 

            try
            {
                apiInstance.RealmTestSMTPConnectionPost(realm, requestBody);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmTestSMTPConnectionPost: " + e.Message );
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
 **requestBody** | [**Dictionary&lt;string, Object&gt;**](Object.md)|  | 

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

<a name="realmusersmanagementpermissionsget"></a>
# **RealmUsersManagementPermissionsGet**
> ManagementPermissionReference RealmUsersManagementPermissionsGet (string realm)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersManagementPermissionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                ManagementPermissionReference result = apiInstance.RealmUsersManagementPermissionsGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmUsersManagementPermissionsGet: " + e.Message );
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

<a name="realmusersmanagementpermissionsput"></a>
# **RealmUsersManagementPermissionsPut**
> ManagementPermissionReference RealmUsersManagementPermissionsPut (string realm, ManagementPermissionReference managementPermissionReference)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RealmUsersManagementPermissionsPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var managementPermissionReference = new ManagementPermissionReference(); // ManagementPermissionReference | 

            try
            {
                ManagementPermissionReference result = apiInstance.RealmUsersManagementPermissionsPut(realm, managementPermissionReference);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RealmUsersManagementPermissionsPut: " + e.Message );
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

<a name="rootpost"></a>
# **RootPost**
> void RootPost (RealmRepresentation realmRepresentation)

Import a realm   Imports a realm from a full representation of that realm.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Horseless.Keycloak.Admin.Rest.Api;
using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Model;

namespace Example
{
    public class RootPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new RealmsAdminApi(config);
            var realmRepresentation = new RealmRepresentation(); // RealmRepresentation | JSON representation of the realm

            try
            {
                // Import a realm   Imports a realm from a full representation of that realm.
                apiInstance.RootPost(realmRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RealmsAdminApi.RootPost: " + e.Message );
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
 **realmRepresentation** | [**RealmRepresentation**](RealmRepresentation.md)| JSON representation of the realm | 

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

