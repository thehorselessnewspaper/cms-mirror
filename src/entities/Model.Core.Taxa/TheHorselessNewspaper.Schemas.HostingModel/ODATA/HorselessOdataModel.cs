using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace TheHorselessNewspaper.Schemas.HostingModel.ODATA
{
    public class HorselessOdataModel
    {
        public async Task<IEdmModel> GetEdmModel()
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

