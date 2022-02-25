//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CallDirection } from './calldirection.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const CallDirectionConfig = {
  name: 'callDirection',
  members: CallDirection,
  fields: {
    incoming: {value: 0},
    outgoing: {value: 1}
  }
} as EnumTypeConfig<CallDirection>;
//#endregion