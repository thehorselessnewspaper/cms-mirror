#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Web.Core.Locus/Web.Core.Locus.csproj", "Web.Core.Locus/"]
RUN dotnet restore "Web.Core.Locus/Web.Core.Locus.csproj"
COPY . .
WORKDIR "/src/Web.Core.Locus"
RUN dotnet build "Web.Core.Locus.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Web.Core.Locus.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Web.Core.Locus.dll"]