using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query.ContentCollections;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace TheHorselessNewspaper.HostingModel.Context
{
    /// <summary>
    /// bulk registration of repository like services
    /// </summary>
    internal static class ModelOperatorExtensions
    {
        internal static void RegisterContentModelOperators(IServiceCollection services)
        {
            // add services friendly for odata for each 
            // odata exposed entity
            services.AddScoped<IQueryableContentModelOperator<ContentCollection>, ContentModelQueries<ContentCollection>>();
            services.AddScoped<IQueryableContentModelOperator<FilesystemAsset>, ContentModelQueries<FilesystemAsset>>();
            services.AddScoped<IQueryableContentModelOperator<Holonym>, ContentModelQueries<Holonym>>();
            services.AddScoped<IQueryableContentModelOperator<HorselessContent>, ContentModelQueries<HorselessContent>>();
            services.AddScoped<IQueryableContentModelOperator<HorselessSession>, ContentModelQueries<HorselessSession>>();
            services.AddScoped<IQueryableContentModelOperator<JSONAsset>, ContentModelQueries<JSONAsset>>();
            services.AddScoped<IQueryableContentModelOperator<Meronym>, ContentModelQueries<Meronym>>();
            services.AddScoped<IQueryableContentModelOperator<MIMEType>, ContentModelQueries<MIMEType>>();
            services.AddScoped<IQueryableContentModelOperator<NavigationMenu>, ContentModelQueries<NavigationMenu>>();
            services.AddScoped<IQueryableContentModelOperator<NavigationMenuItem>, ContentModelQueries<NavigationMenuItem>>();

            services.AddScoped<IQueryableContentModelOperator<TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.NugetPackage>,
                ContentModelQueries<TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.NugetPackage>>();

            services.AddScoped<IQueryableContentModelOperator<Placeholder>, ContentModelQueries<Placeholder>>();
            services.AddScoped<IQueryableContentModelOperator<Principal>, ContentModelQueries<Principal>>();
            services.AddScoped<IQueryableContentModelOperator<Publication>, ContentModelQueries<Publication>>();
            services.AddScoped<IQueryableContentModelOperator<Taxon>, ContentModelQueries<Taxon>>();
            services.AddScoped<IQueryableContentModelOperator<Tenant>, ContentModelQueries<Tenant>>();
        }
    }
}
