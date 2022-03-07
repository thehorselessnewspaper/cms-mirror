//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { HorselessSession } from './horselesssession.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const HorselessSessionEntityConfig = {
  name: 'HorselessSession',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    SessionId: {type: 'Edm.String'},
    Iss: {type: 'Edm.String'},
    Aud: {type: 'Edm.String'},
    Sub: {type: 'Edm.String'},
    IsAnonymous: {type: 'Edm.Boolean'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    AccessControlList: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<HorselessSession>;
//#endregion