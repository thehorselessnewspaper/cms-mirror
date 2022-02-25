//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SubscribedSku } from './subscribedsku.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SubscribedSkuEntityConfig = {
  name: 'subscribedSku',
  base: 'microsoft.graph.entity',
  fields: {
    capabilityStatus: {type: 'Edm.String'},
    consumedUnits: {type: 'Edm.Int32'},
    prepaidUnits: {type: 'graph.licenseUnitsDetail'},
    servicePlans: {type: 'graph.servicePlanInfo', nullable: false, collection: true},
    skuId: {type: 'Edm.Guid'},
    skuPartNumber: {type: 'Edm.String'},
    appliesTo: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SubscribedSku>;
//#endregion