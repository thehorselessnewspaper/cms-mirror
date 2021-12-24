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

using Horseless.Keycloak.Admin.Rest.Client;
using Horseless.Keycloak.Admin.Rest.Api;

namespace Horseless.Keycloak.Admin.Rest.Test.Api
{
    /// <summary>
    ///  Class for testing AttackDetectionApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class AttackDetectionApiTests : IDisposable
    {
        private AttackDetectionApi instance;

        public AttackDetectionApiTests()
        {
            instance = new AttackDetectionApi();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of AttackDetectionApi
        /// </summary>
        [Fact]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsType' AttackDetectionApi
            //Assert.IsType<AttackDetectionApi>(instance);
        }

        /// <summary>
        /// Test RealmAttackDetectionBruteForceUsersDelete
        /// </summary>
        [Fact]
        public void RealmAttackDetectionBruteForceUsersDeleteTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //instance.RealmAttackDetectionBruteForceUsersDelete(realm);
        }

        /// <summary>
        /// Test RealmAttackDetectionBruteForceUsersUserIdDelete
        /// </summary>
        [Fact]
        public void RealmAttackDetectionBruteForceUsersUserIdDeleteTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string userId = null;
            //instance.RealmAttackDetectionBruteForceUsersUserIdDelete(realm, userId);
        }

        /// <summary>
        /// Test RealmAttackDetectionBruteForceUsersUserIdGet
        /// </summary>
        [Fact]
        public void RealmAttackDetectionBruteForceUsersUserIdGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string realm = null;
            //string userId = null;
            //var response = instance.RealmAttackDetectionBruteForceUsersUserIdGet(realm, userId);
            //Assert.IsType<Dictionary<string, Object>>(response);
        }
    }
}