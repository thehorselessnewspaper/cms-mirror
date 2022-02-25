//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedDeviceMobileAppConfigurationAssignment } from './manageddevicemobileappconfigurationassignment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedDeviceMobileAppConfigurationAssignmentEntityConfig = {
  name: 'managedDeviceMobileAppConfigurationAssignment',
  base: 'microsoft.graph.entity',
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as StructuredTypeConfig<ManagedDeviceMobileAppConfigurationAssignment>;
//#endregion