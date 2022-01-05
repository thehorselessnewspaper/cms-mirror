using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query.ContentCollections;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using hostingModel = TheHorselessNewspaper.Schemas.HostingModel.Entities;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.HostingModel.Entities.Query.HostingModelCollection;

namespace TheHorselessNewspaper.HostingModel.Context
{
    /// <summary>
    /// bulk registration of repository like services
    /// </summary>
    internal static class ModelOperatorExtensions
    {
        internal static void RegisterHostingModelOperator(IServiceCollection services)
        {
            services.AddScoped<IQueryableHostingModelOperator<hostingModel.FilesystemAssetLocation>, HostingModelQueries<hostingModel.FilesystemAssetLocation>>();
            services.AddScoped<IQueryableHostingModelOperator<hostingModel.HorselessSession>, HostingModelQueries<hostingModel.HorselessSession>>();
            services.AddScoped<IQueryableHostingModelOperator<hostingModel.Host>, HostingModelQueries<hostingModel.Host>>();
            services.AddScoped<IQueryableHostingModelOperator<hostingModel.KeyCloakConfiguration>, HostingModelQueries<hostingModel.KeyCloakConfiguration>>();
            services.AddScoped<IQueryableHostingModelOperator<hostingModel.NugetPackage>, HostingModelQueries<hostingModel.NugetPackage>>();
            services.AddScoped<IQueryableHostingModelOperator<hostingModel.Principal>, HostingModelQueries<hostingModel.Principal>>();
            services.AddScoped<IQueryableHostingModelOperator<hostingModel.RoutingDiscriminator>, HostingModelQueries<hostingModel.RoutingDiscriminator>>();
            services.AddScoped<IQueryableHostingModelOperator<hostingModel.Tenant>, HostingModelQueries<hostingModel.Tenant>>();
            services.AddScoped<IQueryableHostingModelOperator<hostingModel.TenantInfo>, HostingModelQueries<hostingModel.TenantInfo>>();
            services.AddScoped<IQueryableHostingModelOperator<hostingModel.UriPath>, HostingModelQueries<hostingModel.UriPath>>();
            services.AddScoped<IQueryableHostingModelOperator<hostingModel.WebAPITenantInfo>, HostingModelQueries<hostingModel.WebAPITenantInfo>>();
        }

        internal static void RegisterContentModelOperators(IServiceCollection services)
        {
            // add services friendly for odata for each 
            // odata exposed entity
            services.AddScoped<IQueryableContentModelOperator<ContentModel.ContentCollection>, ContentModelQueries<ContentModel.ContentCollection>>();
            services.AddScoped<IQueryableContentModelOperator<ContentModel.FilesystemAsset>, ContentModelQueries<ContentModel.FilesystemAsset>>();
            services.AddScoped<IQueryableContentModelOperator<ContentModel.Holonym>, ContentModelQueries<ContentModel.Holonym>>();
            services.AddScoped<IQueryableContentModelOperator<ContentModel.HorselessContent>, ContentModelQueries<ContentModel.HorselessContent>>();
            services.AddScoped<IQueryableContentModelOperator<ContentModel.HorselessSession>, ContentModelQueries<ContentModel.HorselessSession>>();
            services.AddScoped<IQueryableContentModelOperator<ContentModel.JSONAsset>, ContentModelQueries<ContentModel.JSONAsset>>();
            services.AddScoped<IQueryableContentModelOperator<ContentModel.Meronym>, ContentModelQueries<ContentModel.Meronym>>();
            services.AddScoped<IQueryableContentModelOperator<ContentModel.MIMEType>, ContentModelQueries<ContentModel.MIMEType>>();
            services.AddScoped<IQueryableContentModelOperator<ContentModel.NavigationMenu>, ContentModelQueries<ContentModel.NavigationMenu>>();
            services.AddScoped<IQueryableContentModelOperator<ContentModel.NavigationMenuItem>, ContentModelQueries<ContentModel.NavigationMenuItem>>();

            services.AddScoped<IQueryableContentModelOperator<ContentModel.NugetPackage>,
                ContentModelQueries<ContentModel.NugetPackage>>();

            services.AddScoped<IQueryableContentModelOperator<ContentModel.Placeholder>, ContentModelQueries<ContentModel.Placeholder>>();
            // services.AddScoped<IQueryableContentModelOperator<ContentModel.Principal>, ContentModelQueries<ContentModel.Principal>>();
            services.AddScoped<IQueryableContentModelOperator<ContentModel.Publication>, ContentModelQueries<ContentModel.Publication>>();
            services.AddScoped<IQueryableContentModelOperator<ContentModel.Taxon>, ContentModelQueries<ContentModel.Taxon>>();
            services.AddScoped<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModelQueries<ContentModel.Tenant>>();
        }
    }
}
