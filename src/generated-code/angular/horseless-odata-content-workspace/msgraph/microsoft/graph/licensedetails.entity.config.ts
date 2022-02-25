//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LicenseDetails } from './licensedetails.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LicenseDetailsEntityConfig = {
  name: 'licenseDetails',
  base: 'microsoft.graph.entity',
  fields: {
    servicePlans: {type: 'graph.servicePlanInfo', nullable: false, collection: true},
    skuId: {type: 'Edm.Guid'},
    skuPartNumber: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<LicenseDetails>;
//#endregion