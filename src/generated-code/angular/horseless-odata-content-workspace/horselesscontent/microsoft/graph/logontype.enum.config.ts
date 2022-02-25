//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LogonType } from './logontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const LogonTypeConfig = {
  name: 'logonType',
  members: LogonType,
  fields: {
    unknown: {value: 0},
    interactive: {value: 1},
    remoteInteractive: {value: 2},
    network: {value: 3},
    batch: {value: 4},
    service: {value: 5},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<LogonType>;
//#endregion