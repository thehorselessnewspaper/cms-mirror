using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.AssetUploadControllers.ActionFilters;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.AssetUploadControllers.FilesystemAssetIngress.Utilities;
using HorselessNewspaper.Web.Core.Services.Persistence.LocalFilesystem;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Headers;
using System.Net;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.AssetUploadControllers.FilesystemAssetIngress
{
    /// <summary>
    /// filesystem asset uploader - this isn't over yet
    /// https://github.com/dotnet/AspNetCore.Docs/blob/main/aspnetcore/mvc/models/file-uploads/samples/3.x/SampleApp/Controllers/StreamingController.cs
    /// </summary>
    [ApiController]
    [Route("{__tenant__}/" + RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_FILESYSTEMASSETINGRESS)]
    public class FilesystemAssetIngressController : Controller
    {
        //private readonly AppDbContext _context;
        private readonly long _fileSizeLimit = 1000000000;
        private readonly ILogger<FilesystemAssetIngressController> _logger;
        private readonly string[] _permittedExtensions = { ".txt", ".xls", ".jpg", ".png", ".pdf",  ".json", ".xml" };
        private readonly string _targetFilePath;
        // Get the default form options so that we can use them to set the default 
        // limits for request body data.
        private static readonly FormOptions _defaultFormOptions = new FormOptions();
        public IPosixFilesystemService _tenantFilesystemService;

        public FilesystemAssetIngressController(
            IPosixFilesystemService tenantFilesystemService,
            ILogger<FilesystemAssetIngressController> logger,
            IConfiguration config)
        {
            _logger = logger;
            // _fileSizeLimit = config.GetValue<long>("FileSizeLimit");
            _tenantFilesystemService = tenantFilesystemService;
            // To save physical files to a path provided by configuration:
            _targetFilePath = config.GetValue<string>("tenant-filesystem");

            // To save physical files to the temporary files folder, use:
            //_targetFilePath = Path.GetTempPath();
        }

        [Consumes("multipart/form-data")]
        [HttpPost("UploadPhysical", Name = "ContentEntities[controller]_[action]")]
        [DisableFormValueModelBinding]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> UploadPhysical()
        {


            if (!MultipartRequestHelper.IsMultipartContentType(Request.ContentType))
            {
                ModelState.AddModelError("File",
                    $"The request couldn't be processed (Error 1).");
                // Log error

                return BadRequest(ModelState);
            }

            var boundary = MultipartRequestHelper.GetBoundary(
                MediaTypeHeaderValue.Parse(Request.ContentType),
                _defaultFormOptions.MultipartBoundaryLengthLimit);
            var reader = new MultipartReader(boundary, HttpContext.Request.Body);
            var section = await reader.ReadNextSectionAsync();

            while (section != null)
            {
                var hasContentDispositionHeader =
                    ContentDispositionHeaderValue.TryParse(
                        section.ContentDisposition, out var contentDisposition);

                if (hasContentDispositionHeader)
                {
                    // This check assumes that there's a file
                    // present without form data. If form data
                    // is present, this method immediately fails
                    // and returns the model error.
                    if (!MultipartRequestHelper
                        .HasFileContentDisposition(contentDisposition))
                    {
                        ModelState.AddModelError("File",
                            $"The request couldn't be processed (Error 2).");
                        // Log error

                        return BadRequest(ModelState);
                    }
                    else
                    {
                        // Don't trust the file name sent by the client. To display
                        // the file name, HTML-encode the value.
                        var trustedFileNameForDisplay = WebUtility.HtmlEncode(
                                contentDisposition.FileName.Value);
                        var trustedFileNameForFileStorage = Path.GetRandomFileName();

                        // **WARNING!**
                        // In the following example, the file is saved without
                        // scanning the file's contents. In most production
                        // scenarios, an anti-virus/anti-malware scanner API
                        // is used on the file before making the file available
                        // for download or for use by other systems. 
                        // For more information, see the topic that accompanies 
                        // this sample.

                        var streamedFileContent = await IngressFileHelpers.ProcessStreamedFile(
                            section, contentDisposition, ModelState,
                            _permittedExtensions, _fileSizeLimit);

                        if (!ModelState.IsValid)
                        {
                            return BadRequest(ModelState);
                        }

                        var insertResult = await _tenantFilesystemService.Persist(trustedFileNameForFileStorage, streamedFileContent, false, "tenants", "default", "media","images");
                        _logger.LogTrace($"{this.GetType().FullName} has saved uploaded file {trustedFileNameForDisplay}");

                        //using (var targetStream = System.IO.File.Create(
                        //    Path.Combine(_targetFilePath, trustedFileNameForFileStorage)))
                        //{
                        //    await targetStream.WriteAsync(streamedFileContent);

                        //    _logger.LogInformation(
                        //        "Uploaded file '{TrustedFileNameForDisplay}' saved to " +
                        //        "'{TargetFilePath}' as {TrustedFileNameForFileStorage}",
                        //        trustedFileNameForDisplay, _targetFilePath,
                        //        trustedFileNameForFileStorage);
                        //}
                    }
                }

                // Drain any remaining section body that hasn't been consumed and
                // read the headers for the next section.
                section = await reader.ReadNextSectionAsync();
            }

            return Created(nameof(FilesystemAssetIngressController), null);
        }
    }
}
