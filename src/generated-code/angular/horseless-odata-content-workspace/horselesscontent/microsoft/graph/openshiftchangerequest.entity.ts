//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
//#endregion

export interface OpenShiftChangeRequest extends ScheduleChangeRequest {
  //#region ODataApiGen Properties
  openShiftId?: string;
  //#endregion
}