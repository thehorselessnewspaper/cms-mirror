//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GroupAssignmentTarget } from './groupassignmenttarget.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const GroupAssignmentTargetComplexConfig = {
  name: 'groupAssignmentTarget',
  base: 'microsoft.graph.deviceAndAppManagementAssignmentTarget',
  fields: {
    groupId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<GroupAssignmentTarget>;
//#endregion