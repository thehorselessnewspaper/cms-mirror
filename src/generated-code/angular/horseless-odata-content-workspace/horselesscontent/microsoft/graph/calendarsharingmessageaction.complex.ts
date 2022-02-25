//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalendarSharingActionImportance } from './calendarsharingactionimportance.enum';
import { CalendarSharingActionType } from './calendarsharingactiontype.enum';
import { CalendarSharingAction } from './calendarsharingaction.enum';
//#endregion

export interface CalendarSharingMessageAction {
  //#region ODataApiGen Properties
  importance?: CalendarSharingActionImportance;
  actionType?: CalendarSharingActionType;
  action?: CalendarSharingAction;
  //#endregion
}