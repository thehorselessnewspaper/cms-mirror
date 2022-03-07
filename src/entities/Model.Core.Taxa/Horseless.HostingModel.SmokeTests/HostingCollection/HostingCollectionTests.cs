﻿using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.HostingModel.HostingEntities.Query.Extensions;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace Horseless.HostingModel.SmokeTests.HostingCollection
{
    internal class HostingCollectionTests : Tests
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
            var tenant = new Tenant()
            {
                Id = Guid.NewGuid(),
                DisplayName = "test tenant",
                ObjectId = Guid.NewGuid().ToString(),
                CreatedAt = DateTime.UtcNow,
                TenantInfos = new List<TenantInfo>()
                {
                    new TenantInfo()
                    {
                        Id = Guid.NewGuid(),
                        DisplayName = "finbuckle test tenant",
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
                Principals = new List<Principal>()
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
        }
    }
}
