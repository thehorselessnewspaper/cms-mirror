//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IpRange } from './iprange.complex';
//#endregion

export interface IPv6Range extends IpRange {
  //#region ODataApiGen Properties
  lowerAddress: string;
  upperAddress: string;
  //#endregion
}