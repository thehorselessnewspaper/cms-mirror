using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace HorselessNewspaper.Web.Core.Services.Model.SeedEntities
{
    /// <summary>
    /// ship a default content collection templates
    /// suitable for attachment to new user and tenant accounts
    /// 
    /// each content collection template's children are instances of 
    /// the content collection's content with varied owners and access control lists
    /// 
    /// add new inserts the template
    /// 
    /// publish permits the cms controller to locate content for urls
    /// </summary>
    public static class DefaultEntitySets
    {

        public static ICollection<ContentModel.AccessControlEntry> GetDefaultTenantACL(string displayName)
        {
            var ret = new HashSet<ContentModel.AccessControlEntry>()
                    {
                      new ContentModel.AccessControlEntry()
                        {
                            //Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission =  ContentModel.ACEPermission.READ,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        },
                        new ContentModel.AccessControlEntry()
                        {
                            //Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                             Permission =  ContentModel.ACEPermission.CREATE,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        },
                        new ContentModel.AccessControlEntry()
                        {
                            //Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission =  ContentModel.ACEPermission.DELETE,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        },
                        new ContentModel.AccessControlEntry()
                        {
                            //Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission =  ContentModel.ACEPermission.EXECUTE,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        },
                        new ContentModel.AccessControlEntry()
                        {
                            //Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName =displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission =  ContentModel.ACEPermission.PUBLISH,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        },
                        new ContentModel.AccessControlEntry()
                        {
                            //Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission =  ContentModel.ACEPermission.UNPUBLISH,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        },
                        new ContentModel.AccessControlEntry()
                        {
                            //Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission =  ContentModel.ACEPermission.SEARCH,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        }
                };

            return ret;
        }

        public static ICollection<ContentModel.ContentCollection> GetDefaultContentCollections()
        {
            HashSet<ContentModel.Taxonomy> taxonomies = new HashSet<ContentModel.Taxonomy>()
                    {
                        new ContentModel.Taxonomy()
                        {
                            //Id = Guid.NewGuid(),
                            ObjectId = Guid.NewGuid().ToString(),
                            DisplayName = "Horseless Blog Tags",
                            IsSoftDeleted = false,
                            DictionaryKey = "tags",
                            Taxons = new HashSet<ContentModel.Taxon>()
                            {
                                new ContentModel.Taxon()
                                {
                                    //Id = Guid.NewGuid(),
                                    ObjectId = Guid.NewGuid().ToString(),
                                    DisplayName = "Horseless Tag",
                                    DictionaryKey = "tag",
                                    IsSoftDeleted = false,
                                    Holonyms = new HashSet<ContentModel.Holonym>()
                                    {
                                        new ContentModel.Holonym()
                                        {
                                            //Id = Guid.NewGuid(),
                                            ObjectId = Guid.NewGuid().ToString(),
                                            DisplayName = "Short Description",
                                            IsSoftDeleted = false,
                                            DictionaryKey = "shortDescription"
                                        }
                                    }
                                }
                            }
                        }
                    };
            var ret = new HashSet<ContentCollection>()
            {
                new ContentModel.ContentCollection()
                {
                    //Id = Guid.NewGuid(),
                    ObjectId = Guid.NewGuid().ToString(),
                    AllowAnonymousRead = true,
                    DisplayName = "Default Horseless Blog",
                    Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                    IsPublished = true
                }

            };

            return ret;
        }

        private static List<HorselessView> GetDefaultHorselessViews()
        {
            return new List<ContentModel.HorselessView>()
                    {
                        new ContentModel.HorselessView()
                        {
                            //Id = Guid.NewGuid(),
                            DisplayName = "Default Horseless View",
                            IsActive = true,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Name = "ViewTemplate.cshtml",
                            PhysicalPath = "ViewTemplate.cshtml",
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks)


                        }
                    };
        }

        private static List<HorselessContent> GetDefaultHorselessContents()
        {
            return new List<ContentModel.HorselessContent>()
                    {
                        new ContentModel.HorselessContent()
                        {
                            //Id = Guid.NewGuid(),
                            DisplayName = "Content Title",
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            IsPublished = true,
                            DictionaryKey = "title",
                            JSONAsset = new ContentModel.JSONAsset()
                            {
                                //Id = Guid.NewGuid(),
                                DisplayName = "Content Title",
                                IsSoftDeleted = false,
                                ObjectId = Guid.NewGuid().ToString(),
                                DictionaryKey = "title"
                            }

                        },
                        new ContentModel.HorselessContent()
                        {
                            //Id = Guid.NewGuid(),
                            DisplayName = "Content Description",
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            IsPublished = true,
                            DictionaryKey = "description",
                            JSONAsset = new ContentModel.JSONAsset()
                            {
                                //Id = Guid.NewGuid(),
                                DisplayName = "Content Description",
                                IsSoftDeleted = false,
                                ObjectId = Guid.NewGuid().ToString(),
                                DictionaryKey = "description"
                            }

                        },
                        new ContentModel.HorselessContent()
                        {
                            //Id = Guid.NewGuid(),
                            DisplayName = "Content Body",
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            IsPublished = true,
                            DictionaryKey = "body",
                            JSONAsset = new ContentModel.JSONAsset()
                            {
                                //Id = Guid.NewGuid(),
                                DisplayName = "Content Body",
                                IsSoftDeleted = false,
                                ObjectId = Guid.NewGuid().ToString(),
                                DictionaryKey = "body"
                            }

                        }
                    };
        }
    }
}
