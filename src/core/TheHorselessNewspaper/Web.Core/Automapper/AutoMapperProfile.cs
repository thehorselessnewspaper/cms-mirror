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

            CreateMap<HostingModel.Principal, ApiModel.HostingEntitiesPrincipal>();
            CreateMap<ContentModel.Principal, ApiModel.ContentEntitiesPrincipal>();


            CreateMap<HostingModel.AccessControlEntry, ApiModel.HostingEntitiesAccessControlEntry>();
            CreateMap<ContentModel.AccessControlEntry, ApiModel.ContentEntitiesAccessControlEntry>();

        }
    }
}
