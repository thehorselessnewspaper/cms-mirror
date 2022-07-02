﻿using Finbuckle.MultiTenant;
using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.Util;
using HorselessNewspaper.Web.Core.Services.Query.Entities;
using HorselessNewspaper.Web.Core.Services.Query.Controller;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.HorselessContentControllers
{
    [ApiController]
    [Route("{__tenant__}/" + RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_AccessControlEntry)]
    public class AccessControlEntriesRESTController : ControllerBase,
        IRESTContentController<AccessControlEntry>
    {

        public IContentCollectionService<IQueryableContentModelOperator<AccessControlEntry>, AccessControlEntry> _contentCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        public AccessControlEntriesRESTController(IContentCollectionService<IQueryableContentModelOperator<AccessControlEntry>,
                AccessControlEntry> contentCollectionService, ITenantInfo tenantInfo)
        {
            _contentCollectionService = contentCollectionService;
            CurrentTenant = tenantInfo;
        }

        [HttpPost("Create", Name = "ContentEntities[controller]_[action]")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(AccessControlEntry))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(AccessControlEntry))]
        public async Task<ActionResult<AccessControlEntry>> Create([FromBody] AccessControlEntry contentCollection)
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

        [HttpGet("GetByObjectId", Name = "ContentEntities[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(AccessControlEntry))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<AccessControlEntry>> GetByObjectId([FromRoute] string objectId)
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
        [HttpPost("Update/{contentCollectionId}", Name = "ContentEntities[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(AccessControlEntry))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(AccessControlEntry))]
        public async Task<ActionResult<AccessControlEntry>> Update([FromRoute] string contentCollectionId, [FromBody] AccessControlEntry contentCollection)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                List<string> updateablePropreties = await EntityReflectionHelpers.GetUpdateableProperties(contentCollection);

                var updateResult = await _contentCollectionService.Update(contentCollection, updateablePropreties);
                return Ok(updateResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("GetByPageNumber", Name = "ContentEntities[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ContentModel.AccessControlEntry>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<IEnumerable<ContentModel.AccessControlEntry>>> GetByPageNumber(int pageSize = 10, int pageNumber = 1, int pageCount = 1)
        {

            IActionResult result;
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var testFind = await _contentCollectionService.Query(pageSize, pageNumber, pageCount);

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

     }
}
