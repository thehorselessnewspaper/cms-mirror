using HorselessNewspaper.Core.Interfaces.Knuth.Tree;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes
{
    public interface IHorselessTreeNode<TPayload, TChildren>
    {
        public TPayload Payload { get; set; }

        public TChildren? Parent { get; set; }

        public List<TChildren> Children { get; set; }

        public IEnumerable<TChildren> ChildNodes { get; }

        public IEnumerable<TChildren> Descendants { get; }
        public IEnumerable<TChildren> Subtree { get; }

        public IEnumerable<TChildren> Ancestors { get; }

        IEnumerable<IEnumerable<T>> ComputePaths<T>(T Root, Func<T, IEnumerable<T>> Children);
        void Render();
    }

    public interface IHorselessTreeNode<TPayload> : IHorselessTreeNode<TPayload, IHorselessTreeNode<TPayload>>
    {

    }

    /// <summary>
    /// support xml configuration of default filesystem tree
    /// with semantic attributes
    /// </summary>
    /// <typeparam name="TPayload"></typeparam>
    public interface IHorselessFilesystemTreeNode<TPayload> : IHorselessTreeNode<TPayload, IHorselessFilesystemTreeNode<TPayload>>
    {
        public HorselessFilesystemNodeIdentifier WellKnownNode { get; set; }
    }


    public enum HorselessFilesystemNodeIdentifier
    {
        AssetRoot,
        MediaRoot,
        ImagesRoot,
        AudioRoot,
        VideoRoot,
        NugetRoot,
        MediaTenantsRoot,
        MediaUsersRoot,
        ImagesTenantRoot,
        ImagesUsersRoot,
        VideoTenantsRoot,
        VideoUsersRoot,
        AudioTenantsRoot,
        AudioUsersRoot,
        NugetTenantsRoot,
        NugetUsersRoot,
        TenantsRoot,
        DefaultTenantRoot,
        DefaultTenantMediaRoot,
        DefaultTenantAudioRoot,
        DefaultTenantVideoRoot,
        DefaultTenantBlobRoot,
        DefaultTenantNugetRoot,
        DefaultTenantUsersRoot,
        DefaultTenantAnonymousUser,
        BlobUsersRoot
    }
}
