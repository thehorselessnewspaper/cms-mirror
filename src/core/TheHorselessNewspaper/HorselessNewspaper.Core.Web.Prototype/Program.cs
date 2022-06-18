


// use horseless startup
using HorselessNewspaper.Web.Core.Startup;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.Options;
using StackExchange.Redis;

var builder = WebApplication.CreateBuilder(args);

var startup = new HorselessAppStartup(builder.Configuration, builder.Environment);
startup.OnConfigureCors = ConfigureCors;
startup.OnConfigureDefaultCookiePolicy = ConfigureCookiePolicy;
startup.ConfigureServices(builder.Services);

var redis = ConnectionMultiplexer.Connect(builder.Configuration.GetConnectionString("RedisSessionCache"));
builder.Services.AddDataProtection()
    .AddKeyManagementOptions(options =>
    {
        options.AutoGenerateKeys = true;
    })
    .SetApplicationName("HorselessNewspaper")
    .PersistKeysToStackExchangeRedis(redis, "DataProtection-Keys");

var app = builder.Build();
startup.Configure(app, builder.Environment);

app.Run();

public partial class Program {
    public static void ConfigureCors(CorsOptions opts)
    {
        opts.AddDefaultPolicy(builder =>
        {
            builder
                 .AllowAnyHeader()
                 .AllowAnyMethod()
                 .AllowCredentials()
                 .WithOrigins("dairgpuk8s.ataxlab.com", "awsk8sidp.ataxlab.com", "localhost:6001", "localhost");

        });
    }

    public static void ConfigureCookiePolicy(CookiePolicyOptions options)
    {
        options.CheckConsentNeeded = context => true;
        options.MinimumSameSitePolicy = SameSiteMode.Lax;
        options.Secure = CookieSecurePolicy.SameAsRequest;
    }
}