
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 07/22/2022 22:12:26
-- Generated from EDMX file: C:\src\the-horseless-newspaper\src\entities\Model.Core.Taxa\Schema\Diagrams\Content\HorselessContentModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO

IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_FilesystemAssetMimeContent]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HorselessContents] DROP CONSTRAINT [FK_FilesystemAssetMimeContent];
GO
IF OBJECT_ID(N'[dbo].[FK_MimeContentJSONAsset]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HorselessContents] DROP CONSTRAINT [FK_MimeContentJSONAsset];
GO
IF OBJECT_ID(N'[dbo].[FK_MimeContentMIMEType]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HorselessContents] DROP CONSTRAINT [FK_MimeContentMIMEType];
GO
IF OBJECT_ID(N'[dbo].[FK_NavigationMenuHierarchy_NavigationMenu]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NavigationMenuHierarchy] DROP CONSTRAINT [FK_NavigationMenuHierarchy_NavigationMenu];
GO
IF OBJECT_ID(N'[dbo].[FK_NavigationMenuHierarchy_Children]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NavigationMenuHierarchy] DROP CONSTRAINT [FK_NavigationMenuHierarchy_Children];
GO
IF OBJECT_ID(N'[dbo].[FK_NavigationMenuItemHierarchy_NavigationMenuItem]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NavigationMenuItemHierarchy] DROP CONSTRAINT [FK_NavigationMenuItemHierarchy_NavigationMenuItem];
GO
IF OBJECT_ID(N'[dbo].[FK_NavigationMenuItemHierarchy_ChildNavigationItems]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NavigationMenuItemHierarchy] DROP CONSTRAINT [FK_NavigationMenuItemHierarchy_ChildNavigationItems];
GO
IF OBJECT_ID(N'[dbo].[FK_NavigationMenuItemNavigationMenu_NavigationMenuItem]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NavigationMenuItemNavigationMenu] DROP CONSTRAINT [FK_NavigationMenuItemNavigationMenu_NavigationMenuItem];
GO
IF OBJECT_ID(N'[dbo].[FK_NavigationMenuItemNavigationMenu_NavigationMenu]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NavigationMenuItemNavigationMenu] DROP CONSTRAINT [FK_NavigationMenuItemNavigationMenu_NavigationMenu];
GO
IF OBJECT_ID(N'[dbo].[FK_PublicationHierarchy_Publication]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PublicationHierarchy] DROP CONSTRAINT [FK_PublicationHierarchy_Publication];
GO
IF OBJECT_ID(N'[dbo].[FK_PublicationHierarchy_PublicationChildren]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PublicationHierarchy] DROP CONSTRAINT [FK_PublicationHierarchy_PublicationChildren];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonTaxon_Taxon]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonHirearchy] DROP CONSTRAINT [FK_TaxonTaxon_Taxon];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonTaxon_Taxon1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonHirearchy] DROP CONSTRAINT [FK_TaxonTaxon_Taxon1];
GO
IF OBJECT_ID(N'[dbo].[FK_HolonymMeronym_Holonym]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HolonymMeronym] DROP CONSTRAINT [FK_HolonymMeronym_Holonym];
GO
IF OBJECT_ID(N'[dbo].[FK_HolonymMeronym_Meronym]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HolonymMeronym] DROP CONSTRAINT [FK_HolonymMeronym_Meronym];
GO
IF OBJECT_ID(N'[dbo].[FK_PrincipalHorselessSession]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HorselessSessions] DROP CONSTRAINT [FK_PrincipalHorselessSession];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[HorselessContents]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HorselessContents];
GO
IF OBJECT_ID(N'[dbo].[Tenants]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Tenants];
GO
IF OBJECT_ID(N'[dbo].[MIMETypes]', 'U') IS NOT NULL
    DROP TABLE [dbo].[MIMETypes];
GO
IF OBJECT_ID(N'[dbo].[FilesystemAssets]', 'U') IS NOT NULL
    DROP TABLE [dbo].[FilesystemAssets];
GO
IF OBJECT_ID(N'[dbo].[JSONAssets]', 'U') IS NOT NULL
    DROP TABLE [dbo].[JSONAssets];
GO
IF OBJECT_ID(N'[dbo].[ContentCollections]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ContentCollections];
GO
IF OBJECT_ID(N'[dbo].[Publications]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Publications];
GO
IF OBJECT_ID(N'[dbo].[Placeholders]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Placeholders];
GO
IF OBJECT_ID(N'[dbo].[Taxons]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Taxons];
GO
IF OBJECT_ID(N'[dbo].[Holonyms]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Holonyms];
GO
IF OBJECT_ID(N'[dbo].[Meronyms]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Meronyms];
GO
IF OBJECT_ID(N'[dbo].[Principals]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Principals];
GO
IF OBJECT_ID(N'[dbo].[NugetPackages]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NugetPackages];
GO
IF OBJECT_ID(N'[dbo].[AccessControlEntries]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AccessControlEntries];
GO
IF OBJECT_ID(N'[dbo].[HorselessSessions]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HorselessSessions];
GO
IF OBJECT_ID(N'[dbo].[NavigationMenus]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NavigationMenus];
GO
IF OBJECT_ID(N'[dbo].[NavigationMenuItems]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NavigationMenuItems];
GO
IF OBJECT_ID(N'[dbo].[Taxonomies]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Taxonomies];
GO
IF OBJECT_ID(N'[dbo].[HorselessViews]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HorselessViews];
GO
IF OBJECT_ID(N'[dbo].[NavigationMenuHierarchy]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NavigationMenuHierarchy];
GO
IF OBJECT_ID(N'[dbo].[NavigationMenuItemHierarchy]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NavigationMenuItemHierarchy];
GO
IF OBJECT_ID(N'[dbo].[NavigationMenuItemNavigationMenu]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NavigationMenuItemNavigationMenu];
GO
IF OBJECT_ID(N'[dbo].[PublicationHierarchy]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PublicationHierarchy];
GO
IF OBJECT_ID(N'[dbo].[TaxonHirearchy]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TaxonHirearchy];
GO
IF OBJECT_ID(N'[dbo].[HolonymMeronym]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HolonymMeronym];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'HorselessContents'
CREATE TABLE [dbo].[HorselessContents] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [FilesystemAssetId] uniqueidentifier  NULL,
    [JSONAssetId] uniqueidentifier  NULL,
    [MIMETypeId] uniqueidentifier  NULL,
    [IsPublished] bit  NULL,
    [PublishedURL] nvarchar(max)  NULL,
    [PreviewURL] nvarchar(max)  NULL
);
GO

-- Creating table 'Tenants'
CREATE TABLE [dbo].[Tenants] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL
);
GO

-- Creating table 'MIMETypes'
CREATE TABLE [dbo].[MIMETypes] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [MIMETypeName] nvarchar(max)  NULL
);
GO

-- Creating table 'FilesystemAssets'
CREATE TABLE [dbo].[FilesystemAssets] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [Filename] nvarchar(max)  NULL,
    [PublishedURL] nvarchar(max)  NULL,
    [PreviewURL] nvarchar(max)  NULL
);
GO

-- Creating table 'JSONAssets'
CREATE TABLE [dbo].[JSONAssets] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [JsonValue] nvarchar(max)  NULL,
    [JsonSchema] nvarchar(max)  NULL
);
GO

-- Creating table 'ContentCollections'
CREATE TABLE [dbo].[ContentCollections] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [AllowAnonymousRead] bit  NULL,
    [IsPublished] bit  NULL,
    [PublishedURL] nvarchar(max)  NULL,
    [PreviewURL] nvarchar(max)  NULL
);
GO

-- Creating table 'Publications'
CREATE TABLE [dbo].[Publications] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [PublishAt] datetime  NULL,
    [UnPublishAt] datetime  NULL,
    [IsPublished] bit  NULL,
    [PublishedURL] nvarchar(max)  NULL,
    [PreviewURL] nvarchar(max)  NULL
);
GO

-- Creating table 'Placeholders'
CREATE TABLE [dbo].[Placeholders] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [IsPublished] bit  NULL,
    [Description] nvarchar(max)  NULL
);
GO

-- Creating table 'Taxons'
CREATE TABLE [dbo].[Taxons] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [JsonValue] nvarchar(max)  NULL,
    [JsonSchema] nvarchar(max)  NULL
);
GO

-- Creating table 'Holonyms'
CREATE TABLE [dbo].[Holonyms] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [JsonValue] nvarchar(max)  NULL,
    [JsonSchema] nvarchar(max)  NULL
);
GO

-- Creating table 'Meronyms'
CREATE TABLE [dbo].[Meronyms] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [JsonValue] nvarchar(max)  NULL,
    [JsonSchema] nvarchar(max)  NULL
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

-- Creating table 'NugetPackages'
CREATE TABLE [dbo].[NugetPackages] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [PublishAt] datetime  NULL,
    [UnPublishAt] datetime  NULL,
    [IsPublished] bit  NULL,
    [PackageId] nvarchar(max)  NULL,
    [PackageVersion] nvarchar(max)  NULL,
    [PackageAuthor] nvarchar(max)  NULL,
    [PackageSource] nvarchar(max)  NULL
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

-- Creating table 'NavigationMenus'
CREATE TABLE [dbo].[NavigationMenus] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [PublishAt] datetime  NULL,
    [UnPublishAt] datetime  NULL,
    [IsPublished] bit  NULL,
    [MenuLabel] nvarchar(max)  NULL,
    [MenuDescription] nvarchar(max)  NULL,
    [MenuAltText] nvarchar(max)  NULL
);
GO

-- Creating table 'NavigationMenuItems'
CREATE TABLE [dbo].[NavigationMenuItems] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [PublishAt] datetime  NULL,
    [UnPublishAt] datetime  NULL,
    [IsPublished] bit  NULL,
    [MenuItemLabel] nvarchar(max)  NULL,
    [MenuItemDescription] nvarchar(max)  NULL,
    [MenuItemAltText] nvarchar(max)  NULL
);
GO

-- Creating table 'Taxonomies'
CREATE TABLE [dbo].[Taxonomies] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [JsonValue] nvarchar(max)  NULL,
    [JsonSchema] nvarchar(max)  NULL
);
GO

-- Creating table 'HorselessViews'
CREATE TABLE [dbo].[HorselessViews] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [IsActive] bit  NULL
);
GO

-- Creating table 'NavigationMenuHierarchy'
CREATE TABLE [dbo].[NavigationMenuHierarchy] (
    [Children_Id] uniqueidentifier  NOT NULL,
    [Parents_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'NavigationMenuItemHierarchy'
CREATE TABLE [dbo].[NavigationMenuItemHierarchy] (
    [ChildNavigationItems_Id] uniqueidentifier  NOT NULL,
    [ParentNavigationItems_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'NavigationMenuItemNavigationMenu'
CREATE TABLE [dbo].[NavigationMenuItemNavigationMenu] (
    [ChildNavigationMenuItems_Id] uniqueidentifier  NOT NULL,
    [ParentNavigationMenus_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'PublicationHierarchy'
CREATE TABLE [dbo].[PublicationHierarchy] (
    [PublicationChildren_Id] uniqueidentifier  NOT NULL,
    [PublicationParents_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TaxonHirearchy'
CREATE TABLE [dbo].[TaxonHirearchy] (
    [AntecedentTaxons_Id] uniqueidentifier  NOT NULL,
    [DerivativeTaxons_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'HolonymMeronym'
CREATE TABLE [dbo].[HolonymMeronym] (
    [Holonyms_Id] uniqueidentifier  NOT NULL,
    [Meronyms_Id] uniqueidentifier  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'HorselessContents'
ALTER TABLE [dbo].[HorselessContents]
ADD CONSTRAINT [PK_HorselessContents]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Tenants'
ALTER TABLE [dbo].[Tenants]
ADD CONSTRAINT [PK_Tenants]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'MIMETypes'
ALTER TABLE [dbo].[MIMETypes]
ADD CONSTRAINT [PK_MIMETypes]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'FilesystemAssets'
ALTER TABLE [dbo].[FilesystemAssets]
ADD CONSTRAINT [PK_FilesystemAssets]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'JSONAssets'
ALTER TABLE [dbo].[JSONAssets]
ADD CONSTRAINT [PK_JSONAssets]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ContentCollections'
ALTER TABLE [dbo].[ContentCollections]
ADD CONSTRAINT [PK_ContentCollections]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Publications'
ALTER TABLE [dbo].[Publications]
ADD CONSTRAINT [PK_Publications]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Placeholders'
ALTER TABLE [dbo].[Placeholders]
ADD CONSTRAINT [PK_Placeholders]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Taxons'
ALTER TABLE [dbo].[Taxons]
ADD CONSTRAINT [PK_Taxons]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Holonyms'
ALTER TABLE [dbo].[Holonyms]
ADD CONSTRAINT [PK_Holonyms]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Meronyms'
ALTER TABLE [dbo].[Meronyms]
ADD CONSTRAINT [PK_Meronyms]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Principals'
ALTER TABLE [dbo].[Principals]
ADD CONSTRAINT [PK_Principals]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'NugetPackages'
ALTER TABLE [dbo].[NugetPackages]
ADD CONSTRAINT [PK_NugetPackages]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'AccessControlEntries'
ALTER TABLE [dbo].[AccessControlEntries]
ADD CONSTRAINT [PK_AccessControlEntries]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'HorselessSessions'
ALTER TABLE [dbo].[HorselessSessions]
ADD CONSTRAINT [PK_HorselessSessions]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'NavigationMenus'
ALTER TABLE [dbo].[NavigationMenus]
ADD CONSTRAINT [PK_NavigationMenus]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'NavigationMenuItems'
ALTER TABLE [dbo].[NavigationMenuItems]
ADD CONSTRAINT [PK_NavigationMenuItems]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Taxonomies'
ALTER TABLE [dbo].[Taxonomies]
ADD CONSTRAINT [PK_Taxonomies]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'HorselessViews'
ALTER TABLE [dbo].[HorselessViews]
ADD CONSTRAINT [PK_HorselessViews]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Children_Id], [Parents_Id] in table 'NavigationMenuHierarchy'
ALTER TABLE [dbo].[NavigationMenuHierarchy]
ADD CONSTRAINT [PK_NavigationMenuHierarchy]
    PRIMARY KEY CLUSTERED ([Children_Id], [Parents_Id] ASC);
GO

-- Creating primary key on [ChildNavigationItems_Id], [ParentNavigationItems_Id] in table 'NavigationMenuItemHierarchy'
ALTER TABLE [dbo].[NavigationMenuItemHierarchy]
ADD CONSTRAINT [PK_NavigationMenuItemHierarchy]
    PRIMARY KEY CLUSTERED ([ChildNavigationItems_Id], [ParentNavigationItems_Id] ASC);
GO

-- Creating primary key on [ChildNavigationMenuItems_Id], [ParentNavigationMenus_Id] in table 'NavigationMenuItemNavigationMenu'
ALTER TABLE [dbo].[NavigationMenuItemNavigationMenu]
ADD CONSTRAINT [PK_NavigationMenuItemNavigationMenu]
    PRIMARY KEY CLUSTERED ([ChildNavigationMenuItems_Id], [ParentNavigationMenus_Id] ASC);
GO

-- Creating primary key on [PublicationChildren_Id], [PublicationParents_Id] in table 'PublicationHierarchy'
ALTER TABLE [dbo].[PublicationHierarchy]
ADD CONSTRAINT [PK_PublicationHierarchy]
    PRIMARY KEY CLUSTERED ([PublicationChildren_Id], [PublicationParents_Id] ASC);
GO

-- Creating primary key on [AntecedentTaxons_Id], [DerivativeTaxons_Id] in table 'TaxonHirearchy'
ALTER TABLE [dbo].[TaxonHirearchy]
ADD CONSTRAINT [PK_TaxonHirearchy]
    PRIMARY KEY CLUSTERED ([AntecedentTaxons_Id], [DerivativeTaxons_Id] ASC);
GO

-- Creating primary key on [Holonyms_Id], [Meronyms_Id] in table 'HolonymMeronym'
ALTER TABLE [dbo].[HolonymMeronym]
ADD CONSTRAINT [PK_HolonymMeronym]
    PRIMARY KEY CLUSTERED ([Holonyms_Id], [Meronyms_Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [FilesystemAssetId] in table 'HorselessContents'
ALTER TABLE [dbo].[HorselessContents]
ADD CONSTRAINT [FK_FilesystemAssetMimeContent]
    FOREIGN KEY ([FilesystemAssetId])
    REFERENCES [dbo].[FilesystemAssets]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_FilesystemAssetMimeContent'
CREATE INDEX [IX_FK_FilesystemAssetMimeContent]
ON [dbo].[HorselessContents]
    ([FilesystemAssetId]);
GO

-- Creating foreign key on [JSONAssetId] in table 'HorselessContents'
ALTER TABLE [dbo].[HorselessContents]
ADD CONSTRAINT [FK_MimeContentJSONAsset]
    FOREIGN KEY ([JSONAssetId])
    REFERENCES [dbo].[JSONAssets]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_MimeContentJSONAsset'
CREATE INDEX [IX_FK_MimeContentJSONAsset]
ON [dbo].[HorselessContents]
    ([JSONAssetId]);
GO

-- Creating foreign key on [MIMETypeId] in table 'HorselessContents'
ALTER TABLE [dbo].[HorselessContents]
ADD CONSTRAINT [FK_MimeContentMIMEType]
    FOREIGN KEY ([MIMETypeId])
    REFERENCES [dbo].[MIMETypes]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_MimeContentMIMEType'
CREATE INDEX [IX_FK_MimeContentMIMEType]
ON [dbo].[HorselessContents]
    ([MIMETypeId]);
GO

-- Creating foreign key on [Children_Id] in table 'NavigationMenuHierarchy'
ALTER TABLE [dbo].[NavigationMenuHierarchy]
ADD CONSTRAINT [FK_NavigationMenuHierarchy_NavigationMenu]
    FOREIGN KEY ([Children_Id])
    REFERENCES [dbo].[NavigationMenus]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Parents_Id] in table 'NavigationMenuHierarchy'
ALTER TABLE [dbo].[NavigationMenuHierarchy]
ADD CONSTRAINT [FK_NavigationMenuHierarchy_Children]
    FOREIGN KEY ([Parents_Id])
    REFERENCES [dbo].[NavigationMenus]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NavigationMenuHierarchy_Children'
CREATE INDEX [IX_FK_NavigationMenuHierarchy_Children]
ON [dbo].[NavigationMenuHierarchy]
    ([Parents_Id]);
GO

-- Creating foreign key on [ChildNavigationItems_Id] in table 'NavigationMenuItemHierarchy'
ALTER TABLE [dbo].[NavigationMenuItemHierarchy]
ADD CONSTRAINT [FK_NavigationMenuItemHierarchy_NavigationMenuItem]
    FOREIGN KEY ([ChildNavigationItems_Id])
    REFERENCES [dbo].[NavigationMenuItems]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [ParentNavigationItems_Id] in table 'NavigationMenuItemHierarchy'
ALTER TABLE [dbo].[NavigationMenuItemHierarchy]
ADD CONSTRAINT [FK_NavigationMenuItemHierarchy_ChildNavigationItems]
    FOREIGN KEY ([ParentNavigationItems_Id])
    REFERENCES [dbo].[NavigationMenuItems]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NavigationMenuItemHierarchy_ChildNavigationItems'
CREATE INDEX [IX_FK_NavigationMenuItemHierarchy_ChildNavigationItems]
ON [dbo].[NavigationMenuItemHierarchy]
    ([ParentNavigationItems_Id]);
GO

-- Creating foreign key on [ChildNavigationMenuItems_Id] in table 'NavigationMenuItemNavigationMenu'
ALTER TABLE [dbo].[NavigationMenuItemNavigationMenu]
ADD CONSTRAINT [FK_NavigationMenuItemNavigationMenu_NavigationMenuItem]
    FOREIGN KEY ([ChildNavigationMenuItems_Id])
    REFERENCES [dbo].[NavigationMenuItems]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [ParentNavigationMenus_Id] in table 'NavigationMenuItemNavigationMenu'
ALTER TABLE [dbo].[NavigationMenuItemNavigationMenu]
ADD CONSTRAINT [FK_NavigationMenuItemNavigationMenu_NavigationMenu]
    FOREIGN KEY ([ParentNavigationMenus_Id])
    REFERENCES [dbo].[NavigationMenus]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NavigationMenuItemNavigationMenu_NavigationMenu'
CREATE INDEX [IX_FK_NavigationMenuItemNavigationMenu_NavigationMenu]
ON [dbo].[NavigationMenuItemNavigationMenu]
    ([ParentNavigationMenus_Id]);
GO

-- Creating foreign key on [PublicationChildren_Id] in table 'PublicationHierarchy'
ALTER TABLE [dbo].[PublicationHierarchy]
ADD CONSTRAINT [FK_PublicationHierarchy_Publication]
    FOREIGN KEY ([PublicationChildren_Id])
    REFERENCES [dbo].[Publications]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [PublicationParents_Id] in table 'PublicationHierarchy'
ALTER TABLE [dbo].[PublicationHierarchy]
ADD CONSTRAINT [FK_PublicationHierarchy_PublicationChildren]
    FOREIGN KEY ([PublicationParents_Id])
    REFERENCES [dbo].[Publications]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PublicationHierarchy_PublicationChildren'
CREATE INDEX [IX_FK_PublicationHierarchy_PublicationChildren]
ON [dbo].[PublicationHierarchy]
    ([PublicationParents_Id]);
GO

-- Creating foreign key on [AntecedentTaxons_Id] in table 'TaxonHirearchy'
ALTER TABLE [dbo].[TaxonHirearchy]
ADD CONSTRAINT [FK_TaxonTaxon_Taxon]
    FOREIGN KEY ([AntecedentTaxons_Id])
    REFERENCES [dbo].[Taxons]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [DerivativeTaxons_Id] in table 'TaxonHirearchy'
ALTER TABLE [dbo].[TaxonHirearchy]
ADD CONSTRAINT [FK_TaxonTaxon_Taxon1]
    FOREIGN KEY ([DerivativeTaxons_Id])
    REFERENCES [dbo].[Taxons]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TaxonTaxon_Taxon1'
CREATE INDEX [IX_FK_TaxonTaxon_Taxon1]
ON [dbo].[TaxonHirearchy]
    ([DerivativeTaxons_Id]);
GO

-- Creating foreign key on [Holonyms_Id] in table 'HolonymMeronym'
ALTER TABLE [dbo].[HolonymMeronym]
ADD CONSTRAINT [FK_HolonymMeronym_Holonym]
    FOREIGN KEY ([Holonyms_Id])
    REFERENCES [dbo].[Holonyms]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Meronyms_Id] in table 'HolonymMeronym'
ALTER TABLE [dbo].[HolonymMeronym]
ADD CONSTRAINT [FK_HolonymMeronym_Meronym]
    FOREIGN KEY ([Meronyms_Id])
    REFERENCES [dbo].[Meronyms]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_HolonymMeronym_Meronym'
CREATE INDEX [IX_FK_HolonymMeronym_Meronym]
ON [dbo].[HolonymMeronym]
    ([Meronyms_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------