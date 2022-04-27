using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/// <summary>
/// these entities support asp.net core HttpContext.Features specifications
/// </summary>
namespace HorselessNewspaper.Core.Interfaces.Model.HttpContextFeatureModels
{
    /// <summary>
    /// most generic type of feature
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IHorselessFeature<T>
    {
        public T FeaturePayload { get; set; }
    }

    /// <summary>
    /// specialization of features that depend on httpcontext
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IHorselessHttpContextFeature<T> : IHorselessFeature<T>
    {

    }

    public interface IHorselessHttpSessionFeature<T> : IHorselessHttpContextFeature<T>
    {
        public string HttpSessionId { get; set; }

        public bool IsAnonymous { get; set; }

        public DateTime SessionStartedAt { get; set; }

        public DateTime SessionLastUpdatedAt { get;  set; }
    }
}
