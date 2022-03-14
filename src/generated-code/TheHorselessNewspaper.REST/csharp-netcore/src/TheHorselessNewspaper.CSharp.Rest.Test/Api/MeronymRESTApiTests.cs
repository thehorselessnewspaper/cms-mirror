/*
 * Horseless Content API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
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

using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Api;
// uncomment below to import models
//using TheHorselessNewspaper.CSharp.Rest.Model;

namespace TheHorselessNewspaper.CSharp.Rest.Test.Api
{
    /// <summary>
    ///  Class for testing MeronymRESTApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class MeronymRESTApiTests : IDisposable
    {
        private MeronymRESTApi instance;

        public MeronymRESTApiTests()
        {
            instance = new MeronymRESTApi();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of MeronymRESTApi
        /// </summary>
        [Fact]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsType' MeronymRESTApi
            //Assert.IsType<MeronymRESTApi>(instance);
        }

        /// <summary>
        /// Test MeronymRESTControllerCreate
        /// </summary>
        [Fact]
        public void MeronymRESTControllerCreateTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //ContentEntitiesMeronym? contentEntitiesMeronym = null;
            //var response = instance.MeronymRESTControllerCreate(contentEntitiesMeronym);
            //Assert.IsType<ContentEntitiesMeronym>(response);
        }

        /// <summary>
        /// Test MeronymRESTControllerGetByObjectId
        /// </summary>
        [Fact]
        public void MeronymRESTControllerGetByObjectIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string objectId = null;
            //var response = instance.MeronymRESTControllerGetByObjectId(objectId);
            //Assert.IsType<ContentEntitiesMeronym>(response);
        }

        /// <summary>
        /// Test MeronymRESTControllerUpdate
        /// </summary>
        [Fact]
        public void MeronymRESTControllerUpdateTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string contentCollectionId = null;
            //ContentEntitiesMeronym? contentEntitiesMeronym = null;
            //var response = instance.MeronymRESTControllerUpdate(contentCollectionId, contentEntitiesMeronym);
            //Assert.IsType<ContentEntitiesMeronym>(response);
        }
    }
}
