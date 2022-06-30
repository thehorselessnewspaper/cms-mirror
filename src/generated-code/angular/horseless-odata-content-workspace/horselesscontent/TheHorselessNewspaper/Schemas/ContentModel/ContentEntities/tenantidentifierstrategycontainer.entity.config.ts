//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategyContainer } from './tenantidentifierstrategycontainer.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TenantIdentifierStrategyContainerEntityConfig = {
  name: 'TenantIdentifierStrategyContainer',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    TenantIdentifierStrategyName: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.TenantIdentifierStrategyName', nullable: false},
    DisplayName: {type: 'Edm.String', nullable: false},
    ObjectId: {type: 'Edm.String', nullable: false},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    TenantIdentifier: {type: 'Edm.String', nullable: false},
    Strategy: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.TenantIdentifierStrategy', navigation: true}
  }
} as StructuredTypeConfig<TenantIdentifierStrategyContainer>;
//#endregion