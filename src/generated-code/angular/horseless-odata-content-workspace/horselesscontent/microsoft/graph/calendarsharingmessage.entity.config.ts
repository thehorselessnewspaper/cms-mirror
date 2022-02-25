//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalendarSharingMessage } from './calendarsharingmessage.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CalendarSharingMessageEntityConfig = {
  name: 'calendarSharingMessage',
  base: 'microsoft.graph.message',
  fields: {
    canAccept: {type: 'Edm.Boolean'},
    suggestedCalendarName: {type: 'Edm.String'},
    sharingMessageAction: {type: 'graph.calendarSharingMessageAction'},
    sharingMessageActions: {type: 'graph.calendarSharingMessageAction', collection: true}
  }
} as StructuredTypeConfig<CalendarSharingMessage>;
//#endregion