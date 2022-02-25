//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalendarColor } from './calendarcolor.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const CalendarColorConfig = {
  name: 'calendarColor',
  members: CalendarColor,
  fields: {
    lightBlue: {value: 0},
    lightGreen: {value: 1},
    lightOrange: {value: 2},
    lightGray: {value: 3},
    lightYellow: {value: 4},
    lightTeal: {value: 5},
    lightPink: {value: 6},
    lightBrown: {value: 7},
    lightRed: {value: 8},
    maxColor: {value: 9},
    auto: {value: -1}
  }
} as EnumTypeConfig<CalendarColor>;
//#endregion