using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Razor.Compilation;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.SingletonServices.ViewCompiler
{
    /// <summary>
    /// todo - revisit making this an internal class
    /// support dynamic view loading and unloading
    /// wholly based on
    ///  HorselessViewCompiler
    /// </summary>
    
    public class HorselessViewCompilerProvider : IViewCompilerProvider
    { 
        public HorselessViewCompilerProvider(ApplicationPartManager applicationPartManager, ILoggerFactory loggerFactory)
        {
            this.Compiler = new HorselessViewCompiler(applicationPartManager, loggerFactory);
        }

        protected IViewCompiler Compiler { get; }

        public IViewCompiler GetCompiler()
        {
            return this.Compiler;
        }
    }
}
