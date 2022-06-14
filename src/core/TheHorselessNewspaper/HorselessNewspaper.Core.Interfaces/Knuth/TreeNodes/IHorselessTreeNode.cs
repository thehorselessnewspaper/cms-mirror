using HorselessNewspaper.Core.Interfaces.Knuth.Tree;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes
{
    public interface IHorselessTreeNode<TPayload>
    {
        public TPayload Payload { get; set; }

        public IHorselessTreeNode<TPayload>? Parent { get; set; }
  
        public List<IHorselessTreeNode<TPayload>> Children { get; set; }

        public IEnumerable<IHorselessTreeNode<TPayload>> ChildNodes { get;  }

        public IEnumerable<IHorselessTreeNode<TPayload>> Descendants { get; }
        public IEnumerable<IHorselessTreeNode<TPayload>> Subtree { get; }

        public IEnumerable<IHorselessTreeNode<TPayload>> Ancestors { get; }

        IEnumerable<IEnumerable<T>> ComputePaths<T>(T Root, Func<T, IEnumerable<T>> Children);
        void Render();
    }
}
