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
    Timestamp: {type: 'Edm.Binary', nullable: false},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true},
    SubjectAccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    SubjectHorselessSessions: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessSession', collection: true, navigation: true},
    SubjectPrincipals: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true},
    SubjectTenants: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant', collection: true, navigation: true},
    ManagedContentCollections: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ContentCollection', collection: true, navigation: true},
    ManagedHorselessContents: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessContent', collection: true, navigation: true},
    ManagedHorselessViews: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessView', collection: true, navigation: true},
    ManagedPublications: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Publication', collection: true, navigation: true}
  }
} as StructuredTypeConfig<AccessControlEntry>;
//#endregion