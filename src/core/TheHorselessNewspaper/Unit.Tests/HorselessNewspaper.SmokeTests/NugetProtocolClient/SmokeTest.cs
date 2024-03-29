﻿using HorselessNewspaper.Client.Nuget;
using HorselessNewspaper.Client.Nuget.Model;
using HorselessNewspaper.Core.Interfaces.Model;
using HorselessNewspaper.Core.Interfaces.Nuget;
using HorselessNewspaper.SmokeTests.Model;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NuGet.Configuration;
using NuGet.Versioning;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LoggerNS = NuGet.Common;

namespace HorselessNewspaper.SmokeTests.NugetProtocolClient
{
    internal class SmokeTest
    {
        private const string NewtonsoftJsonPackageId = "NewtonSoft.Json";
        private const string NugetOrgEndpoint = "https://api.nuget.org/v3/index.json";
        private const string HorselessNugetPackageId = "HorselessNewspaper.RazorClassLibrary.CMS.Default";
        private ILogger<NugetLoader> nugetLogger;
        private ILogger<SmokeTest> testLogger;
        private ILogger<HorselessNewspaper.Client.Nuget.NugetProtocolClient> nugetProtocolClientLogger;
        private ServiceProvider services;

        [SetUp]
        public void Setup()
        {
            nugetLogger = HorselessILoggerFactory.GetLogger<NugetLoader>();
            testLogger = HorselessILoggerFactory.GetLogger<SmokeTest>();
            nugetProtocolClientLogger = HorselessILoggerFactory.GetLogger<HorselessNewspaper.Client.Nuget.NugetProtocolClient>();

            services = new ServiceCollection()
                .AddLogging(o =>
                {
                    o.AddConsole();

                })
                .AddScoped<LoggerNS.ILogger, NugetLoggerAdapter>()
                .AddScoped<INugetLoader, NugetLoader>()
                .AddScoped<INugetProtocol, HorselessNewspaper.Client.Nuget.NugetProtocolClient>()
                .BuildServiceProvider();
        }

        [Test]
        public async Task CanDownloadPackageAndDependenciesFromPublicRepo()
        {
            IConfiguration configuration;
            configuration = new ConfigurationBuilder()
                .AddUserSecrets<NugetProtocolClientTestConfig>()
                .Build();


            var testPackage = NewtonsoftJsonPackageId;
            var endpoint = new Uri(NugetOrgEndpoint);

            var a = services.GetServices(typeof(LoggerNS.ILogger));
            Assert.IsTrue(a != null, "service registration issue");

            var w = services.GetServices(typeof(INugetLoader));
            Assert.IsTrue(w != null, "service registration issue");

            INugetProtocol client = services.GetService<INugetProtocol>();
            var versions = await client.ListPackageVersions(endpoint, testPackage);

            Assert.IsTrue(versions.Count > 0);

            foreach (NuGetVersion version in versions.TakeLast(5))
            {
                this.testLogger.LogInformation($"Found version {version}");
            }

            Assert.IsTrue(versions != null && versions.Count > 0, "inconcievable - the test package was not found");

            // get dependencies

            PackageSource packageSource = new PackageSource(endpoint.AbsoluteUri, "Nuget.Org", true);
            var packageSources = new List<PackageSource>() { packageSource };

            var extensionConfiguration = new ExtensionConfiguration() { Package = testPackage, Version = versions.Last().Version.ToString(), PreRelease = false };
            var extensionConfigurations = new List<IExtensionConfiguration>() { extensionConfiguration };

            TargetedFramework parseFolder = new TargetedFramework(TargetedFramework.NETCoreApp31);
            var packageCacheLocationr = configuration.GetSection("PackageCacheLocation").Value;

            try
            {
                await client.LoadExtensions(packageSources, extensionConfigurations.AsEnumerable<IExtensionConfiguration>(), parseFolder, packageCacheLocationr);
            }
            catch (Exception e)
            {
                int i = 0;
            }

            Assert.Pass();
        }

        [Test]
        public async Task CanDownloadPackageAndDependenciesFromPrivateRepo()
        {
            IConfiguration configuration = GetConfiguration();

            var testPackage = configuration.GetSection("NugetPackageId").Value;
            var testUri = configuration.GetSection("RepositoryUrl").Value;

            var Password = configuration.GetSection("Password").Value;
            var UserName = configuration.GetSection("UserName").Value;
            var PackageCacheLocationr = configuration.GetSection("PackageCacheLocation").Value;


            var privateEndpoint = new Uri(testUri);

            var a = services.GetServices(typeof(LoggerNS.ILogger));
            Assert.IsTrue(a != null, "service registration issue");

            var w = services.GetServices(typeof(INugetLoader));
            Assert.IsTrue(w != null, "service registration issue");

            INugetProtocol client = services.GetService<INugetProtocol>();
            //var packageVersions = await client.ListPackageVersions(endpoint, testPackage);
            var packageVersions = await client.ListPackageVersions(new Uri(testUri), testPackage, new NugetProtocolCredentials()
            {
                UserName = UserName,
                Password = Password
            });

            Assert.IsTrue(packageVersions.Count > 0);

            foreach (NuGetVersion version in packageVersions.TakeLast(5))
            {
                this.testLogger.LogInformation($"Found version {version}");
            }

            Assert.IsTrue(packageVersions != null && packageVersions.Count > 0, "inconcievable - the test package was not found");

            // get dependencies
            var nugetEndpointUri = new Uri(NugetOrgEndpoint);
            PackageSource privatePackageSource = new PackageSource(privateEndpoint.AbsoluteUri, privateEndpoint.Host, true);
            privatePackageSource.Credentials = new PackageSourceCredential(privateEndpoint.AbsoluteUri, UserName, Password, true, null);

            PackageSource officialNugetSource = new PackageSource(nugetEndpointUri.AbsoluteUri, nugetEndpointUri.Host, true);


            var packageSources = new List<PackageSource>() { privatePackageSource, officialNugetSource };

            var extensionConfiguration = new ExtensionConfiguration() { Package = testPackage, Version = packageVersions.Last().Version.ToString(), PreRelease = false };
            var extensionConfigurations = new List<IExtensionConfiguration>() { extensionConfiguration };

            TargetedFramework parseFolder = new TargetedFramework(TargetedFramework.NET60);
            var packageCacheLocationr = configuration.GetSection("PackageCacheLocation").Value;
            //var versions = await client.PersistNugetTolocalFilesystem(new Uri(testUri), testPackage, packageVersions.LastOrDefault<NuGetVersion>(),
            //    packageCacheLocationr, new NugetProtocolCredentials()
            //    {
            //        UserName = UserName,
            //        Password = Password
            //    }
            //    );
            try
            {
                await client.LoadExtensions(packageSources, extensionConfigurations.AsEnumerable<IExtensionConfiguration>(), parseFolder, packageCacheLocationr);
            }
            catch (Exception e)
            {
                int i = 0;
            }

            Assert.Pass();
        }

        [Test]
        public async Task CanDownloadPackageFromPrivateRepo()
        {
            IConfiguration configuration = GetConfiguration();

            var testPackage = configuration.GetSection("NugetPackageId").Value;
            var testUri = configuration.GetSection("RepositoryUrl").Value;

            var Password = configuration.GetSection("Password").Value;
            var UserName = configuration.GetSection("UserName").Value;
            var packageLocation = configuration.GetSection("PackageCacheLocation").Value;

            INugetProtocol client = services.GetService<INugetProtocol>(); // new HorselessNewspaper.Client.Nuget.NugetProtocolClient(logger);

            var packageVersions = await client.ListPackageVersions(new Uri(testUri), testPackage, new NugetProtocolCredentials()
            {
                UserName = UserName,
                Password = Password
            });

            var versions = await client.PersistNugetTolocalFilesystem(new Uri(testUri), testPackage, packageVersions.LastOrDefault<NuGetVersion>(),
                packageLocation, new NugetProtocolCredentials()
                {
                    UserName = UserName,
                    Password = Password
                }
                );


        }

        [Test]
        public async Task CanGetPackageVersionsFromPrivateRepo()
        {
            IConfiguration configuration = GetConfiguration();

            var testPackage = configuration.GetSection("NugetPackageId").Value;
            var testUri = configuration.GetSection("RepositoryUrl").Value;

            var Password = configuration.GetSection("Password").Value;
            var UserName = configuration.GetSection("UserName").Value;

            Console.WriteLine(testPackage);
            var endpoint = new Uri(testUri);


            INugetProtocol client = services.GetService<INugetProtocol>(); // new HorselessNewspaper.Client.Nuget.NugetProtocolClient(logger);
            var versions = await client.ListPackageVersions(endpoint, testPackage, new NugetProtocolCredentials()
            {
                UserName = UserName,
                Password = Password
            });

            Assert.IsTrue(versions.Count > 0);

            foreach (NuGetVersion version in versions.TakeLast(5))
            {
                Console.WriteLine($"Found version {version}");
            }


            Assert.Pass();
        }

        private static IConfiguration GetConfiguration()
        {
            return new ConfigurationBuilder()
                .AddUserSecrets<NugetProtocolClientTestConfig>()
                .Build();
        }

        [Test]
        public async Task CanGetPackageVersionsFromPublicRepo()
        {
            IConfiguration configuration;
            configuration = new ConfigurationBuilder()
                .AddUserSecrets<NugetProtocolClientTestConfig>()
                .Build();


            var testPackage = "NewtonSoft.Json";
            var endpoint = new Uri("https://api.nuget.org/v3/index.json");
            var Password = configuration.GetSection("Password").Value;
            var UserName = configuration.GetSection("UserName").Value;
            var packageLocation = configuration.GetSection("PackageCacheLocation").Value;

            INugetProtocol client = services.GetService<INugetProtocol>(); // new HorselessNewspaper.Client.Nuget.NugetProtocolClient(logger);
            var versions = await client.ListPackageVersions(endpoint, testPackage);

            Assert.IsTrue(versions.Count > 0);

            foreach (NuGetVersion version in versions.TakeLast(5))
            {
                Console.WriteLine($"Found version {version}");
            }

            var savedVersion = await client.PersistNugetTolocalFilesystem(endpoint, testPackage, versions.LastOrDefault<NuGetVersion>(),
                    packageLocation);

            Assert.Pass();
        }
    }
}
