//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategyContainer } from './tenantidentifierstrategycontainer.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TenantIdentifierStrategyContainerEntityConfig = {
  name: 'TenantIdentifierStrategyContainer',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    TenantIdentifierStrategyName: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantIdentifierStrategyName', nullable: false},
    Timestamp: {type: 'Edm.Binary'},
    StrategyId: {type: 'Edm.Guid'},
    Strategy: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantIdentifierStrategy', navigation: true, referentials: [{property: 'StrategyId', referencedProperty: 'Id'}]}
  }
} as StructuredTypeConfig<TenantIdentifierStrategyContainer>;
//#endregion