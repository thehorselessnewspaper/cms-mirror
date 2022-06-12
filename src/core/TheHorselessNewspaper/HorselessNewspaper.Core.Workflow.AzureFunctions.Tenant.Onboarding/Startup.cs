using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.IO;
using HorselessNewspaper.Web.Core.Services.Query.Extensions;

[assembly: FunctionsStartup(typeof(HorselessNewspaper.Core.Workflow.AzureFunctions.Tenant.Onboarding.Startup))]
namespace HorselessNewspaper.Core.Workflow.AzureFunctions.Tenant.Onboarding
{

    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddHttpClient();

            /// add the horseless query surface 
            builder.Services.AddHorselessQueryOperators();

        }

        public override void ConfigureAppConfiguration(IFunctionsConfigurationBuilder builder)
        {
            FunctionsHostBuilderContext context = builder.GetContext();

            builder.ConfigurationBuilder
                .AddJsonFile(Path.Combine(context.ApplicationRootPath, "appsettings.json"), optional: true, reloadOnChange: false)
                .AddJsonFile(Path.Combine(context.ApplicationRootPath, $"appsettings.{context.EnvironmentName}.json"), optional: true, reloadOnChange: false)
                .AddEnvironmentVariables();
        }
    }
}
