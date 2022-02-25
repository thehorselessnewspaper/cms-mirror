//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EventMessageRequest } from './eventmessagerequest.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EventMessageRequestEntityConfig = {
  name: 'eventMessageRequest',
  base: 'microsoft.graph.eventMessage',
  fields: {
    previousLocation: {type: 'graph.location'},
    previousStartDateTime: {type: 'graph.dateTimeTimeZone'},
    previousEndDateTime: {type: 'graph.dateTimeTimeZone'},
    responseRequested: {type: 'Edm.Boolean'},
    allowNewTimeProposals: {type: 'Edm.Boolean'},
    meetingRequestType: {type: 'graph.meetingRequestType'}
  }
} as StructuredTypeConfig<EventMessageRequest>;
//#endregion