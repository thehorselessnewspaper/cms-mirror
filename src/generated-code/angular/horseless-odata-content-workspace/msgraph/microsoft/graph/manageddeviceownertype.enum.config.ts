//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedDeviceOwnerType } from './manageddeviceownertype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ManagedDeviceOwnerTypeConfig = {
  name: 'managedDeviceOwnerType',
  members: ManagedDeviceOwnerType,
  fields: {
    unknown: {value: 0},
    company: {value: 1},
    personal: {value: 2}
  }
} as EnumTypeConfig<ManagedDeviceOwnerType>;
//#endregion