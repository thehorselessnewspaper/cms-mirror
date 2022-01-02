using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL
{
    /// <summary>
    /// support polymorphic database interaction
    /// through a common dbcontext archetype
    /// </summary>
    internal partial class MSSqlContentContext : THLNPContentContext, IContentModelContext
    {
        internal MSSqlContentContext(DbContextOptions<THLNPContentContext> options, TenantInfo tenant) : base(options, tenant)
        {
            
        }

 

        /// <summary>
        /// extensoin point for localized model building
        /// </summary>
        /// <param name="builder"></param>
        void OnModelCreatingPartial(ModelBuilder builder)
        {

        }
    }

}
