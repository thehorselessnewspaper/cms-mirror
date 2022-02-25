//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NetworkConnectionType } from './networkconnectiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const NetworkConnectionTypeConfig = {
  name: 'networkConnectionType',
  members: NetworkConnectionType,
  fields: {
    unknown: {value: 0},
    wired: {value: 1},
    wifi: {value: 2},
    mobile: {value: 3},
    tunnel: {value: 4},
    unknownFutureValue: {value: 5}
  }
} as EnumTypeConfig<NetworkConnectionType>;
//#endregion