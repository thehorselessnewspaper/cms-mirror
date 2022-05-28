using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheHorselessNewspaper.HostingModel.Context.Extensions
{
    /// <summary>
    /// mutate entity framework core model reverse engineering conventions 
    /// as per
    /// - https://www.red-gate.com/simple-talk/blogs/change-delete-behavior-and-more-on-ef-core/
    /// </summary>
    internal static class ContextConventionExtensions
    {

        private static List<Action<IMutableEntityType>> Conventions = new List<Action<IMutableEntityType>>();

        public static void AddRemovePluralizeConvention(this ModelBuilder builder)
        {
            Conventions.Add(et => et.SetTableName(et.DisplayName()));
        }

        public static void AddRemoveOneToManyCascadeConvention(this ModelBuilder builder)
        {
            Conventions.Add(et =>
            {
                var keys = et.GetForeignKeys().Where(fk => !fk.IsOwnership).Select(s => s.DeleteBehavior).ToList();
                var keys2 = et.GetForeignKeys().Where(fk => fk.IsRequired).ToList();

                int i = 0;
            });

            Conventions.Add(et => et.GetForeignKeys()
                .ToList()
                .ForEach(fk => fk.DeleteBehavior = DeleteBehavior.ClientSetNull));
        }

        public static void ApplyConventions(this ModelBuilder builder)
        {
            foreach (var entityType in builder.Model.GetEntityTypes())
            {
                foreach (Action<IMutableEntityType> action in Conventions)
                    action(entityType);
            }

            Conventions.Clear();
        }
    }
}
