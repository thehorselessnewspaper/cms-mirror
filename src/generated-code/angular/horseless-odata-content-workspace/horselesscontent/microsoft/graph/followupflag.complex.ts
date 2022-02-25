//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FollowupFlagStatus } from './followupflagstatus.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
//#endregion

export interface FollowupFlag {
  //#region ODataApiGen Properties
  completedDateTime?: DateTimeTimeZone;
  dueDateTime?: DateTimeTimeZone;
  startDateTime?: DateTimeTimeZone;
  flagStatus?: FollowupFlagStatus;
  //#endregion
}