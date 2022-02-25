//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalendarSharingActionType } from './calendarsharingactiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const CalendarSharingActionTypeConfig = {
  name: 'calendarSharingActionType',
  members: CalendarSharingActionType,
  fields: {
    accept: {value: 0}
  }
} as EnumTypeConfig<CalendarSharingActionType>;
//#endregion