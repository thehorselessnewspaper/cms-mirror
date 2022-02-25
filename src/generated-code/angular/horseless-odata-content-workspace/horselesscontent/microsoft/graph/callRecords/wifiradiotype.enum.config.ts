//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WifiRadioType } from './wifiradiotype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WifiRadioTypeConfig = {
  name: 'wifiRadioType',
  members: WifiRadioType,
  fields: {
    unknown: {value: 0},
    wifi80211a: {value: 1},
    wifi80211b: {value: 2},
    wifi80211g: {value: 3},
    wifi80211n: {value: 4},
    wifi80211ac: {value: 5},
    wifi80211ax: {value: 6},
    unknownFutureValue: {value: 7}
  }
} as EnumTypeConfig<WifiRadioType>;
//#endregion