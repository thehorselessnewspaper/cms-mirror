using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Hosting;
using Microsoft.Extensions.DependencyInjection;
using ContentEntities = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingEntities = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace HorselessNewspaper.Web.Core.Services.Query.Extensions
{
    public static  class HorselessQueryOperatorExtensions
    {
        public static IServiceCollection AddHorselessQueryOperators(this IServiceCollection services)
        {
            #region content collection query services
            /**
             * for injection into controllers
             **/
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.ContentCollection>, ContentEntities.ContentCollection>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.ContentCollection>, ContentEntities.ContentCollection>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Tenant>, ContentEntities.Tenant>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Tenant>, ContentEntities.Tenant>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.FilesystemAsset>, ContentEntities.FilesystemAsset>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.FilesystemAsset>, ContentEntities.FilesystemAsset>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Holonym>, ContentEntities.Holonym>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Holonym>, ContentEntities.Holonym>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessContent>, ContentEntities.HorselessContent>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessContent>, ContentEntities.HorselessContent>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessSession>, ContentEntities.HorselessSession>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessSession>, ContentEntities.HorselessSession>>();

            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.JSONAsset>, ContentEntities.JSONAsset>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.JSONAsset>, ContentEntities.JSONAsset>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Meronym>, ContentEntities.Meronym>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Meronym>, ContentEntities.Meronym>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.MIMEType>, ContentEntities.MIMEType>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.MIMEType>, ContentEntities.MIMEType>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.MIMEType>, ContentEntities.MIMEType>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.MIMEType>, ContentEntities.MIMEType>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.NavigationMenuItem>, ContentEntities.NavigationMenuItem>,
                 ContentCollectionService<IQueryableContentModelOperator<ContentEntities.NavigationMenuItem>, ContentEntities.NavigationMenuItem>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.NavigationMenu>, ContentEntities.NavigationMenu>,
                 ContentCollectionService<IQueryableContentModelOperator<ContentEntities.NavigationMenu>, ContentEntities.NavigationMenu>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Principal>, ContentEntities.Principal>,
                 ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Principal>, ContentEntities.Principal>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.AccessControlEntry>, ContentEntities.AccessControlEntry>,
                       ContentCollectionService<IQueryableContentModelOperator<ContentEntities.AccessControlEntry>, ContentEntities.AccessControlEntry>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessView>, ContentEntities.HorselessView>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessView>, ContentEntities.HorselessView>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Publication>, ContentEntities.Publication>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Publication>, ContentEntities.Publication>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.NugetPackage>, ContentEntities.NugetPackage>,
                   ContentCollectionService<IQueryableContentModelOperator<ContentEntities.NugetPackage>, ContentEntities.NugetPackage>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Taxon>, ContentEntities.Taxon>,
                            ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Taxon>, ContentEntities.Taxon>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Taxonomy>, ContentEntities.Taxonomy>,
                             ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Taxonomy>, ContentEntities.Taxonomy>>();
            services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Placeholder>, ContentEntities.Placeholder>,
                            ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Placeholder>, ContentEntities.Placeholder>>();

            #endregion

            #region hosting collection query services
            /**
             * for injection into controllers
             **/
            services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.NugetPackage>, HostingEntities.NugetPackage>,
                      HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.NugetPackage>, HostingEntities.NugetPackage>>();
            services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.KeyCloakConfiguration>, HostingEntities.KeyCloakConfiguration>,
                     HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.KeyCloakConfiguration>, HostingEntities.KeyCloakConfiguration>>();
            services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.Tenant>, HostingEntities.Tenant>,
                    HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.Tenant>, HostingEntities.Tenant>>();
            services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.Principal>, HostingEntities.Principal>,
         HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.Principal>, HostingEntities.Principal>>();

            services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.AccessControlEntry>, HostingEntities.AccessControlEntry>,
                HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.AccessControlEntry>, HostingEntities.AccessControlEntry>>();

            services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.TenantInfo>, HostingEntities.TenantInfo>,
                     HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.TenantInfo>, HostingEntities.TenantInfo>>();
            services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.WebAPITenantInfo>, HostingEntities.WebAPITenantInfo>,
                   HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.WebAPITenantInfo>, HostingEntities.WebAPITenantInfo>>();

            #endregion

            return services;
        }
    }
}
