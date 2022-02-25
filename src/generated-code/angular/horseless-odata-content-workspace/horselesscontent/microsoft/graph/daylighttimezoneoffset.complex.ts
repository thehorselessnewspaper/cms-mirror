//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { StandardTimeZoneOffset } from './standardtimezoneoffset.complex';
//#endregion

export interface DaylightTimeZoneOffset extends StandardTimeZoneOffset {
  //#region ODataApiGen Properties
  daylightBias?: number;
  //#endregion
}