using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace Horseless.HostingModel.SmokeTests.ContentCollection
{
    internal class ContentCollectionTests : Tests
    {
        [Test]
        public  void CRUDTest()
        {
            Assert.DoesNotThrowAsync(CrudContentCollection, "test failed due to entity not inserted with null objectid");
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

            newcontentCollection.ObjectId = Guid.NewGuid().ToString();
            var updateResult = await this.Update<ContentModel.ContentCollection>(newcontentCollection);

            if(newcontentCollection.ObjectId != updateResult.ObjectId)
            {
                throw new Exception("failed to update existing entity");
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


            var deleteResult = await this.Delete<ContentModel.ContentCollection>(newcontentCollection.ObjectId);

            var deleteQuery = await this.Delete<ContentModel.ContentCollection>(w => w.DisplayName.Length > 0);
        }

    }
}
