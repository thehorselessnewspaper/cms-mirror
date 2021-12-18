#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

#
#ENV DOTNET_SYSTEM_NET_HTTP_USESOCKETSHTTPHANDLER=0
#ENV NUGET_CREDENTIALPROVIDER_SESSIONTOKENCACHE_ENABLED true
#
#
#RUN wget -qO- https://raw.githubusercontent.com/Microsoft/artifacts-credprovider/master/helpers/installcredprovider.sh | bash
#

WORKDIR /src

# as per https://stackoverflow.com/questions/57462205/how-to-add-private-nuget-source-in-dotnet-dockerfile
COPY ["HorselessNewspaper.Core.Web.Prototype/nuget.config", "HorselessNewspaper.Core.Web.Prototype/"]

# account for hardcoded visual studio project references
COPY ["Web.Core/HorselessNewspaper.Web.Core.csproj", "Web.Core/"]
COPY ["HorselessNewspaper.Web.Core.Auth.Keycloak/HorselessNewspaper.Web.Core.Auth.Keycloak.csproj", "HorselessNewspaper.Web.Core.Auth.Keycloak/"]


COPY ["HorselessNewspaper.Core.Web.Prototype/HorselessNewspaper.Core.Web.Prototype.csproj", "HorselessNewspaper.Core.Web.Prototype/"]
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