//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DeviceThreatProtectionLevelConfig = {
  name: 'deviceThreatProtectionLevel',
  members: DeviceThreatProtectionLevel,
  fields: {
    unavailable: {value: 0},
    secured: {value: 1},
    low: {value: 2},
    medium: {value: 3},
    high: {value: 4},
    notSet: {value: 10}
  }
} as EnumTypeConfig<DeviceThreatProtectionLevel>;
//#endregion