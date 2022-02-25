//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RoleDefinition } from './roledefinition.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RoleDefinitionEntityConfig = {
  name: 'roleDefinition',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    rolePermissions: {type: 'graph.rolePermission', collection: true},
    isBuiltIn: {type: 'Edm.Boolean', nullable: false},
    roleAssignments: {type: 'graph.roleAssignment', collection: true, navigation: true}
  }
} as StructuredTypeConfig<RoleDefinition>;
//#endregion