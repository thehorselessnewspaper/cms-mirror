using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.Util
{
    internal static class EntityReflectionHelpers
    {
        public async static Task<List<string>> GetUpdateableProperties<T>(T entity)
        {
            var propertyList = entity
                .GetType().GetProperties()
                .Where(prop => prop.CanRead && prop.CanWrite)
                .Where(w => w.Name != "Id")
                .Select(s => s.Name)
                .ToList();

            return await Task.FromResult<List<string>>(propertyList);
        }
    }
}
