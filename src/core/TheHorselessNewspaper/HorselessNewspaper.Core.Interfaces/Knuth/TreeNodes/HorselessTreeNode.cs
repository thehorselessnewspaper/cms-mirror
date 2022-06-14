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
    /// <summary>
    /// as per https://social.technet.microsoft.com/wiki/contents/articles/17556.how-to-query-trees-using-linq.aspx
    /// </summary>
    /// <typeparam name="TPayload"></typeparam>
    public class HorselessTreeNode<TPayload> : IHorselessTreeNode<TPayload>
        // where TPayload : class, new()
    {

        public HorselessTreeNode() { }

        public HorselessTreeNode(TPayload payload)
        {
            Payload = payload;
        }

        public List<IHorselessTreeNode<TPayload>> Children { get; set; } = new List<IHorselessTreeNode<TPayload>>();

        public HorselessTreeNode<TPayload> ParentNode { get; set; }
        public TPayload Payload { get; set; }
        public IHorselessTreeNode<TPayload>? Parent { get; set; }

        /// <summary>
        /// populates the parent property of all children
        /// providing scaffolding ot the tree structure
        /// </summary>
        public void Render()
        {
            var linqResult = Children
                    .SelectForLineage(w => w.Children)
                    .Where(w => w.Children.Count > 0)
                    .ToList();

            // update the parent linkage of any child nodes
            foreach(var childNode in linqResult)
            {
                foreach(var descendant in childNode.Children)
                {
                    descendant.Parent = childNode;
                }
            }
        }

        public IEnumerable<IHorselessTreeNode<TPayload>> ChildNodes
        {
            get
            {
                foreach (IHorselessTreeNode<TPayload> node in Children)
                    yield return node;

                yield break;
            }
        }

        public IEnumerable<IHorselessTreeNode<TPayload>> Descendants
        {
            get
            {
                foreach (IHorselessTreeNode<TPayload> node in ChildNodes)
                {
                    yield return node;

                    foreach (IHorselessTreeNode<TPayload> descendant in node.Descendants)
                        yield return descendant;
                }

                yield break;
            }
        }
        public IEnumerable<IHorselessTreeNode<TPayload>> Subtree
        {
            get
            {
                yield return this;

                foreach (IHorselessTreeNode<TPayload> node in Descendants)
                    yield return node;

                yield break;
            }
        }
        public IEnumerable<IHorselessTreeNode<TPayload>> Ancestors
        {
            get
            {
                if (Parent == null)
                    yield break;

                yield return Parent;

                foreach (IHorselessTreeNode<TPayload> node in Parent.Ancestors)
                    yield return node;

                yield break;
            }
        }

        /// <summary>
        /// returns an ordered list of ordered lists
        /// of paths in a given tree (with no cycles probaby)
        /// including the root
        /// 
        /// easily compute all the paths in a folder tree for example
        /// tree walking magic as per
        /// https://stackoverflow.com/questions/32041116/retrieve-a-list-of-tree-paths
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="Root"></param>
        /// <param name="Children"></param>
        /// <returns></returns>
        public IEnumerable<IEnumerable<T>> ComputePaths<T>(T Root, Func<T, IEnumerable<T>> Children)
        {
            yield return new[] { Root };
            foreach (var Child in Children(Root))
                foreach (var ChildPath in ComputePaths(Child, Children))
                    yield return new[] { Root }.Concat(ChildPath);
        }

    }
}
