//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { LocaleInfo } from './localeinfo.complex';
//#endregion

export interface AutomaticRepliesMailTips {
  //#region ODataApiGen Properties
  message?: string;
  messageLanguage?: LocaleInfo;
  scheduledStartTime?: DateTimeTimeZone;
  scheduledEndTime?: DateTimeTimeZone;
  //#endregion
}