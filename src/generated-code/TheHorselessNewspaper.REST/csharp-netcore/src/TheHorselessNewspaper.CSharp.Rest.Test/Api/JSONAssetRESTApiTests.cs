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
    ///  Class for testing JSONAssetRESTApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class JSONAssetRESTApiTests : IDisposable
    {
        private JSONAssetRESTApi instance;

        public JSONAssetRESTApiTests()
        {
            instance = new JSONAssetRESTApi();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of JSONAssetRESTApi
        /// </summary>
        [Fact]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsType' JSONAssetRESTApi
            //Assert.IsType<JSONAssetRESTApi>(instance);
        }

        /// <summary>
        /// Test JSONAssetRESTControllerCreate
        /// </summary>
        [Fact]
        public void JSONAssetRESTControllerCreateTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string tenant = null;
            //ContentEntitiesJSONAsset? contentEntitiesJSONAsset = null;
            //var response = instance.JSONAssetRESTControllerCreate(tenant, contentEntitiesJSONAsset);
            //Assert.IsType<ContentEntitiesJSONAsset>(response);
        }

        /// <summary>
        /// Test JSONAssetRESTControllerGetByObjectId
        /// </summary>
        [Fact]
        public void JSONAssetRESTControllerGetByObjectIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string objectId = null;
            //string tenant = null;
            //var response = instance.JSONAssetRESTControllerGetByObjectId(objectId, tenant);
            //Assert.IsType<ContentEntitiesJSONAsset>(response);
        }

        /// <summary>
        /// Test JSONAssetRESTControllerUpdate
        /// </summary>
        [Fact]
        public void JSONAssetRESTControllerUpdateTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string contentCollectionId = null;
            //string tenant = null;
            //ContentEntitiesJSONAsset? contentEntitiesJSONAsset = null;
            //var response = instance.JSONAssetRESTControllerUpdate(contentCollectionId, tenant, contentEntitiesJSONAsset);
            //Assert.IsType<ContentEntitiesJSONAsset>(response);
        }
    }
}
