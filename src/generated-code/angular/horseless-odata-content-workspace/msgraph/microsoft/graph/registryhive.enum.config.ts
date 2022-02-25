//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RegistryHive } from './registryhive.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RegistryHiveConfig = {
  name: 'registryHive',
  members: RegistryHive,
  fields: {
    unknown: {value: 0},
    currentConfig: {value: 1},
    currentUser: {value: 2},
    localMachineSam: {value: 3},
    localMachineSecurity: {value: 4},
    localMachineSoftware: {value: 5},
    localMachineSystem: {value: 6},
    usersDefault: {value: 7},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<RegistryHive>;
//#endregion