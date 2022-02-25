//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { VppTokenState } from './vpptokenstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const VppTokenStateConfig = {
  name: 'vppTokenState',
  members: VppTokenState,
  fields: {
    unknown: {value: 0},
    valid: {value: 1},
    expired: {value: 2},
    invalid: {value: 3},
    assignedToExternalMDM: {value: 4}
  }
} as EnumTypeConfig<VppTokenState>;
//#endregion