//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TargetedManagedAppPolicyAssignmentEntityConfig = {
  name: 'targetedManagedAppPolicyAssignment',
  base: 'microsoft.graph.entity',
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as StructuredTypeConfig<TargetedManagedAppPolicyAssignment>;
//#endregion