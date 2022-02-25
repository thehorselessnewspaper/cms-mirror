//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ClientPlatform } from './clientplatform.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ClientPlatformConfig = {
  name: 'clientPlatform',
  members: ClientPlatform,
  fields: {
    unknown: {value: 0},
    windows: {value: 1},
    macOS: {value: 2},
    iOS: {value: 3},
    android: {value: 4},
    web: {value: 5},
    ipPhone: {value: 6},
    roomSystem: {value: 7},
    surfaceHub: {value: 8},
    holoLens: {value: 9},
    unknownFutureValue: {value: 10}
  }
} as EnumTypeConfig<ClientPlatform>;
//#endregion