//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedEBookAssignment } from './managedebookassignment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedEBookAssignmentEntityConfig = {
  name: 'managedEBookAssignment',
  base: 'microsoft.graph.entity',
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'},
    installIntent: {type: 'graph.installIntent', nullable: false}
  }
} as StructuredTypeConfig<ManagedEBookAssignment>;
//#endregion