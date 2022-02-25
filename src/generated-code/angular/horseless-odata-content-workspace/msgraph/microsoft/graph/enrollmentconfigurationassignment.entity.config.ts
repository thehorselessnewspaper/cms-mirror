//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EnrollmentConfigurationAssignment } from './enrollmentconfigurationassignment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EnrollmentConfigurationAssignmentEntityConfig = {
  name: 'enrollmentConfigurationAssignment',
  base: 'microsoft.graph.entity',
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as StructuredTypeConfig<EnrollmentConfigurationAssignment>;
//#endregion