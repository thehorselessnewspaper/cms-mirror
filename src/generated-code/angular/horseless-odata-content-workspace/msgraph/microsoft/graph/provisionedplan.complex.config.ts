//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProvisionedPlan } from './provisionedplan.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ProvisionedPlanComplexConfig = {
  name: 'provisionedPlan',
  fields: {
    capabilityStatus: {type: 'Edm.String'},
    provisioningStatus: {type: 'Edm.String'},
    service: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ProvisionedPlan>;
//#endregion