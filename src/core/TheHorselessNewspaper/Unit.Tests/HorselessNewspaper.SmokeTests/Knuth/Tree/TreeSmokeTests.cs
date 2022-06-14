using HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HorselessNewspaper.Web.Core.Services.Model.Extensions.TreeQueryExtensions.LinqTree;

namespace HorselessNewspaper.SmokeTests.Knuth.Tree
{
    /// <summary>
    /// exercises tree collections
    /// </summary>
    public class TreeSmokeTests
    {

        // prepare a tenant filesystem tree
        IHorselessTreeNode<string> testNode = new HorselessTreeNode<string>("assetroot");
        IEnumerable<IHorselessTreeNode<string>> testChildren = new List<IHorselessTreeNode<string>>()
            {
                        new HorselessTreeNode<string>("images")
                        {
                            Children = new List<IHorselessTreeNode<string>>
                            {
                                new HorselessTreeNode<string>("tenants")
                                {
                                    Children = new List<IHorselessTreeNode<string>>
                                    {
                                        new HorselessTreeNode<string>("default")
                                        {
                                            Children = new List<IHorselessTreeNode<string>>
                                            {
                                                new HorselessTreeNode<string>("users")
                                            }
                                        }
                                    }
                                }
                            }
                        },

                        new HorselessTreeNode<string>("nugets")
                        {
                            Children = new List<IHorselessTreeNode<string>>
                            {
                                new HorselessTreeNode<string>("tenants")
                                {
                                    Children = new List<IHorselessTreeNode<string>>
                                    {
                                        new HorselessTreeNode<string>("default")
                                        {
                                            Children = new List<IHorselessTreeNode<string>>
                                            {
                                                new HorselessTreeNode<string>("users")
                                            }
                                        }
                                    }
                                }
                            }
                        }
            };

        [Setup]
        public void Setup()
        {

        }

        [Test]
        public void CanParseTreeStructure()
        {
            this.testNode.Children.AddRange(testChildren);
            this.testNode.Render();

            var paths = testNode.ComputePaths(testNode, c => c.Children).ToList();

            Assert.True(paths != null);
            Assert.True(paths.Count == 9);

            var linqResult = testNode.Children
                    .SelectNestedChildrenNoCycles(w => w.Children)
                    .Where(w => w.Parent != null)
                    .ToList();


            Assert.NotNull(linqResult);

            var result = testNode.Descendants.ToList();
            Assert.NotNull(result);

            var subTreeResult = testNode.Subtree.ToList();
            Assert.NotNull(result);

            result = testNode.Children.ToList();
            Assert.NotNull(result);

            var queryResult = subTreeResult.Where(w => w.Payload.Contains("tenant")).ToList();

            foreach (var item in queryResult)
            {
                var ancestors = item.Ancestors;
                Assert.NotNull(ancestors);
            }
        }
    }
}
