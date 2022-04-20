using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Model
{
    [Bind("IsMustResetDatabase")]
    public class ResetDatabaseModel
    {
        public ResetDatabaseModel() { }

        public bool IsMustResetDatabase { get; set; }
    }
}
