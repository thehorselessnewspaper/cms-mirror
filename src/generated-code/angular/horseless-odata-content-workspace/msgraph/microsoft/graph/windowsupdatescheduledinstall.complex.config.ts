//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsUpdateScheduledInstall } from './windowsupdatescheduledinstall.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsUpdateScheduledInstallComplexConfig = {
  name: 'windowsUpdateScheduledInstall',
  base: 'microsoft.graph.windowsUpdateInstallScheduleType',
  fields: {
    scheduledInstallDay: {type: 'graph.weeklySchedule', nullable: false},
    scheduledInstallTime: {type: 'Edm.TimeOfDay', nullable: false}
  }
} as StructuredTypeConfig<WindowsUpdateScheduledInstall>;
//#endregion