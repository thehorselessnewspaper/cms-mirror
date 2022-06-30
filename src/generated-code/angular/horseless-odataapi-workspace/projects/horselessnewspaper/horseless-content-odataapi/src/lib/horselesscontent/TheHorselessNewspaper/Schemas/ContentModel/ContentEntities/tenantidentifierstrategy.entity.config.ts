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
    DisplayName: {type: 'Edm.String', nullable: false},
    ObjectId: {type: 'Edm.String', nullable: false},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    TargetTenant: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant', navigation: true},
    StrategyContainers: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.TenantIdentifierStrategyContainer', collection: true, navigation: true}
  }
} as StructuredTypeConfig<TenantIdentifierStrategy>;
//#endregion