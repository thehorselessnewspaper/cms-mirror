﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Model.Security
{
    /// <summary>
    /// DTO that supplies
    /// necessary auth and endpoint
    /// configuration for
    /// rest clients
    /// </summary>
    public class ObvsoleteRestClientConfiguration
    {
        public Boolean IsClaimsIdentity { get; set; } = false;
        public string AccessToken { get; set; } = string.Empty;

        public string ODataEndpoint { get; set; } = string.Empty;

        public string RESTEndpoint { get; set; } = string.Empty;
        public string TenantIdentifier { get; set; }
    }
}
