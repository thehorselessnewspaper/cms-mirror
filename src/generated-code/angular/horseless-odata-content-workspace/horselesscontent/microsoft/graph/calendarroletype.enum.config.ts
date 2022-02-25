//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalendarRoleType } from './calendarroletype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const CalendarRoleTypeConfig = {
  name: 'calendarRoleType',
  members: CalendarRoleType,
  fields: {
    none: {value: 0},
    freeBusyRead: {value: 1},
    limitedRead: {value: 2},
    read: {value: 3},
    write: {value: 4},
    delegateWithoutPrivateEventAccess: {value: 5},
    delegateWithPrivateEventAccess: {value: 6},
    custom: {value: 7}
  }
} as EnumTypeConfig<CalendarRoleType>;
//#endregion