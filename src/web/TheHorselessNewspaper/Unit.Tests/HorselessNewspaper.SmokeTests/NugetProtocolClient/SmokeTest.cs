using HorselessNewspaper.Core.Interfaces.Nuget;
using HorselessNewspaper.Client.Nuget;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration.UserSecrets;
using NuGet.Versioning;
using Microsoft.Extensions.Configuration;
using HorselessNewspaper.SmokeTests.Model;
using HorselessNewspaper.Client.Nuget.Model;
using System.Net;

namespace HorselessNewspaper.SmokeTests.NugetProtocolClient
{
    internal class SmokeTest
    {

        [SetUp]
        public void Setup()
        {

        }

        [Test]
        public async Task CanDownloadPackageFromPrivateRepo()
        {
            IConfiguration configuration = GetConfiguration();

            var testPackage = configuration.GetSection("NugetPackageId").Value;
            var testUri = configuration.GetSection("RepositoryUrl").Value;

            var Password = configuration.GetSection("Password").Value;
            var UserName = configuration.GetSection("UserName").Value;
            var PackageCacheLocationr = configuration.GetSection("PackageCacheLocation").Value;

            INugetProtocol client = new HorselessNewspaper.Client.Nuget.NugetProtocolClient();

            var packageVersions = await client.ListPackageVersions(new Uri(testUri), testPackage, new NugetProtocolCredentials()
                {
                    UserName = UserName,
                    Password = Password
                });

            var versions = await client.PersistNugetTolocalFilesystem(new Uri(testUri), testPackage, packageVersions.LastOrDefault<NuGetVersion>(),
                PackageCacheLocationr, new NugetProtocolCredentials()
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


            INugetProtocol client = new HorselessNewspaper.Client.Nuget.NugetProtocolClient();
            var versions = await client.ListPackageVersions(endpoint, testPackage, new NugetProtocolCredentials()
            {
                UserName = UserName,
                Password = Password
            });

            Assert.IsTrue(versions.Count > 0);

            foreach (NuGetVersion version in versions)
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


            INugetProtocol client = new HorselessNewspaper.Client.Nuget.NugetProtocolClient();
            var versions = await client.ListPackageVersions(endpoint, testPackage);

            Assert.IsTrue(versions.Count > 0);

            foreach (NuGetVersion version in versions)
            {
                Console.WriteLine($"Found version {version}");
            }


            Assert.Pass();
        }
    }
}
