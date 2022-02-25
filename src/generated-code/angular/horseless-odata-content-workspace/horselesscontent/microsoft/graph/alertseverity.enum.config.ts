//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AlertSeverity } from './alertseverity.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AlertSeverityConfig = {
  name: 'alertSeverity',
  members: AlertSeverity,
  fields: {
    unknown: {value: 0},
    informational: {value: 1},
    low: {value: 2},
    medium: {value: 3},
    high: {value: 4},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<AlertSeverity>;
//#endregion