
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 01/01/2022 17:04:53
-- Generated from EDMX file: C:\src\the horseless newspaper\src\entities\Model.Core.Taxa\Schema\Diagrams\Hosting\HostingModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [THLNP_Hosting];
GO
IF SCHEMA_ID(N'HostingModel') IS NULL EXECUTE(N'CREATE SCHEMA [HostingModel]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[HostingModel].[FK_TenantRoutingDiscriminator]', 'F') IS NOT NULL
    ALTER TABLE [HostingModel].[RoutingDiscriminators] DROP CONSTRAINT [FK_TenantRoutingDiscriminator];
GO
IF OBJECT_ID(N'[HostingModel].[FK_RoutingDiscriminatorHost]', 'F') IS NOT NULL
    ALTER TABLE [HostingModel].[Hosts] DROP CONSTRAINT [FK_RoutingDiscriminatorHost];
GO
IF OBJECT_ID(N'[HostingModel].[FK_RoutingDiscriminatorUriPath]', 'F') IS NOT NULL
    ALTER TABLE [HostingModel].[UriPaths] DROP CONSTRAINT [FK_RoutingDiscriminatorUriPath];
GO
IF OBJECT_ID(N'[HostingModel].[FK_HostFilesystemAssetLocation_Host]', 'F') IS NOT NULL
    ALTER TABLE [HostingModel].[HostFilesystemAssetLocation] DROP CONSTRAINT [FK_HostFilesystemAssetLocation_Host];
GO
IF OBJECT_ID(N'[HostingModel].[FK_HostFilesystemAssetLocation_FilesystemAssetLocation]', 'F') IS NOT NULL
    ALTER TABLE [HostingModel].[HostFilesystemAssetLocation] DROP CONSTRAINT [FK_HostFilesystemAssetLocation_FilesystemAssetLocation];
GO
IF OBJECT_ID(N'[HostingModel].[FK_UriPathFilesystemAssetLocation_UriPath]', 'F') IS NOT NULL
    ALTER TABLE [HostingModel].[UriPathFilesystemAssetLocation] DROP CONSTRAINT [FK_UriPathFilesystemAssetLocation_UriPath];
GO
IF OBJECT_ID(N'[HostingModel].[FK_UriPathFilesystemAssetLocation_FilesystemAssetLocation]', 'F') IS NOT NULL
    ALTER TABLE [HostingModel].[UriPathFilesystemAssetLocation] DROP CONSTRAINT [FK_UriPathFilesystemAssetLocation_FilesystemAssetLocation];
GO
IF OBJECT_ID(N'[HostingModel].[FK_NugetPackageFilesystemAssetLocation]', 'F') IS NOT NULL
    ALTER TABLE [HostingModel].[NugetPackages] DROP CONSTRAINT [FK_NugetPackageFilesystemAssetLocation];
GO
IF OBJECT_ID(N'[HostingModel].[FK_KeyCloakConfigurationTenant]', 'F') IS NOT NULL
    ALTER TABLE [HostingModel].[Tenants] DROP CONSTRAINT [FK_KeyCloakConfigurationTenant];
GO
IF OBJECT_ID(N'[HostingModel].[FK_TenantInfoFilesystemAssetLocation]', 'F') IS NOT NULL
    ALTER TABLE [HostingModel].[FilesystemAssetLocations] DROP CONSTRAINT [FK_TenantInfoFilesystemAssetLocation];
GO
IF OBJECT_ID(N'[HostingModel].[FK_TenantInfoWebAPITenantInfo]', 'F') IS NOT NULL
    ALTER TABLE [HostingModel].[WebAPITenantInfos] DROP CONSTRAINT [FK_TenantInfoWebAPITenantInfo];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[HostingModel].[Tenants]', 'U') IS NOT NULL
    DROP TABLE [HostingModel].[Tenants];
GO
IF OBJECT_ID(N'[HostingModel].[RoutingDiscriminators]', 'U') IS NOT NULL
    DROP TABLE [HostingModel].[RoutingDiscriminators];
GO
IF OBJECT_ID(N'[HostingModel].[Hosts]', 'U') IS NOT NULL
    DROP TABLE [HostingModel].[Hosts];
GO
IF OBJECT_ID(N'[HostingModel].[UriPaths]', 'U') IS NOT NULL
    DROP TABLE [HostingModel].[UriPaths];
GO
IF OBJECT_ID(N'[HostingModel].[NugetPackages]', 'U') IS NOT NULL
    DROP TABLE [HostingModel].[NugetPackages];
GO
IF OBJECT_ID(N'[HostingModel].[FilesystemAssetLocations]', 'U') IS NOT NULL
    DROP TABLE [HostingModel].[FilesystemAssetLocations];
GO
IF OBJECT_ID(N'[HostingModel].[KeyCloakConfigurations]', 'U') IS NOT NULL
    DROP TABLE [HostingModel].[KeyCloakConfigurations];
GO
IF OBJECT_ID(N'[HostingModel].[TenantInfos]', 'U') IS NOT NULL
    DROP TABLE [HostingModel].[TenantInfos];
GO
IF OBJECT_ID(N'[HostingModel].[WebAPITenantInfos]', 'U') IS NOT NULL
    DROP TABLE [HostingModel].[WebAPITenantInfos];
GO
IF OBJECT_ID(N'[HostingModel].[HostFilesystemAssetLocation]', 'U') IS NOT NULL
    DROP TABLE [HostingModel].[HostFilesystemAssetLocation];
GO
IF OBJECT_ID(N'[HostingModel].[UriPathFilesystemAssetLocation]', 'U') IS NOT NULL
    DROP TABLE [HostingModel].[UriPathFilesystemAssetLocation];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Tenants'
CREATE TABLE [HostingModel].[Tenants] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL
);
GO

-- Creating table 'RoutingDiscriminators'
CREATE TABLE [HostingModel].[RoutingDiscriminators] (
    [Id] uniqueidentifier  NOT NULL,
    [IsActive] bit  NULL,
    [TenantId] uniqueidentifier  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [CreatedAt] datetime  NULL
);
GO

-- Creating table 'Hosts'
CREATE TABLE [HostingModel].[Hosts] (
    [Id] uniqueidentifier  NOT NULL,
    [TCPHost] nvarchar(max)  NULL,
    [IsTenanantDiscriminator] nvarchar(max)  NULL,
    [RoutingDiscriminatorId] uniqueidentifier  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [DisplayName] nvarchar(max)  NULL,
    [HtmlLayoutFilename] nvarchar(max)  NULL,
    [CreatedAt] datetime  NULL,
    [HTTPPort] nvarchar(max)  NULL
);
GO

-- Creating table 'UriPaths'
CREATE TABLE [HostingModel].[UriPaths] (
    [Id] uniqueidentifier  NOT NULL,
    [AbsoluteURL] nvarchar(max)  NULL,
    [IsTenantDiscriminator] nvarchar(max)  NULL,
    [RoutingDiscriminatorId] uniqueidentifier  NOT NULL,
    [ObjectId] nvarchar(max)  NULL,
    [DisplayName] nvarchar(max)  NULL,
    [HtmlLayoutFilename] nvarchar(max)  NULL,
    [CreatedAt] datetime  NULL,
    [HTTPPort] nvarchar(max)  NULL,
    [HTTPScheme] nvarchar(max)  NULL,
    [TCPHost] nvarchar(max)  NULL
);
GO

-- Creating table 'NugetPackages'
CREATE TABLE [HostingModel].[NugetPackages] (
    [Id] uniqueidentifier  NOT NULL,
    [ObjectId] nvarchar(max)  NULL,
    [PackageName] nvarchar(max)  NULL,
    [PackageId] nvarchar(max)  NULL,
    [Publisher] nvarchar(max)  NULL,
    [Version] nvarchar(max)  NULL,
    [CreatedAt] datetime  NULL,
    [DisplayName] nvarchar(max)  NULL,
    [FilesystemAssetLocation_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'FilesystemAssetLocations'
CREATE TABLE [HostingModel].[FilesystemAssetLocations] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [CreatedAt] datetime  NULL,
    [AssetURI] nvarchar(max)  NULL
);
GO

-- Creating table 'KeyCloakConfigurations'
CREATE TABLE [HostingModel].[KeyCloakConfigurations] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NOT NULL,
    [Authority] nvarchar(max)  NULL,
    [Realm] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [CreatedAt] datetime  NULL,
    [Iss] nvarchar(max)  NULL,
    [Aud] nvarchar(max)  NULL,
    [TenantInfoId] uniqueidentifier  NULL
);
GO

-- Creating table 'TenantInfos'
CREATE TABLE [HostingModel].[TenantInfos] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [Identifier] nvarchar(max)  NULL,
    [Name] nvarchar(max)  NULL,
    [ConnectionString] nvarchar(max)  NULL,
    [TenantBaseUrl] nvarchar(max)  NULL,
    [Tenant_Id] uniqueidentifier  NULL
);
GO

-- Creating table 'WebAPITenantInfos'
CREATE TABLE [HostingModel].[WebAPITenantInfos] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [Identifier] nvarchar(max)  NULL,
    [Name] nvarchar(max)  NULL,
    [ConnectionString] nvarchar(max)  NULL,
    [WebAPIBaseUrl] nvarchar(max)  NULL,
    [TenantInfoId] uniqueidentifier  NULL
);
GO

-- Creating table 'HostFilesystemAssetLocation'
CREATE TABLE [HostingModel].[HostFilesystemAssetLocation] (
    [HostWWWRootAssetLocations_Id] uniqueidentifier  NOT NULL,
    [WWWRootAssetLocations_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'UriPathFilesystemAssetLocation'
CREATE TABLE [HostingModel].[UriPathFilesystemAssetLocation] (
    [UriPathWWWRootAssetLocations_Id] uniqueidentifier  NOT NULL,
    [WWWRootAssetLocations_Id] uniqueidentifier  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Tenants'
ALTER TABLE [HostingModel].[Tenants]
ADD CONSTRAINT [PK_Tenants]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'RoutingDiscriminators'
ALTER TABLE [HostingModel].[RoutingDiscriminators]
ADD CONSTRAINT [PK_RoutingDiscriminators]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Hosts'
ALTER TABLE [HostingModel].[Hosts]
ADD CONSTRAINT [PK_Hosts]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'UriPaths'
ALTER TABLE [HostingModel].[UriPaths]
ADD CONSTRAINT [PK_UriPaths]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'NugetPackages'
ALTER TABLE [HostingModel].[NugetPackages]
ADD CONSTRAINT [PK_NugetPackages]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'FilesystemAssetLocations'
ALTER TABLE [HostingModel].[FilesystemAssetLocations]
ADD CONSTRAINT [PK_FilesystemAssetLocations]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'KeyCloakConfigurations'
ALTER TABLE [HostingModel].[KeyCloakConfigurations]
ADD CONSTRAINT [PK_KeyCloakConfigurations]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'TenantInfos'
ALTER TABLE [HostingModel].[TenantInfos]
ADD CONSTRAINT [PK_TenantInfos]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'WebAPITenantInfos'
ALTER TABLE [HostingModel].[WebAPITenantInfos]
ADD CONSTRAINT [PK_WebAPITenantInfos]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [HostWWWRootAssetLocations_Id], [WWWRootAssetLocations_Id] in table 'HostFilesystemAssetLocation'
ALTER TABLE [HostingModel].[HostFilesystemAssetLocation]
ADD CONSTRAINT [PK_HostFilesystemAssetLocation]
    PRIMARY KEY CLUSTERED ([HostWWWRootAssetLocations_Id], [WWWRootAssetLocations_Id] ASC);
GO

-- Creating primary key on [UriPathWWWRootAssetLocations_Id], [WWWRootAssetLocations_Id] in table 'UriPathFilesystemAssetLocation'
ALTER TABLE [HostingModel].[UriPathFilesystemAssetLocation]
ADD CONSTRAINT [PK_UriPathFilesystemAssetLocation]
    PRIMARY KEY CLUSTERED ([UriPathWWWRootAssetLocations_Id], [WWWRootAssetLocations_Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [TenantId] in table 'RoutingDiscriminators'
ALTER TABLE [HostingModel].[RoutingDiscriminators]
ADD CONSTRAINT [FK_TenantRoutingDiscriminator]
    FOREIGN KEY ([TenantId])
    REFERENCES [HostingModel].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantRoutingDiscriminator'
CREATE INDEX [IX_FK_TenantRoutingDiscriminator]
ON [HostingModel].[RoutingDiscriminators]
    ([TenantId]);
GO

-- Creating foreign key on [RoutingDiscriminatorId] in table 'Hosts'
ALTER TABLE [HostingModel].[Hosts]
ADD CONSTRAINT [FK_RoutingDiscriminatorHost]
    FOREIGN KEY ([RoutingDiscriminatorId])
    REFERENCES [HostingModel].[RoutingDiscriminators]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RoutingDiscriminatorHost'
CREATE INDEX [IX_FK_RoutingDiscriminatorHost]
ON [HostingModel].[Hosts]
    ([RoutingDiscriminatorId]);
GO

-- Creating foreign key on [RoutingDiscriminatorId] in table 'UriPaths'
ALTER TABLE [HostingModel].[UriPaths]
ADD CONSTRAINT [FK_RoutingDiscriminatorUriPath]
    FOREIGN KEY ([RoutingDiscriminatorId])
    REFERENCES [HostingModel].[RoutingDiscriminators]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RoutingDiscriminatorUriPath'
CREATE INDEX [IX_FK_RoutingDiscriminatorUriPath]
ON [HostingModel].[UriPaths]
    ([RoutingDiscriminatorId]);
GO

-- Creating foreign key on [HostWWWRootAssetLocations_Id] in table 'HostFilesystemAssetLocation'
ALTER TABLE [HostingModel].[HostFilesystemAssetLocation]
ADD CONSTRAINT [FK_HostFilesystemAssetLocation_Host]
    FOREIGN KEY ([HostWWWRootAssetLocations_Id])
    REFERENCES [HostingModel].[Hosts]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [WWWRootAssetLocations_Id] in table 'HostFilesystemAssetLocation'
ALTER TABLE [HostingModel].[HostFilesystemAssetLocation]
ADD CONSTRAINT [FK_HostFilesystemAssetLocation_FilesystemAssetLocation]
    FOREIGN KEY ([WWWRootAssetLocations_Id])
    REFERENCES [HostingModel].[FilesystemAssetLocations]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_HostFilesystemAssetLocation_FilesystemAssetLocation'
CREATE INDEX [IX_FK_HostFilesystemAssetLocation_FilesystemAssetLocation]
ON [HostingModel].[HostFilesystemAssetLocation]
    ([WWWRootAssetLocations_Id]);
GO

-- Creating foreign key on [UriPathWWWRootAssetLocations_Id] in table 'UriPathFilesystemAssetLocation'
ALTER TABLE [HostingModel].[UriPathFilesystemAssetLocation]
ADD CONSTRAINT [FK_UriPathFilesystemAssetLocation_UriPath]
    FOREIGN KEY ([UriPathWWWRootAssetLocations_Id])
    REFERENCES [HostingModel].[UriPaths]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [WWWRootAssetLocations_Id] in table 'UriPathFilesystemAssetLocation'
ALTER TABLE [HostingModel].[UriPathFilesystemAssetLocation]
ADD CONSTRAINT [FK_UriPathFilesystemAssetLocation_FilesystemAssetLocation]
    FOREIGN KEY ([WWWRootAssetLocations_Id])
    REFERENCES [HostingModel].[FilesystemAssetLocations]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UriPathFilesystemAssetLocation_FilesystemAssetLocation'
CREATE INDEX [IX_FK_UriPathFilesystemAssetLocation_FilesystemAssetLocation]
ON [HostingModel].[UriPathFilesystemAssetLocation]
    ([WWWRootAssetLocations_Id]);
GO

-- Creating foreign key on [FilesystemAssetLocation_Id] in table 'NugetPackages'
ALTER TABLE [HostingModel].[NugetPackages]
ADD CONSTRAINT [FK_NugetPackageFilesystemAssetLocation]
    FOREIGN KEY ([FilesystemAssetLocation_Id])
    REFERENCES [HostingModel].[FilesystemAssetLocations]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NugetPackageFilesystemAssetLocation'
CREATE INDEX [IX_FK_NugetPackageFilesystemAssetLocation]
ON [HostingModel].[NugetPackages]
    ([FilesystemAssetLocation_Id]);
GO

-- Creating foreign key on [TenantInfoId] in table 'WebAPITenantInfos'
ALTER TABLE [HostingModel].[WebAPITenantInfos]
ADD CONSTRAINT [FK_TenantInfoWebAPITenantInfo]
    FOREIGN KEY ([TenantInfoId])
    REFERENCES [HostingModel].[TenantInfos]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantInfoWebAPITenantInfo'
CREATE INDEX [IX_FK_TenantInfoWebAPITenantInfo]
ON [HostingModel].[WebAPITenantInfos]
    ([TenantInfoId]);
GO

-- Creating foreign key on [TenantInfoId] in table 'KeyCloakConfigurations'
ALTER TABLE [HostingModel].[KeyCloakConfigurations]
ADD CONSTRAINT [FK_TenantInfoKeyCloakConfiguration]
    FOREIGN KEY ([TenantInfoId])
    REFERENCES [HostingModel].[TenantInfos]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantInfoKeyCloakConfiguration'
CREATE INDEX [IX_FK_TenantInfoKeyCloakConfiguration]
ON [HostingModel].[KeyCloakConfigurations]
    ([TenantInfoId]);
GO

-- Creating foreign key on [Tenant_Id] in table 'TenantInfos'
ALTER TABLE [HostingModel].[TenantInfos]
ADD CONSTRAINT [FK_TenantTenantInfo]
    FOREIGN KEY ([Tenant_Id])
    REFERENCES [HostingModel].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantTenantInfo'
CREATE INDEX [IX_FK_TenantTenantInfo]
ON [HostingModel].[TenantInfos]
    ([Tenant_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------