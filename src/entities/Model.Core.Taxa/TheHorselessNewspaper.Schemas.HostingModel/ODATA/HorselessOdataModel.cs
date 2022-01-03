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

        public async Task<IEdmModel> GetEdmModel()
        {
            var builder = new ODataConventionModelBuilder();
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

        public async Task<IEdmModel> GetEdmModelObsolete()
        {
            var builder = new ODataConventionModelBuilder();
            builder.EntitySet<AccessControlEntry>("AccessControlEntries");

            builder.EntitySet<ContentCollection>("ContentCollections");

            builder.EntitySet<FilesystemAsset>("FilesystemAssets");

            builder.EntitySet<Holonym>("Holonyms");

            builder.EntitySet<HorselessContent>("HorselessContents");
            builder.EntitySet<HorselessSession>("HorselessSessions");

            builder.EntitySet<JSONAsset>("JSONAssets");

            builder.EntitySet<MIMEType>("MIMETypes");

            builder.EntitySet<Meronym>("Meronyms");

            builder.EntitySet<NavigationMenu>("NavigationMenus");
            builder.EntitySet<NavigationMenuItem>("NavigationMenuItems");

            builder.EntitySet<NugetPackage>("NugetPackages");

            builder.EntitySet<Placeholder>("Placeholders");

            builder.EntitySet<Principal>("Principals");

            builder.EntitySet<Publication>("Publications");

            builder.EntitySet<Taxon>("Taxons");

            builder.EntitySet<Tenant>("Tenants");

            return await Task.FromResult(builder.GetEdmModel());
        }

    }
}

