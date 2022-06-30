//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategy } from './tenantidentifierstrategy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TenantIdentifierStrategyEntityConfig = {
  name: 'TenantIdentifierStrategy',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    TargetTenantId: {type: 'Edm.Guid'},
    TargetTenant: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant', navigation: true, referentials: [{property: 'TargetTenantId', referencedProperty: 'Id'}]},
    StrategyContainers: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantIdentifierStrategyContainer', collection: true, navigation: true}
  }
} as StructuredTypeConfig<TenantIdentifierStrategy>;
//#endregion