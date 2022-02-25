//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AlertStatus } from './alertstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AlertStatusConfig = {
  name: 'alertStatus',
  members: AlertStatus,
  fields: {
    unknown: {value: 0},
    newAlert: {value: 1},
    inProgress: {value: 2},
    resolved: {value: 3},
    dismissed: {value: 4},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<AlertStatus>;
//#endregion