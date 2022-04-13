
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/13/2022 16:03:41
-- Generated from EDMX file: C:\src\the-horseless-newspaper\src\entities\Model.Core.Taxa\Schema\Diagrams\Content\HorselessContentModel.edmx
-- --------------------------------------------------


GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_TenantContentCollection_Tenant]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantContentCollection] DROP CONSTRAINT [FK_TenantContentCollection_Tenant];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantContentCollection_ContentCollection]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantContentCollection] DROP CONSTRAINT [FK_TenantContentCollection_ContentCollection];
GO
IF OBJECT_ID(N'[dbo].[FK_ContentCollectionMimeContent_ContentCollection]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ContentCollectionMimeContent] DROP CONSTRAINT [FK_ContentCollectionMimeContent_ContentCollection];
GO
IF OBJECT_ID(N'[dbo].[FK_ContentCollectionMimeContent_MimeContent]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ContentCollectionMimeContent] DROP CONSTRAINT [FK_ContentCollectionMimeContent_MimeContent];
GO
IF OBJECT_ID(N'[dbo].[FK_FilesystemAssetMimeContent]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HorselessContents] DROP CONSTRAINT [FK_FilesystemAssetMimeContent];
GO
IF OBJECT_ID(N'[dbo].[FK_MimeContentJSONAsset]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HorselessContents] DROP CONSTRAINT [FK_MimeContentJSONAsset];
GO
IF OBJECT_ID(N'[dbo].[FK_MimeContentMIMEType]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HorselessContents] DROP CONSTRAINT [FK_MimeContentMIMEType];
GO
IF OBJECT_ID(N'[dbo].[FK_NavigationMenuNavigationMenu_NavigationMenu]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NavigationMenuNavigationMenu] DROP CONSTRAINT [FK_NavigationMenuNavigationMenu_NavigationMenu];
GO
IF OBJECT_ID(N'[dbo].[FK_NavigationMenuNavigationMenu_NavigationMenu1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NavigationMenuNavigationMenu] DROP CONSTRAINT [FK_NavigationMenuNavigationMenu_NavigationMenu1];
GO
IF OBJECT_ID(N'[dbo].[FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NavigationMenuItemNavigationMenuItem] DROP CONSTRAINT [FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem];
GO
IF OBJECT_ID(N'[dbo].[FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NavigationMenuItemNavigationMenuItem] DROP CONSTRAINT [FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem1];
GO
IF OBJECT_ID(N'[dbo].[FK_NavigationMenuItemNavigationMenu_NavigationMenuItem]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NavigationMenuItemNavigationMenu] DROP CONSTRAINT [FK_NavigationMenuItemNavigationMenu_NavigationMenuItem];
GO
IF OBJECT_ID(N'[dbo].[FK_NavigationMenuItemNavigationMenu_NavigationMenu]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NavigationMenuItemNavigationMenu] DROP CONSTRAINT [FK_NavigationMenuItemNavigationMenu_NavigationMenu];
GO
IF OBJECT_ID(N'[dbo].[FK_ContentCollectionContentCollection_ContentCollection]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ContentCollectionContentCollection] DROP CONSTRAINT [FK_ContentCollectionContentCollection_ContentCollection];
GO
IF OBJECT_ID(N'[dbo].[FK_ContentCollectionContentCollection_ContentCollection1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ContentCollectionContentCollection] DROP CONSTRAINT [FK_ContentCollectionContentCollection_ContentCollection1];
GO
IF OBJECT_ID(N'[dbo].[FK_PublicationPublication_Publication]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PublicationPublication] DROP CONSTRAINT [FK_PublicationPublication_Publication];
GO
IF OBJECT_ID(N'[dbo].[FK_PublicationPublication_Publication1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PublicationPublication] DROP CONSTRAINT [FK_PublicationPublication_Publication1];
GO
IF OBJECT_ID(N'[dbo].[FK_PublicationContentCollection_Publication]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PublicationContentCollection] DROP CONSTRAINT [FK_PublicationContentCollection_Publication];
GO
IF OBJECT_ID(N'[dbo].[FK_PublicationContentCollection_ContentCollection]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PublicationContentCollection] DROP CONSTRAINT [FK_PublicationContentCollection_ContentCollection];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonTaxonomy_Taxon]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonTaxonomy] DROP CONSTRAINT [FK_TaxonTaxonomy_Taxon];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonTaxonomy_Taxonomy]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonTaxonomy] DROP CONSTRAINT [FK_TaxonTaxonomy_Taxonomy];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonTaxon_Taxon]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonTaxon] DROP CONSTRAINT [FK_TaxonTaxon_Taxon];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonTaxon_Taxon1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonTaxon] DROP CONSTRAINT [FK_TaxonTaxon_Taxon1];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonHolonym_Taxon]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonHolonym] DROP CONSTRAINT [FK_TaxonHolonym_Taxon];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonHolonym_Holonym]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonHolonym] DROP CONSTRAINT [FK_TaxonHolonym_Holonym];
GO
IF OBJECT_ID(N'[dbo].[FK_HolonymMeronym_Holonym]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HolonymMeronym] DROP CONSTRAINT [FK_HolonymMeronym_Holonym];
GO
IF OBJECT_ID(N'[dbo].[FK_HolonymMeronym_Meronym]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HolonymMeronym] DROP CONSTRAINT [FK_HolonymMeronym_Meronym];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonomyContentCollection_Taxonomy]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonomyContentCollection] DROP CONSTRAINT [FK_TaxonomyContentCollection_Taxonomy];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonomyContentCollection_ContentCollection]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonomyContentCollection] DROP CONSTRAINT [FK_TaxonomyContentCollection_ContentCollection];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantOwners_Tenant]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantOwners] DROP CONSTRAINT [FK_TenantOwners_Tenant];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantOwners_Principal]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantOwners] DROP CONSTRAINT [FK_TenantOwners_Principal];
GO
IF OBJECT_ID(N'[dbo].[FK_PrincipalAccessControlEntry_Principal]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PrincipalAccessControlEntry] DROP CONSTRAINT [FK_PrincipalAccessControlEntry_Principal];
GO
IF OBJECT_ID(N'[dbo].[FK_PrincipalAccessControlEntry_AccessControlEntry]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PrincipalAccessControlEntry] DROP CONSTRAINT [FK_PrincipalAccessControlEntry_AccessControlEntry];
GO
IF OBJECT_ID(N'[dbo].[FK_AccessControlEntryAccessControlEntry_AccessControlEntry]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[AccessControlEntryAccessControlEntry] DROP CONSTRAINT [FK_AccessControlEntryAccessControlEntry_AccessControlEntry];
GO
IF OBJECT_ID(N'[dbo].[FK_AccessControlEntryAccessControlEntry_SubjectAccessControlEntry]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[AccessControlEntryAccessControlEntry] DROP CONSTRAINT [FK_AccessControlEntryAccessControlEntry_SubjectAccessControlEntry];
GO
IF OBJECT_ID(N'[dbo].[FK_PrincipalPrincipal_Principal]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PrincipalPrincipal] DROP CONSTRAINT [FK_PrincipalPrincipal_Principal];
GO
IF OBJECT_ID(N'[dbo].[FK_PrincipalPrincipal_Principal1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PrincipalPrincipal] DROP CONSTRAINT [FK_PrincipalPrincipal_Principal1];
GO
IF OBJECT_ID(N'[dbo].[FK_AccessControlEntryOwners_AccessControlEntry]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[AccessControlEntryOwners] DROP CONSTRAINT [FK_AccessControlEntryOwners_AccessControlEntry];
GO
IF OBJECT_ID(N'[dbo].[FK_AccessControlEntryOwners_Owner]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[AccessControlEntryOwners] DROP CONSTRAINT [FK_AccessControlEntryOwners_Owner];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantAccounts_Tenant]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantAccounts] DROP CONSTRAINT [FK_TenantAccounts_Tenant];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantAccounts_Principal]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantAccounts] DROP CONSTRAINT [FK_TenantAccounts_Principal];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantAccessControlEntry_SubjectTenant]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantAccessControlEntry] DROP CONSTRAINT [FK_TenantAccessControlEntry_SubjectTenant];
GO
IF OBJECT_ID(N'[dbo].[FK_TenantAccessControlEntry_AccessControlEntry]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TenantAccessControlEntry] DROP CONSTRAINT [FK_TenantAccessControlEntry_AccessControlEntry];
GO
IF OBJECT_ID(N'[dbo].[FK_PrincipalHorselessSession]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HorselessSessions] DROP CONSTRAINT [FK_PrincipalHorselessSession];
GO
IF OBJECT_ID(N'[dbo].[FK_HorselessSessionAccessControlEntry_SubjectHorselessSession]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HorselessSessionAccessControlEntry] DROP CONSTRAINT [FK_HorselessSessionAccessControlEntry_SubjectHorselessSession];
GO
IF OBJECT_ID(N'[dbo].[FK_HorselessSessionAccessControlEntry_AccessControlledHorselessSession]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HorselessSessionAccessControlEntry] DROP CONSTRAINT [FK_HorselessSessionAccessControlEntry_AccessControlledHorselessSession];
GO
IF OBJECT_ID(N'[dbo].[FK_HorselessSessionPrincipal]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HorselessSessions] DROP CONSTRAINT [FK_HorselessSessionPrincipal];
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
IF OBJECT_ID(N'[dbo].[TenantContentCollection]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TenantContentCollection];
GO
IF OBJECT_ID(N'[dbo].[ContentCollectionMimeContent]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ContentCollectionMimeContent];
GO
IF OBJECT_ID(N'[dbo].[NavigationMenuNavigationMenu]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NavigationMenuNavigationMenu];
GO
IF OBJECT_ID(N'[dbo].[NavigationMenuItemNavigationMenuItem]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NavigationMenuItemNavigationMenuItem];
GO
IF OBJECT_ID(N'[dbo].[NavigationMenuItemNavigationMenu]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NavigationMenuItemNavigationMenu];
GO
IF OBJECT_ID(N'[dbo].[ContentCollectionContentCollection]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ContentCollectionContentCollection];
GO
IF OBJECT_ID(N'[dbo].[PublicationPublication]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PublicationPublication];
GO
IF OBJECT_ID(N'[dbo].[PublicationContentCollection]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PublicationContentCollection];
GO
IF OBJECT_ID(N'[dbo].[TaxonTaxonomy]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TaxonTaxonomy];
GO
IF OBJECT_ID(N'[dbo].[TaxonTaxon]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TaxonTaxon];
GO
IF OBJECT_ID(N'[dbo].[TaxonHolonym]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TaxonHolonym];
GO
IF OBJECT_ID(N'[dbo].[HolonymMeronym]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HolonymMeronym];
GO
IF OBJECT_ID(N'[dbo].[TaxonomyContentCollection]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TaxonomyContentCollection];
GO
IF OBJECT_ID(N'[dbo].[TenantOwners]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TenantOwners];
GO
IF OBJECT_ID(N'[dbo].[PrincipalAccessControlEntry]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PrincipalAccessControlEntry];
GO
IF OBJECT_ID(N'[dbo].[AccessControlEntryAccessControlEntry]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AccessControlEntryAccessControlEntry];
GO
IF OBJECT_ID(N'[dbo].[PrincipalPrincipal]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PrincipalPrincipal];
GO
IF OBJECT_ID(N'[dbo].[AccessControlEntryOwners]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AccessControlEntryOwners];
GO
IF OBJECT_ID(N'[dbo].[TenantAccounts]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TenantAccounts];
GO
IF OBJECT_ID(N'[dbo].[TenantAccessControlEntry]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TenantAccessControlEntry];
GO
IF OBJECT_ID(N'[dbo].[HorselessSessionAccessControlEntry]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HorselessSessionAccessControlEntry];
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
    [IsAnonymous] bit  NULL,
    [HorselessSessionPrincipalId] uniqueidentifier  NULL
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

-- Creating table 'TenantContentCollection'
CREATE TABLE [dbo].[TenantContentCollection] (
    [Tenants_Id] uniqueidentifier  NOT NULL,
    [ContentCollections_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'ContentCollectionMimeContent'
CREATE TABLE [dbo].[ContentCollectionMimeContent] (
    [ContentCollections_Id] uniqueidentifier  NOT NULL,
    [MimeContents_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'NavigationMenuNavigationMenu'
CREATE TABLE [dbo].[NavigationMenuNavigationMenu] (
    [Children_Id] uniqueidentifier  NOT NULL,
    [Parents_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'NavigationMenuItemNavigationMenuItem'
CREATE TABLE [dbo].[NavigationMenuItemNavigationMenuItem] (
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

-- Creating table 'ContentCollectionContentCollection'
CREATE TABLE [dbo].[ContentCollectionContentCollection] (
    [ChildContentCollections_Id] uniqueidentifier  NOT NULL,
    [ParentContentCollections_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'PublicationPublication'
CREATE TABLE [dbo].[PublicationPublication] (
    [PublicationsChildren_Id] uniqueidentifier  NOT NULL,
    [PublicationParents_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'PublicationContentCollection'
CREATE TABLE [dbo].[PublicationContentCollection] (
    [Publications_Id] uniqueidentifier  NOT NULL,
    [ContentCollections_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TaxonTaxonomy'
CREATE TABLE [dbo].[TaxonTaxonomy] (
    [Taxons_Id] uniqueidentifier  NOT NULL,
    [Taxonomies_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TaxonTaxon'
CREATE TABLE [dbo].[TaxonTaxon] (
    [AntecedentTaxons_Id] uniqueidentifier  NOT NULL,
    [DerivativeTaxons_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TaxonHolonym'
CREATE TABLE [dbo].[TaxonHolonym] (
    [Taxons_Id] uniqueidentifier  NOT NULL,
    [Holonyms_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'HolonymMeronym'
CREATE TABLE [dbo].[HolonymMeronym] (
    [Holonyms_Id] uniqueidentifier  NOT NULL,
    [Meronyms_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TaxonomyContentCollection'
CREATE TABLE [dbo].[TaxonomyContentCollection] (
    [Taxonomies_Id] uniqueidentifier  NOT NULL,
    [ContentCollections_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TenantOwners'
CREATE TABLE [dbo].[TenantOwners] (
    [OwnedTenants_Id] uniqueidentifier  NOT NULL,
    [Owners_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'PrincipalAccessControlEntry'
CREATE TABLE [dbo].[PrincipalAccessControlEntry] (
    [SubjectPrincipals_Id] uniqueidentifier  NOT NULL,
    [AccessControlEntries_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'AccessControlEntryAccessControlEntry'
CREATE TABLE [dbo].[AccessControlEntryAccessControlEntry] (
    [SubjectAccessControlEntries_Id] uniqueidentifier  NOT NULL,
    [AccessControlEntries_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'PrincipalPrincipal'
CREATE TABLE [dbo].[PrincipalPrincipal] (
    [OwnedPrincipals_Id] uniqueidentifier  NOT NULL,
    [Owners_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'AccessControlEntryOwners'
CREATE TABLE [dbo].[AccessControlEntryOwners] (
    [OwnedAccessControlEntries_Id] uniqueidentifier  NOT NULL,
    [Owners_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TenantAccounts'
CREATE TABLE [dbo].[TenantAccounts] (
    [TenantAccounts_Id] uniqueidentifier  NOT NULL,
    [Accounts_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TenantAccessControlEntry'
CREATE TABLE [dbo].[TenantAccessControlEntry] (
    [SubjectTenants_Id] uniqueidentifier  NOT NULL,
    [AccessControlEntries_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'HorselessSessionAccessControlEntry'
CREATE TABLE [dbo].[HorselessSessionAccessControlEntry] (
    [SubjectHorselessSessions_Id] uniqueidentifier  NOT NULL,
    [AccessControlEntries_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'HorselessSessionPrincipal'
CREATE TABLE [dbo].[HorselessSessionPrincipal] (
    [OwnedHorselessSessions_Id] uniqueidentifier  NOT NULL,
    [Owners_Id] uniqueidentifier  NOT NULL
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

-- Creating primary key on [Tenants_Id], [ContentCollections_Id] in table 'TenantContentCollection'
ALTER TABLE [dbo].[TenantContentCollection]
ADD CONSTRAINT [PK_TenantContentCollection]
    PRIMARY KEY CLUSTERED ([Tenants_Id], [ContentCollections_Id] ASC);
GO

-- Creating primary key on [ContentCollections_Id], [MimeContents_Id] in table 'ContentCollectionMimeContent'
ALTER TABLE [dbo].[ContentCollectionMimeContent]
ADD CONSTRAINT [PK_ContentCollectionMimeContent]
    PRIMARY KEY CLUSTERED ([ContentCollections_Id], [MimeContents_Id] ASC);
GO

-- Creating primary key on [Children_Id], [Parents_Id] in table 'NavigationMenuNavigationMenu'
ALTER TABLE [dbo].[NavigationMenuNavigationMenu]
ADD CONSTRAINT [PK_NavigationMenuNavigationMenu]
    PRIMARY KEY CLUSTERED ([Children_Id], [Parents_Id] ASC);
GO

-- Creating primary key on [ChildNavigationItems_Id], [ParentNavigationItems_Id] in table 'NavigationMenuItemNavigationMenuItem'
ALTER TABLE [dbo].[NavigationMenuItemNavigationMenuItem]
ADD CONSTRAINT [PK_NavigationMenuItemNavigationMenuItem]
    PRIMARY KEY CLUSTERED ([ChildNavigationItems_Id], [ParentNavigationItems_Id] ASC);
GO

-- Creating primary key on [ChildNavigationMenuItems_Id], [ParentNavigationMenus_Id] in table 'NavigationMenuItemNavigationMenu'
ALTER TABLE [dbo].[NavigationMenuItemNavigationMenu]
ADD CONSTRAINT [PK_NavigationMenuItemNavigationMenu]
    PRIMARY KEY CLUSTERED ([ChildNavigationMenuItems_Id], [ParentNavigationMenus_Id] ASC);
GO

-- Creating primary key on [ChildContentCollections_Id], [ParentContentCollections_Id] in table 'ContentCollectionContentCollection'
ALTER TABLE [dbo].[ContentCollectionContentCollection]
ADD CONSTRAINT [PK_ContentCollectionContentCollection]
    PRIMARY KEY CLUSTERED ([ChildContentCollections_Id], [ParentContentCollections_Id] ASC);
GO

-- Creating primary key on [PublicationsChildren_Id], [PublicationParents_Id] in table 'PublicationPublication'
ALTER TABLE [dbo].[PublicationPublication]
ADD CONSTRAINT [PK_PublicationPublication]
    PRIMARY KEY CLUSTERED ([PublicationsChildren_Id], [PublicationParents_Id] ASC);
GO

-- Creating primary key on [Publications_Id], [ContentCollections_Id] in table 'PublicationContentCollection'
ALTER TABLE [dbo].[PublicationContentCollection]
ADD CONSTRAINT [PK_PublicationContentCollection]
    PRIMARY KEY CLUSTERED ([Publications_Id], [ContentCollections_Id] ASC);
GO

-- Creating primary key on [Taxons_Id], [Taxonomies_Id] in table 'TaxonTaxonomy'
ALTER TABLE [dbo].[TaxonTaxonomy]
ADD CONSTRAINT [PK_TaxonTaxonomy]
    PRIMARY KEY CLUSTERED ([Taxons_Id], [Taxonomies_Id] ASC);
GO

-- Creating primary key on [AntecedentTaxons_Id], [DerivativeTaxons_Id] in table 'TaxonTaxon'
ALTER TABLE [dbo].[TaxonTaxon]
ADD CONSTRAINT [PK_TaxonTaxon]
    PRIMARY KEY CLUSTERED ([AntecedentTaxons_Id], [DerivativeTaxons_Id] ASC);
GO

-- Creating primary key on [Taxons_Id], [Holonyms_Id] in table 'TaxonHolonym'
ALTER TABLE [dbo].[TaxonHolonym]
ADD CONSTRAINT [PK_TaxonHolonym]
    PRIMARY KEY CLUSTERED ([Taxons_Id], [Holonyms_Id] ASC);
GO

-- Creating primary key on [Holonyms_Id], [Meronyms_Id] in table 'HolonymMeronym'
ALTER TABLE [dbo].[HolonymMeronym]
ADD CONSTRAINT [PK_HolonymMeronym]
    PRIMARY KEY CLUSTERED ([Holonyms_Id], [Meronyms_Id] ASC);
GO

-- Creating primary key on [Taxonomies_Id], [ContentCollections_Id] in table 'TaxonomyContentCollection'
ALTER TABLE [dbo].[TaxonomyContentCollection]
ADD CONSTRAINT [PK_TaxonomyContentCollection]
    PRIMARY KEY CLUSTERED ([Taxonomies_Id], [ContentCollections_Id] ASC);
GO

-- Creating primary key on [OwnedTenants_Id], [Owners_Id] in table 'TenantOwners'
ALTER TABLE [dbo].[TenantOwners]
ADD CONSTRAINT [PK_TenantOwners]
    PRIMARY KEY CLUSTERED ([OwnedTenants_Id], [Owners_Id] ASC);
GO

-- Creating primary key on [SubjectPrincipals_Id], [AccessControlEntries_Id] in table 'PrincipalAccessControlEntry'
ALTER TABLE [dbo].[PrincipalAccessControlEntry]
ADD CONSTRAINT [PK_PrincipalAccessControlEntry]
    PRIMARY KEY CLUSTERED ([SubjectPrincipals_Id], [AccessControlEntries_Id] ASC);
GO

-- Creating primary key on [SubjectAccessControlEntries_Id], [AccessControlEntries_Id] in table 'AccessControlEntryAccessControlEntry'
ALTER TABLE [dbo].[AccessControlEntryAccessControlEntry]
ADD CONSTRAINT [PK_AccessControlEntryAccessControlEntry]
    PRIMARY KEY CLUSTERED ([SubjectAccessControlEntries_Id], [AccessControlEntries_Id] ASC);
GO

-- Creating primary key on [OwnedPrincipals_Id], [Owners_Id] in table 'PrincipalPrincipal'
ALTER TABLE [dbo].[PrincipalPrincipal]
ADD CONSTRAINT [PK_PrincipalPrincipal]
    PRIMARY KEY CLUSTERED ([OwnedPrincipals_Id], [Owners_Id] ASC);
GO

-- Creating primary key on [OwnedAccessControlEntries_Id], [Owners_Id] in table 'AccessControlEntryOwners'
ALTER TABLE [dbo].[AccessControlEntryOwners]
ADD CONSTRAINT [PK_AccessControlEntryOwners]
    PRIMARY KEY CLUSTERED ([OwnedAccessControlEntries_Id], [Owners_Id] ASC);
GO

-- Creating primary key on [TenantAccounts_Id], [Accounts_Id] in table 'TenantAccounts'
ALTER TABLE [dbo].[TenantAccounts]
ADD CONSTRAINT [PK_TenantAccounts]
    PRIMARY KEY CLUSTERED ([TenantAccounts_Id], [Accounts_Id] ASC);
GO

-- Creating primary key on [SubjectTenants_Id], [AccessControlEntries_Id] in table 'TenantAccessControlEntry'
ALTER TABLE [dbo].[TenantAccessControlEntry]
ADD CONSTRAINT [PK_TenantAccessControlEntry]
    PRIMARY KEY CLUSTERED ([SubjectTenants_Id], [AccessControlEntries_Id] ASC);
GO

-- Creating primary key on [SubjectHorselessSessions_Id], [AccessControlEntries_Id] in table 'HorselessSessionAccessControlEntry'
ALTER TABLE [dbo].[HorselessSessionAccessControlEntry]
ADD CONSTRAINT [PK_HorselessSessionAccessControlEntry]
    PRIMARY KEY CLUSTERED ([SubjectHorselessSessions_Id], [AccessControlEntries_Id] ASC);
GO

-- Creating primary key on [OwnedHorselessSessions_Id], [Owners_Id] in table 'HorselessSessionPrincipal'
ALTER TABLE [dbo].[HorselessSessionPrincipal]
ADD CONSTRAINT [PK_HorselessSessionPrincipal]
    PRIMARY KEY CLUSTERED ([OwnedHorselessSessions_Id], [Owners_Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [Tenants_Id] in table 'TenantContentCollection'
ALTER TABLE [dbo].[TenantContentCollection]
ADD CONSTRAINT [FK_TenantContentCollection_Tenant]
    FOREIGN KEY ([Tenants_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [ContentCollections_Id] in table 'TenantContentCollection'
ALTER TABLE [dbo].[TenantContentCollection]
ADD CONSTRAINT [FK_TenantContentCollection_ContentCollection]
    FOREIGN KEY ([ContentCollections_Id])
    REFERENCES [dbo].[ContentCollections]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantContentCollection_ContentCollection'
CREATE INDEX [IX_FK_TenantContentCollection_ContentCollection]
ON [dbo].[TenantContentCollection]
    ([ContentCollections_Id]);
GO

-- Creating foreign key on [ContentCollections_Id] in table 'ContentCollectionMimeContent'
ALTER TABLE [dbo].[ContentCollectionMimeContent]
ADD CONSTRAINT [FK_ContentCollectionMimeContent_ContentCollection]
    FOREIGN KEY ([ContentCollections_Id])
    REFERENCES [dbo].[ContentCollections]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [MimeContents_Id] in table 'ContentCollectionMimeContent'
ALTER TABLE [dbo].[ContentCollectionMimeContent]
ADD CONSTRAINT [FK_ContentCollectionMimeContent_MimeContent]
    FOREIGN KEY ([MimeContents_Id])
    REFERENCES [dbo].[HorselessContents]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ContentCollectionMimeContent_MimeContent'
CREATE INDEX [IX_FK_ContentCollectionMimeContent_MimeContent]
ON [dbo].[ContentCollectionMimeContent]
    ([MimeContents_Id]);
GO

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

-- Creating foreign key on [Children_Id] in table 'NavigationMenuNavigationMenu'
ALTER TABLE [dbo].[NavigationMenuNavigationMenu]
ADD CONSTRAINT [FK_NavigationMenuNavigationMenu_NavigationMenu]
    FOREIGN KEY ([Children_Id])
    REFERENCES [dbo].[NavigationMenus]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Parents_Id] in table 'NavigationMenuNavigationMenu'
ALTER TABLE [dbo].[NavigationMenuNavigationMenu]
ADD CONSTRAINT [FK_NavigationMenuNavigationMenu_NavigationMenu1]
    FOREIGN KEY ([Parents_Id])
    REFERENCES [dbo].[NavigationMenus]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NavigationMenuNavigationMenu_NavigationMenu1'
CREATE INDEX [IX_FK_NavigationMenuNavigationMenu_NavigationMenu1]
ON [dbo].[NavigationMenuNavigationMenu]
    ([Parents_Id]);
GO

-- Creating foreign key on [ChildNavigationItems_Id] in table 'NavigationMenuItemNavigationMenuItem'
ALTER TABLE [dbo].[NavigationMenuItemNavigationMenuItem]
ADD CONSTRAINT [FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem]
    FOREIGN KEY ([ChildNavigationItems_Id])
    REFERENCES [dbo].[NavigationMenuItems]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [ParentNavigationItems_Id] in table 'NavigationMenuItemNavigationMenuItem'
ALTER TABLE [dbo].[NavigationMenuItemNavigationMenuItem]
ADD CONSTRAINT [FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem1]
    FOREIGN KEY ([ParentNavigationItems_Id])
    REFERENCES [dbo].[NavigationMenuItems]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem1'
CREATE INDEX [IX_FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem1]
ON [dbo].[NavigationMenuItemNavigationMenuItem]
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

-- Creating foreign key on [ChildContentCollections_Id] in table 'ContentCollectionContentCollection'
ALTER TABLE [dbo].[ContentCollectionContentCollection]
ADD CONSTRAINT [FK_ContentCollectionContentCollection_ContentCollection]
    FOREIGN KEY ([ChildContentCollections_Id])
    REFERENCES [dbo].[ContentCollections]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [ParentContentCollections_Id] in table 'ContentCollectionContentCollection'
ALTER TABLE [dbo].[ContentCollectionContentCollection]
ADD CONSTRAINT [FK_ContentCollectionContentCollection_ContentCollection1]
    FOREIGN KEY ([ParentContentCollections_Id])
    REFERENCES [dbo].[ContentCollections]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ContentCollectionContentCollection_ContentCollection1'
CREATE INDEX [IX_FK_ContentCollectionContentCollection_ContentCollection1]
ON [dbo].[ContentCollectionContentCollection]
    ([ParentContentCollections_Id]);
GO

-- Creating foreign key on [PublicationsChildren_Id] in table 'PublicationPublication'
ALTER TABLE [dbo].[PublicationPublication]
ADD CONSTRAINT [FK_PublicationPublication_Publication]
    FOREIGN KEY ([PublicationsChildren_Id])
    REFERENCES [dbo].[Publications]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [PublicationParents_Id] in table 'PublicationPublication'
ALTER TABLE [dbo].[PublicationPublication]
ADD CONSTRAINT [FK_PublicationPublication_Publication1]
    FOREIGN KEY ([PublicationParents_Id])
    REFERENCES [dbo].[Publications]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PublicationPublication_Publication1'
CREATE INDEX [IX_FK_PublicationPublication_Publication1]
ON [dbo].[PublicationPublication]
    ([PublicationParents_Id]);
GO

-- Creating foreign key on [Publications_Id] in table 'PublicationContentCollection'
ALTER TABLE [dbo].[PublicationContentCollection]
ADD CONSTRAINT [FK_PublicationContentCollection_Publication]
    FOREIGN KEY ([Publications_Id])
    REFERENCES [dbo].[Publications]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [ContentCollections_Id] in table 'PublicationContentCollection'
ALTER TABLE [dbo].[PublicationContentCollection]
ADD CONSTRAINT [FK_PublicationContentCollection_ContentCollection]
    FOREIGN KEY ([ContentCollections_Id])
    REFERENCES [dbo].[ContentCollections]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PublicationContentCollection_ContentCollection'
CREATE INDEX [IX_FK_PublicationContentCollection_ContentCollection]
ON [dbo].[PublicationContentCollection]
    ([ContentCollections_Id]);
GO

-- Creating foreign key on [Taxons_Id] in table 'TaxonTaxonomy'
ALTER TABLE [dbo].[TaxonTaxonomy]
ADD CONSTRAINT [FK_TaxonTaxonomy_Taxon]
    FOREIGN KEY ([Taxons_Id])
    REFERENCES [dbo].[Taxons]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Taxonomies_Id] in table 'TaxonTaxonomy'
ALTER TABLE [dbo].[TaxonTaxonomy]
ADD CONSTRAINT [FK_TaxonTaxonomy_Taxonomy]
    FOREIGN KEY ([Taxonomies_Id])
    REFERENCES [dbo].[Taxonomies]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TaxonTaxonomy_Taxonomy'
CREATE INDEX [IX_FK_TaxonTaxonomy_Taxonomy]
ON [dbo].[TaxonTaxonomy]
    ([Taxonomies_Id]);
GO

-- Creating foreign key on [AntecedentTaxons_Id] in table 'TaxonTaxon'
ALTER TABLE [dbo].[TaxonTaxon]
ADD CONSTRAINT [FK_TaxonTaxon_Taxon]
    FOREIGN KEY ([AntecedentTaxons_Id])
    REFERENCES [dbo].[Taxons]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [DerivativeTaxons_Id] in table 'TaxonTaxon'
ALTER TABLE [dbo].[TaxonTaxon]
ADD CONSTRAINT [FK_TaxonTaxon_Taxon1]
    FOREIGN KEY ([DerivativeTaxons_Id])
    REFERENCES [dbo].[Taxons]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TaxonTaxon_Taxon1'
CREATE INDEX [IX_FK_TaxonTaxon_Taxon1]
ON [dbo].[TaxonTaxon]
    ([DerivativeTaxons_Id]);
GO

-- Creating foreign key on [Taxons_Id] in table 'TaxonHolonym'
ALTER TABLE [dbo].[TaxonHolonym]
ADD CONSTRAINT [FK_TaxonHolonym_Taxon]
    FOREIGN KEY ([Taxons_Id])
    REFERENCES [dbo].[Taxons]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Holonyms_Id] in table 'TaxonHolonym'
ALTER TABLE [dbo].[TaxonHolonym]
ADD CONSTRAINT [FK_TaxonHolonym_Holonym]
    FOREIGN KEY ([Holonyms_Id])
    REFERENCES [dbo].[Holonyms]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TaxonHolonym_Holonym'
CREATE INDEX [IX_FK_TaxonHolonym_Holonym]
ON [dbo].[TaxonHolonym]
    ([Holonyms_Id]);
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

-- Creating foreign key on [Taxonomies_Id] in table 'TaxonomyContentCollection'
ALTER TABLE [dbo].[TaxonomyContentCollection]
ADD CONSTRAINT [FK_TaxonomyContentCollection_Taxonomy]
    FOREIGN KEY ([Taxonomies_Id])
    REFERENCES [dbo].[Taxonomies]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [ContentCollections_Id] in table 'TaxonomyContentCollection'
ALTER TABLE [dbo].[TaxonomyContentCollection]
ADD CONSTRAINT [FK_TaxonomyContentCollection_ContentCollection]
    FOREIGN KEY ([ContentCollections_Id])
    REFERENCES [dbo].[ContentCollections]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TaxonomyContentCollection_ContentCollection'
CREATE INDEX [IX_FK_TaxonomyContentCollection_ContentCollection]
ON [dbo].[TaxonomyContentCollection]
    ([ContentCollections_Id]);
GO

-- Creating foreign key on [OwnedTenants_Id] in table 'TenantOwners'
ALTER TABLE [dbo].[TenantOwners]
ADD CONSTRAINT [FK_TenantOwners_Tenant]
    FOREIGN KEY ([OwnedTenants_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Owners_Id] in table 'TenantOwners'
ALTER TABLE [dbo].[TenantOwners]
ADD CONSTRAINT [FK_TenantOwners_Principal]
    FOREIGN KEY ([Owners_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantOwners_Principal'
CREATE INDEX [IX_FK_TenantOwners_Principal]
ON [dbo].[TenantOwners]
    ([Owners_Id]);
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

-- Creating foreign key on [SubjectAccessControlEntries_Id] in table 'AccessControlEntryAccessControlEntry'
ALTER TABLE [dbo].[AccessControlEntryAccessControlEntry]
ADD CONSTRAINT [FK_AccessControlEntryAccessControlEntry_AccessControlEntry]
    FOREIGN KEY ([SubjectAccessControlEntries_Id])
    REFERENCES [dbo].[AccessControlEntries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [AccessControlEntries_Id] in table 'AccessControlEntryAccessControlEntry'
ALTER TABLE [dbo].[AccessControlEntryAccessControlEntry]
ADD CONSTRAINT [FK_AccessControlEntryAccessControlEntry_SubjectAccessControlEntry]
    FOREIGN KEY ([AccessControlEntries_Id])
    REFERENCES [dbo].[AccessControlEntries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AccessControlEntryAccessControlEntry_SubjectAccessControlEntry'
CREATE INDEX [IX_FK_AccessControlEntryAccessControlEntry_SubjectAccessControlEntry]
ON [dbo].[AccessControlEntryAccessControlEntry]
    ([AccessControlEntries_Id]);
GO

-- Creating foreign key on [OwnedPrincipals_Id] in table 'PrincipalPrincipal'
ALTER TABLE [dbo].[PrincipalPrincipal]
ADD CONSTRAINT [FK_PrincipalPrincipal_Principal]
    FOREIGN KEY ([OwnedPrincipals_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Owners_Id] in table 'PrincipalPrincipal'
ALTER TABLE [dbo].[PrincipalPrincipal]
ADD CONSTRAINT [FK_PrincipalPrincipal_Principal1]
    FOREIGN KEY ([Owners_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PrincipalPrincipal_Principal1'
CREATE INDEX [IX_FK_PrincipalPrincipal_Principal1]
ON [dbo].[PrincipalPrincipal]
    ([Owners_Id]);
GO

-- Creating foreign key on [OwnedAccessControlEntries_Id] in table 'AccessControlEntryOwners'
ALTER TABLE [dbo].[AccessControlEntryOwners]
ADD CONSTRAINT [FK_AccessControlEntryOwners_AccessControlEntry]
    FOREIGN KEY ([OwnedAccessControlEntries_Id])
    REFERENCES [dbo].[AccessControlEntries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Owners_Id] in table 'AccessControlEntryOwners'
ALTER TABLE [dbo].[AccessControlEntryOwners]
ADD CONSTRAINT [FK_AccessControlEntryOwners_Owner]
    FOREIGN KEY ([Owners_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AccessControlEntryOwners_Owner'
CREATE INDEX [IX_FK_AccessControlEntryOwners_Owner]
ON [dbo].[AccessControlEntryOwners]
    ([Owners_Id]);
GO

-- Creating foreign key on [TenantAccounts_Id] in table 'TenantAccounts'
ALTER TABLE [dbo].[TenantAccounts]
ADD CONSTRAINT [FK_TenantAccounts_Tenant]
    FOREIGN KEY ([TenantAccounts_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Accounts_Id] in table 'TenantAccounts'
ALTER TABLE [dbo].[TenantAccounts]
ADD CONSTRAINT [FK_TenantAccounts_Principal]
    FOREIGN KEY ([Accounts_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantAccounts_Principal'
CREATE INDEX [IX_FK_TenantAccounts_Principal]
ON [dbo].[TenantAccounts]
    ([Accounts_Id]);
GO

-- Creating foreign key on [SubjectTenants_Id] in table 'TenantAccessControlEntry'
ALTER TABLE [dbo].[TenantAccessControlEntry]
ADD CONSTRAINT [FK_TenantAccessControlEntry_SubjectTenant]
    FOREIGN KEY ([SubjectTenants_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [AccessControlEntries_Id] in table 'TenantAccessControlEntry'
ALTER TABLE [dbo].[TenantAccessControlEntry]
ADD CONSTRAINT [FK_TenantAccessControlEntry_AccessControlEntry]
    FOREIGN KEY ([AccessControlEntries_Id])
    REFERENCES [dbo].[AccessControlEntries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TenantAccessControlEntry_AccessControlEntry'
CREATE INDEX [IX_FK_TenantAccessControlEntry_AccessControlEntry]
ON [dbo].[TenantAccessControlEntry]
    ([AccessControlEntries_Id]);
GO

-- Creating foreign key on [HorselessSessionPrincipalId] in table 'HorselessSessions'
ALTER TABLE [dbo].[HorselessSessions]
ADD CONSTRAINT [FK_PrincipalHorselessSession]
    FOREIGN KEY ([HorselessSessionPrincipalId])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PrincipalHorselessSession'
CREATE INDEX [IX_FK_PrincipalHorselessSession]
ON [dbo].[HorselessSessions]
    ([HorselessSessionPrincipalId]);
GO

-- Creating foreign key on [SubjectHorselessSessions_Id] in table 'HorselessSessionAccessControlEntry'
ALTER TABLE [dbo].[HorselessSessionAccessControlEntry]
ADD CONSTRAINT [FK_HorselessSessionAccessControlEntry_SubjectHorselessSession]
    FOREIGN KEY ([SubjectHorselessSessions_Id])
    REFERENCES [dbo].[HorselessSessions]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [AccessControlEntries_Id] in table 'HorselessSessionAccessControlEntry'
ALTER TABLE [dbo].[HorselessSessionAccessControlEntry]
ADD CONSTRAINT [FK_HorselessSessionAccessControlEntry_AccessControlledHorselessSession]
    FOREIGN KEY ([AccessControlEntries_Id])
    REFERENCES [dbo].[AccessControlEntries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_HorselessSessionAccessControlEntry_AccessControlledHorselessSession'
CREATE INDEX [IX_FK_HorselessSessionAccessControlEntry_AccessControlledHorselessSession]
ON [dbo].[HorselessSessionAccessControlEntry]
    ([AccessControlEntries_Id]);
GO

-- Creating foreign key on [OwnedHorselessSessions_Id] in table 'HorselessSessionPrincipal'
ALTER TABLE [dbo].[HorselessSessionPrincipal]
ADD CONSTRAINT [FK_HorselessSessionPrincipal_HorselessSession]
    FOREIGN KEY ([OwnedHorselessSessions_Id])
    REFERENCES [dbo].[HorselessSessions]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Owners_Id] in table 'HorselessSessionPrincipal'
ALTER TABLE [dbo].[HorselessSessionPrincipal]
ADD CONSTRAINT [FK_HorselessSessionPrincipal_Principal]
    FOREIGN KEY ([Owners_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_HorselessSessionPrincipal_Principal'
CREATE INDEX [IX_FK_HorselessSessionPrincipal_Principal]
ON [dbo].[HorselessSessionPrincipal]
    ([Owners_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------