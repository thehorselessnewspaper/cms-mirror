using AutoMapper;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using ApiModel = HorselessNewspaper.Web.Core.Services.Query.HorselessRESTAPIClient;
namespace HorselessNewspaper.Web.Core.Automapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<HostingModel.Tenant, ContentModel.Tenant>();
            CreateMap<ContentModel.Tenant, HostingModel.Tenant>();

            CreateMap<HostingModel.Principal, ContentModel.Principal>();
            CreateMap<ContentModel.Principal, HostingModel.Principal>();

            CreateMap<HostingModel.TenantIdentifierStrategy, ContentModel.TenantIdentifierStrategy>();
            CreateMap<ContentModel.TenantIdentifierStrategy, HostingModel.TenantIdentifierStrategy>();

            CreateMap<HostingModel.TenantIdentifierStrategyContainer, ContentModel.TenantIdentifierStrategyContainer>();
            CreateMap<ContentModel.TenantIdentifierStrategyContainer, HostingModel.TenantIdentifierStrategyContainer>();


            CreateMap<HostingModel.Tenant, ApiModel.HostingEntitiesTenant>();
            CreateMap<ContentModel.Tenant, ApiModel.ContentEntitiesTenant>();

            // reverse map
            CreateMap<ApiModel.HostingEntitiesTenant, HostingModel.Tenant>();
            CreateMap<ApiModel.ContentEntitiesTenant, ContentModel.Tenant>();

            CreateMap<HostingModel.Principal, ApiModel.HostingEntitiesPrincipal>();
            CreateMap<ContentModel.Principal, ApiModel.ContentEntitiesPrincipal>();

            // reverse map
            CreateMap<ApiModel.HostingEntitiesPrincipal, HostingModel.Principal>();
            CreateMap<ApiModel.ContentEntitiesPrincipal, ContentModel.Principal>();

            CreateMap<HostingModel.AccessControlEntry, ApiModel.HostingEntitiesAccessControlEntry>();
            CreateMap<ContentModel.AccessControlEntry, ApiModel.ContentEntitiesAccessControlEntry>();

            // reverse map
            CreateMap<ApiModel.HostingEntitiesAccessControlEntry, HostingModel.AccessControlEntry>();
            CreateMap<ApiModel.ContentEntitiesAccessControlEntry, ContentModel.AccessControlEntry>();


            CreateMap<HostingModel.TenantIdentifierStrategy, ApiModel.HostingEntitiesTenantIdentifierStrategy>();
            CreateMap<ContentModel.TenantIdentifierStrategy, ApiModel.ContentEntitiesTenantIdentifierStrategy>();

            // reverse map
            CreateMap<ContentModel.ContentCollection, ApiModel.ContentEntitiesContentCollection>();
            CreateMap<ApiModel.ContentEntitiesContentCollection, ContentModel.ContentCollection>();

            CreateMap<ContentModel.HorselessView, ApiModel.ContentEntitiesHorselessView>();
            CreateMap<ApiModel.ContentEntitiesHorselessView, ContentModel.HorselessView>();

            CreateMap<ApiModel.HostingEntitiesTenantIdentifierStrategy, HostingModel.TenantIdentifierStrategy>();
            CreateMap<ApiModel.ContentEntitiesTenantIdentifierStrategy, ContentModel.TenantIdentifierStrategy>();
        }
    }
}
