//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FilesystemAsset } from './filesystemasset.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FilesystemAssetEntityConfig = {
  name: 'FilesystemAsset',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    Filename: {type: 'Edm.String'},
    PublishedURL: {type: 'Edm.String'},
    PreviewURL: {type: 'Edm.String'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    HorselessContents: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessContent', collection: true, navigation: true},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<FilesystemAsset>;
//#endregion