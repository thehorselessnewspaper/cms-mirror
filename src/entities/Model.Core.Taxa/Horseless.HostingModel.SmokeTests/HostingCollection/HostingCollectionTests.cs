using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HostingEntities = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace Horseless.HostingModel.SmokeTests.HostingCollection
{
    internal class HostingCollectionTests : Tests
    {
        [Test]
        public void CRUDTest()
        {
            Assert.DoesNotThrowAsync(CrudHostingCollection, "test failed due to entity not inserted with null objectid");
            Assert.Pass();

        }

        private async Task CrudHostingCollection()
        {

            var tenant = new HostingEntities.Tenant()
            {
                Id = Guid.NewGuid(),
                DisplayName = "test tenant",
                ObjectId = Guid.NewGuid().ToString(),
                CreatedAt = DateTime.UtcNow,
                TenantInfos = new List<HostingEntities.TenantInfo>()
                {
                    new HostingEntities.TenantInfo()
                    {
                        Id = Guid.NewGuid(),
                        DisplayName = "finbuckle test tenant",
                        ObjectId = Guid.NewGuid().ToString(),
                        CreatedAt = DateTime.UtcNow,
                        Identifier = "finbuckle-test-tenant",
                        Name = "finbuckle tenant name",
                        ConnectionString = "connectionstring",
                        TenantBaseUrl = "https://baseurl.com",
                        WebAPITenantInfos = new List<HostingEntities.WebAPITenantInfo>()
                        {
                            new HostingEntities.WebAPITenantInfo()
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
                HorselessClaimsPrincipals = new List<HostingEntities.HorselessClaimsPrincipal>()
                {
                    new HostingEntities.HorselessClaimsPrincipal()
                    {
                        Id= Guid.NewGuid(), 
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
                var newTenant = await CreateHostingEntity<HostingEntities.Tenant>(tenant);
            }
            catch(Exception ex)
            {
                Assert.Fail($"exception under text {ex.Message}");
            }

            await Task.FromResult(new List<HostingEntities.Host>());
        }
    }
}
