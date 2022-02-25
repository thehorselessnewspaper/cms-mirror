//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsUpdateInstallScheduleType } from './windowsupdateinstallscheduletype.complex';
import { WeeklySchedule } from './weeklyschedule.enum';
//#endregion

export interface WindowsUpdateScheduledInstall extends WindowsUpdateInstallScheduleType {
  //#region ODataApiGen Properties
  scheduledInstallDay: WeeklySchedule;
  scheduledInstallTime: Date;
  //#endregion
}