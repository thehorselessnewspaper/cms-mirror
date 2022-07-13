using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using contentmodel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using hostingmodel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
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
        public static IEnumerable<contentmodel.ContentCollection> GetDefaultContentCollections()
        {
            List<contentmodel.Taxonomy> taxonomies = new List<contentmodel.Taxonomy>()
                    {
                        new contentmodel.Taxonomy()
                        {
                            Id = Guid.NewGuid(),
                            ObjectId = Guid.NewGuid().ToString(),
                            DisplayName = "Horseless Blog Tags",
                            IsSoftDeleted = false,
                            DictionaryKey = "tags",
                            Taxons = new List<contentmodel.Taxon>()
                            {
                                new contentmodel.Taxon()
                                {
                                    Id = Guid.NewGuid(),
                                    ObjectId = Guid.NewGuid().ToString(),
                                    DisplayName = "Horseless Tag",
                                    DictionaryKey = "tag",
                                    IsSoftDeleted = false,
                                    Holonyms = new List<contentmodel.Holonym>()
                                    {
                                        new contentmodel.Holonym()
                                        {
                                            Id = Guid.NewGuid(),
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
            var ret = new List<contentmodel.ContentCollection>()
            {
                new contentmodel.ContentCollection()
                {
                    Id = Guid.NewGuid(),
                    ObjectId = Guid.NewGuid().ToString(),
                    AllowAnonymousRead = true,
                    DisplayName = "Default Horseless Blog",
                    HorselessViews = new List<contentmodel.HorselessView>()
                    {
                        new contentmodel.HorselessView()
                        {
                            Id = Guid.NewGuid(),
                            DisplayName = "Default Horseless View",
                            IsActive = true,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Name = "ViewTemplate.cshtml"

                        }
                    },
                    IsPublished = true,
                    Taxonomies = taxonomies,
                    MimeContents = new List<contentmodel.HorselessContent>()
                    {
                        new contentmodel.HorselessContent()
                        {
                            Id = Guid.NewGuid(),
                            DisplayName = "Content Title",
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            IsPublished = true,
                            DictionaryKey = "title",
                            JSONAsset = new contentmodel.JSONAsset()
                            {
                                Id = Guid.NewGuid(),
                                DisplayName = "Content Title",
                                IsSoftDeleted = false,
                                ObjectId = Guid.NewGuid().ToString(),
                                DictionaryKey = "title"
                            }
                              
                        },
                        new contentmodel.HorselessContent()
                        {
                            Id = Guid.NewGuid(),
                            DisplayName = "Content Description",
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            IsPublished = true,
                            DictionaryKey = "description",
                            JSONAsset = new contentmodel.JSONAsset()
                            {
                                Id = Guid.NewGuid(),
                                DisplayName = "Content Description",
                                IsSoftDeleted = false,
                                ObjectId = Guid.NewGuid().ToString(),
                                DictionaryKey = "description"
                            }

                        },
                        new contentmodel.HorselessContent()
                        {
                            Id = Guid.NewGuid(),
                            DisplayName = "Content Body",
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            IsPublished = true,
                            DictionaryKey = "body",
                            JSONAsset = new contentmodel.JSONAsset()
                            {
                                Id = Guid.NewGuid(),
                                DisplayName = "Content Body",
                                IsSoftDeleted = false,
                                ObjectId = Guid.NewGuid().ToString(),
                                DictionaryKey = "body"
                            }

                        }
                    }

                }

            };

            return ret;
        }
    }
}
