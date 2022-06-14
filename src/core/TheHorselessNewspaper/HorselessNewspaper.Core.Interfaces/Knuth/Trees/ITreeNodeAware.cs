using HorselessNewspaper.Core.Interfaces.Model.Knuth.Tree;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Knuth.Tree
{
    public interface ITreeNodeAware<T>
        where T : new()
    {
        TreeNode<T> Node { get; set; }
    }
}
