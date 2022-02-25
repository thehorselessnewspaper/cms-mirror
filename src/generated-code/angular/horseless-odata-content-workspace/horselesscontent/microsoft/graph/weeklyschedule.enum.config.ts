//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WeeklySchedule } from './weeklyschedule.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WeeklyScheduleConfig = {
  name: 'weeklySchedule',
  members: WeeklySchedule,
  fields: {
    userDefined: {value: 0},
    everyday: {value: 1},
    sunday: {value: 2},
    monday: {value: 3},
    tuesday: {value: 4},
    wednesday: {value: 5},
    thursday: {value: 6},
    friday: {value: 7},
    saturday: {value: 8}
  }
} as EnumTypeConfig<WeeklySchedule>;
//#endregion