using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace HorselessNewspaper.Web.Core.Extensions
{
    public class HorselessServiceBuilder
    {
        /// <summary>
        /// The inner Service collection.
        /// </summary>
        public readonly IServiceCollection Services;

        /// <summary>
        /// Gets/sets if runtime compilation should be enabled.
        /// </summary>
        public bool AddRazorRuntimeCompilation { get; set; }

        /// <summary>
        /// Default constructor.
        /// </summary>
        /// <param name="services">The current service collection</param>
        public HorselessServiceBuilder(IServiceCollection services)
        {
            Services = services;
        }
    }
}
