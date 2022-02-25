//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RoleAssignment } from './roleassignment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RoleAssignmentEntityConfig = {
  name: 'roleAssignment',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    resourceScopes: {type: 'Edm.String', collection: true},
    roleDefinition: {type: 'graph.roleDefinition', navigation: true}
  }
} as StructuredTypeConfig<RoleAssignment>;
//#endregion