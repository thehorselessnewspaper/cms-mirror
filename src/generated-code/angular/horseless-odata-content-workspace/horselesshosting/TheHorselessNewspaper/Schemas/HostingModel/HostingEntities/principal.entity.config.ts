//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Principal } from './principal.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PrincipalEntityConfig = {
  name: 'Principal',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    UPN: {type: 'Edm.String'},
    Email: {type: 'Edm.String'},
    PreferredUserName: {type: 'Edm.String'},
    Timestamp: {type: 'Edm.Binary'},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    Iss: {type: 'Edm.String'},
    Aud: {type: 'Edm.String'},
    Sub: {type: 'Edm.String'},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.AccessControlEntry', collection: true, navigation: true},
    OwnedAccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.AccessControlEntry', collection: true, navigation: true},
    OwnedPrincipals: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Principal', collection: true, navigation: true},
    OwnedTenants: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Principal', collection: true, navigation: true},
    TenantAccounts: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Principal>;
//#endregion