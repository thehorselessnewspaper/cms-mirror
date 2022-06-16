using HorselessNewspaper.Core.Interfaces.Knuth.Tree;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes
{
    /// <summary>
    /// locating this implementation here to make sure
    /// the functionality travels with the tree
    /// </summary>
    public static class HorselessTreeExtensions
    {

        /// <summary>
        /// note this implementation does not handle cycles
        /// see the documentation
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="source"></param>
        /// <param name="selector"></param>
        /// <returns></returns>
        public static IEnumerable<T> SelectForLineage<T>
            (this IEnumerable<T> source, Func<T, IEnumerable<T>> selector)
        {
            foreach (T item in source)
            {
                yield return item;

                // note this implementation differs slightly from 
                // https://github.com/vigouredelaruse/alfwm/blob/858bdf935363417aa7c659f441335cf9b6693952/src/com.ataxlab.alfwm/com.ataxlab.alfwm.core/utility/extension/LinqTreeExtension.cs
                // foreach (T subItem in selector(item).SelectNestedChildrenNoCycles(selector))
                foreach (T subItem in SelectForLineage(selector(item), selector))
                {
                    yield return subItem;
                }
            }
        }

    }
}
