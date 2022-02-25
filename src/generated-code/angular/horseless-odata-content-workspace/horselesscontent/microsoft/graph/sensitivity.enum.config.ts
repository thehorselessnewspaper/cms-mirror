//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Sensitivity } from './sensitivity.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const SensitivityConfig = {
  name: 'sensitivity',
  members: Sensitivity,
  fields: {
    normal: {value: 0},
    personal: {value: 1},
    private: {value: 2},
    confidential: {value: 3}
  }
} as EnumTypeConfig<Sensitivity>;
//#endregion