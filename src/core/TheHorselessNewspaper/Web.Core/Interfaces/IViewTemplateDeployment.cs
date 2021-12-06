using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Interfaces
{
    /// <summary>
    /// specifies a razor class library deployment
    /// 
    /// the dynamic type loader identifies assemblies that contain
    /// razxor class libraries by looking for this meta data
    /// </summary>
    public interface IViewTemplateDeployment
    {
        public string PackageId { get; set; }

        public string PackageTitle { get; set; }

        public string PackagePublisher { get; set; }

        public string PackageVersion { get; set; }

    }
}
