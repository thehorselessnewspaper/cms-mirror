//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
//#endregion

export interface TimeOffRequest extends ScheduleChangeRequest {
  //#region ODataApiGen Properties
  startDateTime?: Date;
  endDateTime?: Date;
  timeOffReasonId?: string;
  //#endregion
}