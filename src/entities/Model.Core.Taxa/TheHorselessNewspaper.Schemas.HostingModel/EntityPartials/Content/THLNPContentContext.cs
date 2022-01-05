using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    internal partial class THLNPContentContext : DbContext
    {
        partial void OnModelCreatingPartial(ModelBuilder builder)
        {

            // If necessary call the base class method.
            // Recommended to be called first.
            base.OnModelCreating(builder);

            // Configure all entity types marked with the [MultiTenant] data attribute
            builder.ConfigureMultiTenant();

            // Configure an entity type to be multitenant.
            builder.Entity<Finbuckle.MultiTenant.TenantInfo>().IsMultiTenant();

            builder.Entity<ContentCollection>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

            builder.Entity<FilesystemAsset>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

            builder.Entity<Holonym>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

            builder.Entity<HorselessContent>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });


            builder.Entity<HorselessSession>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

            builder.Entity<JSONAsset>()
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

            builder.Entity<Meronym>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });


            builder.Entity<MIMEType>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });


            builder.Entity<NavigationMenu>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

            builder.Entity<NavigationMenuItem>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

            builder.Entity<NugetPackage>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

            builder.Entity<Placeholder>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

            //builder.Entity<Principal>()
            //    .OwnsMany(p => p.AccessControlList, a =>
            //    {
            //        a.WithOwner().HasForeignKey(fk => fk.Id);
            //    })
            //    .OwnsMany(p => p.Owners, a =>
            //    {
            //        a.WithOwner().HasForeignKey(fk => fk.Id);
            //    }); 

            builder.Entity<Publication>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

            builder.Entity<Taxon>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                })
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

            builder.Entity<Tenant>()
                .OwnsMany(p => p.AccessControlList, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

            builder.Entity<Tenant>()
                .OwnsMany(p => p.Owners, a =>
                {
                    a.WithOwner().HasForeignKey(fk => fk.Id);
                });

        }


    }
}
