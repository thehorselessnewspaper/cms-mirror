using Microsoft.AspNetCore.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Security.Cache
{

    public interface IAuthenticationSchemesCache
    {
        Task<AuthenticationScheme[]> GetExternalProvidersAsync();
    }
}
