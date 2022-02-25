//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppDataStorageLocation } from './managedappdatastoragelocation.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ManagedAppDataStorageLocationConfig = {
  name: 'managedAppDataStorageLocation',
  members: ManagedAppDataStorageLocation,
  fields: {
    oneDriveForBusiness: {value: 1},
    sharePoint: {value: 2},
    localStorage: {value: 6}
  }
} as EnumTypeConfig<ManagedAppDataStorageLocation>;
//#endregion