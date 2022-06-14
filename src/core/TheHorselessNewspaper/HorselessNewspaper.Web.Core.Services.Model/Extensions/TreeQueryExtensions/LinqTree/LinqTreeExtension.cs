using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Services.Model.Extensions.TreeQueryExtensions.LinqTree
{
    /// <summary>
    /// linq flattening of trees
    /// as per
    /// - https://social.technet.microsoft.com/wiki/contents/articles/17556.how-to-query-trees-using-linq.aspx
    /// </summary>
    public static class LinqTreeExtension
    {

        /// <summary>
        /// note this implementation does not handle cycles
        /// see the documentation
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="source"></param>
        /// <param name="selector"></param>
        /// <returns></returns>
        public static IEnumerable<T> SelectNestedChildrenNoCycles<T>
            (this IEnumerable<T> source, Func<T, IEnumerable<T>> selector)
        {
            foreach (T item in source)
            {
                yield return item;

                // note this implementation differs slightly from 
                // https://github.com/vigouredelaruse/alfwm/blob/858bdf935363417aa7c659f441335cf9b6693952/src/com.ataxlab.alfwm/com.ataxlab.alfwm.core/utility/extension/LinqTreeExtension.cs
                // foreach (T subItem in selector(item).SelectNestedChildrenNoCycles(selector))
                foreach (T subItem in SelectNestedChildrenNoCycles(selector(item), selector))
                {
                    yield return subItem;
                }
            }
        }
    }
}
