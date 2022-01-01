using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    public class ContentCollectionController : ODataController
    {

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("horselessdata/ContentCollection")]
        [HttpGet("horselessdata/ContentCollection/$count")]
        public async Task<IActionResult> Get()
        {
            return await Task.FromResult(Ok());
        }
    }
}
