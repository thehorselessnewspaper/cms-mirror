//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ActionState } from './actionstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ActionStateConfig = {
  name: 'actionState',
  members: ActionState,
  fields: {
    none: {value: 0},
    pending: {value: 1},
    canceled: {value: 2},
    active: {value: 3},
    done: {value: 4},
    failed: {value: 5},
    notSupported: {value: 6}
  }
} as EnumTypeConfig<ActionState>;
//#endregion