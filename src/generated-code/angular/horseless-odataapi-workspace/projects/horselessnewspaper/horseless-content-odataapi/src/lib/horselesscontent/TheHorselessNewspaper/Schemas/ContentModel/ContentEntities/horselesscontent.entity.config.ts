//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { HorselessContent } from './horselesscontent.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const HorselessContentEntityConfig = {
  name: 'HorselessContent',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    FilesystemAssetId: {type: 'Edm.Guid'},
    JSONAssetId: {type: 'Edm.Guid'},
    MIMETypeId: {type: 'Edm.Guid'},
    IsPublished: {type: 'Edm.Boolean'},
    PublishedURL: {type: 'Edm.String'},
    PreviewURL: {type: 'Edm.String'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    FilesystemAsset: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.FilesystemAsset', navigation: true, referentials: [{property: 'FilesystemAssetId', referencedProperty: 'Id'}]},
    JSONAsset: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.JSONAsset', navigation: true, referentials: [{property: 'JSONAssetId', referencedProperty: 'Id'}]},
    MIMEType: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.MIMEType', navigation: true, referentials: [{property: 'MIMETypeId', referencedProperty: 'Id'}]},
    ContentCollections: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ContentCollection', collection: true, navigation: true},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<HorselessContent>;
//#endregion
