//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Tenant } from './tenant.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TenantEntityConfig = {
  name: 'Tenant',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    IsPublished: {type: 'Edm.Boolean', nullable: false},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    ContentCollections: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ContentCollection', collection: true, navigation: true},
    TenantIdentifierStrategy: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.TenantIdentifierStrategy', navigation: true},
    AccessControlList: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true},
    Principals: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Tenant>;
//#endregion