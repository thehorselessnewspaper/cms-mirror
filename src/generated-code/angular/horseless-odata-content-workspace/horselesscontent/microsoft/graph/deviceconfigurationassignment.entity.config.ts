//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfigurationAssignment } from './deviceconfigurationassignment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceConfigurationAssignmentEntityConfig = {
  name: 'deviceConfigurationAssignment',
  base: 'microsoft.graph.entity',
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as StructuredTypeConfig<DeviceConfigurationAssignment>;
//#endregion