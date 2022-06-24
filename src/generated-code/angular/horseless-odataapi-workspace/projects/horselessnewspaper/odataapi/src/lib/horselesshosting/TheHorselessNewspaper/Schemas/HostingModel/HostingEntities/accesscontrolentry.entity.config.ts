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
    Scope: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.ACEPermissionScope', nullable: false},
    Permission: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.ACEPermission', nullable: false},
    PermissionType: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.ACEPermissionType', nullable: false},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    IsActive: {type: 'Edm.Boolean'},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Principal', collection: true, navigation: true},
    SubjectAccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.AccessControlEntry', collection: true, navigation: true},
    SubjectPrincipals: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Principal', collection: true, navigation: true},
    SubjectTenants: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant', collection: true, navigation: true}
  }
} as StructuredTypeConfig<AccessControlEntry>;
//#endregion