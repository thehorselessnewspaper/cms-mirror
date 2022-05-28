using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
// using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query.Extensions;
// using TheHorselessNewspaper.HostingModel.Entities.Query;

namespace Horseless.HostingModel.SmokeTests.ContentCollection
{
    internal class ContentCollectionTests : Tests
    {
        [Test]
        public async Task UpdateModelTest()
        {
            // avoid object references becoming equal
            var initialGuid = Guid.NewGuid();

            IContentRowLevelSecured tenant = new Tenant()
            {
                Id = initialGuid,
                CreatedAt = DateTime.UtcNow,
                DisplayName = "test update tenant",
                ObjectId = Guid.NewGuid().ToString(),
                Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                AccessControlEntries = new List<ContentModel.AccessControlEntry>()
                {
                    new ContentModel.AccessControlEntry()
                    {
                        Id = Guid.NewGuid(),
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = $"test created",
                        IsSoftDeleted = false,
                        ObjectId = Guid.NewGuid().ToString(),
                        Scope = ContentModel.ACEPermissionScope.EVERYONE,
                        Permission = ContentModel.ACEPermission.READ,
                        PermissionType = ContentModel.ACEPermissionType.DENY

                    }
                },
                TenantIdentifierStrategy = new TenantIdentifierStrategy()
                {
                    Id = Guid.NewGuid(),
                    CreatedAt = DateTime.UtcNow,
                    DisplayName = "test update tenant",
                    ObjectId = Guid.NewGuid().ToString(),
                    Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                    StrategyContainers = new List<TenantIdentifierStrategyContainer>()
                    {
                        new TenantIdentifierStrategyContainer()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "test update tenant",
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            TenantIdentifier = "testUpdateTenant",
                            TenantIdentifierStrategyName = TenantIdentifierStrategyName.ASPNETCORE_ROUTE
                        }
                    }
                }
            };



            var modifiedTenant = new Tenant()
            {
                Id = initialGuid,
                CreatedAt = tenant.CreatedAt,
                DisplayName = tenant.DisplayName,
                ObjectId = tenant.ObjectId,
                Timestamp = tenant.Timestamp,
                AccessControlEntries = new List<ContentModel.AccessControlEntry>()
                {
                    new ContentModel.AccessControlEntry()
                    {
                        Id = Guid.NewGuid(),
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = $"test created",
                        IsSoftDeleted = false,
                        ObjectId = Guid.NewGuid().ToString(),
                        Scope = ContentModel.ACEPermissionScope.EVERYONE,
                        Permission = ContentModel.ACEPermission.READ,
                        PermissionType = ContentModel.ACEPermissionType.DENY

                    }
                },
                TenantIdentifierStrategy = new TenantIdentifierStrategy()
                {
                    Id = Guid.NewGuid(),
                    CreatedAt = DateTime.UtcNow,
                    DisplayName = "test update tenant",
                    ObjectId = Guid.NewGuid().ToString(),
                    Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                    StrategyContainers = new List<TenantIdentifierStrategyContainer>()
                    {
                        new TenantIdentifierStrategyContainer()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "test update tenants",
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            TenantIdentifier = "testUpdateTenant",
                            TenantIdentifierStrategyName = TenantIdentifierStrategyName.ASPNETCORE_ROUTE
                        }
                    }
                }
            };

            modifiedTenant.Id = Guid.NewGuid();

            Tenant unUpdatedtenant = (Tenant)await tenant.UpdateModifiedPropertiesAsync(modifiedTenant);

            Assert.True(unUpdatedtenant.TenantIdentifierStrategy != null);

            Assert.True(unUpdatedtenant.TenantIdentifierStrategy.StrategyContainers != null);

            Assert.True(unUpdatedtenant.TenantIdentifierStrategy.StrategyContainers.Count == 1);
            // require a list of property names to update
            Assert.IsTrue(unUpdatedtenant.Id == initialGuid);



            // change the id
            modifiedTenant.Id = Guid.NewGuid();
            var updatedtenant = (Tenant)await tenant.UpdateModifiedPropertiesAsync(modifiedTenant, new List<string>
            {
                nameof(modifiedTenant.Id)
            });

            // validate only the id changed
            Assert.IsFalse(updatedtenant.Id == initialGuid);

            Assert.IsTrue(updatedtenant.CreatedAt == tenant.CreatedAt);
            Assert.IsTrue(updatedtenant.DisplayName == tenant.DisplayName);
            Assert.IsTrue(updatedtenant.ObjectId == tenant.ObjectId);
            Assert.IsTrue(updatedtenant.Timestamp == tenant.Timestamp);
            Assert.IsTrue(updatedtenant.TenantIdentifierStrategy != null);

            Assert.IsTrue(updatedtenant.TenantIdentifierStrategy.StrategyContainers != null);
            Assert.IsTrue(updatedtenant.TenantIdentifierStrategy.StrategyContainers.Count == 1);

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

            var principalQuery = this.GetIQueryableHostingModelOperator<IQueryableContentModelOperator<Principal>>();

            var tenantQuery = this.GetIQueryableHostingModelOperator<IQueryableContentModelOperator<Tenant>>();

            var tenantInsertResult = await tenantQuery.Create(modifiedTenant);

            var insertResult = await tenantQuery.InsertRelatedEntity<Principal>(modifiedTenant.Id, nameof(modifiedTenant.Owners), new List<Principal>() { relatedPrincipal });


            Assert.IsTrue(insertResult != null);

            int insertCount = 99;
            for (int i = 0; i < insertCount; i++)
            {
                // this loop will not result in equal quantities at this time
                
                await InsertRelatedOwner(tenant);
                await InsertRelatedAccount(tenant);
            }

            var validatedInsertResult = await tenantQuery.Read(r => r.Id.Equals(tenant.Id), new List<string>()
            {
                nameof(Tenant.Owners), nameof(Tenant.Accounts), nameof(Tenant.AccessControlEntries)
            },
            insertCount + 1, 1, 10);
            
            Assert.IsTrue(validatedInsertResult.First().Owners.Count > 50);

            // pessimistic insert test
            Assert.IsTrue(validatedInsertResult.First().Accounts.Count > 0);

            var principals = await principalQuery.Read(insertCount + 1, 1, 2);
            var principalCount = principals.Count();

            // exact insert test, adjust value as necessary
            Assert.IsTrue(principalCount == 199);
        }

        private async Task InsertRelatedOwner(IContentRowLevelSecured tenant)
        {
            var tenantQuery = this.GetIQueryableHostingModelOperator<IQueryableContentModelOperator<Tenant>>();
            var validatedInsertResult = await tenantQuery.Read(r => r.Id.Equals(tenant.Id), new List<string>()
            {
                nameof(tenant.Owners), nameof(Tenant.AccessControlEntries)
            });



            Assert.IsTrue(validatedInsertResult != null);

            var updatedRelatedEntitiesResult = validatedInsertResult.First();

            Assert.IsTrue(updatedRelatedEntitiesResult != null);

            Assert.IsTrue(updatedRelatedEntitiesResult.Owners.Count > 0);

            Assert.IsTrue(updatedRelatedEntitiesResult.TenantIdentifierStrategy != null);

            Assert.IsTrue(updatedRelatedEntitiesResult.TenantIdentifierStrategy.StrategyContainers != null);

            Assert.IsTrue(updatedRelatedEntitiesResult.TenantIdentifierStrategy.StrategyContainers.Count == 1);

            var relatedPrincipal = new Principal()
            {
                Id = Guid.NewGuid(),
                CreatedAt = tenant.CreatedAt,
                DisplayName = tenant.DisplayName,
                ObjectId = Guid.NewGuid().ToString(),
                Timestamp = tenant.Timestamp,
                HorselessSessions = new List<HorselessSession>()
                {
                    new HorselessSession()
                    {
                        Id = Guid.NewGuid(),
                        CreatedAt = tenant.CreatedAt,
                        DisplayName = tenant.DisplayName,
                        ObjectId = Guid.NewGuid().ToString()
                    }
                }
            };

            var principalQuery = this.GetIQueryableHostingModelOperator<IQueryableContentModelOperator<Principal>>();

            var insertResult = await tenantQuery.InsertRelatedEntity<Principal>(tenant.Id, nameof(tenant.Owners), new List<Principal>() { relatedPrincipal });


        }

        private async Task InsertRelatedAccount(IContentRowLevelSecured tenant)
        {
            var tenantQuery = this.GetIQueryableHostingModelOperator<IQueryableContentModelOperator<Tenant>>();
            var validatedInsertResult = await tenantQuery.Read(r => r.Id.Equals(tenant.Id), new List<string>()
            {
                nameof(Tenant.Owners), nameof(Tenant.Accounts), nameof(Tenant.AccessControlEntries)
            });


            Assert.IsTrue(validatedInsertResult != null);

            var updatedRelatedEntitiesResult = validatedInsertResult.First();

            Assert.IsTrue(updatedRelatedEntitiesResult != null);

            Assert.IsTrue(updatedRelatedEntitiesResult.Owners.Count > 0);

            Assert.IsTrue(updatedRelatedEntitiesResult.TenantIdentifierStrategy != null);

            Assert.IsTrue(updatedRelatedEntitiesResult.TenantIdentifierStrategy.StrategyContainers != null);

            Assert.IsTrue(updatedRelatedEntitiesResult.TenantIdentifierStrategy.StrategyContainers.Count == 1);

            var relatedPrincipal = new Principal()
            {
                Id = Guid.NewGuid(),
                CreatedAt = tenant.CreatedAt,
                DisplayName = tenant.DisplayName,
                ObjectId = Guid.NewGuid().ToString(),
                Timestamp = tenant.Timestamp,
                HorselessSessions = new List<HorselessSession>()
                {
                    new HorselessSession()
                    {
                        Id = Guid.NewGuid(),
                        CreatedAt = tenant.CreatedAt,
                        DisplayName = tenant.DisplayName,
                        ObjectId = Guid.NewGuid().ToString()
                    }
                }
            };

 
            var insertResult = await tenantQuery.InsertRelatedEntity<Principal>(tenant.Id, nameof(Tenant.Accounts), new List<Principal>() { relatedPrincipal });


        }

        [Test]
        public void CRUDTest()
        {
            Assert.DoesNotThrowAsync(CrudContentCollection, "test failed ");
            Assert.Pass();

        }

        private async Task CrudContentCollection()
        {
            var newcontentCollection = GetNewContentCollection();
            try
            {
                newcontentCollection = await CreateEntity(
                newcontentCollection);
            }
            catch (Exception ex)
            {
                throw new Exception("failed to insert entity", ex);
            }

            try
            {
                newcontentCollection.ObjectId = Guid.NewGuid().ToString();
                var updateResult = await this.Update<ContentModel.ContentCollection>(newcontentCollection);

                if (newcontentCollection.ObjectId != updateResult.ObjectId)
                {
                    throw new Exception("failed to update existing entity");
                }
            }
            catch (Exception e)
            {
                // we expect a failure due to unprovided property list for update
                Assert.NotNull(e);
            }

            try
            {
                newcontentCollection.ObjectId = Guid.NewGuid().ToString();
                newcontentCollection.UpdatedAt = DateTime.UtcNow;
                var updateResult = await this.Update<ContentModel.ContentCollection>(newcontentCollection,
                    new List<string>
                    {
                        nameof(newcontentCollection.ObjectId)
                    });

                if (newcontentCollection.ObjectId != updateResult.ObjectId)
                {
                    throw new Exception("failed to update existing entity");
                }
            }
            catch (Exception e)
            {
                // we expect a failure due to unprovided property list for update
                Assert.NotNull(e);
            }


            try
            {
                var readResult = await this.Read<ContentModel.ContentCollection>();
                var readQuery = readResult.Where(r => r.ObjectId == newcontentCollection.ObjectId).ToList();

                Assert.IsNotNull(readQuery);

                Assert.IsTrue(readQuery.First().ObjectId == newcontentCollection.ObjectId);
            }
            catch (Exception e)
            {
                throw new Exception("failed to read existing entity", e);
            }

            var readListResult = await this.ReadContentEntityAsEnumerable<ContentModel.ContentCollection>(query: w => w.ObjectId == newcontentCollection.ObjectId, includeClauses: new List<string>() { });
            Assert.IsNotNull(readListResult);
            Assert.IsTrue(readListResult.Count() > 0);

            // sever foreign key relationships
            newcontentCollection.AccessControlEntries.Clear();
            newcontentCollection.Owners.Clear();
            newcontentCollection.ParentContentCollections.Clear();

            try
            {
                // var deleteResult = await this.DeleteByObjectId<ContentModel.ContentCollection>(newcontentCollection.ObjectId);

                var deleteResult = await this.DeleteByEntityId<ContentModel.ContentCollection>(newcontentCollection.Id);
                Assert.IsNotNull(deleteResult);
            }
            catch (Exception e)
            {

                throw new Exception("exception deleting content collection " + e.Message, e);
            }

            var deleteQuery = await this.Delete<ContentModel.ContentCollection>(w => w.DisplayName.Length > 0);
        }

    }
}
