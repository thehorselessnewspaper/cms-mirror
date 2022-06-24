//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Publication } from './publication.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PublicationEntityConfig = {
  name: 'Publication',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    PublishAt: {type: 'Edm.DateTimeOffset'},
    UnPublishAt: {type: 'Edm.DateTimeOffset'},
    IsPublished: {type: 'Edm.Boolean'},
    PublishedURL: {type: 'Edm.String'},
    PreviewURL: {type: 'Edm.String'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    ContentCollections: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ContentCollection', collection: true, navigation: true},
    PublicationChildrens: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Publication', collection: true, navigation: true},
    PublicationParents: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Publication', collection: true, navigation: true},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Publication>;
//#endregion