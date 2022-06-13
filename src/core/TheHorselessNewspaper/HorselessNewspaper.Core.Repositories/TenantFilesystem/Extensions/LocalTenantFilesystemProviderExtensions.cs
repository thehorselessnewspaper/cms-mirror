using HorselessNewspaper.Core.Interfaces.Persistence.FileFormPersistence;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Repositories.TenantFilesystem.Extensions
{
    public static class LocalTenantFilesystemProviderExtensions
    {
        /// <summary>
        /// adds a posix tenant filesystem 
        /// </summary>
        /// <param name="services"></param>
        /// <returns></returns>
        public static IServiceCollection AddPosixFilesystemRepository(this IServiceCollection services)
        {
            services.AddTransient<ITenantFilesystemRepository, LocalTenantFilesystemRepository>();

            return services;
        }
    }
}
