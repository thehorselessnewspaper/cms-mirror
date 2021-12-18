
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/18/2021 14:04:32
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


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


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
    [MIMETypeId] uniqueidentifier  NULL
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
    [AllowAnonymousRead] bit  NOT NULL
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

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------