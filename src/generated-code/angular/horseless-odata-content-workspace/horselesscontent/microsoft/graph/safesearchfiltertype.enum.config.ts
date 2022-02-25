//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SafeSearchFilterType } from './safesearchfiltertype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const SafeSearchFilterTypeConfig = {
  name: 'safeSearchFilterType',
  members: SafeSearchFilterType,
  fields: {
    userDefined: {value: 0},
    strict: {value: 1},
    moderate: {value: 2}
  }
} as EnumTypeConfig<SafeSearchFilterType>;
//#endregion