using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST
{
    /// <summary>
    /// remove odata metadata controller
    /// from openapi spec
    /// as per
    /// - https://stackoverflow.com/questions/70472622/how-to-hide-odata-metadata-controller-in-swagger
    /// </summary>
    public class SwaggerODataControllerDocumentFilter : IDocumentFilter
    {
        public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
        {
            // remove controller
            foreach (ApiDescription apiDescription in context.ApiDescriptions)
            {
                var actionDescriptor = (ControllerActionDescriptor)apiDescription.ActionDescriptor;
                if (actionDescriptor.ControllerName == "Metadata")
                {
                    swaggerDoc.Paths.Remove($"/{apiDescription.RelativePath}");
                }
            }

            // remove schemas
            foreach ((string key, _) in swaggerDoc.Components.Schemas)
            {
                if (key.Contains("Edm") || key.Contains("OData"))
                {
                    swaggerDoc.Components.Schemas.Remove(key);
                }
            }
        }
    }
}
