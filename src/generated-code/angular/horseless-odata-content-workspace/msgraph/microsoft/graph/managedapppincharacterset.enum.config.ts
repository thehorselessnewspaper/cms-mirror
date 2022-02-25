//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppPinCharacterSet } from './managedapppincharacterset.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ManagedAppPinCharacterSetConfig = {
  name: 'managedAppPinCharacterSet',
  members: ManagedAppPinCharacterSet,
  fields: {
    numeric: {value: 0},
    alphanumericAndSymbol: {value: 1}
  }
} as EnumTypeConfig<ManagedAppPinCharacterSet>;
//#endregion