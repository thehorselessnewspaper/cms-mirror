//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalendarSharingAction } from './calendarsharingaction.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const CalendarSharingActionConfig = {
  name: 'calendarSharingAction',
  members: CalendarSharingAction,
  fields: {
    accept: {value: 0},
    acceptAndViewCalendar: {value: 1},
    viewCalendar: {value: 2},
    addThisCalendar: {value: 3}
  }
} as EnumTypeConfig<CalendarSharingAction>;
//#endregion