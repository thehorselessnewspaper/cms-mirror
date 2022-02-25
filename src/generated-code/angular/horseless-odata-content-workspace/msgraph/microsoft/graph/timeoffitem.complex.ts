//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleEntity } from './scheduleentity.complex';
//#endregion

export interface TimeOffItem extends ScheduleEntity {
  //#region ODataApiGen Properties
  timeOffReasonId?: string;
  //#endregion
}