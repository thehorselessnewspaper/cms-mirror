using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace HorselessNewspaper.Web.Core.Services.Model.Extensions.Hosting
{
    public class HorselessServiceBuilder
    {
        /// <summary>
        /// The inner Service collection.
        /// </summary>
        public readonly IServiceCollection Services;

        public readonly IConfiguration Configuration;

        /// <summary>
        /// Gets/sets if runtime compilation should be enabled.
        /// </summary>
        public bool AddRazorRuntimeCompilation { get; set; }

        /// <summary>
        /// Default constructor.
        /// </summary>
        /// <param name="services">The current service collection</param>
        public HorselessServiceBuilder(IConfiguration configuration, IServiceCollection services)
        {
            Services = services;
            Configuration = configuration;
        }
    }
}
