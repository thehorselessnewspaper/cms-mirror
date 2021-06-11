#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["Web.Core.Locus.Http.Api/Web.Core.Locus.Http.Api.csproj", "Web.Core.Locus.Http.Api/"]
RUN dotnet restore "Web.Core.Locus.Http.Api/Web.Core.Locus.Http.Api.csproj"
COPY . .
WORKDIR "/src/Web.Core.Locus.Http.Api"
RUN dotnet build "Web.Core.Locus.Http.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Web.Core.Locus.Http.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Web.Core.Locus.Http.Api.dll"]