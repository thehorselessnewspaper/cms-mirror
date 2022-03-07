//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AccessControlEntryEntityConfig = {
  name: 'AccessControlEntry',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    IsActive: {type: 'Edm.Boolean'},
    Scope: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ACEPermissionScope', nullable: false},
    Permission: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ACEPermission', nullable: false},
    PermissionType: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ACEPermissionType', nullable: false},
    Timestamp: {type: 'Edm.Binary', nullable: false}
  }
} as StructuredTypeConfig<AccessControlEntry>;
//#endregion