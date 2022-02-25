//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerAssignment } from './plannerassignment.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerAssignmentComplexConfig = {
  name: 'plannerAssignment',
  fields: {
    assignedBy: {type: 'graph.identitySet'},
    assignedDateTime: {type: 'Edm.DateTimeOffset'},
    orderHint: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PlannerAssignment>;
//#endregion