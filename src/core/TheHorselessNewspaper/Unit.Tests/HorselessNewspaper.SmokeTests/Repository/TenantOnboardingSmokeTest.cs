using HorselessNewspaper.Core.Repositories.ActivityBased;
using HorselessNewspaper.SmokeTests.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.Extensions.Configuration;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.SmokeTests.Repository
{
    internal class TenantOnboardingSmokeTest
    {
        DbContextOptions<THNLPContentContext> contextOptions;
        THNLPContentContext contentContext;
        IConfiguration configuration;
        ITenantOnboardingRepository tenantOnboardingRepository;

        private static IConfiguration GetConfiguration<TConfig>() where TConfig : class
        {
            return new ConfigurationBuilder()
                .AddUserSecrets<TConfig>()
                .Build();
        }

        [SetUp]
        public void Setup()
        {
            configuration =  GetConfiguration<ContentDbContextConfig>();

            string connectionString = configuration["ContentDbContextConfig:ContentDbConnectionString"];
            contextOptions = new DbContextOptionsBuilder<THNLPContentContext>()
                .UseSqlServer(connectionString)
                .Options;

            // initialize the repository under test
            tenantOnboardingRepository = new TenantOnboardingRepository(
                 new THNLPContentContext(contextOptions));

        }

        [Test]
        public async Task CanInsertTenants()
        {
            try
            {
                using (contentContext = new THNLPContentContext(contextOptions))
                {
                    Tenant t = new Tenant()
                    {
                        Id = Guid.NewGuid(),
                        ObjectId = Guid.NewGuid().ToString(),
                        DisplayName = "Test Tenant",
                        CreatedAt = DateTime.UtcNow
                    };

                    var newTenantResult = await tenantOnboardingRepository.NewTenant(t.Id, t);
                    Assert.IsTrue(newTenantResult.Payload.Id == t.Id, "failed to insert new tenant");

                    var getTenantResult = await tenantOnboardingRepository.GetTenant(newTenantResult.Payload.Id);
                    Assert.IsTrue(getTenantResult.Payload.Id == t.Id) ;
                    Assert.IsTrue(getTenantResult.OperationSuccessful == true);
                };
            }
            catch(Exception ex)
            {
                Assert.Fail(ex.Message);
            }

            Assert.Pass("can insert new tenant");
        }
    }
}
