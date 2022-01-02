
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 01/01/2022 19:49:32
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

-- Creating table 'HorselessContents'
CREATE TABLE [dbo].[HorselessContents] (
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
    [MIMETypeName] nvarchar(max)  NULL
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
    [JsonValue] nvarchar(max)  NULL,
    [JsonSchema] nvarchar(max)  NULL
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
    [IsPublished] bit  NULL,
    [URL] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Publications'
CREATE TABLE [dbo].[Publications] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NOT NULL,
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
    [IsPublished] bit  NULL,
    [Description] nvarchar(max)  NULL
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

-- Creating table 'AccessControlEntries'
CREATE TABLE [dbo].[AccessControlEntries] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
    [IsSoftDeleted] bit  NULL,
    [CreatedAt] datetime  NULL,
    [IsActive] bit  NULL
);
GO

-- Creating table 'HorselessSessions'
CREATE TABLE [dbo].[HorselessSessions] (
    [Id] uniqueidentifier  NOT NULL,
    [DisplayName] nvarchar(max)  NULL,
    [ObjectId] nvarchar(max)  NOT NULL,
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
    [CreatedAt] datetime  NOT NULL,
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
    [CreatedAt] datetime  NOT NULL,
    [PublishAt] datetime  NULL,
    [UnPublishAt] datetime  NULL,
    [IsPublished] bit  NULL,
    [MenuItemLabel] nvarchar(max)  NULL,
    [MenuItemDescription] nvarchar(max)  NULL,
    [MenuItemAltText] nvarchar(max)  NULL
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

-- Creating table 'PrincipalTenant'
CREATE TABLE [dbo].[PrincipalTenant] (
    [Principals_Id] uniqueidentifier  NOT NULL,
    [Tenants_Id] uniqueidentifier  NOT NULL
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

-- Creating primary key on [Principals_Id], [Tenants_Id] in table 'PrincipalTenant'
ALTER TABLE [dbo].[PrincipalTenant]
ADD CONSTRAINT [PK_PrincipalTenant]
    PRIMARY KEY CLUSTERED ([Principals_Id], [Tenants_Id] ASC);
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

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------