//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsUpdateInstallScheduleType } from './windowsupdateinstallscheduletype.complex';
//#endregion

export interface WindowsUpdateActiveHoursInstall extends WindowsUpdateInstallScheduleType {
  //#region ODataApiGen Properties
  activeHoursStart: Date;
  activeHoursEnd: Date;
  //#endregion
}