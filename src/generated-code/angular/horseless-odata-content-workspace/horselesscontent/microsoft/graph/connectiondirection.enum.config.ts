//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ConnectionDirection } from './connectiondirection.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ConnectionDirectionConfig = {
  name: 'connectionDirection',
  members: ConnectionDirection,
  fields: {
    unknown: {value: 0},
    inbound: {value: 1},
    outbound: {value: 2},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<ConnectionDirection>;
//#endregion