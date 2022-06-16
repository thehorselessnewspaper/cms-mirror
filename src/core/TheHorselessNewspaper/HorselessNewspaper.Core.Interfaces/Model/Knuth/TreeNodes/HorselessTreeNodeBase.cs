using HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes;
using System.IdentityModel.Tokens.Jwt;
using System.Text.Json.Serialization;

namespace HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes
{
    /// <summary>
    /// support a collection type with the essential
    /// logic available for inheritance
    /// </summary>
    /// <typeparam name="TPayload"></typeparam>
    public class HorselessTreeNode<TPayload> : IHorselessTreeNode<TPayload, HorselessTreeNode<TPayload>>
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="payload"></param>
        public HorselessTreeNode(TPayload payload)
        {
            Payload = payload;
        }

        public List<HorselessTreeNode<TPayload>> Children { get; set; } = new List<HorselessTreeNode<TPayload>>();

        public TPayload Payload { get; set; } 
        public HorselessTreeNode<TPayload> Parent { get; set; }

        [JsonIgnore]
        public IEnumerable<HorselessTreeNode<TPayload>> ChildNodes
        {
            get
            {
                foreach (var node in Children)
                    yield return node;

                yield break;
            }
        }

        [JsonIgnore(Condition = JsonIgnoreCondition.Never)]
        public IEnumerable<HorselessTreeNode<TPayload>> Descendants
        {
            get
            {
                foreach (var node in ChildNodes)
                {
                    yield return node;

                    foreach (var descendant in node.Descendants)
                        yield return descendant;
                }

                yield break;
            }
        }

        [JsonIgnore(Condition = JsonIgnoreCondition.Never)]
        public IEnumerable<HorselessTreeNode<TPayload>> Subtree
        {
            get
            {
                yield return this;

                foreach (var node in Descendants)
                    yield return node;

                yield break;
            }
        }

        [JsonIgnore(Condition = JsonIgnoreCondition.Never)]
        public IEnumerable<HorselessTreeNode<TPayload>> Ancestors
        {
            get
            {
                if (Parent == null)
                    yield break;

                yield return Parent;

                foreach (var node in Parent.Ancestors)
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

        /// <summary>
        /// populates the parent property of all children
        /// providing scaffolding ot the tree structure
        /// </summary>

        public void Render()
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


    public abstract class AbstractHorselessTreeNodeBase<TPayload, TChildren> : IHorselessTreeNode<TPayload, TChildren>
        where TChildren : IHorselessTreeNode<TPayload, TChildren>
    {


        public AbstractHorselessTreeNodeBase(TPayload Payload)
        {
            Payload = Payload;
        }

        virtual public List<TChildren> Children { get; set; } = new List<TChildren>();

        public abstract TPayload Payload { get; set; }
        public abstract TChildren? Parent { get; set; }

        [JsonIgnore]
        virtual public IEnumerable<TChildren> ChildNodes
        {
            get
            {
                foreach (var node in Children)
                    yield return node;

                yield break;
            }
        }

        [JsonIgnore(Condition = JsonIgnoreCondition.Never)]
        virtual public IEnumerable<TChildren> Descendants
        {
            get
            {
                foreach (var node in ChildNodes)
                {
                    yield return node;

                    foreach (var descendant in node.Descendants)
                        yield return descendant;
                }

                yield break;
            }
        }

        [JsonIgnore(Condition = JsonIgnoreCondition.Never)]
        abstract public IEnumerable<TChildren> Subtree { get; }


        //virtual public IEnumerable<TChildren> Subtree
        //{
        //    get
        //    {
        //        yield return this;

        //        foreach (var node in Descendants)
        //            yield return node;

        //        yield break;
        //    }
        //}

        [JsonIgnore(Condition = JsonIgnoreCondition.Never)]
        virtual public IEnumerable<TChildren> Ancestors
        {
            get
            {
                if (Parent == null)
                    yield break;

                yield return Parent;

                foreach (var node in Parent.Ancestors)
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

        /// <summary>
        /// populates the parent property of all children
        /// providing scaffolding ot the tree structure
        /// </summary>

        public abstract void Render();
    }
}