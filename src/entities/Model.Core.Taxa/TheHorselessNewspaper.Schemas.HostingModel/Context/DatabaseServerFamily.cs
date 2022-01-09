using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheHorselessNewspaper.HostingModel.Context
{
    internal enum DatabaseServerFamily
    {
        IsSQLServer,
        IsAzureSqlServer,
        IsPostGIS,
        IsPostGres,
        IsMySQL
    }
}
