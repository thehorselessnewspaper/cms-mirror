//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppDataTransferLevel } from './managedappdatatransferlevel.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ManagedAppDataTransferLevelConfig = {
  name: 'managedAppDataTransferLevel',
  members: ManagedAppDataTransferLevel,
  fields: {
    allApps: {value: 0},
    managedApps: {value: 1},
    none: {value: 2}
  }
} as EnumTypeConfig<ManagedAppDataTransferLevel>;
//#endregion