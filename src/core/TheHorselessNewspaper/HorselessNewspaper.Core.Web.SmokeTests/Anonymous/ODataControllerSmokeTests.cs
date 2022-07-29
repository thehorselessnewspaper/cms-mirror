using HorselessNewspaper.Core.Interfaces.Security.Resolver;
using HorselessNewspaper.Web.Core.Model.Query;
using HorselessNewspaper.Web.Core.Services.Query.HorselessRESTAPIClient;
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
                    var princpalOperator = _baseTest.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<HostingEntities.Principal>>(scope);


                    ITenantInfo tenant = scope.ServiceProvider.GetRequiredService<ITenantInfo>();
                    Assert.NotNull(tenant);
                    var AccessControlEntries = new HashSet<HostingEntities.AccessControlEntry>()
                            {
                                        new HostingEntities.AccessControlEntry()
                                        {
                                            //Id = Guid.NewGuid(),
                                            CreatedAt = DateTime.UtcNow,
                                            DisplayName = "test tenant",
                                            IsSoftDeleted = false,
                                            ObjectId = Guid.NewGuid().ToString(),
                                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                            Permission = HostingEntities.ACEPermission.READ,
                                            PermissionType = HostingEntities.ACEPermissionType.PERMIT,
                                            Scope = HostingEntities.ACEPermissionScope.OWNER
                                        },
                                        new HostingEntities.AccessControlEntry()
                                        {
                                            //Id = Guid.NewGuid(),
                                            CreatedAt = DateTime.UtcNow,
                                            DisplayName = "test tenant",
                                            IsSoftDeleted = false,
                                            ObjectId = Guid.NewGuid().ToString(),
                                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                            Permission = HostingEntities.ACEPermission.CREATE,
                                            PermissionType = HostingEntities.ACEPermissionType.PERMIT,
                                            Scope = HostingEntities.ACEPermissionScope.OWNER
                                        },
                                        new HostingEntities.AccessControlEntry()
                                        {
                                            //Id = Guid.NewGuid(),
                                            CreatedAt = DateTime.UtcNow,
                                            DisplayName = "test tenant",
                                            IsSoftDeleted = false,
                                            ObjectId = Guid.NewGuid().ToString(),
                                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                            Permission = HostingEntities.ACEPermission.DELETE,
                                            PermissionType = HostingEntities.ACEPermissionType.PERMIT,
                                            Scope = HostingEntities.ACEPermissionScope.OWNER
                                        },
                                        new HostingEntities.AccessControlEntry()
                                        {
                                            //Id = Guid.NewGuid(),
                                            CreatedAt = DateTime.UtcNow,
                                            DisplayName = "test tenant",
                                            IsSoftDeleted = false,
                                            ObjectId = Guid.NewGuid().ToString(),
                                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                            Permission = HostingEntities.ACEPermission.EXECUTE,
                                            PermissionType = HostingEntities.ACEPermissionType.PERMIT,
                                            Scope = HostingEntities.ACEPermissionScope.OWNER
                                        },
                                        new HostingEntities.AccessControlEntry()
                                        {
                                            //Id = Guid.NewGuid(),
                                            CreatedAt = DateTime.UtcNow,
                                            DisplayName = "test tenant",
                                            IsSoftDeleted = false,
                                            ObjectId = Guid.NewGuid().ToString(),
                                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                            Permission = HostingEntities.ACEPermission.PUBLISH,
                                            PermissionType = HostingEntities.ACEPermissionType.PERMIT,
                                            Scope = HostingEntities.ACEPermissionScope.OWNER
                                        },
                                        new HostingEntities.AccessControlEntry()
                                        {
                                            //Id = Guid.NewGuid(),
                                            CreatedAt = DateTime.UtcNow,
                                            DisplayName = "test tenant",
                                            IsSoftDeleted = false,
                                            ObjectId = Guid.NewGuid().ToString(),
                                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                            Permission = HostingEntities.ACEPermission.SEARCH,
                                            PermissionType = HostingEntities.ACEPermissionType.PERMIT,
                                            Scope = HostingEntities.ACEPermissionScope.OWNER
                                        }
                                    };
                    var newTenant = new HostingEntities.Tenant()
                    {
                        //Id = Guid.NewGuid(),
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = "Test Content Collection",
                        IsPublished = false,
                        DeploymentState = HostingEntities.TenantDeploymentWorkflowState.PendingApproval,
                        TenantIdentifier = Guid.NewGuid().ToString(),
                        IsSoftDeleted = false,
                        ObjectId = Guid.NewGuid().ToString()

                    };
                    var TenantIdentifierStrategy = new HostingEntities.TenantIdentifierStrategy()
                    {
                        //Id = Guid.NewGuid(),
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = "Test Content Collection",
                        IsSoftDeleted = false,
                        ObjectId = Guid.NewGuid().ToString(),
                        StrategyContainers = new HashSet<HostingEntities.TenantIdentifierStrategyContainer>()
                    };


                    var newOwner = new HostingEntities.Principal()
                    {
                        //Id = Guid.NewGuid(),
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = $"DisplayName{Guid.NewGuid().ToString()}",
                        IsSoftDeleted = false,
                        ObjectId = Guid.NewGuid().ToString(),
                        Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                        // aud is not a guarantee
                        //                            Aud = User.Claims.Where(w => w.Type.Contains("aud")).FirstOrDefault().Value,

                        // subject/issuer are technically a compound unique key
                        Iss = $"ISS{Guid.NewGuid().ToString()}",
                        Sub = $"Sub{Guid.NewGuid().ToString()}",
                        UPN = $"UPN{Guid.NewGuid().ToString()}",
                        Email = $"Email{Guid.NewGuid().ToString()}",
                        Aud = $"Aud{Guid.NewGuid().ToString()}",
                        PreferredUserName = $"PreferredUserName{Guid.NewGuid().ToString()}"

                    };

                    var newAccount = new HostingEntities.Principal()
                    {
                        //Id = Guid.NewGuid(),
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = $"DisplayName{Guid.NewGuid().ToString()}",
                        IsSoftDeleted = false,
                        ObjectId = Guid.NewGuid().ToString(),
                        Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                        // aud is not a guarantee
                        //                            Aud = User.Claims.Where(w => w.Type.Contains("aud")).FirstOrDefault().Value,

                        // subject/issuer are technically a compound unique key
                        Iss = $"ISS{Guid.NewGuid().ToString()}",
                        Sub = $"Sub{Guid.NewGuid().ToString()}",
                        UPN = $"UPN{Guid.NewGuid().ToString()}",
                        Email = $"Email{Guid.NewGuid().ToString()}",
                        Aud = $"Aud{Guid.NewGuid().ToString()}",
                        PreferredUserName = $"PreferredUserName{Guid.NewGuid().ToString()}"

                    };


                    newTenant.Owners.Add(newOwner);
                    newTenant.Accounts.Add(newAccount);
                    //var ownerInsertResult = await princpalOperator.Create(newOwner);
                    //var accountInsertResult = await princpalOperator.Create(newAccount);
                    //newTenant.Owners.Add(ownerInsertResult);
                    //newTenant.Accounts.Add(accountInsertResult);
                    var insertQueryOperator = _baseTest.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<HostingEntities.Tenant>>(scope);


                    foreach (var acl in AccessControlEntries)
                    {
                        newTenant.AccessControlEntries.Add(acl);
                    }
                    var insertResult = await insertQueryOperator.Create(
                      newTenant
                        );


                    //insertResult.Owners.Add(ownerInsertResult);


                    //var updateResult = await insertQueryOperator.InsertRelatedEntity<HostingEntities.Principal>(
                    //                                  newTenant.Id, nameof(HostingEntities.Tenant.Owners),
                    //                                  new List<HostingEntities.Principal>() { newOwner }, w => w.TenantIdentifier.Equals(newTenant.TenantIdentifier),
                    //                                  w => w.PreferredUserName.Equals(newOwner.PreferredUserName)
                    //                                    );

                    //var updateOwnerResult = await insertQueryOperator.Update(
                    //              insertResult, new List<string>() { nameof(HostingEntities.Tenant.Owners) },
                    //              w => w.TenantIdentifier.Equals(insertResult.TenantIdentifier)
                    //                );
                    //updateOwnerResult.Accounts.Add(accountInsertResult);

                    //var updateAccountResult = await insertQueryOperator.Update(
                    //              updateOwnerResult, new List<string>() { nameof(HostingEntities.Tenant.Accounts) },
                    //              w => w.TenantIdentifier.Equals(insertResult.TenantIdentifier)
                    //                );

                    //foreach (var acl in AccessControlEntries)
                    //{
                    //    updateAccountResult.AccessControlEntries.Add(acl);
                    //}

                    //var updateACLResult = await insertQueryOperator.Update(
                    //      updateAccountResult, new List<string>() { nameof(HostingEntities.Tenant.AccessControlEntries) },
                    //    //      w => w.TenantIdentifier.Equals(insertResult.TenantIdentifier)
                    //);

                    //Assert.NotNull(updateACLResult);
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
                    response = await client.GetAsync("lache/ODataHosting/Tenant?$expand=Owners, Accounts,AccessControlEntries&$top=10");
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


                int aclCount = 0;
                int ownerCount = 0;
                int accountCount = 0;

                contentCollection.Value.ForEach(f => { aclCount = aclCount + f.AccessControlEntries.Count; });
                contentCollection.Value.ForEach(f => { ownerCount = ownerCount + f.Owners.Count; });
                contentCollection.Value.ForEach(f => { accountCount = accountCount + f.Accounts.Count; });
                Assert.True(aclCount > 0, "failed to retieve persisted acl");
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
                    var restClient = scope.ServiceProvider.GetRequiredService<IHorselessRESTAPIClient>();
                    Assert.NotNull(tenant);
                    var principalOperator = _baseTest.GetIQueryableContentModelOperator<IQueryableContentModelOperator<ContentEntities.Principal>>(scope);

                    var insertQueryOperator = _baseTest.GetIQueryableContentModelOperator<IQueryableContentModelOperator<ContentEntities.Tenant>>(scope);

                    var newTenant = new ContentEntities.Tenant()
                    {
                        Id = Guid.NewGuid(),
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = "Test Content Collection",
                        IsPublished = false,
                        TenantIdentifier = Guid.NewGuid().ToString(),
                        IsSoftDeleted = false,
                        DeploymentState = ContentEntities.TenantDeploymentWorkflowState.PendingApproval,
                        ObjectId = Guid.NewGuid().ToString()

                    };

                    var newOwner = new ContentEntities.Principal()
                    {
                        Id = Guid.NewGuid(),
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = $"DisplayName{Guid.NewGuid().ToString()}",
                        IsSoftDeleted = false,
                        ObjectId = Guid.NewGuid().ToString(),
                        Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                        // aud is not a guarantee
                        //                            Aud = User.Claims.Where(w => w.Type.Contains("aud")).FirstOrDefault().Value,

                        // subject/issuer are technically a compound unique key
                        Iss = $"ISS{Guid.NewGuid().ToString()}",
                        Sub = $"Sub{Guid.NewGuid().ToString()}",
                        UPN = $"UPN{Guid.NewGuid().ToString()}",
                        Email = $"Email{Guid.NewGuid().ToString()}",
                        Aud = $"Aud{Guid.NewGuid().ToString()}",
                        PreferredUserName = $"PreferredUserName{Guid.NewGuid().ToString()}"

                    };

                    var newAccount = new ContentEntities.Principal()
                    {
                        Id = Guid.NewGuid(),
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = $"DisplayName{Guid.NewGuid().ToString()}",
                        IsSoftDeleted = false,
                        ObjectId = Guid.NewGuid().ToString(),
                        Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                        // aud is not a guarantee
                        //                            Aud = User.Claims.Where(w => w.Type.Contains("aud")).FirstOrDefault().Value,

                        // subject/issuer are technically a compound unique key
                        Iss = $"ISS{Guid.NewGuid().ToString()}",
                        Sub = $"Sub{Guid.NewGuid().ToString()}",
                        UPN = $"UPN{Guid.NewGuid().ToString()}",
                        Email = $"Email{Guid.NewGuid().ToString()}",
                        Aud = $"Aud{Guid.NewGuid().ToString()}",
                        PreferredUserName = $"PreferredUserName{Guid.NewGuid().ToString()}"

                    };


                    var TenantIdentifierStrategy = new ContentEntities.TenantIdentifierStrategy()
                    {
                        Id = Guid.NewGuid(),
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = "Test Content Collection",
                        IsSoftDeleted = false,
                        ObjectId = Guid.NewGuid().ToString()
                    };

                    var AccessControlEntries = new HashSet<ContentEntities.AccessControlEntry>()
                            {
                                        new ContentEntities.AccessControlEntry()
                                        {
                                            Id = Guid.NewGuid(),
                                            CreatedAt = DateTime.UtcNow,
                                            DisplayName = "test tenant",
                                            IsSoftDeleted = false,
                                            ObjectId = Guid.NewGuid().ToString(),
                                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                            Permission = ContentEntities.ACEPermission.READ,
                                            PermissionType = ContentEntities.ACEPermissionType.PERMIT,
                                            Scope = ContentEntities.ACEPermissionScope.OWNER
                                        },
                                        new ContentEntities.AccessControlEntry()
                                        {
                                            Id = Guid.NewGuid(),
                                            CreatedAt = DateTime.UtcNow,
                                            DisplayName = "test tenant",
                                            IsSoftDeleted = false,
                                            ObjectId = Guid.NewGuid().ToString(),
                                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                            Permission = ContentEntities.ACEPermission.CREATE,
                                            PermissionType = ContentEntities.ACEPermissionType.PERMIT,
                                            Scope = ContentEntities.ACEPermissionScope.OWNER
                                        },
                                        new ContentEntities.AccessControlEntry()
                                        {
                                            Id = Guid.NewGuid(),
                                            CreatedAt = DateTime.UtcNow,
                                            DisplayName = "test tenant",
                                            IsSoftDeleted = false,
                                            ObjectId = Guid.NewGuid().ToString(),
                                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                            Permission = ContentEntities.ACEPermission.DELETE,
                                            PermissionType = ContentEntities.ACEPermissionType.PERMIT,
                                            Scope = ContentEntities.ACEPermissionScope.OWNER
                                        },
                                        new ContentEntities.AccessControlEntry()
                                        {
                                            Id = Guid.NewGuid(),
                                            CreatedAt = DateTime.UtcNow,
                                            DisplayName = "test tenant",
                                            IsSoftDeleted = false,
                                            ObjectId = Guid.NewGuid().ToString(),
                                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                            Permission = ContentEntities.ACEPermission.EXECUTE,
                                            PermissionType = ContentEntities.ACEPermissionType.PERMIT,
                                            Scope = ContentEntities.ACEPermissionScope.OWNER
                                        },
                                        new ContentEntities.AccessControlEntry()
                                        {
                                            Id = Guid.NewGuid(),
                                            CreatedAt = DateTime.UtcNow,
                                            DisplayName = "test tenant",
                                            IsSoftDeleted = false,
                                            ObjectId = Guid.NewGuid().ToString(),
                                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                            Permission = ContentEntities.ACEPermission.PUBLISH,
                                            PermissionType = ContentEntities.ACEPermissionType.PERMIT,
                                            Scope = ContentEntities.ACEPermissionScope.OWNER
                                        },
                                        new ContentEntities.AccessControlEntry()
                                        {
                                            Id = Guid.NewGuid(),
                                            CreatedAt = DateTime.UtcNow,
                                            DisplayName = "test tenant",
                                            IsSoftDeleted = false,
                                            ObjectId = Guid.NewGuid().ToString(),
                                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                            Permission = ContentEntities.ACEPermission.SEARCH,
                                            PermissionType = ContentEntities.ACEPermissionType.PERMIT,
                                            Scope = ContentEntities.ACEPermissionScope.OWNER
                                        }
                                    };
                    //var wireTenant = ContentEntitiesTenant.FromJson(JsonConvert.SerializeObject(newTenant, Formatting.None, new JsonSerializerSettings()
                    //{
                    //    ReferenceLoopHandling = ReferenceLoopHandling.Serialize
                    //}));

                    //var insertResult = await restClient.ApiHorselessContentModelTenantCreateAsync(tenant.Identifier, wireTenant);

                    foreach (var acl in AccessControlEntries)
                    {
                        newTenant.AccessControlEntries.Add(acl);
                    }

                    newTenant.Accounts.Add(newAccount);
                    newTenant.Owners.Add(newOwner);

                    //var principalInsertResult = await principalOperator.Create(newOwner);
                    //var accountInsertResult = await principalOperator.Create(newAccount);

                    var insertResult = await insertQueryOperator.Create(newTenant);


                    Assert.True(insertResult != null);
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
                    client.DefaultRequestHeaders.Add(HeaderNames.Accept, "application/json;odata.metadata=full");
                    response = await client.GetAsync("lache/ODataContent/Tenant?$expand=Accounts, Owners, AccessControlEntries, ContentCollections&$top=10&");
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

                int aclCount = 0;
                int ownerCount = 0;
                int accountCount = 0;

                contentCollection.Value.ForEach(f => { aclCount = aclCount + f.AccessControlEntries.Count; });
                contentCollection.Value.ForEach(f => { ownerCount = ownerCount + f.Owners.Count; });
                contentCollection.Value.ForEach(f => { accountCount = accountCount + f.Accounts.Count; });
                Assert.True(aclCount > 0);
            }
            catch (Exception e)
            {

                ex = e;
            }

            Assert.Null(ex);
        }
    }
}
