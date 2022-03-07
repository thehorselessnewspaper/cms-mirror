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
    TenantIdentifierStrategyId: {type: 'Edm.Guid'},
    TenantIdentifierStrategyName: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.TenantIdentifierStrategyName', nullable: false},
    TenantIdentifierStrategy: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.TenantIdentifierStrategy', navigation: true, referentials: [{property: 'TenantIdentifierStrategyId', referencedProperty: 'Id'}]}
  }
} as StructuredTypeConfig<TenantIdentifierStrategyContainer>;
//#endregion