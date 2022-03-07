//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategy } from './tenantidentifierstrategy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TenantIdentifierStrategyEntityConfig = {
  name: 'TenantIdentifierStrategy',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    TenantId: {type: 'Edm.Guid'},
    DisplayName: {type: 'Edm.String', nullable: false},
    ObjectId: {type: 'Edm.String', nullable: false},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    Tenant: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant', navigation: true, referentials: [{property: 'TenantId', referencedProperty: 'Id'}]},
    TenantIdentifierStrategyContainers: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.TenantIdentifierStrategyContainer', collection: true, navigation: true}
  }
} as StructuredTypeConfig<TenantIdentifierStrategy>;
//#endregion