//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WebAPITenantInfo } from './webapitenantinfo.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WebAPITenantInfoEntityConfig = {
  name: 'WebAPITenantInfo',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    Timestamp: {type: 'Edm.Binary'},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    Identifier: {type: 'Edm.String'},
    Name: {type: 'Edm.String'},
    ConnectionString: {type: 'Edm.String'},
    WebAPIBaseUrl: {type: 'Edm.String'},
    TenantInfoId: {type: 'Edm.Guid'},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Principal', collection: true, navigation: true},
    TenantInfo: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantInfo', navigation: true, referentials: [{property: 'TenantInfoId', referencedProperty: 'Id'}]}
  }
} as StructuredTypeConfig<WebAPITenantInfo>;
//#endregion