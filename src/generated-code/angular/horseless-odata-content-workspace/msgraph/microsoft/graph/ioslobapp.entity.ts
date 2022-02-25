//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileLobApp } from './mobilelobapp.entity';
import { IosDeviceType } from './iosdevicetype.complex';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.complex';
//#endregion

export interface IosLobApp extends MobileLobApp {
  //#region ODataApiGen Properties
  bundleId?: string;
  applicableDeviceType: IosDeviceType;
  minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
  expirationDateTime?: Date;
  versionNumber?: string;
  buildNumber?: string;
  //#endregion
}