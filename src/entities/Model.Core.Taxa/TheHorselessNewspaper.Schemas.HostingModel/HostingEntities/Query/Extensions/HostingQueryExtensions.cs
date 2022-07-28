using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.HostingEntities.Query.Extensions
{
    public static class HostingQueryExtensions
    {

        /// <summary>
        /// support dbset.Update property change detection
        /// </summary>

        public async static Task<T> UpdateModifiedPropertiesAsync<T>(this T target, T source, List<String> targetProperties = null) where T : class, IHostingRowLevelSecured
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
                    var propType = prop.PropertyType;

                    var isCollection = propType.IsGenericType && propType != typeof(string) && typeof(IEnumerable).IsAssignableFrom(prop.PropertyType)
                        && typeof(IEnumerable<IHostingRowLevelSecured>).IsAssignableFrom(prop.PropertyType);

                    if (isCollection)
                    {
                        var sourceCollection = source.GetType().GetProperty(prop.Name).GetValue(source, null);
                        var targetCollection = source.GetType().GetProperty(prop.Name).GetValue(target, null);
                        var castSource = sourceCollection as IEnumerable<IHostingRowLevelSecured>;
                        var castTarget = targetCollection as IEnumerable<IHostingRowLevelSecured>;

                        foreach (var item in castSource)
                        {
                            // targetList.Add(item);
                            prop.PropertyType.GetMethod("Add").Invoke(targetCollection, new[] { item });

                        }

                        // prop.SetValue(target, targetCollection, null);
                        return target;
                    }
                    else
                    {
                        var value = prop.GetValue(source, null);
                        if (value != null)
                            prop.SetValue(target, value, null);
                    }
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
