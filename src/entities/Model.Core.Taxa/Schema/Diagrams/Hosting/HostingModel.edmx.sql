
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/07/2021 21:27:06
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
    [TenantDisplayName] nvarchar(max)  NOT NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NOT NULL
);
GO

-- Creating table 'RoutingDiscriminators'
CREATE TABLE [HostingModel].[RoutingDiscriminators] (
    [Id] uniqueidentifier  NOT NULL,
    [IsActive] bit  NOT NULL,
    [TenantId] uniqueidentifier  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [RuleDisplayName] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Hosts'
CREATE TABLE [HostingModel].[Hosts] (
    [Id] uniqueidentifier  NOT NULL,
    [DNSSafeHost] nvarchar(max)  NOT NULL,
    [IsTenanantDiscriminator] nvarchar(max)  NOT NULL,
    [RoutingDiscriminatorId] uniqueidentifier  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [HostDisplayName] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'UriPaths'
CREATE TABLE [HostingModel].[UriPaths] (
    [Id] uniqueidentifier  NOT NULL,
    [AbsolutePath] nvarchar(max)  NOT NULL,
    [IsTenantDiscriminator] nvarchar(max)  NOT NULL,
    [RoutingDiscriminatorId] uniqueidentifier  NOT NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [HostDisplayName] nvarchar(max)  NOT NULL
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

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------