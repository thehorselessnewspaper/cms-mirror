//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkingHours } from './workinghours.complex';
import { ScheduleItem } from './scheduleitem.complex';
import { FreeBusyError } from './freebusyerror.complex';
//#endregion

export interface ScheduleInformation {
  //#region ODataApiGen Properties
  scheduleId?: string;
  scheduleItems?: ScheduleItem[];
  availabilityView?: string;
  error?: FreeBusyError;
  workingHours?: WorkingHours;
  //#endregion
}