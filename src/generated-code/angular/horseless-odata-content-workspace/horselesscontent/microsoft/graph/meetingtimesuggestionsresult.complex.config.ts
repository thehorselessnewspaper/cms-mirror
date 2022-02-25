//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeetingTimeSuggestionsResult } from './meetingtimesuggestionsresult.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MeetingTimeSuggestionsResultComplexConfig = {
  name: 'meetingTimeSuggestionsResult',
  fields: {
    meetingTimeSuggestions: {type: 'graph.meetingTimeSuggestion', collection: true},
    emptySuggestionsReason: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<MeetingTimeSuggestionsResult>;
//#endregion