using AutoMapper;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using ApiModel = HorselessNewspaper.Web.Core.ScopedServices.RestClients;
namespace HorselessNewspaper.Web.Core.Automapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
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
            CreateMap<ApiModel.HostingEntitiesTenantIdentifierStrategy, HostingModel.TenantIdentifierStrategy>();
            CreateMap<ApiModel.ContentEntitiesTenantIdentifierStrategy, ContentModel.TenantIdentifierStrategy>();
        }
    }
}
