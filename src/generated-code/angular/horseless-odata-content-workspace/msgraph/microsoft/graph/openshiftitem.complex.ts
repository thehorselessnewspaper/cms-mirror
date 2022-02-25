//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ShiftItem } from './shiftitem.complex';
//#endregion

export interface OpenShiftItem extends ShiftItem {
  //#region ODataApiGen Properties
  openSlotCount: number;
  //#endregion
}