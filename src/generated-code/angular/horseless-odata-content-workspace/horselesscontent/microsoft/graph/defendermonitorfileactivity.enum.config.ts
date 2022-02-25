//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DefenderMonitorFileActivity } from './defendermonitorfileactivity.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DefenderMonitorFileActivityConfig = {
  name: 'defenderMonitorFileActivity',
  members: DefenderMonitorFileActivity,
  fields: {
    userDefined: {value: 0},
    disable: {value: 1},
    monitorAllFiles: {value: 2},
    monitorIncomingFilesOnly: {value: 3},
    monitorOutgoingFilesOnly: {value: 4}
  }
} as EnumTypeConfig<DefenderMonitorFileActivity>;
//#endregion