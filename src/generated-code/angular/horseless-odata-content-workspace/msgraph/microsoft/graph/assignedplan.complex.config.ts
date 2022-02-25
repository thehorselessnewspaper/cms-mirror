//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AssignedPlan } from './assignedplan.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AssignedPlanComplexConfig = {
  name: 'assignedPlan',
  fields: {
    assignedDateTime: {type: 'Edm.DateTimeOffset'},
    capabilityStatus: {type: 'Edm.String'},
    service: {type: 'Edm.String'},
    servicePlanId: {type: 'Edm.Guid'}
  }
} as StructuredTypeConfig<AssignedPlan>;
//#endregion