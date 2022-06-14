# Linq Tree Flattening 

as per 
- https://social.technet.microsoft.com/wiki/contents/articles/17556.how-to-query-trees-using-linq.aspx

Example 2: Flattening the tree structure  (including the root node)
```
var flattenedTreeIncludingRoot
    = new TreeNode[] {rootNode }
        .SelectNestedChildren(t => t.Children).ToList();
```

Example 3: Performing a LINQ query on all nested children
```
var result
    = new TreeNode[] { rootNode }
        .SelectNestedChildren(t => t.Children)
        .Where(t => t.Data > 30).ToList();
```