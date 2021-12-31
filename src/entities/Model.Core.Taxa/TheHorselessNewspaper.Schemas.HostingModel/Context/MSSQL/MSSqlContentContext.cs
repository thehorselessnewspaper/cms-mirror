using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;

namespace TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL
{
    public class MSSqlContentContext : THNLPContentContext
    {
        public MSSqlContentContext(DbContextOptions<THNLPContentContext> options, TenantInfoDTO tenant) : base(options, tenant)
        {
            
        }
    }
}
