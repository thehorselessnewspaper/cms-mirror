using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Web.Core
{
    /// <summary>
    /// specifies a razor class library deployment
    /// 
    /// the dynamic type loader identifies assemblies that contain
    /// razxor class libraries by looking for this meta data
    /// </summary>
    public interface IViewTemplateDeployment
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Publisher { get; set; }

    }
}
