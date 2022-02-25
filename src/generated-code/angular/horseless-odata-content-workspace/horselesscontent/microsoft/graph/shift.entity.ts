//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { ShiftItem } from './shiftitem.complex';
//#endregion

export interface Shift extends ChangeTrackedEntity {
  //#region ODataApiGen Properties
  sharedShift?: ShiftItem;
  draftShift?: ShiftItem;
  userId?: string;
  schedulingGroupId?: string;
  //#endregion
}