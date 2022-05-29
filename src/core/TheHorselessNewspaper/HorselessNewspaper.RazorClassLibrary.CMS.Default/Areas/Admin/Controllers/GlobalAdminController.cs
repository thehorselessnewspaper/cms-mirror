using HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Model;
using HorselessNewspaper.Web.Core.Services.Query.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Admin.Controllers
{
    [Authorize]
    [Area("Admin")]
    public class GlobalAdminController : Controller
    {
        ILogger<GlobalAdminController> _logger;
        IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModel.Tenant> _tenantCollectionService;
        IQueryableHostingModelOperator<HostingModel.Tenant> _hostModelOperator;
        private IConfiguration _configuration;
        IQueryableContentModelOperator<ContentModel.Tenant> _modelOperator;
        public GlobalAdminController(ILogger<GlobalAdminController> logger,
            IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModel.Tenant> tenantCollectionService,
            IQueryableContentModelOperator<ContentModel.Tenant> modelOperator,
            IQueryableHostingModelOperator<HostingModel.Tenant> hostModelOperator,
            IConfiguration configuration)
        {
            this._logger = logger;
            this._tenantCollectionService = tenantCollectionService;
            this._modelOperator = modelOperator;
            this._hostModelOperator = hostModelOperator;
            this._configuration = configuration;
        }

        public IActionResult Dashboard()
        {
            return View();
        }

        [HttpGet()]
        public ActionResult ResetDatabase()
        {
            var model = new ResetDatabaseModel()
            {
                ContentDbConnectionString = _configuration.GetConnectionString("ContentModelConnection"),
                HostingDbConnectionString = _configuration.GetConnectionString("HostingModelConnection")
            };

            return View(model);
        }

        [HttpPost()]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> ResetDatabase([FromForm]ResetDatabaseModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    try
                    {
                        if (model.IsMustResetDatabase)
                        {
                            await this._modelOperator.ResetDb();
                        }
                    }
                    catch (Exception ex)
                    {
                        _logger.LogError($"problem resetting database {ex.Message}");
                    }

                    try
                    {
                        if (model.IsMustResetDatabase)
                        {
                            await this._hostModelOperator.ResetDb();
                        }
                    }
                    catch (Exception ex)
                    {
                        _logger.LogError($"problem resetting database {ex.Message}");
                    }
                }

            }
            catch (Exception e)
            {
                _logger.LogError($"problem resetting database {e.Message}");
            }

            model.IsMustResetDatabase = false;
            return RedirectToAction(nameof(ResetDatabase));
        }

    }
}
