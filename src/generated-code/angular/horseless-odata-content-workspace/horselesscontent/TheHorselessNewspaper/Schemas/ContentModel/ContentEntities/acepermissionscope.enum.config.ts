//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { ACEPermissionScope } from './acepermissionscope.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ACEPermissionScopeConfig = {
  name: 'ACEPermissionScope',
  members: ACEPermissionScope,
  fields: {
    SITE: {value: 0},
    TENANT: {value: 1},
    OWNER: {value: 2},
    ROLE: {value: 3},
    GROUP: {value: 4},
    WORKFLOW: {value: 5},
    ANONYMOUS: {value: 6},
    EVERYONE: {value: 7}
  }
} as EnumTypeConfig<ACEPermissionScope>;
//#endregion