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
    ///  Class for testing DynamicViewServerApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class DynamicViewServerApiTests : IDisposable
    {
        private DynamicViewServerApi instance;

        public DynamicViewServerApiTests()
        {
            instance = new DynamicViewServerApi();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of DynamicViewServerApi
        /// </summary>
        [Fact]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsType' DynamicViewServerApi
            //Assert.IsType<DynamicViewServerApi>(instance);
        }

        /// <summary>
        /// Test PresentationDynamicViewServerGetDynamicView
        /// </summary>
        [Fact]
        public void PresentationDynamicViewServerGetDynamicViewTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string tenant = null;
            //string? viewPhysicalPath = null;
            //Guid? parentContentCollectionObjectId = null;
            //var response = instance.PresentationDynamicViewServerGetDynamicView(tenant, viewPhysicalPath, parentContentCollectionObjectId);
            //Assert.IsType<MvcPartialViewResult>(response);
        }
    }
}