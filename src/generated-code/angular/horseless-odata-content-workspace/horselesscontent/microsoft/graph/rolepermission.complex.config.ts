//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RolePermission } from './rolepermission.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RolePermissionComplexConfig = {
  name: 'rolePermission',
  fields: {
    resourceActions: {type: 'graph.resourceAction', collection: true}
  }
} as StructuredTypeConfig<RolePermission>;
//#endregion