//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantInfo } from './tenantinfo.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TenantInfoEntityConfig = {
  name: 'TenantInfo',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    Timestamp: {type: 'Edm.Binary'},
    ParentTenantId: {type: 'Edm.Guid'},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    Identifier: {type: 'Edm.String'},
    Name: {type: 'Edm.String'},
    ConnectionString: {type: 'Edm.String'},
    TenantBaseUrl: {type: 'Edm.String'},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.AccessControlEntry', collection: true, navigation: true},
    ParentTenant: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant', navigation: true},
    KeyCloakConfigurations: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.KeyCloakConfiguration', collection: true, navigation: true},
    WebAPITenantInfos: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.WebAPITenantInfo', collection: true, navigation: true}
  }
} as StructuredTypeConfig<TenantInfo>;
//#endregion