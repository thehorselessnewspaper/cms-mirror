﻿using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST
{

    [ApiController]
    [Route("api/NavigationMenuItem")]
    public class NavigationMenuItemRESTController : ControllerBase,
        IContentController<ContentModel.NavigationMenuItem>
    {
        public IContentCollectionService<IQueryableContentModelOperator<NavigationMenuItem>, NavigationMenuItem> _contentCollectionService { get; set; }
        public ITenantInfo _tenantInfo { get; set; }

        public NavigationMenuItemRESTController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.NavigationMenuItem>,
                ContentModel.NavigationMenuItem> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }

        [HttpPost("Create")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ContentModel.NavigationMenuItem))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(ContentModel.NavigationMenuItem))]

        public async Task<ActionResult<NavigationMenuItem>> Create([FromBody] NavigationMenuItem contentCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var createResult = await _contentCollectionService.Create(contentCollection);
                return Ok(createResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("GetByObjectId")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ContentModel.NavigationMenuItem))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<NavigationMenuItem>> GetByObjectId([FromRoute] string objectId)
        {


            IActionResult result;
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var testFind = await _contentCollectionService.GetByObjectId(objectId);

                if (testFind == null)
                {
                    return NotFound();
                }
                else if (testFind == null)
                {
                    return NotFound();
                }
                else
                {
                    result = Ok(testFind);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok(result);
        }


        [Consumes("application/json")]
        [HttpPost("Update")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ContentModel.NavigationMenuItem))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(ContentModel.NavigationMenuItem))]
        public async Task<ActionResult<NavigationMenuItem>> Update([FromRoute] string contentCollectionId, [FromBody] NavigationMenuItem contentCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var updateResult = await _contentCollectionService.Update(contentCollection);
                return Ok(updateResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
