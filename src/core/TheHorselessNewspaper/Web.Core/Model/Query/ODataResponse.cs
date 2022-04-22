using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Model.Query
{
    public class ODataResponse<T>
    {
        public List<T> Value { get; set; }
    }
}
