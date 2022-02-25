//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppFlaggedReason } from './managedappflaggedreason.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ManagedAppFlaggedReasonConfig = {
  name: 'managedAppFlaggedReason',
  members: ManagedAppFlaggedReason,
  fields: {
    none: {value: 0},
    rootedDevice: {value: 1}
  }
} as EnumTypeConfig<ManagedAppFlaggedReason>;
//#endregion