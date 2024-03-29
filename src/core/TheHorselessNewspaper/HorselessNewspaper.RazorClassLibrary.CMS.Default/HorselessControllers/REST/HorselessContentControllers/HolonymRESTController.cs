﻿using Finbuckle.MultiTenant;
using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.HorselessContentControllers
{

    [ApiController]
    [Route("{__tenant__}/" + RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_HOLONYM)]
    public class HolonymRESTController : ControllerBase,
        IRESTContentController<Holonym>
    {

        public IContentCollectionService<IQueryableContentModelOperator<Holonym>, Holonym> _contentCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        public HolonymRESTController(IContentCollectionService<IQueryableContentModelOperator<Holonym>,
            Holonym> contentCollectionService, ITenantInfo tenantInfo)
        {
            _contentCollectionService = contentCollectionService;
            CurrentTenant = tenantInfo;
        }

        [HttpPost("Create", Name = "[controller]_[action]")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(Holonym))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Holonym))]
        public async Task<ActionResult<Holonym>> Create([FromBody] Holonym contentCollection)
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

        [HttpGet("GetByObjectId", Name = "[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Holonym))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Holonym>> GetByObjectId([FromRoute] string objectId)
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
        [HttpPost("Update/{contentCollectionId}", Name = "[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(Holonym))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(Holonym))]
        public async Task<ActionResult<Holonym>> Update([FromRoute] string contentCollectionId, [FromBody] Holonym contentCollection)
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
