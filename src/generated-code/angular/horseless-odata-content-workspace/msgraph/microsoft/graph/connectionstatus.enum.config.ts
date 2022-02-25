//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ConnectionStatus } from './connectionstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ConnectionStatusConfig = {
  name: 'connectionStatus',
  members: ConnectionStatus,
  fields: {
    unknown: {value: 0},
    attempted: {value: 1},
    succeeded: {value: 2},
    blocked: {value: 3},
    failed: {value: 4},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<ConnectionStatus>;
//#endregion