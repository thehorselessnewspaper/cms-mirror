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
            CreateMap<Host, HostDTO>();
            CreateMap<RoutingDiscriminator, RoutingDiscriminatorDTO>();
            CreateMap<UriPath, UriPathDTO>();
        }
    }
}
