//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileAppAssignment } from './mobileappassignment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MobileAppAssignmentEntityConfig = {
  name: 'mobileAppAssignment',
  base: 'microsoft.graph.entity',
  fields: {
    intent: {type: 'graph.installIntent', nullable: false},
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'},
    settings: {type: 'graph.mobileAppAssignmentSettings'}
  }
} as StructuredTypeConfig<MobileAppAssignment>;
//#endregion