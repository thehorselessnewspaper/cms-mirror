using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;


namespace TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL
{
    internal partial class MSSQLHostingContext : THLNPHostingContext, IHostingModelContext
    {

        public MSSQLHostingContext(DbContextOptions<THLNPHostingContext> options) : base(options)
        {

        }

        public MSSQLHostingContext(DbContextOptions options) : base(options)
        {

        }

        void OnModelCreatingPartial(ModelBuilder modelBuilder)
        {
            // do mssql specific things here

        }
    }

}