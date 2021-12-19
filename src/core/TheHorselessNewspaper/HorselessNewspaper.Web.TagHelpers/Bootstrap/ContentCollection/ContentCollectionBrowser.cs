using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.TagHelpers.Bootstrap.ContentCollection
{
    public class ContentCollectionBrowser : TagHelper
    {
        public TheHorselessNewspaper.
                Schemas.ContentModel
                .ContentEntities.ContentCollection Payload { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "ContentCollections";
            output.Content.SetHtmlContent(
   $@"<ul><li><strong>id:</strong> {Payload.Id}</li>
<li><strong>DisplayName</strong> {Payload.DisplayName}</li>
<li><strong>IsSoftDeleted:</strong> {Payload.IsSoftDeleted}</li>
<li><strong>AllowAnonymousRead</strong> {Payload.AllowAnonymousRead}</li></ul>");
            output.TagMode = TagMode.StartTagAndEndTag;
        }
    }
}
