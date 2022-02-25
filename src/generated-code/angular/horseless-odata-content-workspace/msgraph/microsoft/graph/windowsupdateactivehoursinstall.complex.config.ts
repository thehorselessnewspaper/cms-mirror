//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsUpdateActiveHoursInstall } from './windowsupdateactivehoursinstall.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsUpdateActiveHoursInstallComplexConfig = {
  name: 'windowsUpdateActiveHoursInstall',
  base: 'microsoft.graph.windowsUpdateInstallScheduleType',
  fields: {
    activeHoursStart: {type: 'Edm.TimeOfDay', nullable: false},
    activeHoursEnd: {type: 'Edm.TimeOfDay', nullable: false}
  }
} as StructuredTypeConfig<WindowsUpdateActiveHoursInstall>;
//#endregion