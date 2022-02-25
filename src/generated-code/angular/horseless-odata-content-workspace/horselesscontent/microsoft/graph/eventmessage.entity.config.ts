//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EventMessage } from './eventmessage.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EventMessageEntityConfig = {
  name: 'eventMessage',
  base: 'microsoft.graph.message',
  fields: {
    meetingMessageType: {type: 'graph.meetingMessageType'},
    startDateTime: {type: 'graph.dateTimeTimeZone'},
    endDateTime: {type: 'graph.dateTimeTimeZone'},
    location: {type: 'graph.location'},
    type: {type: 'graph.eventType'},
    recurrence: {type: 'graph.patternedRecurrence'},
    isOutOfDate: {type: 'Edm.Boolean'},
    isAllDay: {type: 'Edm.Boolean'},
    isDelegated: {type: 'Edm.Boolean'},
    event: {type: 'graph.event', navigation: true}
  }
} as StructuredTypeConfig<EventMessage>;
//#endregion