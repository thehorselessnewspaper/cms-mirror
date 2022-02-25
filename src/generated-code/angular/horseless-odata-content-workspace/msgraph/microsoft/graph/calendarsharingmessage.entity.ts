//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Message } from './message.entity';
import { CalendarSharingMessageAction } from './calendarsharingmessageaction.complex';
//#endregion

export interface CalendarSharingMessage extends Message {
  //#region ODataApiGen Properties
  canAccept?: boolean;
  suggestedCalendarName?: string;
  sharingMessageAction?: CalendarSharingMessageAction;
  sharingMessageActions?: CalendarSharingMessageAction[];
  //#endregion
}