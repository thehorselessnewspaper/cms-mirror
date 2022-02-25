//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TermsAndConditionsAssignment } from './termsandconditionsassignment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TermsAndConditionsAssignmentEntityConfig = {
  name: 'termsAndConditionsAssignment',
  base: 'microsoft.graph.entity',
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as StructuredTypeConfig<TermsAndConditionsAssignment>;
//#endregion