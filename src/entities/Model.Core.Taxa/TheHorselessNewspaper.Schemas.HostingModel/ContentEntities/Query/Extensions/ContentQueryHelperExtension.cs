using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
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
        public async static Task<T> UpdateModifiedPropertiesAsync<T>(this T target, T source, List<String> targetProperties = null,
            DbContext dbContext = null) where T : class, IContentRowLevelSecured
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
                        && typeof(IEnumerable<IContentRowLevelSecured>).IsAssignableFrom(prop.PropertyType);
                    if (isCollection)
                    {
                        var sourceCollection = source.GetType().GetProperty(prop.Name).GetValue(source, null);
                        var targetCollection = source.GetType().GetProperty(prop.Name).GetValue(target, null);
                        var castSource = sourceCollection as IEnumerable<IContentRowLevelSecured>;
                        var castTarget = targetCollection as IEnumerable<IContentRowLevelSecured>;

;
                        foreach (var item in castSource)
                        {
                            // targetList.Add(item);
                            if (dbContext != null)
                            {
                                // attach the related item
                                var relatedSet = dbContext.Set<T>().Include(prop.GetType().Name);
                                dbContext.Update(item);
                            }

                            prop.PropertyType.GetMethod("Add").Invoke(targetCollection, new[] { item });
 
                        }

                        // prop.SetValue(target, targetCollection, null);
                        return target;
                    }
                    else
                    {
                        var value = prop.GetValue(source, null);

                        // todo these rules need some heuristic work
                        // for instance the user may legitimately set a property to null
                        // one needs to prevent inadvertent discharges towards one's feet
                        // with the implemented behavior
                        if (value != null)
                        {
                            prop.SetValue(target, value, null);
                        }
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

        /// <summary>
        /// Indicates whether or not the specified type is a list.
        /// </summary>
        /// <param name="type">The type to query</param>
        /// <returns>True if the type is a list, otherwise false</returns>
        public static bool IsList(Type type)
        {
            if (null == type)
                throw new ArgumentNullException("type");

            if (typeof(System.Collections.IList).IsAssignableFrom(type))
                return true;
            foreach (var it in type.GetInterfaces())
                if (it.IsGenericType && typeof(IList<>) == it.GetGenericTypeDefinition())
                    return true;
            return false;
        }
        /// <summary>
        /// Retrieves the collection element type from this type
        /// </summary>
        /// <param name="type">The type to query</param>
        /// <returns>The element type of the collection or null if the type was not a collection
        /// </returns>
        public static Type GetCollectionElementType(Type type)
        {
            if (null == type)
                throw new ArgumentNullException("type");

            // first try the generic way
            // this is easy, just query the IEnumerable<T> interface for its generic parameter
            var etype = typeof(IEnumerable<>);
            foreach (var bt in type.GetInterfaces())
                if (bt.IsGenericType && bt.GetGenericTypeDefinition() == etype)
                    return bt.GetGenericArguments()[0];

            // now try the non-generic way

            // if it's a dictionary we always return DictionaryEntry
            if (typeof(System.Collections.IDictionary).IsAssignableFrom(type))
                return typeof(System.Collections.DictionaryEntry);

            // if it's a list we look for an Item property with an int index parameter
            // where the property type is anything but object
            if (typeof(System.Collections.IList).IsAssignableFrom(type))
            {
                foreach (var prop in type.GetProperties())
                {
                    if ("Item" == prop.Name && typeof(object) != prop.PropertyType)
                    {
                        var ipa = prop.GetIndexParameters();
                        if (1 == ipa.Length && typeof(int) == ipa[0].ParameterType)
                        {
                            return prop.PropertyType;
                        }
                    }
                }
            }

            // if it's a collection, we look for an Add() method whose parameter is 
            // anything but object
            if (typeof(System.Collections.ICollection).IsAssignableFrom(type))
            {
                foreach (var meth in type.GetMethods())
                {
                    if ("Add" == meth.Name)
                    {
                        var pa = meth.GetParameters();
                        if (1 == pa.Length && typeof(object) != pa[0].ParameterType)
                            return pa[0].ParameterType;
                    }
                }
            }
            if (typeof(System.Collections.IEnumerable).IsAssignableFrom(type))
                return typeof(object);
            return null;
        }
    }
}
