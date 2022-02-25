//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DayOfWeek } from './dayofweek.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DayOfWeekConfig = {
  name: 'dayOfWeek',
  members: DayOfWeek,
  fields: {
    sunday: {value: 0},
    monday: {value: 1},
    tuesday: {value: 2},
    wednesday: {value: 3},
    thursday: {value: 4},
    friday: {value: 5},
    saturday: {value: 6}
  }
} as EnumTypeConfig<DayOfWeek>;
//#endregion