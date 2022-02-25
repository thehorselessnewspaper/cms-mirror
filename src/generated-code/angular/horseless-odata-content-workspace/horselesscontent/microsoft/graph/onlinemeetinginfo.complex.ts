//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Phone } from './phone.complex';
//#endregion

export interface OnlineMeetingInfo {
  //#region ODataApiGen Properties
  joinUrl?: string;
  conferenceId?: string;
  tollNumber?: string;
  tollFreeNumbers?: string[];
  quickDial?: string;
  phones?: Phone[];
  //#endregion
}