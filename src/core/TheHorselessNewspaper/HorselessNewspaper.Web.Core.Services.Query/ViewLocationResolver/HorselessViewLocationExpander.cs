using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.Core.Services.Query.ViewLocationResolver
{

    public static class HorselessCacheKeyExtensions
    {

        /// <summary>
        /// as per 
        /// https://www.codegrepper.com/code-examples/csharp/c%23+object+to+byte+array
        /// </summary>
        /// <typeparam name="TObject"></typeparam>
        /// <param name="instance"></param>
        /// <returns></returns>
        public static byte[] ToByteArry<TObject>(this TObject instance)
        {
            if (instance == null)
                return null;

            BinaryFormatter bf = new BinaryFormatter();
            MemoryStream ms = new MemoryStream();
            bf.Serialize(ms, instance);

            return ms.ToArray();
        }

        public static TObject ByteArrayToObject<TObject>(byte[] arrBytes)
        {
            MemoryStream memStream = new MemoryStream();
            BinaryFormatter binForm = new BinaryFormatter();
            memStream.Write(arrBytes, 0, arrBytes.Length);
            memStream.Seek(0, SeekOrigin.Begin);
            TObject obj = (TObject)binForm.Deserialize(memStream);

            return obj;
        }

        public static string GetCacheKey<TCacheValue>(this object tCacheConsumer) where TCacheValue : class
        {
            var ret = string.Empty;
            StringBuilder sBuilder = new StringBuilder(tCacheConsumer.GetType().FullName);
            sBuilder.Append(typeof(TCacheValue).FullName);
            ret = sBuilder.ToString();
            return ret;
        }

    }

    public class HorselessViewLocationExpander : IViewLocationExpander
    {
        IContentCollectionService<IQueryableContentModelOperator<Tenant>, Tenant> _contentCollectionService;
        ITenantInfo _tenant;
        HttpContextAccessor _httpContextAccessor;
        IDistributedCache _cache;
        ILogger<HorselessViewLocationExpander> _logger;
        public HorselessViewLocationExpander(ITenantInfo tenant,
            HttpContextAccessor httpContextAccessor,
            IContentCollectionService<IQueryableContentModelOperator<Tenant>, Tenant> contentCollectionService,
            IDistributedCache cache,
            ILogger<HorselessViewLocationExpander> logger)
        {
            this._tenant = tenant;
            this._httpContextAccessor = httpContextAccessor;
            this._contentCollectionService = contentCollectionService;
            this._cache = cache;
            this._logger = logger;
        }

        public IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context, IEnumerable<string> viewLocations)
        {
            var isCachedLocationSet = this._cache.Get(this.GetCacheKey<IEnumerable<HorselessView>>());
            if(isCachedLocationSet != null)
            {

            }

            return viewLocations;

        }

        public void PopulateValues(ViewLocationExpanderContext context)
        {
            throw new NotImplementedException();
        }
    }
}
