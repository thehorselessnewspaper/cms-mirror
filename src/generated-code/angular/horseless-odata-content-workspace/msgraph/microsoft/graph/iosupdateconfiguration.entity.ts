//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { DayOfWeek } from './dayofweek.enum';
//#endregion

export interface IosUpdateConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  activeHoursStart: Date;
  activeHoursEnd: Date;
  scheduledInstallDays: DayOfWeek;
  utcTimeOffsetInMinutes?: number;
  //#endregion
}