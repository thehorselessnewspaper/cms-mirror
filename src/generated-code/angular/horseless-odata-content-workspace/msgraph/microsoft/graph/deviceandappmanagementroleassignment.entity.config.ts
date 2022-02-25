//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceAndAppManagementRoleAssignment } from './deviceandappmanagementroleassignment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceAndAppManagementRoleAssignmentEntityConfig = {
  name: 'deviceAndAppManagementRoleAssignment',
  base: 'microsoft.graph.roleAssignment',
  fields: {
    members: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<DeviceAndAppManagementRoleAssignment>;
//#endregion