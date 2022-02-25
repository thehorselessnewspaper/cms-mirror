//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CallState } from './callstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const CallStateConfig = {
  name: 'callState',
  members: CallState,
  fields: {
    incoming: {value: 0},
    establishing: {value: 1},
    established: {value: 3},
    hold: {value: 4},
    transferring: {value: 5},
    transferAccepted: {value: 6},
    redirecting: {value: 7},
    terminating: {value: 8},
    terminated: {value: 9},
    unknownFutureValue: {value: 10}
  }
} as EnumTypeConfig<CallState>;
//#endregion