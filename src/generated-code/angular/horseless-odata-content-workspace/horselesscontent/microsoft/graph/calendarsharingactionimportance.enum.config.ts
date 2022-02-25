//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalendarSharingActionImportance } from './calendarsharingactionimportance.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const CalendarSharingActionImportanceConfig = {
  name: 'calendarSharingActionImportance',
  members: CalendarSharingActionImportance,
  fields: {
    primary: {value: 0},
    secondary: {value: 1}
  }
} as EnumTypeConfig<CalendarSharingActionImportance>;
//#endregion