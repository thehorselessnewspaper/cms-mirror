//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppDataEncryptionType } from './managedappdataencryptiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ManagedAppDataEncryptionTypeConfig = {
  name: 'managedAppDataEncryptionType',
  members: ManagedAppDataEncryptionType,
  fields: {
    useDeviceSettings: {value: 0},
    afterDeviceRestart: {value: 1},
    whenDeviceLockedExceptOpenFiles: {value: 2},
    whenDeviceLocked: {value: 3}
  }
} as EnumTypeConfig<ManagedAppDataEncryptionType>;
//#endregion