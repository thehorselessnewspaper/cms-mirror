


// use horseless startup
using HorselessNewspaper.Web.Core.Startup;

var builder = WebApplication.CreateBuilder(args);

var startup = new HorselessAppStartup(builder.Configuration, builder.Environment);
startup.ConfigureServices(builder.Services);

var app = builder.Build();
startup.Configure(app, builder.Environment);
app.Run();

public partial class Program { }