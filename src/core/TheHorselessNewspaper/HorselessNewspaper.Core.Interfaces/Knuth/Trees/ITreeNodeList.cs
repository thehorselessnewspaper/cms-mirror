using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Knuth.Tree
{
    public interface ITreeNodeList<T> : IList<ITreeNode<T>>
    {
        // usage: var myNewNode = node.Children.Add(new myNodeType("..."));

        new ITreeNode<T> Add(ITreeNode<T> node);
        //ITreeNode<T> Add(ITreeNode<T> node, bool updateParent);
    }
}
