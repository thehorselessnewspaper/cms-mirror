﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Configuration.Model.RabbitMQ
{
    public class RabbitMQClientConfiguration
    {
        public string HostName { get; set; } = string.Empty;

        public string VirtualHost { get; set; } = String.Empty;

        public string UserName { get; set; } = String.Empty;

        public string Password { get; set; } = String.Empty;

        public int Port { get; set; }

    }
}
