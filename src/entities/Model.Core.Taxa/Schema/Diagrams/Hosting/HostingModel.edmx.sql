
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 01/09/2022 13:19:52
-- Generated from EDMX file: C:\src\the horseless newspaper\src\entities\Model.Core.Taxa\Schema\Diagrams\Hosting\HostingModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO

GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_RoutingDiscriminatorHost]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Hosts] DROP CONSTRAINT [FK_RoutingDiscriminatorHost];
GO
IF OBJECT_ID(N'[dbo].[FK_RoutingDiscriminatorUriPath]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[UriPaths] DROP CONSTRAINT [FK_RoutingDiscriminatorUriPath];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantInfoWebAPITenantInfo]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[WebAPITenantInfos] DROP CONSTRAINT [FK_TenantInfoWebAPITenantInfo];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantInfoKeyCloakConfiguration]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[KeyCloakConfigurations] DROP CONSTRAINT [FK_TenantInfoKeyCloakConfiguration];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantTenantInfo]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantInfos] DROP CONSTRAINT [FK_TenantTenantInfo];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantRoutingDiscriminator]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[RoutingDiscriminators] DROP CONSTRAINT [FK_TenantRoutingDiscriminator];
GO
IF OBJECT_ID(N'[dbo].[FK_HorselessClaimsPrincipalTenant]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HorselessClaimsPrincipals] DROP CONSTRAINT [FK_HorselessClaimsPrincipalTenant];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Tenants]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Tenants];
GO
IF OBJECT_ID(N'[dbo].[RoutingDiscriminators]', 'U') IS NOT NULL
    DROP TABLE [dbo].[RoutingDiscriminators];
GO
IF OBJECT_ID(N'[dbo].[Hosts]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Hosts];
GO
IF OBJECT_ID(N'[dbo].[UriPaths]', 'U') IS NOT NULL
    DROP TABLE [dbo].[UriPaths];
GO
IF OBJECT_ID(N'[dbo].[NugetPackages]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NugetPackages];
GO
IF OBJECT_ID(N'[dbo].[FilesystemAssetLocations]', 'U') IS NOT NULL
    DROP TABLE [dbo].[FilesystemAssetLocations];
GO
IF OBJECT_ID(N'[dbo].[KeyCloakConfigurations]', 'U') IS NOT NULL
    DROP TABLE [dbo].[KeyCloakConfigurations];
GO
IF OBJECT_ID(N'[dbo].[TenantInfos]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TenantInfos];
GO
IF OBJECT_ID(N'[dbo].[WebAPITenantInfos]', 'U') IS NOT NULL
    DROP TABLE [dbo].[WebAPITenantInfos];
GO
IF OBJECT_ID(N'[dbo].[HorselessSessions]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HorselessSessions];
GO
IF OBJECT_ID(N'[dbo].[HorselessClaimsPrincipals]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HorselessClaimsPrincipals];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Tenants'
CREATE TABLE [dbo].[Tenants] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL
);
GO

-- Creating table 'RoutingDiscriminators'
CREATE TABLE [dbo].[RoutingDiscriminators] (
    [Id] uniqueidentifier  NOT NULL,
    [IsActive] bit  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [DisplayName] nvarchar(max)  NULL,
    [CreatedAt] datetime  NULL,
    [TenantId] uniqueidentifier  NULL
);
GO

-- Creating table 'Hosts'
CREATE TABLE [dbo].[Hosts] (
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
CREATE TABLE [dbo].[UriPaths] (
    [Id] uniqueidentifier  NOT NULL,
    [AbsoluteURL] nvarchar(max)  NULL,
    [IsTenantDiscriminator] nvarchar(max)  NULL,
    [RoutingDiscriminatorId] uniqueidentifier  NOT NULL,
    [ObjectId] nvarchar(max)  NULL,
    [DisplayName] nvarchar(max)  NULL,
    [CreatedAt] datetime  NULL,
    [HTTPPort] nvarchar(max)  NULL,
    [HTTPScheme] nvarchar(max)  NULL,
    [TCPHost] nvarchar(max)  NULL
);
GO

-- Creating table 'NugetPackages'
CREATE TABLE [dbo].[NugetPackages] (
    [Id] uniqueidentifier  NOT NULL,
    [ObjectId] nvarchar(max)  NULL,
    [PackageName] nvarchar(max)  NULL,
    [PackageId] nvarchar(max)  NULL,
    [Publisher] nvarchar(max)  NULL,
    [Version] nvarchar(max)  NULL,
    [CreatedAt] datetime  NULL,
    [DisplayName] nvarchar(max)  NULL
);
GO

-- Creating table 'FilesystemAssetLocations'
CREATE TABLE [dbo].[FilesystemAssetLocations] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [CreatedAt] datetime  NULL,
    [AssetURI] nvarchar(max)  NULL
);
GO

-- Creating table 'KeyCloakConfigurations'
CREATE TABLE [dbo].[KeyCloakConfigurations] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
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
CREATE TABLE [dbo].[TenantInfos] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
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
CREATE TABLE [dbo].[WebAPITenantInfos] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [Identifier] nvarchar(max)  NULL,
    [Name] nvarchar(max)  NULL,
    [ConnectionString] nvarchar(max)  NULL,
    [WebAPIBaseUrl] nvarchar(max)  NULL,
    [TenantInfoId] uniqueidentifier  NULL
);
GO

-- Creating table 'HorselessSessions'
CREATE TABLE [dbo].[HorselessSessions] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [SessionId] nvarchar(max)  NULL,
    [Iss] nvarchar(max)  NULL,
    [Aud] nvarchar(max)  NULL,
    [Sub] nvarchar(max)  NULL,
    [IsAnonymous] bit  NULL
);
GO

-- Creating table 'HorselessClaimsPrincipals'
CREATE TABLE [dbo].[HorselessClaimsPrincipals] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [Iss] nvarchar(max)  NULL,
    [Aud] nvarchar(max)  NULL,
    [Sub] nvarchar(max)  NULL,
    [TenantId] uniqueidentifier  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Tenants'
ALTER TABLE [dbo].[Tenants]
ADD CONSTRAINT [PK_Tenants]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'RoutingDiscriminators'
ALTER TABLE [dbo].[RoutingDiscriminators]
ADD CONSTRAINT [PK_RoutingDiscriminators]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Hosts'
ALTER TABLE [dbo].[Hosts]
ADD CONSTRAINT [PK_Hosts]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'UriPaths'
ALTER TABLE [dbo].[UriPaths]
ADD CONSTRAINT [PK_UriPaths]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'NugetPackages'
ALTER TABLE [dbo].[NugetPackages]
ADD CONSTRAINT [PK_NugetPackages]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'FilesystemAssetLocations'
ALTER TABLE [dbo].[FilesystemAssetLocations]
ADD CONSTRAINT [PK_FilesystemAssetLocations]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'KeyCloakConfigurations'
ALTER TABLE [dbo].[KeyCloakConfigurations]
ADD CONSTRAINT [PK_KeyCloakConfigurations]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'TenantInfos'
ALTER TABLE [dbo].[TenantInfos]
ADD CONSTRAINT [PK_TenantInfos]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'WebAPITenantInfos'
ALTER TABLE [dbo].[WebAPITenantInfos]
ADD CONSTRAINT [PK_WebAPITenantInfos]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'HorselessSessions'
ALTER TABLE [dbo].[HorselessSessions]
ADD CONSTRAINT [PK_HorselessSessions]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'HorselessClaimsPrincipals'
ALTER TABLE [dbo].[HorselessClaimsPrincipals]
ADD CONSTRAINT [PK_HorselessClaimsPrincipals]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [RoutingDiscriminatorId] in table 'Hosts'
ALTER TABLE [dbo].[Hosts]
ADD CONSTRAINT [FK_RoutingDiscriminatorHost]
    FOREIGN KEY ([RoutingDiscriminatorId])
    REFERENCES [dbo].[RoutingDiscriminators]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RoutingDiscriminatorHost'
CREATE INDEX [IX_FK_RoutingDiscriminatorHost]
ON [dbo].[Hosts]
    ([RoutingDiscriminatorId]);
GO

-- Creating foreign key on [RoutingDiscriminatorId] in table 'UriPaths'
ALTER TABLE [dbo].[UriPaths]
ADD CONSTRAINT [FK_RoutingDiscriminatorUriPath]
    FOREIGN KEY ([RoutingDiscriminatorId])
    REFERENCES [dbo].[RoutingDiscriminators]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RoutingDiscriminatorUriPath'
CREATE INDEX [IX_FK_RoutingDiscriminatorUriPath]
ON [dbo].[UriPaths]
    ([RoutingDiscriminatorId]);
GO

-- Creating foreign key on [TenantInfoId] in table 'WebAPITenantInfos'
ALTER TABLE [dbo].[WebAPITenantInfos]
ADD CONSTRAINT [FK_TenantInfoWebAPITenantInfo]
    FOREIGN KEY ([TenantInfoId])
    REFERENCES [dbo].[TenantInfos]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantInfoWebAPITenantInfo'
CREATE INDEX [IX_FK_TenantInfoWebAPITenantInfo]
ON [dbo].[WebAPITenantInfos]
    ([TenantInfoId]);
GO

-- Creating foreign key on [TenantInfoId] in table 'KeyCloakConfigurations'
ALTER TABLE [dbo].[KeyCloakConfigurations]
ADD CONSTRAINT [FK_TenantInfoKeyCloakConfiguration]
    FOREIGN KEY ([TenantInfoId])
    REFERENCES [dbo].[TenantInfos]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantInfoKeyCloakConfiguration'
CREATE INDEX [IX_FK_TenantInfoKeyCloakConfiguration]
ON [dbo].[KeyCloakConfigurations]
    ([TenantInfoId]);
GO

-- Creating foreign key on [Tenant_Id] in table 'TenantInfos'
ALTER TABLE [dbo].[TenantInfos]
ADD CONSTRAINT [FK_TenantTenantInfo]
    FOREIGN KEY ([Tenant_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantTenantInfo'
CREATE INDEX [IX_FK_TenantTenantInfo]
ON [dbo].[TenantInfos]
    ([Tenant_Id]);
GO

-- Creating foreign key on [TenantId] in table 'RoutingDiscriminators'
ALTER TABLE [dbo].[RoutingDiscriminators]
ADD CONSTRAINT [FK_TenantRoutingDiscriminator]
    FOREIGN KEY ([TenantId])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantRoutingDiscriminator'
CREATE INDEX [IX_FK_TenantRoutingDiscriminator]
ON [dbo].[RoutingDiscriminators]
    ([TenantId]);
GO

-- Creating foreign key on [TenantId] in table 'HorselessClaimsPrincipals'
ALTER TABLE [dbo].[HorselessClaimsPrincipals]
ADD CONSTRAINT [FK_HorselessClaimsPrincipalTenant]
    FOREIGN KEY ([TenantId])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_HorselessClaimsPrincipalTenant'
CREATE INDEX [IX_FK_HorselessClaimsPrincipalTenant]
ON [dbo].[HorselessClaimsPrincipals]
    ([TenantId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------