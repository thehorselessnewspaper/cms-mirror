//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CallType } from './calltype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const CallTypeConfig = {
  name: 'callType',
  members: CallType,
  fields: {
    unknown: {value: 0},
    groupCall: {value: 1},
    peerToPeer: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<CallType>;
//#endregion