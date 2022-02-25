//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ScheduleEntityThemeConfig = {
  name: 'scheduleEntityTheme',
  members: ScheduleEntityTheme,
  fields: {
    white: {value: 0},
    blue: {value: 1},
    green: {value: 2},
    purple: {value: 3},
    pink: {value: 4},
    yellow: {value: 5},
    gray: {value: 6},
    darkBlue: {value: 7},
    darkGreen: {value: 8},
    darkPurple: {value: 9},
    darkPink: {value: 10},
    darkYellow: {value: 11},
    unknownFutureValue: {value: 12}
  }
} as EnumTypeConfig<ScheduleEntityTheme>;
//#endregion