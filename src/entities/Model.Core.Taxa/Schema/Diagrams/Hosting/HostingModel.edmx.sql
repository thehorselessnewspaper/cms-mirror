
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/13/2022 17:55:40
-- Generated from EDMX file: C:\src\the-horseless-newspaper\src\entities\Model.Core.Taxa\Schema\Diagrams\Hosting\HostingModel.edmx
-- --------------------------------------------------


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
IF OBJECT_ID(N'[dbo].[FK_PrincipalPrincipal_Principal]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PrincipalPrincipal] DROP CONSTRAINT [FK_PrincipalPrincipal_Principal];
GO
IF OBJECT_ID(N'[dbo].[FK_PrincipalPrincipal_Principal1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PrincipalPrincipal] DROP CONSTRAINT [FK_PrincipalPrincipal_Principal1];
GO
IF OBJECT_ID(N'[dbo].[FK_PrincipalAccessControlEntry_Principal]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PrincipalAccessControlEntry] DROP CONSTRAINT [FK_PrincipalAccessControlEntry_Principal];
GO
IF OBJECT_ID(N'[dbo].[FK_PrincipalAccessControlEntry_AccessControlEntry]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PrincipalAccessControlEntry] DROP CONSTRAINT [FK_PrincipalAccessControlEntry_AccessControlEntry];
GO
IF OBJECT_ID(N'[dbo].[FK_PrincipalAccessControlEntry1_Principal]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PrincipalAccessControlEntry1] DROP CONSTRAINT [FK_PrincipalAccessControlEntry1_Principal];
GO
IF OBJECT_ID(N'[dbo].[FK_PrincipalAccessControlEntry1_AccessControlEntry]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PrincipalAccessControlEntry1] DROP CONSTRAINT [FK_PrincipalAccessControlEntry1_AccessControlEntry];
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
IF OBJECT_ID(N'[dbo].[FK_AccessControlEntryAccessControlEntry]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[AccessControlEntries] DROP CONSTRAINT [FK_AccessControlEntryAccessControlEntry];
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
IF OBJECT_ID(N'[dbo].[PrincipalPrincipal]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PrincipalPrincipal];
GO
IF OBJECT_ID(N'[dbo].[PrincipalAccessControlEntry]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PrincipalAccessControlEntry];
GO
IF OBJECT_ID(N'[dbo].[PrincipalAccessControlEntry1]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PrincipalAccessControlEntry1];
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

-- Creating table 'PrincipalPrincipal'
CREATE TABLE [dbo].[PrincipalPrincipal] (
    [Owners_Id] uniqueidentifier  NOT NULL,
    [OwnedPrincipals_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'PrincipalAccessControlEntry'
CREATE TABLE [dbo].[PrincipalAccessControlEntry] (
    [SubjectPrincipals_Id] uniqueidentifier  NOT NULL,
    [AccessControlEntries_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'PrincipalAccessControlEntry1'
CREATE TABLE [dbo].[PrincipalAccessControlEntry1] (
    [Owners_Id] uniqueidentifier  NOT NULL,
    [OwnedAccessControlEntries_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'AccessControlEntryTenant'
CREATE TABLE [dbo].[AccessControlEntryTenant] (
    [AccessControlEntries_Id] uniqueidentifier  NOT NULL,
    [SubjectTenants_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TenantPrincipal'
CREATE TABLE [dbo].[TenantPrincipal] (
    [TenantAccounts_Id] uniqueidentifier  NOT NULL,
    [Accounts_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TenantPrincipal1'
CREATE TABLE [dbo].[TenantPrincipal1] (
    [OwnedTenants_Id] uniqueidentifier  NOT NULL,
    [Owners_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'AccessControlledAccessControlEntry'
CREATE TABLE [dbo].[AccessControlledAccessControlEntry] (
    [SubjectAccessControlEntries_Id] uniqueidentifier  NOT NULL,
    [AccessControlEntries_Id] uniqueidentifier  NOT NULL
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

-- Creating primary key on [Owners_Id], [OwnedPrincipals_Id] in table 'PrincipalPrincipal'
ALTER TABLE [dbo].[PrincipalPrincipal]
ADD CONSTRAINT [PK_PrincipalPrincipal]
    PRIMARY KEY CLUSTERED ([Owners_Id], [OwnedPrincipals_Id] ASC);
GO

-- Creating primary key on [SubjectPrincipals_Id], [AccessControlEntries_Id] in table 'PrincipalAccessControlEntry'
ALTER TABLE [dbo].[PrincipalAccessControlEntry]
ADD CONSTRAINT [PK_PrincipalAccessControlEntry]
    PRIMARY KEY CLUSTERED ([SubjectPrincipals_Id], [AccessControlEntries_Id] ASC);
GO

-- Creating primary key on [Owners_Id], [OwnedAccessControlEntries_Id] in table 'PrincipalAccessControlEntry1'
ALTER TABLE [dbo].[PrincipalAccessControlEntry1]
ADD CONSTRAINT [PK_PrincipalAccessControlEntry1]
    PRIMARY KEY CLUSTERED ([Owners_Id], [OwnedAccessControlEntries_Id] ASC);
GO

-- Creating primary key on [AccessControlEntries_Id], [SubjectTenants_Id] in table 'AccessControlEntryTenant'
ALTER TABLE [dbo].[AccessControlEntryTenant]
ADD CONSTRAINT [PK_AccessControlEntryTenant]
    PRIMARY KEY CLUSTERED ([AccessControlEntries_Id], [SubjectTenants_Id] ASC);
GO

-- Creating primary key on [TenantAccounts_Id], [Accounts_Id] in table 'TenantPrincipal'
ALTER TABLE [dbo].[TenantPrincipal]
ADD CONSTRAINT [PK_TenantPrincipal]
    PRIMARY KEY CLUSTERED ([TenantAccounts_Id], [Accounts_Id] ASC);
GO

-- Creating primary key on [OwnedTenants_Id], [Owners_Id] in table 'TenantPrincipal1'
ALTER TABLE [dbo].[TenantPrincipal1]
ADD CONSTRAINT [PK_TenantPrincipal1]
    PRIMARY KEY CLUSTERED ([OwnedTenants_Id], [Owners_Id] ASC);
GO

-- Creating primary key on [SubjectAccessControlEntries_Id], [AccessControlEntries_Id] in table 'AccessControlledAccessControlEntry'
ALTER TABLE [dbo].[AccessControlledAccessControlEntry]
ADD CONSTRAINT [PK_AccessControlledAccessControlEntry]
    PRIMARY KEY CLUSTERED ([SubjectAccessControlEntries_Id], [AccessControlEntries_Id] ASC);
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

-- Creating foreign key on [Owners_Id] in table 'PrincipalPrincipal'
ALTER TABLE [dbo].[PrincipalPrincipal]
ADD CONSTRAINT [FK_PrincipalPrincipal_Principal]
    FOREIGN KEY ([Owners_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [OwnedPrincipals_Id] in table 'PrincipalPrincipal'
ALTER TABLE [dbo].[PrincipalPrincipal]
ADD CONSTRAINT [FK_PrincipalPrincipal_Principal1]
    FOREIGN KEY ([OwnedPrincipals_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PrincipalPrincipal_Principal1'
CREATE INDEX [IX_FK_PrincipalPrincipal_Principal1]
ON [dbo].[PrincipalPrincipal]
    ([OwnedPrincipals_Id]);
GO

-- Creating foreign key on [SubjectPrincipals_Id] in table 'PrincipalAccessControlEntry'
ALTER TABLE [dbo].[PrincipalAccessControlEntry]
ADD CONSTRAINT [FK_PrincipalAccessControlEntry_Principal]
    FOREIGN KEY ([SubjectPrincipals_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [AccessControlEntries_Id] in table 'PrincipalAccessControlEntry'
ALTER TABLE [dbo].[PrincipalAccessControlEntry]
ADD CONSTRAINT [FK_PrincipalAccessControlEntry_AccessControlEntry]
    FOREIGN KEY ([AccessControlEntries_Id])
    REFERENCES [dbo].[AccessControlEntries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PrincipalAccessControlEntry_AccessControlEntry'
CREATE INDEX [IX_FK_PrincipalAccessControlEntry_AccessControlEntry]
ON [dbo].[PrincipalAccessControlEntry]
    ([AccessControlEntries_Id]);
GO

-- Creating foreign key on [Owners_Id] in table 'PrincipalAccessControlEntry1'
ALTER TABLE [dbo].[PrincipalAccessControlEntry1]
ADD CONSTRAINT [FK_PrincipalAccessControlEntry1_Principal]
    FOREIGN KEY ([Owners_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [OwnedAccessControlEntries_Id] in table 'PrincipalAccessControlEntry1'
ALTER TABLE [dbo].[PrincipalAccessControlEntry1]
ADD CONSTRAINT [FK_PrincipalAccessControlEntry1_AccessControlEntry]
    FOREIGN KEY ([OwnedAccessControlEntries_Id])
    REFERENCES [dbo].[AccessControlEntries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PrincipalAccessControlEntry1_AccessControlEntry'
CREATE INDEX [IX_FK_PrincipalAccessControlEntry1_AccessControlEntry]
ON [dbo].[PrincipalAccessControlEntry1]
    ([OwnedAccessControlEntries_Id]);
GO

-- Creating foreign key on [AccessControlEntries_Id] in table 'AccessControlEntryTenant'
ALTER TABLE [dbo].[AccessControlEntryTenant]
ADD CONSTRAINT [FK_AccessControlEntryTenant_AccessControlEntry]
    FOREIGN KEY ([AccessControlEntries_Id])
    REFERENCES [dbo].[AccessControlEntries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [SubjectTenants_Id] in table 'AccessControlEntryTenant'
ALTER TABLE [dbo].[AccessControlEntryTenant]
ADD CONSTRAINT [FK_AccessControlEntryTenant_SubjectTenant]
    FOREIGN KEY ([SubjectTenants_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AccessControlEntryTenant_SubjectTenant'
CREATE INDEX [IX_FK_AccessControlEntryTenant_SubjectTenant]
ON [dbo].[AccessControlEntryTenant]
    ([SubjectTenants_Id]);
GO

-- Creating foreign key on [TenantAccounts_Id] in table 'TenantPrincipal'
ALTER TABLE [dbo].[TenantPrincipal]
ADD CONSTRAINT [FK_TenantPrincipal_Tenant]
    FOREIGN KEY ([TenantAccounts_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Accounts_Id] in table 'TenantPrincipal'
ALTER TABLE [dbo].[TenantPrincipal]
ADD CONSTRAINT [FK_TenantPrincipal_Principal]
    FOREIGN KEY ([Accounts_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantPrincipal_Principal'
CREATE INDEX [IX_FK_TenantPrincipal_Principal]
ON [dbo].[TenantPrincipal]
    ([Accounts_Id]);
GO

-- Creating foreign key on [OwnedTenants_Id] in table 'TenantPrincipal1'
ALTER TABLE [dbo].[TenantPrincipal1]
ADD CONSTRAINT [FK_TenantPrincipal1_Tenant]
    FOREIGN KEY ([OwnedTenants_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Owners_Id] in table 'TenantPrincipal1'
ALTER TABLE [dbo].[TenantPrincipal1]
ADD CONSTRAINT [FK_TenantPrincipal1_Principal]
    FOREIGN KEY ([Owners_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantPrincipal1_Principal'
CREATE INDEX [IX_FK_TenantPrincipal1_Principal]
ON [dbo].[TenantPrincipal1]
    ([Owners_Id]);
GO

-- Creating foreign key on [SubjectAccessControlEntries_Id] in table 'AccessControlledAccessControlEntry'
ALTER TABLE [dbo].[AccessControlledAccessControlEntry]
ADD CONSTRAINT [FK_AccessControlledAccessControlEntry_AccessControlEntry]
    FOREIGN KEY ([SubjectAccessControlEntries_Id])
    REFERENCES [dbo].[AccessControlEntries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [AccessControlEntries_Id] in table 'AccessControlledAccessControlEntry'
ALTER TABLE [dbo].[AccessControlledAccessControlEntry]
ADD CONSTRAINT [FK_AccessControlledAccessControlEntry_AccessControlEntry1]
    FOREIGN KEY ([AccessControlEntries_Id])
    REFERENCES [dbo].[AccessControlEntries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AccessControlledAccessControlEntry_AccessControlEntry1'
CREATE INDEX [IX_FK_AccessControlledAccessControlEntry_AccessControlEntry1]
ON [dbo].[AccessControlledAccessControlEntry]
    ([AccessControlEntries_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------