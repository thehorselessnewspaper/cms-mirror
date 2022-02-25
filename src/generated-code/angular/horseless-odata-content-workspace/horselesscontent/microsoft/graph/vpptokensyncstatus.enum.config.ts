//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { VppTokenSyncStatus } from './vpptokensyncstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const VppTokenSyncStatusConfig = {
  name: 'vppTokenSyncStatus',
  members: VppTokenSyncStatus,
  fields: {
    none: {value: 0},
    inProgress: {value: 1},
    completed: {value: 2},
    failed: {value: 3}
  }
} as EnumTypeConfig<VppTokenSyncStatus>;
//#endregion