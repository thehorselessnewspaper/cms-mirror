//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ACEPermissionScope } from './acepermissionscope.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ACEPermissionScopeConfig = {
  name: 'ACEPermissionScope',
  members: ACEPermissionScope,
  fields: {
    OWNER: {value: 0},
    ROLE: {value: 1},
    GROUP: {value: 2},
    WORKFLOW: {value: 3},
    ANONYMOUS: {value: 4},
    EVERYONE: {value: 5}
  }
} as EnumTypeConfig<ACEPermissionScope>;
//#endregion