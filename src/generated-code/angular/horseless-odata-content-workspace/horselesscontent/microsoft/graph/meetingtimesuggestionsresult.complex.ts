//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeetingTimeSuggestion } from './meetingtimesuggestion.complex';
//#endregion

export interface MeetingTimeSuggestionsResult {
  //#region ODataApiGen Properties
  meetingTimeSuggestions?: MeetingTimeSuggestion[];
  emptySuggestionsReason?: string;
  //#endregion
}