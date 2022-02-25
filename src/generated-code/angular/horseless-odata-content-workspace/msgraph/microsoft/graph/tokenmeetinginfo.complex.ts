//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeetingInfo } from './meetinginfo.complex';
//#endregion

export interface TokenMeetingInfo extends MeetingInfo {
  //#region ODataApiGen Properties
  token: string;
  //#endregion
}