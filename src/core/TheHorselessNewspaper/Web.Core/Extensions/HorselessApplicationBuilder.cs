using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Extensions
{
    public class HorselessApplicationBuilder
    {
        public readonly IApplicationBuilder Builder;

        public HorselessApplicationBuilder(IApplicationBuilder builder)
        {
            Builder = builder;
        }
    }
}
