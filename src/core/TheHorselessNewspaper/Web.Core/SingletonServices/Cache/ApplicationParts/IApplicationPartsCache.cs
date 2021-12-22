using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Razor.Compilation;
using Microsoft.AspNetCore.Mvc.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.SingletonServices.Cache.ApplicationParts
{
    /// <summary>
    /// support a dynamically updated cache of currently available application parts
    /// as per https://docs.microsoft.com/en-us/aspnet/core/mvc/advanced/app-parts?view=aspnetcore-6.0
    /// 
    /// 
    /// </summary>
    public interface IApplicationPartsCache
    {
        public Task<ControllerFeature> GetControllerFeature();
        public Task<ControllerFeature> SetControllerFeature(ControllerFeature controllerFeature);

        public Task<TagHelperFeature> GetTagHelperFeature();
        public Task<TagHelperFeature> SetTagHelperFeature(TagHelperFeature tagHelperFeature);

        public Task<ViewsFeature> GetViewsFeature();
        public Task<ViewsFeature> SetViewsFeature(ViewsFeature viewsFeature);

    }
}
