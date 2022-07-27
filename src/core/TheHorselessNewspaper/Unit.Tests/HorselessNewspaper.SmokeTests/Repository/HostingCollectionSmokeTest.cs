using Horseless.HostingModel.SmokeTests;
using Newtonsoft.Json;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;

using TheHorselessNewspaper.HostingModel.HostingEntities.Query.Extensions;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace HorselessNewspaper.SmokeTests.Repository
{
    internal class HostingCollectionSmokeTest : Tests
    {
        [Test]
        public async Task UpdateModelTest()
        {
            // avoid object references becoming equal
            var initialGuid = Guid.NewGuid();

            IHostingRowLevelSecured tenant = new Tenant()
            {
                Id = initialGuid,
                CreatedAt = DateTime.UtcNow,
                DisplayName = "test update tenant",
                ObjectId = Guid.NewGuid().ToString(),
                Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks)
            };



            var modifiedTenant = new Tenant()
            {
                Id = initialGuid,
                CreatedAt = tenant.CreatedAt,
                DisplayName = tenant.DisplayName,
                ObjectId = tenant.ObjectId,
                Timestamp = tenant.Timestamp
            };
            ;
            modifiedTenant.Id = Guid.NewGuid();

            var unUpdatedtenant = await tenant.UpdateModifiedPropertiesAsync(modifiedTenant);

            // require a list of property names to update
            Assert.IsTrue(unUpdatedtenant.Id == initialGuid);

            // change the id
            modifiedTenant.Id = Guid.NewGuid();
            var updatedtenant = await tenant.UpdateModifiedPropertiesAsync(modifiedTenant, new List<string>
            {
                nameof(modifiedTenant.Id)
            });

            // validate only the id changed
            Assert.IsFalse(updatedtenant.Id == initialGuid);

            Assert.IsTrue(updatedtenant.CreatedAt == tenant.CreatedAt);
            Assert.IsTrue(updatedtenant.DisplayName == tenant.DisplayName);
            Assert.IsTrue(updatedtenant.ObjectId == tenant.ObjectId);
            Assert.IsTrue(updatedtenant.Timestamp == tenant.Timestamp);


            // add to a related property
            updatedtenant.Owners.Add(new Principal()
            {
                Id = Guid.NewGuid(),
                CreatedAt = tenant.CreatedAt,
                DisplayName = tenant.DisplayName,
                ObjectId = Guid.NewGuid().ToString(),
                Timestamp = tenant.Timestamp
            });

            var relatedPrincipal = new Principal()
            {
                Id = Guid.NewGuid(),
                CreatedAt = tenant.CreatedAt,
                DisplayName = tenant.DisplayName,
                ObjectId = Guid.NewGuid().ToString(),
                Timestamp = tenant.Timestamp
            };

            var principalQuery = this.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<Principal>>();

            var tenantQuery = this.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<Tenant>>();

            var tenantInsertResult = await tenantQuery.Create(modifiedTenant);

            var insertResult = await tenantQuery.InsertRelatedEntity<Principal>(modifiedTenant.Id, nameof(modifiedTenant.Owners), new List<Principal>() { relatedPrincipal });
            Assert.IsTrue(insertResult != null);

            var validatedInsertResult = await tenantQuery.Read(r => r.Id.Equals(tenant.Id), new List<string>()
            {
                nameof(tenant.Owners), nameof(tenant.AccessControlEntries)
            });

            Assert.IsTrue(validatedInsertResult != null);

            var updatedRelatedEntitiesResult = validatedInsertResult.First();

            Assert.IsTrue(updatedRelatedEntitiesResult != null);

            Assert.IsTrue(updatedRelatedEntitiesResult.Owners.Count > 0);

        }


        [Test]
        public void CRUDTest()
        {
            Assert.DoesNotThrowAsync(CrudHostingCollection, "test failed due to entity not inserted with null objectid");


            Assert.Pass();

        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        private async Task CrudHostingCollection()
        {
            var tenantJson = "{\"id\":\"8d63690e-a36f-4ee8-bcc7-371f5181e44e\",\"displayName\":\"jane\'s tenant\",\"objectId\":\"be80a0f9-1a07-4ade-bfa7-70c7c5bb6f1c\",\"isSoftDeleted\":false,\"createdAt\":\"2022-04-14T03:57:44.9\",\"accessControlEntries\":[{\"id\":\"e09a1def-81ac-48dc-84ce-6d87fdb1dc12\",\"displayName\":\"jane\'s tenant\",\"objectId\":\"52c02167-a53a-46c5-876a-45e518bf937d\",\"isSoftDeleted\":false,\"createdAt\":\"2022-04-14T03:58:39.4614014Z\",\"isActive\":null,\"accessControlEntries\":[],\"owners\":[],\"subjectAccessControlEntries\":[],\"subjectHorselessSessions\":[],\"subjectPrincipals\":[],\"subjectTenants\":[null],\"scope\":2,\"permission\":0,\"permissionType\":0,\"timestamp\":\"+PoPD8sd2gg=\"},{\"id\":\"63718d6a-5c8c-4ea0-899a-bd1a0739b743\",\"displayName\":\"jane\'s tenant\",\"objectId\":\"268370cd-54cf-4220-b50a-6b4bc2bc1468\",\"isSoftDeleted\":false,\"createdAt\":\"2022-04-14T03:58:39.4623313Z\",\"isActive\":null,\"accessControlEntries\":[],\"owners\":[],\"subjectAccessControlEntries\":[],\"subjectHorselessSessions\":[],\"subjectPrincipals\":[],\"subjectTenants\":[null],\"scope\":2,\"permission\":1,\"permissionType\":0,\"timestamp\":\"hg0QD8sd2gg=\"},{\"id\":\"287bb0dd-3c07-48da-94e3-687e00f7d773\",\"displayName\":\"jane\'s tenant\",\"objectId\":\"3126df18-a4d6-4fcb-ad23-f46732a13bcf\",\"isSoftDeleted\":false,\"createdAt\":\"2022-04-14T03:58:39.4623382Z\",\"isActive\":null,\"accessControlEntries\":[],\"owners\":[],\"subjectAccessControlEntries\":[],\"subjectHorselessSessions\":[],\"subjectPrincipals\":[],\"subjectTenants\":[null],\"scope\":2,\"permission\":3,\"permissionType\":0,\"timestamp\":\"oQ0QD8sd2gg=\"},{\"id\":\"91566233-4ada-465a-bba0-9a67df23f99f\",\"displayName\":\"jane\'s tenant\",\"objectId\":\"c763c491-5b3c-46d9-a59d-c787986c7b92\",\"isSoftDeleted\":false,\"createdAt\":\"2022-04-14T03:58:39.4623403Z\",\"isActive\":null,\"accessControlEntries\":[],\"owners\":[],\"subjectAccessControlEntries\":[],\"subjectHorselessSessions\":[],\"subjectPrincipals\":[],\"subjectTenants\":[null],\"scope\":2,\"permission\":5,\"permissionType\":0,\"timestamp\":\"tA0QD8sd2gg=\"},{\"id\":\"28b67767-c010-4fa4-ab12-9f21a3b58fe7\",\"displayName\":\"jane\'s tenant\",\"objectId\":\"a1e01ad6-97d6-4fb9-bd78-11fe5fab901d\",\"isSoftDeleted\":false,\"createdAt\":\"2022-04-14T03:58:39.4623423Z\",\"isActive\":null,\"accessControlEntries\":[],\"owners\":[],\"subjectAccessControlEntries\":[],\"subjectHorselessSessions\":[],\"subjectPrincipals\":[],\"subjectTenants\":[null],\"scope\":2,\"permission\":7,\"permissionType\":0,\"timestamp\":\"yQ0QD8sd2gg=\"},{\"id\":\"6820a7c3-9e58-4adf-ac85-dc783df0e11b\",\"displayName\":\"jane\'s tenant\",\"objectId\":\"8c9227a1-ac80-4db2-a12a-ecdf5ad14aa3\",\"isSoftDeleted\":false,\"createdAt\":\"2022-04-14T03:58:39.4623454Z\",\"isActive\":null,\"accessControlEntries\":[],\"owners\":[],\"subjectAccessControlEntries\":[],\"subjectHorselessSessions\":[],\"subjectPrincipals\":[],\"subjectTenants\":[null],\"scope\":2,\"permission\":8,\"permissionType\":0,\"timestamp\":\"7A0QD8sd2gg=\"},{\"id\":\"32bfa88e-a35c-4fdd-8e36-10e90df742f8\",\"displayName\":\"jane\'s tenant\",\"objectId\":\"6fd571ae-1999-4746-8248-0f1b3d70d16c\",\"isSoftDeleted\":false,\"createdAt\":\"2022-04-14T03:58:39.4623478Z\",\"isActive\":null,\"accessControlEntries\":[],\"owners\":[],\"subjectAccessControlEntries\":[],\"subjectHorselessSessions\":[],\"subjectPrincipals\":[],\"subjectTenants\":[null],\"scope\":2,\"permission\":6,\"permissionType\":0,\"timestamp\":\"/w0QD8sd2gg=\"}],\"accounts\":[],\"contentCollections\":[],\"owners\":[{\"id\":\"b45d10ce-9547-4658-bf27-494c14bbd342\",\"displayName\":\"jane\'s tenant\",\"objectId\":\"40974b34-885d-4dac-b877-706387fe13c0\",\"isSoftDeleted\":false,\"createdAt\":\"2022-04-14T03:57:44.897\",\"iss\":\"https://awsdev.ataxlab.com:8443/realms/horseless-infrastructure\",\"aud\":\"horseless-prototype\",\"sub\":\"50cf558a-3316-40eb-a2f3-6670cb112da8\",\"horselessSessions\":[],\"accessControlEntries\":[],\"ownedAccessControlEntries\":[],\"ownedHorselessSessions\":[],\"ownedPrincipals\":[],\"ownedTenants\":[null],\"owners\":[],\"tenantAccounts\":[],\"upn\":\"\",\"email\":\"\",\"preferredUserName\":\"\",\"timestamp\":\"AAAAAAAAB9M=\"}],\"isPublished\":false,\"baseUrl\":\"https://localhost:7222\",\"tenantIdentifierStrategy\":{\"id\":\"8b9b053d-f918-4730-b001-c0ee9094a0df\",\"displayName\":\"jane\'s tenant\",\"objectId\":\"81e773e8-0f91-4d0a-94e7-2d72b0077946\",\"isSoftDeleted\":false,\"createdAt\":\"2022-04-14T03:57:44.9\",\"timestamp\":\"AAAAAAAAB9U=\",\"targetTenant\":null,\"strategyContainers\":[{\"id\":\"fd4ebf0b-5e71-47ac-af40-5c7df20cea7f\",\"tenantIdentifierStrategyName\":\"ASPNETCORE_ROUTE\",\"displayName\":\"jane\'s tenant\",\"objectId\":\"8c6841e2-c12a-424f-89a6-bfa71dcb893f\",\"isSoftDeleted\":false,\"createdAt\":\"2022-04-14T03:57:44.9\",\"timestamp\":\"AAAAAAAAB9Y=\",\"tenantIdentifier\":\"joesmartiepants\",\"strategy\":null}]},\"tenantIdentifier\":\"joesmartiepants\",\"timestamp\":\"AAAAAAAAB9Q=\"}";
            var deserializedTenant = JsonConvert.DeserializeObject<Tenant>(tenantJson);

            Guid newPrincipalGuid = Guid.NewGuid();
            Guid newTenantId = Guid.NewGuid();
            var tenant = new Tenant()
            {
                Id = newTenantId,
                DisplayName = "test tenant",
                ObjectId = Guid.NewGuid().ToString(),
                CreatedAt = DateTime.UtcNow,
                TenantInfos = new List<TenantInfo>()
                {
                    new TenantInfo()
                    {
                        Id = Guid.NewGuid(),
                        DisplayName = "finbuckle test tenant",
                        ParentTenantId = newTenantId,
                        ObjectId = Guid.NewGuid().ToString(),
                        CreatedAt = DateTime.UtcNow,
                        Identifier = "finbuckle-test-tenant",
                        Name = "finbuckle tenant name",
                        ConnectionString = "connectionstring",
                        TenantBaseUrl = "https://baseurl.com",
                        WebAPITenantInfos = new List<WebAPITenantInfo>()
                        {
                            new WebAPITenantInfo()
                            {
                                Id = Guid.NewGuid(),
                                Name = "test web api",
                                ObjectId = Guid.NewGuid().ToString(),
                                IsSoftDeleted = false,
                                CreatedAt = DateTime.UtcNow,
                                Identifier = "finbuckle-test-tenant",
                                ConnectionString = "finbuckle-test-tenant-connectionstring",
                                WebAPIBaseUrl = "https://tenant.com/api/"
                            }
                        }
                    }
                },
                Principals = new HashSet<Principal>()
                {
                    new Principal()
                    {
                        Id= newPrincipalGuid,
                        ObjectId = Guid.NewGuid().ToString(),
                        DisplayName = "principal@tenant.com",
                        CreatedAt = DateTime.UtcNow,
                        Iss = "https://isuer.tenant.com",
                        Aud = "client-application",
                        Sub = "oauth-sub"
                    }
                },
                AccessControlEntries = new List<AccessControlEntry>()
                    {
                        new AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "test tenant",
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission = ACEPermission.READ,
                            PermissionType = ACEPermissionType.PERMIT,
                            Scope = ACEPermissionScope.OWNER
                        },
                        new AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "test tenant",
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission = ACEPermission.CREATE,
                            PermissionType = ACEPermissionType.PERMIT,
                            Scope = ACEPermissionScope.OWNER
                        },
                        new AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "test tenant",
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission = ACEPermission.DELETE,
                            PermissionType = ACEPermissionType.PERMIT,
                            Scope = ACEPermissionScope.OWNER
                        },
                        new AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "test tenant",
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission = ACEPermission.EXECUTE,
                            PermissionType = ACEPermissionType.PERMIT,
                            Scope = ACEPermissionScope.OWNER
                        },
                        new AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "test tenant",
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission = ACEPermission.PUBLISH,
                            PermissionType = ACEPermissionType.PERMIT,
                            Scope = ACEPermissionScope.OWNER
                        },
                        new AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "test tenant",
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission = ACEPermission.SEARCH,
                            PermissionType = ACEPermissionType.PERMIT,
                            Scope = ACEPermissionScope.OWNER
                        }
                    }
            };

            try
            {
                var newTenant = await CreateHostingEntity<Tenant>(tenant);

                // validate implicit insertion of new principal
                var principalQuery = this.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<Principal>>();
                IQueryable<Principal> newPrincipalReadResult = await principalQuery.Read(r => r.Id.Equals(newPrincipalGuid));

                Assert.IsTrue(newPrincipalReadResult.Any());

            }
            catch (Exception ex)
            {
                Assert.Fail($"exception under text {ex.Message}");
            }

            try
            {
                tenant.ObjectId = Guid.NewGuid().ToString();
                var updateResult = await this.UpdateHostingEntity<Tenant>(tenant);

                if (tenant.ObjectId != updateResult.ObjectId)
                {
                    throw new Exception("failed to update existing entity");
                }


            }
            catch (Exception e)
            {
                // we expect a failure due to unprovided property list for update
                Assert.IsTrue(e != null);
            }

            try
            {
                tenant.ObjectId = Guid.NewGuid().ToString();
                var updateResult = await this.UpdateHostingEntity<Tenant>(tenant, new List<string>
                {
                    nameof(tenant.ObjectId)
                });

                if (tenant.ObjectId != updateResult.ObjectId)
                {
                    throw new Exception("failed to update existing entity");
                }


            }
            catch (Exception e)
            {
                throw new Exception($"problem updating entity due to {e.Message}", e);
            }

            try
            {
                var readResult = await this.ReadHostingEntity<Tenant>(w => w.Id.Equals(tenant.Id),
                    new List<string>() { nameof(Tenant.Principals), nameof(Tenant.TenantInfos) });

                Assert.True(readResult != null);

                var readEntity = readResult.First();
                Assert.True(readEntity.Principals.Count() > 0);
                Assert.True(readEntity.TenantInfos.Count() > 0);
            }
            catch (Exception e)
            {
                throw new Exception("failed to insert entity", e);
            }

        }

    }
}
