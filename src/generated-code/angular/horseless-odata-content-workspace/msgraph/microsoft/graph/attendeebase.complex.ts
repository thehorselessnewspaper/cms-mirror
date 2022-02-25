//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Recipient } from './recipient.complex';
import { AttendeeType } from './attendeetype.enum';
//#endregion

export interface AttendeeBase extends Recipient {
  //#region ODataApiGen Properties
  type?: AttendeeType;
  //#endregion
}