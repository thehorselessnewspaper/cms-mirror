//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FirewallPreSharedKeyEncodingMethodType } from './firewallpresharedkeyencodingmethodtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const FirewallPreSharedKeyEncodingMethodTypeConfig = {
  name: 'firewallPreSharedKeyEncodingMethodType',
  members: FirewallPreSharedKeyEncodingMethodType,
  fields: {
    deviceDefault: {value: 0},
    none: {value: 1},
    utF8: {value: 2}
  }
} as EnumTypeConfig<FirewallPreSharedKeyEncodingMethodType>;
//#endregion