//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ACEPermission } from './acepermission.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ACEPermissionConfig = {
  name: 'ACEPermission',
  flags: true,
  members: ACEPermission,
  fields: {
    READ: {value: 0},
    CREATE: {value: 1},
    UPDATE: {value: 2},
    DELETE: {value: 3},
    SHARE: {value: 4},
    EXECUTE: {value: 5},
    SEARCH: {value: 6},
    PUBLISH: {value: 7},
    UNPUBLISH: {value: 8},
    APPROVE: {value: 9}
  }
} as EnumTypeConfig<ACEPermission>;
//#endregion