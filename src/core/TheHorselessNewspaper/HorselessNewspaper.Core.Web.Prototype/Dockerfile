#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
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