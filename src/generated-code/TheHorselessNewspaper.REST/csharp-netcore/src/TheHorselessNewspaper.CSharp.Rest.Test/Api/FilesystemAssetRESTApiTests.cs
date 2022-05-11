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
    ///  Class for testing FilesystemAssetRESTApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class FilesystemAssetRESTApiTests : IDisposable
    {
        private FilesystemAssetRESTApi instance;

        public FilesystemAssetRESTApiTests()
        {
            instance = new FilesystemAssetRESTApi();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of FilesystemAssetRESTApi
        /// </summary>
        [Fact]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsType' FilesystemAssetRESTApi
            //Assert.IsType<FilesystemAssetRESTApi>(instance);
        }

        /// <summary>
        /// Test FilesystemAssetRESTControllerCreate
        /// </summary>
        [Fact]
        public void FilesystemAssetRESTControllerCreateTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string tenant = null;
            //ContentEntitiesFilesystemAsset? contentEntitiesFilesystemAsset = null;
            //var response = instance.FilesystemAssetRESTControllerCreate(tenant, contentEntitiesFilesystemAsset);
            //Assert.IsType<ContentEntitiesFilesystemAsset>(response);
        }

        /// <summary>
        /// Test FilesystemAssetRESTControllerGetByObjectId
        /// </summary>
        [Fact]
        public void FilesystemAssetRESTControllerGetByObjectIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string objectId = null;
            //string tenant = null;
            //var response = instance.FilesystemAssetRESTControllerGetByObjectId(objectId, tenant);
            //Assert.IsType<ContentEntitiesFilesystemAsset>(response);
        }

        /// <summary>
        /// Test FilesystemAssetRESTControllerUpdate
        /// </summary>
        [Fact]
        public void FilesystemAssetRESTControllerUpdateTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string contentCollectionId = null;
            //string tenant = null;
            //ContentEntitiesFilesystemAsset? contentEntitiesFilesystemAsset = null;
            //var response = instance.FilesystemAssetRESTControllerUpdate(contentCollectionId, tenant, contentEntitiesFilesystemAsset);
            //Assert.IsType<ContentEntitiesFilesystemAsset>(response);
        }
    }
}
