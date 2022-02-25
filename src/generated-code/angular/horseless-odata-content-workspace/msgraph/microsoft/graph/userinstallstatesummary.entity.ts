//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { DeviceInstallState } from './deviceinstallstate.entity';
//#endregion

export interface UserInstallStateSummary extends Entity {
  //#region ODataApiGen Properties
  userName?: string;
  installedDeviceCount: number;
  failedDeviceCount: number;
  notInstalledDeviceCount: number;
  deviceStates?: DeviceInstallState[];
  //#endregion
}