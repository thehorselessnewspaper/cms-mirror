using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.ContentEntities.Query.Extensions
{
    public static class ContentQueryHelperExtension
    {

        /// <summary>
        /// support dbset.Update property change detection
        /// </summary>
        public async static Task<T> UpdateModifiedPropertiesAsync<T>(this T target, T source, List<String> targetProperties = null) where T : class, IContentRowLevelSecured
        {
            if (targetProperties != null && source != null)
            {

                var properties = source.GetType().GetProperties().Where(prop => prop.CanRead && prop.CanWrite);

                var matchQuery = from property in targetProperties
                                 from propertyName in properties
                                 where property.Equals(propertyName.Name, StringComparison.OrdinalIgnoreCase)
                                 select propertyName;
                var matchedProperties = matchQuery.ToList();


                foreach (var prop in matchedProperties)
                {
                    
                    var value = prop.GetValue(source, null);
                    if (value != null)
                        prop.SetValue(target, value, null);
                }

                return await Task.FromResult<T>(target);
            }
            else
            {
                // the implication here is that unless you supply property names
                // the target is unmodified otherwise known as fail-silent
                return await Task.FromResult<T>(target);
            }
        }
    }
}
