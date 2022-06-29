//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { Tenant } from './tenant.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TenantEntityConfig = {
  name: 'Tenant',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    IsPublished: {type: 'Edm.Boolean', nullable: false},
    BaseUrl: {type: 'Edm.String'},
    TenantIdentifier: {type: 'Edm.String'},
    Timestamp: {type: 'Edm.Binary'},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    TenantIdentifierStrategy: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantIdentifierStrategy', navigation: true},
    TenantInfos: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantInfo', collection: true, navigation: true},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.AccessControlEntry', collection: true, navigation: true},
    Accounts: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Principal', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Tenant>;
//#endregion