# Org.OpenAPITools.Api.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RealmUsersCountGet**](UsersApi.md#realmuserscountget) | **GET** /{realm}/users/count | Returns the number of users that match the given criteria.
[**RealmUsersGet**](UsersApi.md#realmusersget) | **GET** /{realm}/users | Get users   Returns a stream of users, filtered according to query parameters.
[**RealmUsersIdConfiguredUserStorageCredentialTypesGet**](UsersApi.md#realmusersidconfigureduserstoragecredentialtypesget) | **GET** /{realm}/users/{id}/configured-user-storage-credential-types | Return credential types, which are provided by the user storage where user is stored.
[**RealmUsersIdConsentsClientDelete**](UsersApi.md#realmusersidconsentsclientdelete) | **DELETE** /{realm}/users/{id}/consents/{client} | Revoke consent and offline tokens for particular client from user
[**RealmUsersIdConsentsGet**](UsersApi.md#realmusersidconsentsget) | **GET** /{realm}/users/{id}/consents | Get consents granted by the user
[**RealmUsersIdCredentialsCredentialIdDelete**](UsersApi.md#realmusersidcredentialscredentialiddelete) | **DELETE** /{realm}/users/{id}/credentials/{credentialId} | Remove a credential for a user
[**RealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPost**](UsersApi.md#realmusersidcredentialscredentialidmoveafternewpreviouscredentialidpost) | **POST** /{realm}/users/{id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId} | Move a credential to a position behind another credential
[**RealmUsersIdCredentialsCredentialIdMoveToFirstPost**](UsersApi.md#realmusersidcredentialscredentialidmovetofirstpost) | **POST** /{realm}/users/{id}/credentials/{credentialId}/moveToFirst | Move a credential to a first position in the credentials list of the user
[**RealmUsersIdCredentialsCredentialIdUserLabelPut**](UsersApi.md#realmusersidcredentialscredentialiduserlabelput) | **PUT** /{realm}/users/{id}/credentials/{credentialId}/userLabel | Update a credential label for a user
[**RealmUsersIdCredentialsGet**](UsersApi.md#realmusersidcredentialsget) | **GET** /{realm}/users/{id}/credentials | 
[**RealmUsersIdDelete**](UsersApi.md#realmusersiddelete) | **DELETE** /{realm}/users/{id} | Delete the user
[**RealmUsersIdDisableCredentialTypesPut**](UsersApi.md#realmusersiddisablecredentialtypesput) | **PUT** /{realm}/users/{id}/disable-credential-types | Disable all credentials for a user of a specific type
[**RealmUsersIdExecuteActionsEmailPut**](UsersApi.md#realmusersidexecuteactionsemailput) | **PUT** /{realm}/users/{id}/execute-actions-email | Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
[**RealmUsersIdFederatedIdentityGet**](UsersApi.md#realmusersidfederatedidentityget) | **GET** /{realm}/users/{id}/federated-identity | Get social logins associated with the user
[**RealmUsersIdFederatedIdentityProviderDelete**](UsersApi.md#realmusersidfederatedidentityproviderdelete) | **DELETE** /{realm}/users/{id}/federated-identity/{provider} | Remove a social login provider from user
[**RealmUsersIdFederatedIdentityProviderPost**](UsersApi.md#realmusersidfederatedidentityproviderpost) | **POST** /{realm}/users/{id}/federated-identity/{provider} | Add a social login provider to the user
[**RealmUsersIdGet**](UsersApi.md#realmusersidget) | **GET** /{realm}/users/{id} | Get representation of the user
[**RealmUsersIdGroupsCountGet**](UsersApi.md#realmusersidgroupscountget) | **GET** /{realm}/users/{id}/groups/count | 
[**RealmUsersIdGroupsGet**](UsersApi.md#realmusersidgroupsget) | **GET** /{realm}/users/{id}/groups | 
[**RealmUsersIdGroupsGroupIdDelete**](UsersApi.md#realmusersidgroupsgroupiddelete) | **DELETE** /{realm}/users/{id}/groups/{groupId} | 
[**RealmUsersIdGroupsGroupIdPut**](UsersApi.md#realmusersidgroupsgroupidput) | **PUT** /{realm}/users/{id}/groups/{groupId} | 
[**RealmUsersIdImpersonationPost**](UsersApi.md#realmusersidimpersonationpost) | **POST** /{realm}/users/{id}/impersonation | Impersonate the user
[**RealmUsersIdLogoutPost**](UsersApi.md#realmusersidlogoutpost) | **POST** /{realm}/users/{id}/logout | Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
[**RealmUsersIdOfflineSessionsClientUuidGet**](UsersApi.md#realmusersidofflinesessionsclientuuidget) | **GET** /{realm}/users/{id}/offline-sessions/{clientUuid} | Get offline sessions associated with the user and client
[**RealmUsersIdPut**](UsersApi.md#realmusersidput) | **PUT** /{realm}/users/{id} | Update the user
[**RealmUsersIdResetPasswordPut**](UsersApi.md#realmusersidresetpasswordput) | **PUT** /{realm}/users/{id}/reset-password | Set up a new password for the user.
[**RealmUsersIdSendVerifyEmailPut**](UsersApi.md#realmusersidsendverifyemailput) | **PUT** /{realm}/users/{id}/send-verify-email | Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
[**RealmUsersIdSessionsGet**](UsersApi.md#realmusersidsessionsget) | **GET** /{realm}/users/{id}/sessions | Get sessions associated with the user
[**RealmUsersPost**](UsersApi.md#realmuserspost) | **POST** /{realm}/users | Create a new user   Username must be unique.
[**RealmUsersProfileGet**](UsersApi.md#realmusersprofileget) | **GET** /{realm}/users/profile | 
[**RealmUsersProfilePut**](UsersApi.md#realmusersprofileput) | **PUT** /{realm}/users/profile | 


<a name="realmuserscountget"></a>
# **RealmUsersCountGet**
> int RealmUsersCountGet (string realm, string email = null, bool? emailVerified = null, string firstName = null, string lastName = null, string search = null, string username = null)

Returns the number of users that match the given criteria.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersCountGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var email = email_example;  // string | email filter (optional) 
            var emailVerified = true;  // bool? |  (optional) 
            var firstName = firstName_example;  // string | first name filter (optional) 
            var lastName = lastName_example;  // string | last name filter (optional) 
            var search = search_example;  // string | arbitrary search string for all the fields below (optional) 
            var username = username_example;  // string | username filter (optional) 

            try
            {
                // Returns the number of users that match the given criteria.
                int result = apiInstance.RealmUsersCountGet(realm, email, emailVerified, firstName, lastName, search, username);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersCountGet: " + e.Message );
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
 **email** | **string**| email filter | [optional] 
 **emailVerified** | **bool?**|  | [optional] 
 **firstName** | **string**| first name filter | [optional] 
 **lastName** | **string**| last name filter | [optional] 
 **search** | **string**| arbitrary search string for all the fields below | [optional] 
 **username** | **string**| username filter | [optional] 

### Return type

**int**

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

<a name="realmusersget"></a>
# **RealmUsersGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersGet (string realm, bool? briefRepresentation = null, string email = null, bool? emailVerified = null, bool? enabled = null, bool? exact = null, int? first = null, string firstName = null, string idpAlias = null, string idpUserId = null, string lastName = null, int? max = null, string q = null, string search = null, string username = null)

Get users   Returns a stream of users, filtered according to query parameters.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var briefRepresentation = true;  // bool? | Boolean which defines whether brief representations are returned (default: false) (optional) 
            var email = email_example;  // string | A String contained in email, or the complete email, if param \"exact\" is true (optional) 
            var emailVerified = true;  // bool? | whether the email has been verified (optional) 
            var enabled = true;  // bool? | Boolean representing if user is enabled or not (optional) 
            var exact = true;  // bool? | Boolean which defines whether the params \"last\", \"first\", \"email\" and \"username\" must match exactly (optional) 
            var first = 56;  // int? | Pagination offset (optional) 
            var firstName = firstName_example;  // string | A String contained in firstName, or the complete firstName, if param \"exact\" is true (optional) 
            var idpAlias = idpAlias_example;  // string | The alias of an Identity Provider linked to the user (optional) 
            var idpUserId = idpUserId_example;  // string | The userId at an Identity Provider linked to the user (optional) 
            var lastName = lastName_example;  // string | A String contained in lastName, or the complete lastName, if param \"exact\" is true (optional) 
            var max = 56;  // int? | Maximum results size (defaults to 100) (optional) 
            var q = q_example;  // string | A query to search for custom attributes, in the format 'key1:value2 key2:value2' (optional) 
            var search = search_example;  // string | A String contained in username, first or last name, or email (optional) 
            var username = username_example;  // string | A String contained in username, or the complete username, if param \"exact\" is true (optional) 

            try
            {
                // Get users   Returns a stream of users, filtered according to query parameters.
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersGet(realm, briefRepresentation, email, emailVerified, enabled, exact, first, firstName, idpAlias, idpUserId, lastName, max, q, search, username);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersGet: " + e.Message );
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
 **briefRepresentation** | **bool?**| Boolean which defines whether brief representations are returned (default: false) | [optional] 
 **email** | **string**| A String contained in email, or the complete email, if param \&quot;exact\&quot; is true | [optional] 
 **emailVerified** | **bool?**| whether the email has been verified | [optional] 
 **enabled** | **bool?**| Boolean representing if user is enabled or not | [optional] 
 **exact** | **bool?**| Boolean which defines whether the params \&quot;last\&quot;, \&quot;first\&quot;, \&quot;email\&quot; and \&quot;username\&quot; must match exactly | [optional] 
 **first** | **int?**| Pagination offset | [optional] 
 **firstName** | **string**| A String contained in firstName, or the complete firstName, if param \&quot;exact\&quot; is true | [optional] 
 **idpAlias** | **string**| The alias of an Identity Provider linked to the user | [optional] 
 **idpUserId** | **string**| The userId at an Identity Provider linked to the user | [optional] 
 **lastName** | **string**| A String contained in lastName, or the complete lastName, if param \&quot;exact\&quot; is true | [optional] 
 **max** | **int?**| Maximum results size (defaults to 100) | [optional] 
 **q** | **string**| A query to search for custom attributes, in the format &#39;key1:value2 key2:value2&#39; | [optional] 
 **search** | **string**| A String contained in username, first or last name, or email | [optional] 
 **username** | **string**| A String contained in username, or the complete username, if param \&quot;exact\&quot; is true | [optional] 

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

<a name="realmusersidconfigureduserstoragecredentialtypesget"></a>
# **RealmUsersIdConfiguredUserStorageCredentialTypesGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdConfiguredUserStorageCredentialTypesGet (string realm, string id)

Return credential types, which are provided by the user storage where user is stored.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdConfiguredUserStorageCredentialTypesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id

            try
            {
                // Return credential types, which are provided by the user storage where user is stored.
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdConfiguredUserStorageCredentialTypesGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdConfiguredUserStorageCredentialTypesGet: " + e.Message );
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
 **id** | **string**| User id | 

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

<a name="realmusersidconsentsclientdelete"></a>
# **RealmUsersIdConsentsClientDelete**
> void RealmUsersIdConsentsClientDelete (string realm, string id, string _client)

Revoke consent and offline tokens for particular client from user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdConsentsClientDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var _client = _client_example;  // string | Client id

            try
            {
                // Revoke consent and offline tokens for particular client from user
                apiInstance.RealmUsersIdConsentsClientDelete(realm, id, _client);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdConsentsClientDelete: " + e.Message );
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
 **id** | **string**| User id | 
 **_client** | **string**| Client id | 

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

<a name="realmusersidconsentsget"></a>
# **RealmUsersIdConsentsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdConsentsGet (string realm, string id)

Get consents granted by the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdConsentsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id

            try
            {
                // Get consents granted by the user
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdConsentsGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdConsentsGet: " + e.Message );
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
 **id** | **string**| User id | 

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

<a name="realmusersidcredentialscredentialiddelete"></a>
# **RealmUsersIdCredentialsCredentialIdDelete**
> void RealmUsersIdCredentialsCredentialIdDelete (string realm, string id, string credentialId)

Remove a credential for a user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdCredentialsCredentialIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var credentialId = credentialId_example;  // string | 

            try
            {
                // Remove a credential for a user
                apiInstance.RealmUsersIdCredentialsCredentialIdDelete(realm, id, credentialId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdCredentialsCredentialIdDelete: " + e.Message );
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
 **id** | **string**| User id | 
 **credentialId** | **string**|  | 

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

<a name="realmusersidcredentialscredentialidmoveafternewpreviouscredentialidpost"></a>
# **RealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPost**
> void RealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPost (string realm, string id, string credentialId, string newPreviousCredentialId)

Move a credential to a position behind another credential

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var credentialId = credentialId_example;  // string | The credential to move
            var newPreviousCredentialId = newPreviousCredentialId_example;  // string | The credential that will be the previous element in the list. If set to null, the moved credential will be the first element in the list.

            try
            {
                // Move a credential to a position behind another credential
                apiInstance.RealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPost(realm, id, credentialId, newPreviousCredentialId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPost: " + e.Message );
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
 **id** | **string**| User id | 
 **credentialId** | **string**| The credential to move | 
 **newPreviousCredentialId** | **string**| The credential that will be the previous element in the list. If set to null, the moved credential will be the first element in the list. | 

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

<a name="realmusersidcredentialscredentialidmovetofirstpost"></a>
# **RealmUsersIdCredentialsCredentialIdMoveToFirstPost**
> void RealmUsersIdCredentialsCredentialIdMoveToFirstPost (string realm, string id, string credentialId)

Move a credential to a first position in the credentials list of the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdCredentialsCredentialIdMoveToFirstPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var credentialId = credentialId_example;  // string | The credential to move

            try
            {
                // Move a credential to a first position in the credentials list of the user
                apiInstance.RealmUsersIdCredentialsCredentialIdMoveToFirstPost(realm, id, credentialId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdCredentialsCredentialIdMoveToFirstPost: " + e.Message );
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
 **id** | **string**| User id | 
 **credentialId** | **string**| The credential to move | 

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

<a name="realmusersidcredentialscredentialiduserlabelput"></a>
# **RealmUsersIdCredentialsCredentialIdUserLabelPut**
> void RealmUsersIdCredentialsCredentialIdUserLabelPut (string realm, string id, string credentialId, string body)

Update a credential label for a user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdCredentialsCredentialIdUserLabelPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var credentialId = credentialId_example;  // string | 
            var body = body_example;  // string | 

            try
            {
                // Update a credential label for a user
                apiInstance.RealmUsersIdCredentialsCredentialIdUserLabelPut(realm, id, credentialId, body);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdCredentialsCredentialIdUserLabelPut: " + e.Message );
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
 **id** | **string**| User id | 
 **credentialId** | **string**|  | 
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

<a name="realmusersidcredentialsget"></a>
# **RealmUsersIdCredentialsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdCredentialsGet (string realm, string id)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdCredentialsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id

            try
            {
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdCredentialsGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdCredentialsGet: " + e.Message );
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
 **id** | **string**| User id | 

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

<a name="realmusersiddelete"></a>
# **RealmUsersIdDelete**
> void RealmUsersIdDelete (string realm, string id)

Delete the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id

            try
            {
                // Delete the user
                apiInstance.RealmUsersIdDelete(realm, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdDelete: " + e.Message );
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
 **id** | **string**| User id | 

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

<a name="realmusersiddisablecredentialtypesput"></a>
# **RealmUsersIdDisableCredentialTypesPut**
> void RealmUsersIdDisableCredentialTypesPut (string realm, string id, List<string> requestBody)

Disable all credentials for a user of a specific type

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdDisableCredentialTypesPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var requestBody = new List<string>(); // List<string> | 

            try
            {
                // Disable all credentials for a user of a specific type
                apiInstance.RealmUsersIdDisableCredentialTypesPut(realm, id, requestBody);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdDisableCredentialTypesPut: " + e.Message );
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
 **id** | **string**| User id | 
 **requestBody** | [**List&lt;string&gt;**](string.md)|  | 

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

<a name="realmusersidexecuteactionsemailput"></a>
# **RealmUsersIdExecuteActionsEmailPut**
> void RealmUsersIdExecuteActionsEmailPut (string realm, string id, List<string> requestBody, string clientId = null, int? lifespan = null, string redirectUri = null)

Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdExecuteActionsEmailPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var requestBody = new List<string>(); // List<string> | required actions the user needs to complete
            var clientId = clientId_example;  // string | Client id (optional) 
            var lifespan = 56;  // int? | Number of seconds after which the generated token expires (optional) 
            var redirectUri = redirectUri_example;  // string | Redirect uri (optional) 

            try
            {
                // Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
                apiInstance.RealmUsersIdExecuteActionsEmailPut(realm, id, requestBody, clientId, lifespan, redirectUri);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdExecuteActionsEmailPut: " + e.Message );
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
 **id** | **string**| User id | 
 **requestBody** | [**List&lt;string&gt;**](string.md)| required actions the user needs to complete | 
 **clientId** | **string**| Client id | [optional] 
 **lifespan** | **int?**| Number of seconds after which the generated token expires | [optional] 
 **redirectUri** | **string**| Redirect uri | [optional] 

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

<a name="realmusersidfederatedidentityget"></a>
# **RealmUsersIdFederatedIdentityGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdFederatedIdentityGet (string realm, string id)

Get social logins associated with the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdFederatedIdentityGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id

            try
            {
                // Get social logins associated with the user
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdFederatedIdentityGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdFederatedIdentityGet: " + e.Message );
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
 **id** | **string**| User id | 

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

<a name="realmusersidfederatedidentityproviderdelete"></a>
# **RealmUsersIdFederatedIdentityProviderDelete**
> void RealmUsersIdFederatedIdentityProviderDelete (string realm, string id, string provider)

Remove a social login provider from user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdFederatedIdentityProviderDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var provider = provider_example;  // string | Social login provider id

            try
            {
                // Remove a social login provider from user
                apiInstance.RealmUsersIdFederatedIdentityProviderDelete(realm, id, provider);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdFederatedIdentityProviderDelete: " + e.Message );
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
 **id** | **string**| User id | 
 **provider** | **string**| Social login provider id | 

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

<a name="realmusersidfederatedidentityproviderpost"></a>
# **RealmUsersIdFederatedIdentityProviderPost**
> void RealmUsersIdFederatedIdentityProviderPost (string realm, string id, string provider, FederatedIdentityRepresentation federatedIdentityRepresentation)

Add a social login provider to the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdFederatedIdentityProviderPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var provider = provider_example;  // string | Social login provider id
            var federatedIdentityRepresentation = new FederatedIdentityRepresentation(); // FederatedIdentityRepresentation | 

            try
            {
                // Add a social login provider to the user
                apiInstance.RealmUsersIdFederatedIdentityProviderPost(realm, id, provider, federatedIdentityRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdFederatedIdentityProviderPost: " + e.Message );
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
 **id** | **string**| User id | 
 **provider** | **string**| Social login provider id | 
 **federatedIdentityRepresentation** | [**FederatedIdentityRepresentation**](FederatedIdentityRepresentation.md)|  | 

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

<a name="realmusersidget"></a>
# **RealmUsersIdGet**
> UserRepresentation RealmUsersIdGet (string realm, string id)

Get representation of the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id

            try
            {
                // Get representation of the user
                UserRepresentation result = apiInstance.RealmUsersIdGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdGet: " + e.Message );
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
 **id** | **string**| User id | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

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

<a name="realmusersidgroupscountget"></a>
# **RealmUsersIdGroupsCountGet**
> Dictionary&lt;string, Object&gt; RealmUsersIdGroupsCountGet (string realm, string id, string search = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdGroupsCountGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var search = search_example;  // string |  (optional) 

            try
            {
                Dictionary<string, Object> result = apiInstance.RealmUsersIdGroupsCountGet(realm, id, search);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdGroupsCountGet: " + e.Message );
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
 **id** | **string**| User id | 
 **search** | **string**|  | [optional] 

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

<a name="realmusersidgroupsget"></a>
# **RealmUsersIdGroupsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdGroupsGet (string realm, string id, bool? briefRepresentation = null, int? first = null, int? max = null, string search = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdGroupsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var briefRepresentation = true;  // bool? |  (optional) 
            var first = 56;  // int? |  (optional) 
            var max = 56;  // int? |  (optional) 
            var search = search_example;  // string |  (optional) 

            try
            {
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdGroupsGet(realm, id, briefRepresentation, first, max, search);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdGroupsGet: " + e.Message );
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
 **id** | **string**| User id | 
 **briefRepresentation** | **bool?**|  | [optional] 
 **first** | **int?**|  | [optional] 
 **max** | **int?**|  | [optional] 
 **search** | **string**|  | [optional] 

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

<a name="realmusersidgroupsgroupiddelete"></a>
# **RealmUsersIdGroupsGroupIdDelete**
> void RealmUsersIdGroupsGroupIdDelete (string realm, string id, string groupId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdGroupsGroupIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var groupId = groupId_example;  // string | 

            try
            {
                apiInstance.RealmUsersIdGroupsGroupIdDelete(realm, id, groupId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdGroupsGroupIdDelete: " + e.Message );
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
 **id** | **string**| User id | 
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

<a name="realmusersidgroupsgroupidput"></a>
# **RealmUsersIdGroupsGroupIdPut**
> void RealmUsersIdGroupsGroupIdPut (string realm, string id, string groupId)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdGroupsGroupIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var groupId = groupId_example;  // string | 

            try
            {
                apiInstance.RealmUsersIdGroupsGroupIdPut(realm, id, groupId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdGroupsGroupIdPut: " + e.Message );
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
 **id** | **string**| User id | 
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

<a name="realmusersidimpersonationpost"></a>
# **RealmUsersIdImpersonationPost**
> Dictionary&lt;string, Object&gt; RealmUsersIdImpersonationPost (string realm, string id)

Impersonate the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdImpersonationPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id

            try
            {
                // Impersonate the user
                Dictionary<string, Object> result = apiInstance.RealmUsersIdImpersonationPost(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdImpersonationPost: " + e.Message );
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
 **id** | **string**| User id | 

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

<a name="realmusersidlogoutpost"></a>
# **RealmUsersIdLogoutPost**
> void RealmUsersIdLogoutPost (string realm, string id)

Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdLogoutPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id

            try
            {
                // Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
                apiInstance.RealmUsersIdLogoutPost(realm, id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdLogoutPost: " + e.Message );
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
 **id** | **string**| User id | 

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

<a name="realmusersidofflinesessionsclientuuidget"></a>
# **RealmUsersIdOfflineSessionsClientUuidGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdOfflineSessionsClientUuidGet (string realm, string id, string clientUuid)

Get offline sessions associated with the user and client

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdOfflineSessionsClientUuidGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var clientUuid = clientUuid_example;  // string | 

            try
            {
                // Get offline sessions associated with the user and client
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdOfflineSessionsClientUuidGet(realm, id, clientUuid);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdOfflineSessionsClientUuidGet: " + e.Message );
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
 **id** | **string**| User id | 
 **clientUuid** | **string**|  | 

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

<a name="realmusersidput"></a>
# **RealmUsersIdPut**
> void RealmUsersIdPut (string realm, string id, UserRepresentation userRepresentation)

Update the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var userRepresentation = new UserRepresentation(); // UserRepresentation | 

            try
            {
                // Update the user
                apiInstance.RealmUsersIdPut(realm, id, userRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdPut: " + e.Message );
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
 **id** | **string**| User id | 
 **userRepresentation** | [**UserRepresentation**](UserRepresentation.md)|  | 

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

<a name="realmusersidresetpasswordput"></a>
# **RealmUsersIdResetPasswordPut**
> void RealmUsersIdResetPasswordPut (string realm, string id, CredentialRepresentation credentialRepresentation)

Set up a new password for the user.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdResetPasswordPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var credentialRepresentation = new CredentialRepresentation(); // CredentialRepresentation | The representation must contain a rawPassword with the plain-text password

            try
            {
                // Set up a new password for the user.
                apiInstance.RealmUsersIdResetPasswordPut(realm, id, credentialRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdResetPasswordPut: " + e.Message );
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
 **id** | **string**| User id | 
 **credentialRepresentation** | [**CredentialRepresentation**](CredentialRepresentation.md)| The representation must contain a rawPassword with the plain-text password | 

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

<a name="realmusersidsendverifyemailput"></a>
# **RealmUsersIdSendVerifyEmailPut**
> void RealmUsersIdSendVerifyEmailPut (string realm, string id, string clientId = null, string redirectUri = null)

Send an email-verification email to the user   An email contains a link the user can click to verify their email address.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdSendVerifyEmailPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id
            var clientId = clientId_example;  // string | Client id (optional) 
            var redirectUri = redirectUri_example;  // string | Redirect uri (optional) 

            try
            {
                // Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
                apiInstance.RealmUsersIdSendVerifyEmailPut(realm, id, clientId, redirectUri);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdSendVerifyEmailPut: " + e.Message );
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
 **id** | **string**| User id | 
 **clientId** | **string**| Client id | [optional] 
 **redirectUri** | **string**| Redirect uri | [optional] 

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

<a name="realmusersidsessionsget"></a>
# **RealmUsersIdSessionsGet**
> List&lt;Dictionary&lt;string, Object&gt;&gt; RealmUsersIdSessionsGet (string realm, string id)

Get sessions associated with the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersIdSessionsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var id = id_example;  // string | User id

            try
            {
                // Get sessions associated with the user
                List<Dictionary<string, Object>> result = apiInstance.RealmUsersIdSessionsGet(realm, id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersIdSessionsGet: " + e.Message );
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
 **id** | **string**| User id | 

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

<a name="realmuserspost"></a>
# **RealmUsersPost**
> void RealmUsersPost (string realm, UserRepresentation userRepresentation)

Create a new user   Username must be unique.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var userRepresentation = new UserRepresentation(); // UserRepresentation | 

            try
            {
                // Create a new user   Username must be unique.
                apiInstance.RealmUsersPost(realm, userRepresentation);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersPost: " + e.Message );
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
 **userRepresentation** | [**UserRepresentation**](UserRepresentation.md)|  | 

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

<a name="realmusersprofileget"></a>
# **RealmUsersProfileGet**
> string RealmUsersProfileGet (string realm)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersProfileGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)

            try
            {
                string result = apiInstance.RealmUsersProfileGet(realm);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersProfileGet: " + e.Message );
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

**string**

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

<a name="realmusersprofileput"></a>
# **RealmUsersProfilePut**
> void RealmUsersProfilePut (string realm, string body)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RealmUsersProfilePutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            // Configure Bearer token for authorization: access_token
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var realm = realm_example;  // string | realm name (not id!)
            var body = body_example;  // string | 

            try
            {
                apiInstance.RealmUsersProfilePut(realm, body);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.RealmUsersProfilePut: " + e.Message );
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

