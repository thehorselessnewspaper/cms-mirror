using Microsoft.Extensions.DependencyInjection;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query.ContentCollections;
using TheHorselessNewspaper.HostingModel.HostingEntities.Query;
using TheHorselessNewspaper.HostingModel.HostingEntities.Query.HostingModelCollection;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using hostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace TheHorselessNewspaper.HostingModel.Context
{
    /// <summary>
    /// bulk registration of repository like services
    /// </summary>
    internal static class ModelOperatorExtensions
    {
        internal static void RegisterHostingModelOperator(IServiceCollection services)
        {
            services.AddTransient<IQueryableHostingModelOperator<hostingModel.KeyCloakConfiguration>, HostingModelQueries<hostingModel.KeyCloakConfiguration>>();
            services.AddTransient<IQueryableHostingModelOperator<hostingModel.AccessControlEntry>, HostingModelQueries<hostingModel.AccessControlEntry>>();
            services.AddTransient<IQueryableHostingModelOperator<hostingModel.Principal>, HostingModelQueries<hostingModel.Principal>>();
            services.AddTransient<IQueryableHostingModelOperator<hostingModel.NugetPackage>, HostingModelQueries<hostingModel.NugetPackage>>();
            services.AddTransient<IQueryableHostingModelOperator<hostingModel.Tenant>, HostingModelQueries<hostingModel.Tenant>>();
            services.AddTransient<IQueryableHostingModelOperator<hostingModel.TenantInfo>, HostingModelQueries<hostingModel.TenantInfo>>();
            services.AddTransient<IQueryableHostingModelOperator<hostingModel.WebAPITenantInfo>, HostingModelQueries<hostingModel.WebAPITenantInfo>>();
        }

        internal static void RegisterContentModelOperators(IServiceCollection services)
        {
            // add services friendly for odata for each 
            // odata exposed entity
            services.AddTransient<IQueryableContentModelOperator<ContentModel.Principal>, ContentModelQueries<ContentModel.Principal>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.AccessControlEntry>, ContentModelQueries<ContentModel.AccessControlEntry>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.Placeholder>, ContentModelQueries<ContentModel.Placeholder>>();

            services.AddTransient<IQueryableContentModelOperator<ContentModel.ContentCollection>, ContentModelQueries<ContentModel.ContentCollection>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.FilesystemAsset>, ContentModelQueries<ContentModel.FilesystemAsset>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.Holonym>, ContentModelQueries<ContentModel.Holonym>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.HorselessContent>, ContentModelQueries<ContentModel.HorselessContent>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.HorselessSession>, ContentModelQueries<ContentModel.HorselessSession>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.JSONAsset>, ContentModelQueries<ContentModel.JSONAsset>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.Meronym>, ContentModelQueries<ContentModel.Meronym>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.MIMEType>, ContentModelQueries<ContentModel.MIMEType>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.NavigationMenu>, ContentModelQueries<ContentModel.NavigationMenu>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.NavigationMenuItem>, ContentModelQueries<ContentModel.NavigationMenuItem>>();

            services.AddTransient<IQueryableContentModelOperator<ContentModel.NugetPackage>, ContentModelQueries<ContentModel.NugetPackage>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.HorselessView>, ContentModelQueries<ContentModel.HorselessView>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.Publication>, ContentModelQueries<ContentModel.Publication>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.Taxon>, ContentModelQueries<ContentModel.Taxon>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.Taxonomy>, ContentModelQueries<ContentModel.Taxonomy>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModelQueries<ContentModel.Tenant>>();
            services.AddTransient<IQueryableContentModelOperator<ContentModel.HorselessView>, ContentModelQueries<ContentModel.HorselessView>>();
        }
    }
}
