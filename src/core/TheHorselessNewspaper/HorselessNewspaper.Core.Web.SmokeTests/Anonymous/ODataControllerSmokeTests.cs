﻿using HorselessNewspaper.Core.Interfaces.Security.Resolver;
using HorselessNewspaper.Web.Core.Model.Query;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;
using ContentEntities = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingEntities = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace HorselessNewspaper.Core.Web.SmokeTests.Anonymous
{
    [Collection("DatabaseMutatingCollection")]
    public class ODataControllerSmokeTests : IClassFixture<BaseWebIntegrationTest>
    {
        private const string oDataResponseHeader = "application/json;odata.metadata=minimal;odata.streaming=true";
        private const string defaulttenantidentifier = "lache";
        BaseWebIntegrationTest _baseTest;
        public WebApplicationFactory<Program> application = null;
        public HttpClient client = null;

        public ODataControllerSmokeTests(BaseWebIntegrationTest data)
        {
            _baseTest = data;
            application = _baseTest.application;
            client = _baseTest.client;
        }

        [Fact]
        public async Task CanGetDefaultHtmlPage()
        {

            var response = await client.GetAsync("/");
            Assert.NotNull(response);

            response.EnsureSuccessStatusCode(); // Status Code 200-299
            Assert.Equal("text/html; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task CanQueryHostingTenants()
        {
            HttpResponseMessage response = null;
            Exception ex = null;
            string responseContent = String.Empty;

            // arrange
            // insert a content collection

            try
            {
                using (var scope = application.Services.CreateScope())
                {
                    ITenantInfo tenant = scope.ServiceProvider.GetRequiredService<ITenantInfo>();
                    Assert.NotNull(tenant);

                    var insertQueryOperator = _baseTest.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<HostingEntities.Tenant>>(scope);
                    var insertResult = await insertQueryOperator.Create(
                        new HostingEntities.Tenant()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "Test Content Collection",
                            IsPublished = false,
                            DeploymentState = HostingEntities.TenantDeploymentWorkflowState.PendingApproval,
                            TenantIdentifier = Guid.NewGuid().ToString(),
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            TenantIdentifierStrategy = new HostingEntities.TenantIdentifierStrategy()
                            {
                                Id = Guid.NewGuid(),
                                CreatedAt = DateTime.UtcNow,
                                DisplayName = "Test Content Collection",
                                IsSoftDeleted = false,
                                ObjectId = Guid.NewGuid().ToString()
                            }
                        }
                        );
                }

            }
            catch (Exception e)
            {

                ex = e;
            }

            Assert.Null(ex);

            try
            {
                using (var scope = application.Services.CreateScope())
                {
                    var principalResolver = scope.ServiceProvider.GetRequiredService<ISecurityPrincipalResolver>();
                    client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", await principalResolver.GetClientCredentialsGrantToken());

                    client.DefaultRequestHeaders.Add(ODataControllerStrings.ODATA_TENANTIDENTIFIER_HEADER, defaulttenantidentifier);
                    // client.DefaultRequestHeaders.Add(HeaderNames.Accept, "application/json");
                    response = await client.GetAsync("lache/ODataHosting/Tenant?$top=10");
                    Assert.NotNull(response);

                    response.EnsureSuccessStatusCode(); // Status Code 200-299
                                                        //Assert.Equal(oDataResponseHeader,
                                                        //    response.Content.Headers.ContentType.ToString());

                    responseContent = await response.Content.ReadAsStringAsync();
                    var deserialized = JsonConvert.DeserializeObject<ODataResponse<IEnumerable<HostingEntities.Tenant>>>(responseContent);
                }


            }
            catch (Exception e)
            {
                ex = e;
            }

            Assert.Null(ex);


            Assert.NotNull(responseContent);
            try
            {

                var contentCollection = JsonConvert.DeserializeObject<ODataResponse<List<HostingEntities.Tenant>>>(responseContent);
                Assert.True(contentCollection != null && contentCollection.Value != null);
                Assert.True(contentCollection.Value.Count > 0);
            }
            catch (Exception e)
            {

                ex = e;
            }

            Assert.Null(ex);
        }

        /// <summary>
        /// caveat - this test doesn't check for 
        /// tenant scoping
        /// </summary>
        /// <returns></returns>
        [Fact]
        public async Task CanQueryContentCollection()
        {
            HttpResponseMessage response = null;
            Exception ex = null;
            string responseContent = String.Empty;

            // arrange
            // insert a content collection

            try
            {
                using (var scope = application.Services.CreateScope())
                {
                    ITenantInfo tenant = scope.ServiceProvider.GetRequiredService<ITenantInfo>();
                    Assert.NotNull(tenant);

                    var insertQueryOperator = _baseTest.GetIQueryableContentModelOperator<IQueryableContentModelOperator<ContentEntities.Tenant>>(scope);
                    var insertResult = await insertQueryOperator.Create(
                        new ContentEntities.Tenant()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "Test Content Collection",
                            IsPublished = false,
                            TenantIdentifier = Guid.NewGuid().ToString(),
                            IsSoftDeleted = false,
                            DeploymentState = ContentEntities.TenantDeploymentWorkflowState.PendingApproval,
                            ObjectId = Guid.NewGuid().ToString(),
                            TenantIdentifierStrategy = new ContentEntities.TenantIdentifierStrategy()
                            {
                                Id = Guid.NewGuid(),
                                CreatedAt = DateTime.UtcNow,
                                DisplayName = "Test Content Collection",
                                IsSoftDeleted = false,
                                ObjectId = Guid.NewGuid().ToString()
                            }
                        }
                        );
                }

            }
            catch (Exception e)
            {

                ex = e;
            }

            Assert.Null(ex);

            try
            {
                using (var scope = application.Services.CreateScope())
                {
                    var principalResolver = scope.ServiceProvider.GetRequiredService<ISecurityPrincipalResolver>();
                    client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", await principalResolver.GetClientCredentialsGrantToken());
                    
                    client.DefaultRequestHeaders.Add(ODataControllerStrings.ODATA_TENANTIDENTIFIER_HEADER, defaulttenantidentifier);
                    client.DefaultRequestHeaders.Add(HeaderNames.Accept, "application/json;odata.metadata=none");
                    response = await client.GetAsync("ODataContent/Tenant?$top=10&");
                    Assert.NotNull(response);

                    response.EnsureSuccessStatusCode(); // Status Code 200-299
                                                        //Assert.Equal(oDataResponseHeader,
                                                        //    response.Content.Headers.ContentType.ToString());

                    responseContent = await response.Content.ReadAsStringAsync();
                }


            }
            catch (Exception e)
            {
                ex = e;
            }

            Assert.Null(ex);


            Assert.NotNull(responseContent);
            try
            {

                var contentCollection = JsonConvert.DeserializeObject<ODataResponse<List<ContentEntities.Tenant>>>(responseContent);
                Assert.True(contentCollection != null && contentCollection.Value != null);
                Assert.True(contentCollection.Value.Count > 0);
            }
            catch (Exception e)
            {

                ex = e;
            }

            Assert.Null(ex);
        }
    }
}
