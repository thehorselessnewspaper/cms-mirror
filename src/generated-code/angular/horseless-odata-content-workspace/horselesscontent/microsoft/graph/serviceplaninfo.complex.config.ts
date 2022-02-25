//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ServicePlanInfo } from './serviceplaninfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ServicePlanInfoComplexConfig = {
  name: 'servicePlanInfo',
  fields: {
    servicePlanId: {type: 'Edm.Guid'},
    servicePlanName: {type: 'Edm.String'},
    provisioningStatus: {type: 'Edm.String'},
    appliesTo: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ServicePlanInfo>;
//#endregion