//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ContentCollection } from './contentcollection.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ContentCollectionEntityConfig = {
  name: 'ContentCollection',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    AllowAnonymousRead: {type: 'Edm.Boolean'},
    IsPublished: {type: 'Edm.Boolean'},
    PublishedURL: {type: 'Edm.String'},
    PreviewURL: {type: 'Edm.String'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    ChildContentCollections: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ContentCollection', collection: true, navigation: true},
    HorselessViews: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessView', collection: true, navigation: true},
    MimeContents: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessContent', collection: true, navigation: true},
    ParentContentCollections: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ContentCollection', collection: true, navigation: true},
    Publications: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Publication', collection: true, navigation: true},
    Taxonomies: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Taxonomy', collection: true, navigation: true},
    Tenants: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant', collection: true, navigation: true},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ContentCollection>;
//#endregion