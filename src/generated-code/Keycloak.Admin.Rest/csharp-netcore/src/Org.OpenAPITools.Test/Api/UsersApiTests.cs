/*
 * Keycloak Admin REST API
 *
 * This is a REST API reference for the Keycloak Admin
 *
 * The version of the OpenAPI document: 1
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using Xunit;

using Org.OpenAPITools.Client;
using Org.OpenAPITools.Api;
// uncomment below to import models
//using Org.OpenAPITools.Model;

namespace Org.OpenAPITools.Test.Api
{
    /// <summary>
    ///  Class for testing UsersApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class UsersApiTests : IDisposable
    {
        private UsersApi instance;

        public UsersApiTests()
        {
            instance = new UsersApi();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of UsersApi
        /// </summary>
        [Fact]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsType' UsersApi
            //Assert.IsType<UsersApi>(instance);
        }

        /// <summary>
        /// Test RealmUsersCountGet
        /// </summary>
        [Fact]
        public void RealmUsersCountGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string email = null;
            //bool? emailVerified = null;
            //string firstName = null;
            //string lastName = null;
            //string search = null;
            //string username = null;
            //var response = instance.RealmUsersCountGet(realm, email, emailVerified, firstName, lastName, search, username);
            //Assert.IsType<int>(response);
        }

        /// <summary>
        /// Test RealmUsersGet
        /// </summary>
        [Fact]
        public void RealmUsersGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //bool? briefRepresentation = null;
            //string email = null;
            //bool? emailVerified = null;
            //bool? enabled = null;
            //bool? exact = null;
            //int? first = null;
            //string firstName = null;
            //string idpAlias = null;
            //string idpUserId = null;
            //string lastName = null;
            //int? max = null;
            //string q = null;
            //string search = null;
            //string username = null;
            //var response = instance.RealmUsersGet(realm, briefRepresentation, email, emailVerified, enabled, exact, first, firstName, idpAlias, idpUserId, lastName, max, q, search, username);
            //Assert.IsType<List<Dictionary<string, Object>>>(response);
        }

        /// <summary>
        /// Test RealmUsersIdConfiguredUserStorageCredentialTypesGet
        /// </summary>
        [Fact]
        public void RealmUsersIdConfiguredUserStorageCredentialTypesGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //var response = instance.RealmUsersIdConfiguredUserStorageCredentialTypesGet(realm, id);
            //Assert.IsType<List<Dictionary<string, Object>>>(response);
        }

        /// <summary>
        /// Test RealmUsersIdConsentsClientDelete
        /// </summary>
        [Fact]
        public void RealmUsersIdConsentsClientDeleteTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //string _client = null;
            //instance.RealmUsersIdConsentsClientDelete(realm, id, _client);
        }

        /// <summary>
        /// Test RealmUsersIdConsentsGet
        /// </summary>
        [Fact]
        public void RealmUsersIdConsentsGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //var response = instance.RealmUsersIdConsentsGet(realm, id);
            //Assert.IsType<List<Dictionary<string, Object>>>(response);
        }

        /// <summary>
        /// Test RealmUsersIdCredentialsCredentialIdDelete
        /// </summary>
        [Fact]
        public void RealmUsersIdCredentialsCredentialIdDeleteTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //string credentialId = null;
            //instance.RealmUsersIdCredentialsCredentialIdDelete(realm, id, credentialId);
        }

        /// <summary>
        /// Test RealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPost
        /// </summary>
        [Fact]
        public void RealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //string credentialId = null;
            //string newPreviousCredentialId = null;
            //instance.RealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPost(realm, id, credentialId, newPreviousCredentialId);
        }

        /// <summary>
        /// Test RealmUsersIdCredentialsCredentialIdMoveToFirstPost
        /// </summary>
        [Fact]
        public void RealmUsersIdCredentialsCredentialIdMoveToFirstPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //string credentialId = null;
            //instance.RealmUsersIdCredentialsCredentialIdMoveToFirstPost(realm, id, credentialId);
        }

        /// <summary>
        /// Test RealmUsersIdCredentialsCredentialIdUserLabelPut
        /// </summary>
        [Fact]
        public void RealmUsersIdCredentialsCredentialIdUserLabelPutTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //string credentialId = null;
            //string body = null;
            //instance.RealmUsersIdCredentialsCredentialIdUserLabelPut(realm, id, credentialId, body);
        }

        /// <summary>
        /// Test RealmUsersIdCredentialsGet
        /// </summary>
        [Fact]
        public void RealmUsersIdCredentialsGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //var response = instance.RealmUsersIdCredentialsGet(realm, id);
            //Assert.IsType<List<Dictionary<string, Object>>>(response);
        }

        /// <summary>
        /// Test RealmUsersIdDelete
        /// </summary>
        [Fact]
        public void RealmUsersIdDeleteTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //instance.RealmUsersIdDelete(realm, id);
        }

        /// <summary>
        /// Test RealmUsersIdDisableCredentialTypesPut
        /// </summary>
        [Fact]
        public void RealmUsersIdDisableCredentialTypesPutTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //List<string> requestBody = null;
            //instance.RealmUsersIdDisableCredentialTypesPut(realm, id, requestBody);
        }

        /// <summary>
        /// Test RealmUsersIdExecuteActionsEmailPut
        /// </summary>
        [Fact]
        public void RealmUsersIdExecuteActionsEmailPutTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //List<string> requestBody = null;
            //string clientId = null;
            //int? lifespan = null;
            //string redirectUri = null;
            //instance.RealmUsersIdExecuteActionsEmailPut(realm, id, requestBody, clientId, lifespan, redirectUri);
        }

        /// <summary>
        /// Test RealmUsersIdFederatedIdentityGet
        /// </summary>
        [Fact]
        public void RealmUsersIdFederatedIdentityGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //var response = instance.RealmUsersIdFederatedIdentityGet(realm, id);
            //Assert.IsType<List<Dictionary<string, Object>>>(response);
        }

        /// <summary>
        /// Test RealmUsersIdFederatedIdentityProviderDelete
        /// </summary>
        [Fact]
        public void RealmUsersIdFederatedIdentityProviderDeleteTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //string provider = null;
            //instance.RealmUsersIdFederatedIdentityProviderDelete(realm, id, provider);
        }

        /// <summary>
        /// Test RealmUsersIdFederatedIdentityProviderPost
        /// </summary>
        [Fact]
        public void RealmUsersIdFederatedIdentityProviderPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //string provider = null;
            //FederatedIdentityRepresentation federatedIdentityRepresentation = null;
            //instance.RealmUsersIdFederatedIdentityProviderPost(realm, id, provider, federatedIdentityRepresentation);
        }

        /// <summary>
        /// Test RealmUsersIdGet
        /// </summary>
        [Fact]
        public void RealmUsersIdGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //var response = instance.RealmUsersIdGet(realm, id);
            //Assert.IsType<UserRepresentation>(response);
        }

        /// <summary>
        /// Test RealmUsersIdGroupsCountGet
        /// </summary>
        [Fact]
        public void RealmUsersIdGroupsCountGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //string search = null;
            //var response = instance.RealmUsersIdGroupsCountGet(realm, id, search);
            //Assert.IsType<Dictionary<string, Object>>(response);
        }

        /// <summary>
        /// Test RealmUsersIdGroupsGet
        /// </summary>
        [Fact]
        public void RealmUsersIdGroupsGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //bool? briefRepresentation = null;
            //int? first = null;
            //int? max = null;
            //string search = null;
            //var response = instance.RealmUsersIdGroupsGet(realm, id, briefRepresentation, first, max, search);
            //Assert.IsType<List<Dictionary<string, Object>>>(response);
        }

        /// <summary>
        /// Test RealmUsersIdGroupsGroupIdDelete
        /// </summary>
        [Fact]
        public void RealmUsersIdGroupsGroupIdDeleteTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //string groupId = null;
            //instance.RealmUsersIdGroupsGroupIdDelete(realm, id, groupId);
        }

        /// <summary>
        /// Test RealmUsersIdGroupsGroupIdPut
        /// </summary>
        [Fact]
        public void RealmUsersIdGroupsGroupIdPutTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //string groupId = null;
            //instance.RealmUsersIdGroupsGroupIdPut(realm, id, groupId);
        }

        /// <summary>
        /// Test RealmUsersIdImpersonationPost
        /// </summary>
        [Fact]
        public void RealmUsersIdImpersonationPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //var response = instance.RealmUsersIdImpersonationPost(realm, id);
            //Assert.IsType<Dictionary<string, Object>>(response);
        }

        /// <summary>
        /// Test RealmUsersIdLogoutPost
        /// </summary>
        [Fact]
        public void RealmUsersIdLogoutPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //instance.RealmUsersIdLogoutPost(realm, id);
        }

        /// <summary>
        /// Test RealmUsersIdOfflineSessionsClientUuidGet
        /// </summary>
        [Fact]
        public void RealmUsersIdOfflineSessionsClientUuidGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //string clientUuid = null;
            //var response = instance.RealmUsersIdOfflineSessionsClientUuidGet(realm, id, clientUuid);
            //Assert.IsType<List<Dictionary<string, Object>>>(response);
        }

        /// <summary>
        /// Test RealmUsersIdPut
        /// </summary>
        [Fact]
        public void RealmUsersIdPutTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //UserRepresentation userRepresentation = null;
            //instance.RealmUsersIdPut(realm, id, userRepresentation);
        }

        /// <summary>
        /// Test RealmUsersIdResetPasswordPut
        /// </summary>
        [Fact]
        public void RealmUsersIdResetPasswordPutTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //CredentialRepresentation credentialRepresentation = null;
            //instance.RealmUsersIdResetPasswordPut(realm, id, credentialRepresentation);
        }

        /// <summary>
        /// Test RealmUsersIdSendVerifyEmailPut
        /// </summary>
        [Fact]
        public void RealmUsersIdSendVerifyEmailPutTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //string clientId = null;
            //string redirectUri = null;
            //instance.RealmUsersIdSendVerifyEmailPut(realm, id, clientId, redirectUri);
        }

        /// <summary>
        /// Test RealmUsersIdSessionsGet
        /// </summary>
        [Fact]
        public void RealmUsersIdSessionsGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string id = null;
            //var response = instance.RealmUsersIdSessionsGet(realm, id);
            //Assert.IsType<List<Dictionary<string, Object>>>(response);
        }

        /// <summary>
        /// Test RealmUsersPost
        /// </summary>
        [Fact]
        public void RealmUsersPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //UserRepresentation userRepresentation = null;
            //instance.RealmUsersPost(realm, userRepresentation);
        }

        /// <summary>
        /// Test RealmUsersProfileGet
        /// </summary>
        [Fact]
        public void RealmUsersProfileGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //var response = instance.RealmUsersProfileGet(realm);
            //Assert.IsType<string>(response);
        }

        /// <summary>
        /// Test RealmUsersProfilePut
        /// </summary>
        [Fact]
        public void RealmUsersProfilePutTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string body = null;
            //instance.RealmUsersProfilePut(realm, body);
        }
    }
}
