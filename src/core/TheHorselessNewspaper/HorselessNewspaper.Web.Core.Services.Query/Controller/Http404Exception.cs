using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Services.Query.Controller
{
    public class Http404Exception : Exception
    {
        public Http404Exception()
        {

        }

        public Http404Exception(string message)
    : base(message)
        {
        }

        public Http404Exception(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
