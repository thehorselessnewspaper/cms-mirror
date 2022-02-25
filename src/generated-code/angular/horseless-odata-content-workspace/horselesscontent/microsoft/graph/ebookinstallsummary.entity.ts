//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface EBookInstallSummary extends Entity {
  //#region ODataApiGen Properties
  installedDeviceCount: number;
  failedDeviceCount: number;
  notInstalledDeviceCount: number;
  installedUserCount: number;
  failedUserCount: number;
  notInstalledUserCount: number;
  //#endregion
}