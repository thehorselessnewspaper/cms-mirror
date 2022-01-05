using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace TheHorselessNewspaper.Schemas.HostingModel.ODATA
{
    public class HorselessOdataModel
    {
        private Type[] GetTypesInNamespace(System.Reflection.Assembly assembly, string nameSpace)
        {
            return assembly.GetTypes()
                .Where(t => String.Equals(t.Namespace, nameSpace, StringComparison.Ordinal))
                .ToArray();
        }

        /// <summary>
        /// wholly based on 
        ///     - https://stackoverflow.com/questions/28200511/how-to-build-edm-model-for-odata-web-api-in-runtime
        /// </summary>
        /// <returns></returns>
        public async Task<IEdmModel> GetContentEDMModel()
        {
            var builder = new ODataConventionModelBuilder();
            /// TODO load fro ma configurable location
            foreach (Type item in GetTypesInNamespace(System.Reflection.Assembly.Load("TheHorselessNewspaper.HostingModel"), "TheHorselessNewspaper.Schemas.ContentModel.ContentEntities"))
            {

                //My models have a key named "Id"
                if (item.GetProperty("Id") == null)
                    continue;

                EntityTypeConfiguration entityType = builder.AddEntityType(item);
                entityType.HasKey(item.GetProperty("Id"));
                builder.AddEntitySet(item.Name, entityType);
            }

            return await Task.FromResult(builder.GetEdmModel());
        }

        public async Task<IEdmModel> GetHostingEDMModel()
        {
            var builder = new ODataConventionModelBuilder();
            /// TODO load fro ma configurable location
            foreach (Type item in GetTypesInNamespace(System.Reflection.Assembly.Load("TheHorselessNewspaper.HostingModel"), "TheHorselessNewspaper.Schemas.HostingModel.Entities"))
            {

                //My models have a key named "Id"
                if (item.GetProperty("Id") == null)
                    continue;

                EntityTypeConfiguration entityType = builder.AddEntityType(item);
                entityType.HasKey(item.GetProperty("Id"));
                builder.AddEntitySet(item.Name, entityType);
            }

            return await Task.FromResult(builder.GetEdmModel());
        }
    }
}

