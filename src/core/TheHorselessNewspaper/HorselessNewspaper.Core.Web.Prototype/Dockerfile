#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 6000:80
EXPOSE 6001:443


FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

COPY ["TheHorselessCore.sln", "."]
COPY ["HorselessNewspaper.Core.Web.Prototype/nuget.config", "."]
COPY ["HorselessNewspaper.Core.Web.Prototype/HorselessNewspaper.Core.Web.Prototype.csproj", "HorselessNewspaper.Core.Web.Prototype/"]
COPY ["HorselessNewspaper.RazorClassLibrary.CMS.Default/HorselessNewspaper.RazorClassLibrary.CMS.Default.csproj", "HorselessNewspaper.RazorClassLibrary.CMS.Default/"]
COPY ["Web.Core/HorselessNewspaper.Web.Core.csproj", "Web.Core/"]
COPY ["HorselessNewspaper.Web.Core.Auth.Keycloak/HorselessNewspaper.Web.Core.Auth.Keycloak.csproj", "HorselessNewspaper.Web.Core.Auth.Keycloak/"]
COPY ["HorselessNewspaper.Web.TagHelpers/HorselessNewspaper.Web.TagHelpers.csproj", "HorselessNewspaper.Web.TagHelpers/"]

COPY ["HorselessNewspaper.Client.Nuget/HorselessNewspaper.Client.Nuget.csproj", "HorselessNewspaper.Client.Nuget/"]

COPY ["HorselessNewspaper.Core.Interfaces/HorselessNewspaper.Core.Interfaces.csproj", "HorselessNewspaper.Core.Interfaces/"]

COPY ["HorselessNewspaper.Core.Repositories/HorselessNewspaper.Core.Repositories.csproj", "HorselessNewspaper.Core.Repositories/"]

COPY ["HorselessNewspaper.RazorClassLibrary.Keycloak.Default/HorselessNewspaper.RazorClassLibrary.Keycloak.Default.csproj", "HorselessNewspaper.RazorClassLibrary.Keycloak.Default/"]

COPY ["Unit.Tests/HorselessNewspaper.SmokeTests/HorselessNewspaper.SmokeTests.csproj", "Unit.Tests/HorselessNewspaper.SmokeTests/"]
COPY ["HorselessNewspaper.Core.Web.SmokeTests/HorselessNewspaper.Core.Web.SmokeTests.csproj", "HorselessNewspaper.Core.Web.SmokeTests/"]

COPY ["HorselessNewspaper.Web.Core.Extensions.MSSQLServer/HorselessNewspaper.Web.Core.Extensions.MSSQLServer.csproj", "HorselessNewspaper.Web.Core.Extensions.MSSQLServer/"]
COPY ["HorselessNewspaper.Web.Core.Extensions.MySQL/HorselessNewspaper.Web.Core.Extensions.MySQL.csproj", "HorselessNewspaper.Web.Core.Extensions.MySQL/"]
COPY ["HorselessNewspaper.Web.Core.Services.Query/HorselessNewspaper.Web.Core.Services.Query.csproj", "HorselessNewspaper.Web.Core.Services.Query/"]

RUN dotnet restore "TheHorselessCore.sln"
RUN dotnet restore "HorselessNewspaper.Core.Web.Prototype/HorselessNewspaper.Core.Web.Prototype.csproj"
COPY . .
WORKDIR "/src/HorselessNewspaper.Core.Web.Prototype"
RUN dotnet build "HorselessNewspaper.Core.Web.Prototype.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "HorselessNewspaper.Core.Web.Prototype.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HorselessNewspaper.Core.Web.Prototype.dll"]