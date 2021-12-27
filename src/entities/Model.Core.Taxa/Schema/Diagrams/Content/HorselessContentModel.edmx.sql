
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/27/2021 02:32:00
-- Generated from EDMX file: C:\src\the horseless newspaper\src\entities\Model.Core.Taxa\Schema\Diagrams\Content\HorselessContentModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [THNLP_Content];
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
    ALTER TABLE [dbo].[MimeContents] DROP CONSTRAINT [FK_FilesystemAssetMimeContent];
GO
IF OBJECT_ID(N'[dbo].[FK_MimeContentJSONAsset]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[MimeContents] DROP CONSTRAINT [FK_MimeContentJSONAsset];
GO
IF OBJECT_ID(N'[dbo].[FK_MimeContentMIMEType]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[MimeContents] DROP CONSTRAINT [FK_MimeContentMIMEType];
GO
IF OBJECT_ID(N'[dbo].[FK_ContentCollectionPublication_ContentCollection]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ContentCollectionPublication] DROP CONSTRAINT [FK_ContentCollectionPublication_ContentCollection];
GO
IF OBJECT_ID(N'[dbo].[FK_ContentCollectionPublication_Publication]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ContentCollectionPublication] DROP CONSTRAINT [FK_ContentCollectionPublication_Publication];
GO
IF OBJECT_ID(N'[dbo].[FK_PlaceholderMimeContent_Placeholder]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PlaceholderMimeContent] DROP CONSTRAINT [FK_PlaceholderMimeContent_Placeholder];
GO
IF OBJECT_ID(N'[dbo].[FK_PlaceholderMimeContent_MimeContent]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PlaceholderMimeContent] DROP CONSTRAINT [FK_PlaceholderMimeContent_MimeContent];
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
IF OBJECT_ID(N'[dbo].[FK_PrincipalTenant_Principal]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PrincipalTenant] DROP CONSTRAINT [FK_PrincipalTenant_Principal];
GO
IF OBJECT_ID(N'[dbo].[FK_PrincipalTenant_Tenant]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PrincipalTenant] DROP CONSTRAINT [FK_PrincipalTenant_Tenant];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonContentCollection_Taxon]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonContentCollection] DROP CONSTRAINT [FK_TaxonContentCollection_Taxon];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonContentCollection_ContentCollection]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonContentCollection] DROP CONSTRAINT [FK_TaxonContentCollection_ContentCollection];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonPlaceholder_Taxon]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonPlaceholder] DROP CONSTRAINT [FK_TaxonPlaceholder_Taxon];
GO
IF OBJECT_ID(N'[dbo].[FK_TaxonPlaceholder_Placeholder]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TaxonPlaceholder] DROP CONSTRAINT [FK_TaxonPlaceholder_Placeholder];
GO
IF OBJECT_ID(N'[dbo].[FK_PlaceholderHolonym_Placeholder]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PlaceholderHolonym] DROP CONSTRAINT [FK_PlaceholderHolonym_Placeholder];
GO
IF OBJECT_ID(N'[dbo].[FK_PlaceholderHolonym_Holonym]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PlaceholderHolonym] DROP CONSTRAINT [FK_PlaceholderHolonym_Holonym];
GO
IF OBJECT_ID(N'[dbo].[FK_PlaceholderMeronym_Placeholder]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PlaceholderMeronym] DROP CONSTRAINT [FK_PlaceholderMeronym_Placeholder];
GO
IF OBJECT_ID(N'[dbo].[FK_PlaceholderMeronym_Meronym]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PlaceholderMeronym] DROP CONSTRAINT [FK_PlaceholderMeronym_Meronym];
GO
IF OBJECT_ID(N'[dbo].[FK_PublicationNugetPackage_Publication]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PublicationNugetPackage] DROP CONSTRAINT [FK_PublicationNugetPackage_Publication];
GO
IF OBJECT_ID(N'[dbo].[FK_PublicationNugetPackage_NugetPackage]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PublicationNugetPackage] DROP CONSTRAINT [FK_PublicationNugetPackage_NugetPackage];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[MimeContents]', 'U') IS NOT NULL
    DROP TABLE [dbo].[MimeContents];
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
IF OBJECT_ID(N'[dbo].[TenantContentCollection]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TenantContentCollection];
GO
IF OBJECT_ID(N'[dbo].[ContentCollectionMimeContent]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ContentCollectionMimeContent];
GO
IF OBJECT_ID(N'[dbo].[ContentCollectionPublication]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ContentCollectionPublication];
GO
IF OBJECT_ID(N'[dbo].[PlaceholderMimeContent]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PlaceholderMimeContent];
GO
IF OBJECT_ID(N'[dbo].[TaxonHolonym]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TaxonHolonym];
GO
IF OBJECT_ID(N'[dbo].[HolonymMeronym]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HolonymMeronym];
GO
IF OBJECT_ID(N'[dbo].[PrincipalTenant]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PrincipalTenant];
GO
IF OBJECT_ID(N'[dbo].[TaxonContentCollection]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TaxonContentCollection];
GO
IF OBJECT_ID(N'[dbo].[TaxonPlaceholder]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TaxonPlaceholder];
GO
IF OBJECT_ID(N'[dbo].[PlaceholderHolonym]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PlaceholderHolonym];
GO
IF OBJECT_ID(N'[dbo].[PlaceholderMeronym]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PlaceholderMeronym];
GO
IF OBJECT_ID(N'[dbo].[PublicationNugetPackage]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PublicationNugetPackage];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'MimeContents'
CREATE TABLE [dbo].[MimeContents] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [FilesystemAssetId] uniqueidentifier  NULL,
    [JSONAssetId] uniqueidentifier  NULL,
    [MIMETypeId] uniqueidentifier  NULL,
    [IsPublished] bit  NULL
);
GO

-- Creating table 'Tenants'
CREATE TABLE [dbo].[Tenants] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL
);
GO

-- Creating table 'MIMETypes'
CREATE TABLE [dbo].[MIMETypes] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [MIMETypeName] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'FilesystemAssets'
CREATE TABLE [dbo].[FilesystemAssets] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [Filename] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'JSONAssets'
CREATE TABLE [dbo].[JSONAssets] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [JsonValue] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'ContentCollections'
CREATE TABLE [dbo].[ContentCollections] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [AllowAnonymousRead] bit  NOT NULL,
    [IsPublished] bit  NULL
);
GO

-- Creating table 'Publications'
CREATE TABLE [dbo].[Publications] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NOT NULL,
    [RouteTemplateRegEx] nvarchar(max)  NULL,
    [PublishAt] datetime  NULL,
    [UnPublishAt] datetime  NULL,
    [IsPublished] bit  NULL
);
GO

-- Creating table 'Placeholders'
CREATE TABLE [dbo].[Placeholders] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [IsPublished] bit  NULL
);
GO

-- Creating table 'Taxons'
CREATE TABLE [dbo].[Taxons] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] uniqueidentifier  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NOT NULL,
    [JsonContent] nvarchar(max)  NOT NULL,
    [JsonSchema] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Holonyms'
CREATE TABLE [dbo].[Holonyms] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NOT NULL,
    [JsonContent] nvarchar(max)  NOT NULL,
    [JsonSchema] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Meronyms'
CREATE TABLE [dbo].[Meronyms] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NOT NULL,
    [JsonContent] nvarchar(max)  NOT NULL,
    [JsonSchema] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Principals'
CREATE TABLE [dbo].[Principals] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
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
    [CreatedAt] datetime  NOT NULL,
    [PublishAt] datetime  NULL,
    [UnPublishAt] datetime  NULL,
    [IsPublished] bit  NULL,
    [PackageId] nvarchar(max)  NULL,
    [PackageVersion] nvarchar(max)  NULL,
    [PackageAuthor] nvarchar(max)  NULL,
    [PackageSource] nvarchar(max)  NULL
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

-- Creating table 'ContentCollectionPublication'
CREATE TABLE [dbo].[ContentCollectionPublication] (
    [ContentCollections_Id] uniqueidentifier  NOT NULL,
    [Publications_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'PlaceholderMimeContent'
CREATE TABLE [dbo].[PlaceholderMimeContent] (
    [Placeholders_Id] uniqueidentifier  NOT NULL,
    [MimeContents_Id] uniqueidentifier  NOT NULL
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

-- Creating table 'PrincipalTenant'
CREATE TABLE [dbo].[PrincipalTenant] (
    [Principals_Id] uniqueidentifier  NOT NULL,
    [Tenants_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TaxonContentCollection'
CREATE TABLE [dbo].[TaxonContentCollection] (
    [Taxons_Id] uniqueidentifier  NOT NULL,
    [ContentCollections_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'TaxonPlaceholder'
CREATE TABLE [dbo].[TaxonPlaceholder] (
    [Taxons_Id] uniqueidentifier  NOT NULL,
    [Placeholders_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'PlaceholderHolonym'
CREATE TABLE [dbo].[PlaceholderHolonym] (
    [Placeholders_Id] uniqueidentifier  NOT NULL,
    [Holonyms_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'PlaceholderMeronym'
CREATE TABLE [dbo].[PlaceholderMeronym] (
    [Placeholders_Id] uniqueidentifier  NOT NULL,
    [Meronyms_Id] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'PublicationNugetPackage'
CREATE TABLE [dbo].[PublicationNugetPackage] (
    [Publications_Id] uniqueidentifier  NOT NULL,
    [NugetPackages_Id] uniqueidentifier  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'MimeContents'
ALTER TABLE [dbo].[MimeContents]
ADD CONSTRAINT [PK_MimeContents]
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

-- Creating primary key on [ContentCollections_Id], [Publications_Id] in table 'ContentCollectionPublication'
ALTER TABLE [dbo].[ContentCollectionPublication]
ADD CONSTRAINT [PK_ContentCollectionPublication]
    PRIMARY KEY CLUSTERED ([ContentCollections_Id], [Publications_Id] ASC);
GO

-- Creating primary key on [Placeholders_Id], [MimeContents_Id] in table 'PlaceholderMimeContent'
ALTER TABLE [dbo].[PlaceholderMimeContent]
ADD CONSTRAINT [PK_PlaceholderMimeContent]
    PRIMARY KEY CLUSTERED ([Placeholders_Id], [MimeContents_Id] ASC);
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

-- Creating primary key on [Principals_Id], [Tenants_Id] in table 'PrincipalTenant'
ALTER TABLE [dbo].[PrincipalTenant]
ADD CONSTRAINT [PK_PrincipalTenant]
    PRIMARY KEY CLUSTERED ([Principals_Id], [Tenants_Id] ASC);
GO

-- Creating primary key on [Taxons_Id], [ContentCollections_Id] in table 'TaxonContentCollection'
ALTER TABLE [dbo].[TaxonContentCollection]
ADD CONSTRAINT [PK_TaxonContentCollection]
    PRIMARY KEY CLUSTERED ([Taxons_Id], [ContentCollections_Id] ASC);
GO

-- Creating primary key on [Taxons_Id], [Placeholders_Id] in table 'TaxonPlaceholder'
ALTER TABLE [dbo].[TaxonPlaceholder]
ADD CONSTRAINT [PK_TaxonPlaceholder]
    PRIMARY KEY CLUSTERED ([Taxons_Id], [Placeholders_Id] ASC);
GO

-- Creating primary key on [Placeholders_Id], [Holonyms_Id] in table 'PlaceholderHolonym'
ALTER TABLE [dbo].[PlaceholderHolonym]
ADD CONSTRAINT [PK_PlaceholderHolonym]
    PRIMARY KEY CLUSTERED ([Placeholders_Id], [Holonyms_Id] ASC);
GO

-- Creating primary key on [Placeholders_Id], [Meronyms_Id] in table 'PlaceholderMeronym'
ALTER TABLE [dbo].[PlaceholderMeronym]
ADD CONSTRAINT [PK_PlaceholderMeronym]
    PRIMARY KEY CLUSTERED ([Placeholders_Id], [Meronyms_Id] ASC);
GO

-- Creating primary key on [Publications_Id], [NugetPackages_Id] in table 'PublicationNugetPackage'
ALTER TABLE [dbo].[PublicationNugetPackage]
ADD CONSTRAINT [PK_PublicationNugetPackage]
    PRIMARY KEY CLUSTERED ([Publications_Id], [NugetPackages_Id] ASC);
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
    REFERENCES [dbo].[MimeContents]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ContentCollectionMimeContent_MimeContent'
CREATE INDEX [IX_FK_ContentCollectionMimeContent_MimeContent]
ON [dbo].[ContentCollectionMimeContent]
    ([MimeContents_Id]);
GO

-- Creating foreign key on [FilesystemAssetId] in table 'MimeContents'
ALTER TABLE [dbo].[MimeContents]
ADD CONSTRAINT [FK_FilesystemAssetMimeContent]
    FOREIGN KEY ([FilesystemAssetId])
    REFERENCES [dbo].[FilesystemAssets]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_FilesystemAssetMimeContent'
CREATE INDEX [IX_FK_FilesystemAssetMimeContent]
ON [dbo].[MimeContents]
    ([FilesystemAssetId]);
GO

-- Creating foreign key on [JSONAssetId] in table 'MimeContents'
ALTER TABLE [dbo].[MimeContents]
ADD CONSTRAINT [FK_MimeContentJSONAsset]
    FOREIGN KEY ([JSONAssetId])
    REFERENCES [dbo].[JSONAssets]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_MimeContentJSONAsset'
CREATE INDEX [IX_FK_MimeContentJSONAsset]
ON [dbo].[MimeContents]
    ([JSONAssetId]);
GO

-- Creating foreign key on [MIMETypeId] in table 'MimeContents'
ALTER TABLE [dbo].[MimeContents]
ADD CONSTRAINT [FK_MimeContentMIMEType]
    FOREIGN KEY ([MIMETypeId])
    REFERENCES [dbo].[MIMETypes]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_MimeContentMIMEType'
CREATE INDEX [IX_FK_MimeContentMIMEType]
ON [dbo].[MimeContents]
    ([MIMETypeId]);
GO

-- Creating foreign key on [ContentCollections_Id] in table 'ContentCollectionPublication'
ALTER TABLE [dbo].[ContentCollectionPublication]
ADD CONSTRAINT [FK_ContentCollectionPublication_ContentCollection]
    FOREIGN KEY ([ContentCollections_Id])
    REFERENCES [dbo].[ContentCollections]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Publications_Id] in table 'ContentCollectionPublication'
ALTER TABLE [dbo].[ContentCollectionPublication]
ADD CONSTRAINT [FK_ContentCollectionPublication_Publication]
    FOREIGN KEY ([Publications_Id])
    REFERENCES [dbo].[Publications]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ContentCollectionPublication_Publication'
CREATE INDEX [IX_FK_ContentCollectionPublication_Publication]
ON [dbo].[ContentCollectionPublication]
    ([Publications_Id]);
GO

-- Creating foreign key on [Placeholders_Id] in table 'PlaceholderMimeContent'
ALTER TABLE [dbo].[PlaceholderMimeContent]
ADD CONSTRAINT [FK_PlaceholderMimeContent_Placeholder]
    FOREIGN KEY ([Placeholders_Id])
    REFERENCES [dbo].[Placeholders]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [MimeContents_Id] in table 'PlaceholderMimeContent'
ALTER TABLE [dbo].[PlaceholderMimeContent]
ADD CONSTRAINT [FK_PlaceholderMimeContent_MimeContent]
    FOREIGN KEY ([MimeContents_Id])
    REFERENCES [dbo].[MimeContents]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PlaceholderMimeContent_MimeContent'
CREATE INDEX [IX_FK_PlaceholderMimeContent_MimeContent]
ON [dbo].[PlaceholderMimeContent]
    ([MimeContents_Id]);
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

-- Creating foreign key on [Principals_Id] in table 'PrincipalTenant'
ALTER TABLE [dbo].[PrincipalTenant]
ADD CONSTRAINT [FK_PrincipalTenant_Principal]
    FOREIGN KEY ([Principals_Id])
    REFERENCES [dbo].[Principals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Tenants_Id] in table 'PrincipalTenant'
ALTER TABLE [dbo].[PrincipalTenant]
ADD CONSTRAINT [FK_PrincipalTenant_Tenant]
    FOREIGN KEY ([Tenants_Id])
    REFERENCES [dbo].[Tenants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PrincipalTenant_Tenant'
CREATE INDEX [IX_FK_PrincipalTenant_Tenant]
ON [dbo].[PrincipalTenant]
    ([Tenants_Id]);
GO

-- Creating foreign key on [Taxons_Id] in table 'TaxonContentCollection'
ALTER TABLE [dbo].[TaxonContentCollection]
ADD CONSTRAINT [FK_TaxonContentCollection_Taxon]
    FOREIGN KEY ([Taxons_Id])
    REFERENCES [dbo].[Taxons]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [ContentCollections_Id] in table 'TaxonContentCollection'
ALTER TABLE [dbo].[TaxonContentCollection]
ADD CONSTRAINT [FK_TaxonContentCollection_ContentCollection]
    FOREIGN KEY ([ContentCollections_Id])
    REFERENCES [dbo].[ContentCollections]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TaxonContentCollection_ContentCollection'
CREATE INDEX [IX_FK_TaxonContentCollection_ContentCollection]
ON [dbo].[TaxonContentCollection]
    ([ContentCollections_Id]);
GO

-- Creating foreign key on [Taxons_Id] in table 'TaxonPlaceholder'
ALTER TABLE [dbo].[TaxonPlaceholder]
ADD CONSTRAINT [FK_TaxonPlaceholder_Taxon]
    FOREIGN KEY ([Taxons_Id])
    REFERENCES [dbo].[Taxons]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Placeholders_Id] in table 'TaxonPlaceholder'
ALTER TABLE [dbo].[TaxonPlaceholder]
ADD CONSTRAINT [FK_TaxonPlaceholder_Placeholder]
    FOREIGN KEY ([Placeholders_Id])
    REFERENCES [dbo].[Placeholders]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TaxonPlaceholder_Placeholder'
CREATE INDEX [IX_FK_TaxonPlaceholder_Placeholder]
ON [dbo].[TaxonPlaceholder]
    ([Placeholders_Id]);
GO

-- Creating foreign key on [Placeholders_Id] in table 'PlaceholderHolonym'
ALTER TABLE [dbo].[PlaceholderHolonym]
ADD CONSTRAINT [FK_PlaceholderHolonym_Placeholder]
    FOREIGN KEY ([Placeholders_Id])
    REFERENCES [dbo].[Placeholders]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Holonyms_Id] in table 'PlaceholderHolonym'
ALTER TABLE [dbo].[PlaceholderHolonym]
ADD CONSTRAINT [FK_PlaceholderHolonym_Holonym]
    FOREIGN KEY ([Holonyms_Id])
    REFERENCES [dbo].[Holonyms]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PlaceholderHolonym_Holonym'
CREATE INDEX [IX_FK_PlaceholderHolonym_Holonym]
ON [dbo].[PlaceholderHolonym]
    ([Holonyms_Id]);
GO

-- Creating foreign key on [Placeholders_Id] in table 'PlaceholderMeronym'
ALTER TABLE [dbo].[PlaceholderMeronym]
ADD CONSTRAINT [FK_PlaceholderMeronym_Placeholder]
    FOREIGN KEY ([Placeholders_Id])
    REFERENCES [dbo].[Placeholders]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Meronyms_Id] in table 'PlaceholderMeronym'
ALTER TABLE [dbo].[PlaceholderMeronym]
ADD CONSTRAINT [FK_PlaceholderMeronym_Meronym]
    FOREIGN KEY ([Meronyms_Id])
    REFERENCES [dbo].[Meronyms]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PlaceholderMeronym_Meronym'
CREATE INDEX [IX_FK_PlaceholderMeronym_Meronym]
ON [dbo].[PlaceholderMeronym]
    ([Meronyms_Id]);
GO

-- Creating foreign key on [Publications_Id] in table 'PublicationNugetPackage'
ALTER TABLE [dbo].[PublicationNugetPackage]
ADD CONSTRAINT [FK_PublicationNugetPackage_Publication]
    FOREIGN KEY ([Publications_Id])
    REFERENCES [dbo].[Publications]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [NugetPackages_Id] in table 'PublicationNugetPackage'
ALTER TABLE [dbo].[PublicationNugetPackage]
ADD CONSTRAINT [FK_PublicationNugetPackage_NugetPackage]
    FOREIGN KEY ([NugetPackages_Id])
    REFERENCES [dbo].[NugetPackages]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PublicationNugetPackage_NugetPackage'
CREATE INDEX [IX_FK_PublicationNugetPackage_NugetPackage]
ON [dbo].[PublicationNugetPackage]
    ([NugetPackages_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------