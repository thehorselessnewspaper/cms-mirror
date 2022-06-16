using HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Model.Knuth.TreeNodes
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

    public abstract class AbstractHorselessFilesystmTreeNodeBase<TPayload> : AbstractHorselessTreeNodeBase<TPayload, IHorselessFilesystemTreeNode<TPayload>>, IHorselessFilesystemTreeNode<TPayload>
    
    {
        public HorselessFilesystemNodeIdentifier WellKnownNode { get; set; }
    }

    /// <summary>
    /// as per https://social.technet.microsoft.com/wiki/contents/articles/17556.how-to-query-trees-using-linq.aspx
    /// </summary>
    /// <typeparam name="TPayload"></typeparam>
    public class HorselessFilesystemTreeNode<TPayload> : AbstractHorselessFilesystmTreeNodeBase<TPayload>
    {
        public override List<IHorselessFilesystemTreeNode<TPayload>> Children { get; set; }
        public override TPayload Payload { get; set; }
        public override IHorselessFilesystemTreeNode<TPayload>? Parent { get; set; }
        public HorselessFilesystemNodeIdentifier WellKnownNode { get; set; }

        public HorselessFilesystemTreeNode() { }

        public HorselessFilesystemTreeNode(TPayload payload)
        {
            Payload = payload;
        }

        public override IEnumerable<IHorselessFilesystemTreeNode<TPayload>> Subtree
        {
            get
            {
                yield return this;

                foreach (var node in Descendants)
                    yield return node;

                yield break;
            }
        }

        /// <summary>
        /// populates the parent property of all children
        /// providing scaffolding ot the tree structure
        /// </summary>


        public override void Render()
        {
            var linqResult = Children
                    .SelectForLineage(w => w.Children)
                    .Where(w => w.Children.Count() > 0)
                    .ToList();

            // update the parent linkage of any child nodes
            foreach (var childNode in linqResult)
            {
                foreach (var descendant in childNode.Children)
                {
                    descendant.Parent = childNode;
                }
            }
        }
    }
}
