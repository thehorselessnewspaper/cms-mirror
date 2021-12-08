using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.AdminPortal.TenantAdminServices.Models.Hosting;
using TheHorselessNewspaper.AdminPortal.TenantAdminServices.Models.Tenant;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.AdminPortal.TenantAdminServices.Automapper
{
    public class AutoMapperProfiles : Profile
    {
        // ouch a LUT in a constructor
        public AutoMapperProfiles()
        {
            CreateMap<Tenant, TenantDTO>();
            CreateMap<Tenant, TenantDTO>().ReverseMap();

            CreateMap<Host, HostDTO>();
            CreateMap<Host, HostDTO>().ReverseMap();

            CreateMap<RoutingDiscriminator, RoutingDiscriminatorDTO>();
            CreateMap<RoutingDiscriminator, RoutingDiscriminatorDTO>().ReverseMap();

            CreateMap<UriPath, UriPathDTO>();
            CreateMap<UriPath, UriPathDTO>().ReverseMap();
        }
    }
}
