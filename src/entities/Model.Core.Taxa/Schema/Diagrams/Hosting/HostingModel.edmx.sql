
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 03/04/2022 13:49:58
-- Generated from EDMX file: C:\src\the-horseless-newspaper\src\entities\Model.Core.Taxa\Schema\Diagrams\Hosting\HostingModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;

GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_TenantInfoWebAPITenantInfo]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[WebAPITenantInfos] DROP CONSTRAINT [FK_TenantInfoWebAPITenantInfo];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantInfoKeyCloakConfiguration]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[KeyCloakConfigurations] DROP CONSTRAINT [FK_TenantInfoKeyCloakConfiguration];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantTenantInfo]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantInfos] DROP CONSTRAINT [FK_TenantTenantInfo];
GO
IF OBJECT_ID(N'[dbo].[FK_HorselessClaimsPrincipalTenant]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Principals] DROP CONSTRAINT [FK_HorselessClaimsPrincipalTenant];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantNugetPackage]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NugetPackages] DROP CONSTRAINT [FK_TenantNugetPackage];
GO
IF OBJECT_ID(N'[dbo].[FK_AccessControlEntryPrincipal_AccessControlEntry]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[AccessControlEntryPrincipal] DROP CONSTRAINT [FK_AccessControlEntryPrincipal_AccessControlEntry];
GO
IF OBJECT_ID(N'[dbo].[FK_AccessControlEntryPrincipal_Principal]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[AccessControlEntryPrincipal] DROP CONSTRAINT [FK_AccessControlEntryPrincipal_Principal];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Tenants]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Tenants];
GO
IF OBJECT_ID(N'[dbo].[NugetPackages]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NugetPackages];
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
IF OBJECT_ID(N'[dbo].[Principals]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Principals];
GO
IF OBJECT_ID(N'[dbo].[AccessControlEntries]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AccessControlEntries];
GO
IF OBJECT_ID(N'[dbo].[AccessControlEntryPrincipal]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AccessControlEntryPrincipal];
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

-- Creating table 'NugetPackages'
CREATE TABLE [dbo].[NugetPackages] (
    [Id] uniqueidentifier  NOT NULL,
    [ObjectId] nvarchar(max)  NULL,
    [PackageName] nvarchar(max)  NULL,
    [PackageId] nvarchar(max)  NULL,
    [Publisher] nvarchar(max)  NULL,
    [Version] nvarchar(max)  NULL,
    [CreatedAt] datetime  NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ParentTenantId] uniqueidentifier  NULL
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
    [ParentTenant_Id] uniqueidentifier  NULL
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

-- Creating table 'Principals'
CREATE TABLE [dbo].[Principals] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [Iss] nvarchar(max)  NULL,
    [Aud] nvarchar(max)  NULL,
    [Sub] nvarchar(max)  NULL,
    [ParentTenantId] uniqueidentifier  NULL
);
GO

-- Creating table 'AccessControlEntries'
CREATE TABLE [dbo].[AccessControlEntries] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [IsActive] bit  NULL
);
GO

-- Creating table 'AccessControlEntryPrincipal'
CREATE TABLE [dbo].[AccessControlEntryPrincipal] (
    [AccessControlEntries_Id] uniqueidentifier  NOT NULL,
    [Principals_Id] uniqueidentifier  NOT NULL
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

-- Creating primary key on [Id] in table 'NugetPackages'
ALTER TABLE [dbo].[NugetPackages]
ADD CONSTRAINT [PK_NugetPackages]
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

-- Creating primary key on [Id] in table 'Principals'
ALTER TABLE [dbo].[Principals]
ADD CONSTRAINT [PK_Principals]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'AccessControlEntries'
ALTER TABLE [dbo].[AccessControlEntries]
ADD CONSTRAINT [PK_AccessControlEntries]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [AccessControlEntries_Id], [Principals_Id] in table 'AccessControlEntryPrincipal'
ALTER TABLE [dbo].[AccessControlEntryPrincipal]
ADD CONSTRAINT [PK_AccessControlEntryPrincipal]
    PRIMARY KEY CLUSTERED ([AccessControlEntries_Id], [Principals_Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

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

-- Creating foreign key on [ParentTenant_Id] in table 'TenantInfos'
ALTER TABLE [dbo].[TenantInfos]
ADD CONSTRAINT [FK_TenantTenantInfo]
    FOREIGN KEY ([ParentTenant_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantTenantInfo'
CREATE INDEX [IX_FK_TenantTenantInfo]
ON [dbo].[TenantInfos]
    ([ParentTenant_Id]);
GO

-- Creating foreign key on [ParentTenantId] in table 'Principals'
ALTER TABLE [dbo].[Principals]
ADD CONSTRAINT [FK_HorselessClaimsPrincipalTenant]
    FOREIGN KEY ([ParentTenantId])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_HorselessClaimsPrincipalTenant'
CREATE INDEX [IX_FK_HorselessClaimsPrincipalTenant]
ON [dbo].[Principals]
    ([ParentTenantId]);
GO

-- Creating foreign key on [ParentTenantId] in table 'NugetPackages'
ALTER TABLE [dbo].[NugetPackages]
ADD CONSTRAINT [FK_TenantNugetPackage]
    FOREIGN KEY ([ParentTenantId])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantNugetPackage'
CREATE INDEX [IX_FK_TenantNugetPackage]
ON [dbo].[NugetPackages]
    ([ParentTenantId]);
GO

-- Creating foreign key on [AccessControlEntries_Id] in table 'AccessControlEntryPrincipal'
ALTER TABLE [dbo].[AccessControlEntryPrincipal]
ADD CONSTRAINT [FK_AccessControlEntryPrincipal_AccessControlEntry]
    FOREIGN KEY ([AccessControlEntries_Id])
    REFERENCES [dbo].[AccessControlEntries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Principals_Id] in table 'AccessControlEntryPrincipal'
ALTER TABLE [dbo].[AccessControlEntryPrincipal]
ADD CONSTRAINT [FK_AccessControlEntryPrincipal_Principal]
    FOREIGN KEY ([Principals_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AccessControlEntryPrincipal_Principal'
CREATE INDEX [IX_FK_AccessControlEntryPrincipal_Principal]
ON [dbo].[AccessControlEntryPrincipal]
    ([Principals_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------