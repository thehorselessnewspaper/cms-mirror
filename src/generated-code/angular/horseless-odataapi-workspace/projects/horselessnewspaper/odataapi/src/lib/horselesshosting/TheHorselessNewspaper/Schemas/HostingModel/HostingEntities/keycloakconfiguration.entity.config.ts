//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { KeyCloakConfiguration } from './keycloakconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const KeyCloakConfigurationEntityConfig = {
  name: 'KeyCloakConfiguration',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    Timestamp: {type: 'Edm.Binary'},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    DisplayName: {type: 'Edm.String'},
    Authority: {type: 'Edm.String'},
    Realm: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    Iss: {type: 'Edm.String'},
    Aud: {type: 'Edm.String'},
    TenantInfoId: {type: 'Edm.Guid'},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Principal', collection: true, navigation: true},
    TenantInfo: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantInfo', navigation: true, referentials: [{property: 'TenantInfoId', referencedProperty: 'Id'}]}
  }
} as StructuredTypeConfig<KeyCloakConfiguration>;
//#endregion