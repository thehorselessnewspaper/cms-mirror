//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WifiBand } from './wifiband.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WifiBandConfig = {
  name: 'wifiBand',
  members: WifiBand,
  fields: {
    unknown: {value: 0},
    frequency24GHz: {value: 1},
    frequency50GHz: {value: 2},
    frequency60GHz: {value: 3},
    unknownFutureValue: {value: 4}
  }
} as EnumTypeConfig<WifiBand>;
//#endregion