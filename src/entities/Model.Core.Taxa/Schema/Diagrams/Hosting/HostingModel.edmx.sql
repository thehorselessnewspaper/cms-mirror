
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/16/2021 17:09:07
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

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Tenants'
CREATE TABLE [HostingModel].[Tenants] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [KeyCloakConfigurationId] uniqueidentifier  NULL
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
    [CreatedAt] datetime  NULL
);
GO

-- Creating table 'TenantNugetPackage'
CREATE TABLE [HostingModel].[TenantNugetPackage] (
    [TenantDeployments_Id] uniqueidentifier  NOT NULL,
    [AvailableNugetPackages_Id] uniqueidentifier  NOT NULL
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

-- Creating primary key on [TenantDeployments_Id], [AvailableNugetPackages_Id] in table 'TenantNugetPackage'
ALTER TABLE [HostingModel].[TenantNugetPackage]
ADD CONSTRAINT [PK_TenantNugetPackage]
    PRIMARY KEY CLUSTERED ([TenantDeployments_Id], [AvailableNugetPackages_Id] ASC);
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

-- Creating foreign key on [TenantDeployments_Id] in table 'TenantNugetPackage'
ALTER TABLE [HostingModel].[TenantNugetPackage]
ADD CONSTRAINT [FK_TenantNugetPackage_Tenant]
    FOREIGN KEY ([TenantDeployments_Id])
    REFERENCES [HostingModel].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [AvailableNugetPackages_Id] in table 'TenantNugetPackage'
ALTER TABLE [HostingModel].[TenantNugetPackage]
ADD CONSTRAINT [FK_TenantNugetPackage_NugetPackage]
    FOREIGN KEY ([AvailableNugetPackages_Id])
    REFERENCES [HostingModel].[NugetPackages]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantNugetPackage_NugetPackage'
CREATE INDEX [IX_FK_TenantNugetPackage_NugetPackage]
ON [HostingModel].[TenantNugetPackage]
    ([AvailableNugetPackages_Id]);
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

-- Creating foreign key on [KeyCloakConfigurationId] in table 'Tenants'
ALTER TABLE [HostingModel].[Tenants]
ADD CONSTRAINT [FK_KeyCloakConfigurationTenant]
    FOREIGN KEY ([KeyCloakConfigurationId])
    REFERENCES [HostingModel].[KeyCloakConfigurations]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_KeyCloakConfigurationTenant'
CREATE INDEX [IX_FK_KeyCloakConfigurationTenant]
ON [HostingModel].[Tenants]
    ([KeyCloakConfigurationId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------