using Horseless.HostingModel.SmokeTests;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Entities.Query;
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
                Accounts = new List<Principal>()
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
                    new List<string>() { nameof(Tenant.Accounts), nameof(Tenant.TenantInfos) });

                Assert.True(readResult != null);

                var readEntity = readResult.First();
                Assert.True(readEntity.Accounts.Count() > 0);
                Assert.True(readEntity.TenantInfos.Count() > 0);
            }
            catch (Exception e)
            {
                throw new Exception("failed to insert entity", e);
            }

        }

    }
}
