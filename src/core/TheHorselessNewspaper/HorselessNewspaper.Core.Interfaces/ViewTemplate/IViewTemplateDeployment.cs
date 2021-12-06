using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.ViewTemplate
{
    public interface IViewTemplateDeployment
    {
        public string PackageId { get; set; }

        public string PackageTitle { get; set; }

        public string PackagePublisher { get; set; }

        public string PackageVersion { get; set; }
    }
}
