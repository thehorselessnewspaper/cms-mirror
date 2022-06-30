//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { HorselessView } from './horselessview.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const HorselessViewEntityConfig = {
  name: 'HorselessView',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    IsActive: {type: 'Edm.Boolean'},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    Exists: {type: 'Edm.Boolean', nullable: false},
    IsDirectory: {type: 'Edm.Boolean', nullable: false},
    LastModified: {type: 'Edm.DateTimeOffset', nullable: false},
    Length: {type: 'Edm.Int64', nullable: false},
    Name: {type: 'Edm.String', nullable: false},
    PhysicalPath: {type: 'Edm.String', nullable: false},
    ViewContent: {type: 'Edm.Binary', nullable: false},
    DictionaryKey: {type: 'Edm.String'},
    ContentCollections: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ContentCollection', collection: true, navigation: true},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<HorselessView>;
//#endregion