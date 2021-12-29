using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Model.FeatureManagement
{
    /// <summary>
    /// as per https://docs.microsoft.com/en-us/azure/azure-app-configuration/quickstart-feature-flag-aspnet-core?tabs=core5x
    /// </summary>
    internal enum FeatureFlags
    {
        ContentEditorUI,

        TenantAdminUI
    }
}
