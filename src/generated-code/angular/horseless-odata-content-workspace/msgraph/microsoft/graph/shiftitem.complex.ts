//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleEntity } from './scheduleentity.complex';
import { ShiftActivity } from './shiftactivity.complex';
//#endregion

export interface ShiftItem extends ScheduleEntity {
  //#region ODataApiGen Properties
  displayName?: string;
  notes?: string;
  activities?: ShiftActivity[];
  //#endregion
}