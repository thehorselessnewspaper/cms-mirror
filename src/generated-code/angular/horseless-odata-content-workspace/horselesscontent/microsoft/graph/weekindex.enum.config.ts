//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WeekIndex } from './weekindex.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WeekIndexConfig = {
  name: 'weekIndex',
  members: WeekIndex,
  fields: {
    first: {value: 0},
    second: {value: 1},
    third: {value: 2},
    fourth: {value: 3},
    last: {value: 4}
  }
} as EnumTypeConfig<WeekIndex>;
//#endregion