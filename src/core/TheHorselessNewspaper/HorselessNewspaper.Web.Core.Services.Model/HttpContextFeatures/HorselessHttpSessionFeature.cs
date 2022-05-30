
using HorselessNewspaper.Core.Interfaces.Model.HttpContextFeatureModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.Core.Services.Model.HttpContextFeatures
{
    public class HorselessHttpSessionFeature : IHorselessHttpSessionFeature<HorselessSession>
    {
        public string HttpSessionId { get; set; }
        public bool IsAnonymous { get; set; }
        public DateTime SessionStartedAt { get; set; }
        public DateTime SessionLastUpdatedAt { get; set; }
        public Uri HttpUrl { get; set; }
        public HorselessSession FeaturePayload { get; set; }
        public bool IsHttpContextAvailable { get; set; }
    }
}
