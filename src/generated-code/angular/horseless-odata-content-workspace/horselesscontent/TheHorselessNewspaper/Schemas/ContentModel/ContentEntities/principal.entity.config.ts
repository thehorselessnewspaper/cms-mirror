//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { Principal } from './principal.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PrincipalEntityConfig = {
  name: 'Principal',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    Iss: {type: 'Edm.String'},
    Aud: {type: 'Edm.String'},
    Sub: {type: 'Edm.String'},
    IsAnonymous: {type: 'Edm.Boolean', nullable: false},
    UPN: {type: 'Edm.String', nullable: false},
    Email: {type: 'Edm.String', nullable: false},
    PreferredUserName: {type: 'Edm.String', nullable: false},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    HorselessSessions: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessSession', collection: true, navigation: true},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    OwnedAccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    OwnedHorselessSessions: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessSession', collection: true, navigation: true},
    OwnedPrincipals: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true},
    OwnedTenants: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true},
    TenantAccounts: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant', collection: true, navigation: true},
    PrincipalClaimContainer: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.PrincipalClaimContainer', navigation: true}
  }
} as StructuredTypeConfig<Principal>;
//#endregion