//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalendarSharingMessageAction } from './calendarsharingmessageaction.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CalendarSharingMessageActionComplexConfig = {
  name: 'calendarSharingMessageAction',
  fields: {
    importance: {type: 'graph.calendarSharingActionImportance'},
    actionType: {type: 'graph.calendarSharingActionType'},
    action: {type: 'graph.calendarSharingAction'}
  }
} as StructuredTypeConfig<CalendarSharingMessageAction>;
//#endregion