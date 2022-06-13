using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Services.Persistence.LocalFilesystem.Extensions
{
    public static class PosixFilesystemServiceStartupExtensions
    {
        public static IServiceCollection AddPosixFilesystemService(this IServiceCollection services)
        {
            services.AddTransient<IPosixFilesystemService, HorselessPosixTenantFilesystemService>();
            return services;
        }
    }
}
