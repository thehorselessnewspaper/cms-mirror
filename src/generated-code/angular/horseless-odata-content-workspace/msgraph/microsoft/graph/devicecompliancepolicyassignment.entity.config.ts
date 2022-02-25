//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceCompliancePolicyAssignment } from './devicecompliancepolicyassignment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceCompliancePolicyAssignmentEntityConfig = {
  name: 'deviceCompliancePolicyAssignment',
  base: 'microsoft.graph.entity',
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as StructuredTypeConfig<DeviceCompliancePolicyAssignment>;
//#endregion