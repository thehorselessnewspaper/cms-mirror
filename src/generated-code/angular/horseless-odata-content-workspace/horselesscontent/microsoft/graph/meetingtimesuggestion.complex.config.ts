//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeetingTimeSuggestion } from './meetingtimesuggestion.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MeetingTimeSuggestionComplexConfig = {
  name: 'meetingTimeSuggestion',
  fields: {
    confidence: {type: 'Edm.Double'},
    order: {type: 'Edm.Int32'},
    organizerAvailability: {type: 'graph.freeBusyStatus'},
    attendeeAvailability: {type: 'graph.attendeeAvailability', collection: true},
    locations: {type: 'graph.location', collection: true},
    suggestionReason: {type: 'Edm.String'},
    meetingTimeSlot: {type: 'graph.timeSlot'}
  }
} as StructuredTypeConfig<MeetingTimeSuggestion>;
//#endregion