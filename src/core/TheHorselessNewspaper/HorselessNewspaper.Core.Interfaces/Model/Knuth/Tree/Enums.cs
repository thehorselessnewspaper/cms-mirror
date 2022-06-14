using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Model.Knuth.Tree
{
    public enum UpDownTraversalType
    {
        TopDown,
        BottomUp
    }

    public enum DepthBreadthTraversalType
    {
        DepthFirst,
        BreadthFirst
    }

    public enum NodeChangeType
    {
        NodeAdded,
        NodeRemoved
    }

    public enum NodeRelationType
    {
        Ancestor,
        Parent,
        Self,
        Child,
        Descendant
    }
}
