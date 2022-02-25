//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { InstallState } from './installstate.enum';
//#endregion

export interface DeviceInstallState extends Entity {
  //#region ODataApiGen Properties
  deviceName?: string;
  deviceId?: string;
  lastSyncDateTime: Date;
  installState: InstallState;
  errorCode?: string;
  osVersion?: string;
  osDescription?: string;
  userName?: string;
  //#endregion
}