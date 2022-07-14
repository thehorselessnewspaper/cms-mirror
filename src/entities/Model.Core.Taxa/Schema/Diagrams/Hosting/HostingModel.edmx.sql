
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 07/14/2022 08:47:11
-- Generated from EDMX file: E:\src\horseless-core\the horseless newspaper\src\entities\Model.Core.Taxa\Schema\Diagrams\Hosting\HostingModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO

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
IF OBJECT_ID(N'[dbo].[FK_AccessControlEntryTenant_AccessControlEntry]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[AccessControlEntryTenant] DROP CONSTRAINT [FK_AccessControlEntryTenant_AccessControlEntry];
GO
IF OBJECT_ID(N'[dbo].[FK_AccessControlEntryTenant_SubjectTenant]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[AccessControlEntryTenant] DROP CONSTRAINT [FK_AccessControlEntryTenant_SubjectTenant];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantPrincipal_Tenant]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantPrincipal] DROP CONSTRAINT [FK_TenantPrincipal_Tenant];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantPrincipal_Principal]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantPrincipal] DROP CONSTRAINT [FK_TenantPrincipal_Principal];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantPrincipal1_Tenant]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantPrincipal1] DROP CONSTRAINT [FK_TenantPrincipal1_Tenant];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantPrincipal1_Principal]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantPrincipal1] DROP CONSTRAINT [FK_TenantPrincipal1_Principal];
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
IF OBJECT_ID(N'[dbo].[AccessControlEntryTenant]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AccessControlEntryTenant];
GO
IF OBJECT_ID(N'[dbo].[TenantPrincipal]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TenantPrincipal];
GO
IF OBJECT_ID(N'[dbo].[TenantPrincipal1]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TenantPrincipal1];
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
    [DisplayName] nvarchar(max)  NULL
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
    [TenantBaseUrl] nvarchar(max)  NULL
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
    [Sub] nvarchar(max)  NULL
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

-- Creating table 'TenantAccessControlEntry'
CREATE TABLE [dbo].[TenantAccessControlEntry] (
    [AccessControlEntries_Id] uniqueidentifier  NOT NULL,
    [SubjectTenants_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TenantAccount'
CREATE TABLE [dbo].[TenantAccount] (
    [TenantAccounts_Id] uniqueidentifier  NOT NULL,
    [Accounts_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TenantOwner'
CREATE TABLE [dbo].[TenantOwner] (
    [OwnedTenants_Id] uniqueidentifier  NOT NULL,
    [Owners_Id] uniqueidentifier  NOT NULL
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

-- Creating primary key on [AccessControlEntries_Id], [SubjectTenants_Id] in table 'TenantAccessControlEntry'
ALTER TABLE [dbo].[TenantAccessControlEntry]
ADD CONSTRAINT [PK_TenantAccessControlEntry]
    PRIMARY KEY CLUSTERED ([AccessControlEntries_Id], [SubjectTenants_Id] ASC);
GO

-- Creating primary key on [TenantAccounts_Id], [Accounts_Id] in table 'TenantAccount'
ALTER TABLE [dbo].[TenantAccount]
ADD CONSTRAINT [PK_TenantAccount]
    PRIMARY KEY CLUSTERED ([TenantAccounts_Id], [Accounts_Id] ASC);
GO

-- Creating primary key on [OwnedTenants_Id], [Owners_Id] in table 'TenantOwner'
ALTER TABLE [dbo].[TenantOwner]
ADD CONSTRAINT [PK_TenantOwner]
    PRIMARY KEY CLUSTERED ([OwnedTenants_Id], [Owners_Id] ASC);
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

-- Creating foreign key on [AccessControlEntries_Id] in table 'TenantAccessControlEntry'
ALTER TABLE [dbo].[TenantAccessControlEntry]
ADD CONSTRAINT [FK_AccessControlEntryTenant_AccessControlEntry]
    FOREIGN KEY ([AccessControlEntries_Id])
    REFERENCES [dbo].[AccessControlEntries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [SubjectTenants_Id] in table 'TenantAccessControlEntry'
ALTER TABLE [dbo].[TenantAccessControlEntry]
ADD CONSTRAINT [FK_AccessControlEntryTenant_SubjectTenant]
    FOREIGN KEY ([SubjectTenants_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AccessControlEntryTenant_SubjectTenant'
CREATE INDEX [IX_FK_AccessControlEntryTenant_SubjectTenant]
ON [dbo].[TenantAccessControlEntry]
    ([SubjectTenants_Id]);
GO

-- Creating foreign key on [TenantAccounts_Id] in table 'TenantAccount'
ALTER TABLE [dbo].[TenantAccount]
ADD CONSTRAINT [FK_TenantPrincipal_Tenant]
    FOREIGN KEY ([TenantAccounts_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Accounts_Id] in table 'TenantAccount'
ALTER TABLE [dbo].[TenantAccount]
ADD CONSTRAINT [FK_TenantPrincipal_Principal]
    FOREIGN KEY ([Accounts_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantPrincipal_Principal'
CREATE INDEX [IX_FK_TenantPrincipal_Principal]
ON [dbo].[TenantAccount]
    ([Accounts_Id]);
GO

-- Creating foreign key on [OwnedTenants_Id] in table 'TenantOwner'
ALTER TABLE [dbo].[TenantOwner]
ADD CONSTRAINT [FK_TenantPrincipal1_Tenant]
    FOREIGN KEY ([OwnedTenants_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Owners_Id] in table 'TenantOwner'
ALTER TABLE [dbo].[TenantOwner]
ADD CONSTRAINT [FK_TenantPrincipal1_Principal]
    FOREIGN KEY ([Owners_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantPrincipal1_Principal'
CREATE INDEX [IX_FK_TenantPrincipal1_Principal]
ON [dbo].[TenantOwner]
    ([Owners_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------