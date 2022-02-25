//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedMobileLobApp } from './managedmobilelobapp.entity';
import { IosDeviceType } from './iosdevicetype.complex';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.complex';
//#endregion

export interface ManagedIOSLobApp extends ManagedMobileLobApp {
  //#region ODataApiGen Properties
  bundleId?: string;
  applicableDeviceType: IosDeviceType;
  minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
  expirationDateTime?: Date;
  versionNumber?: string;
  buildNumber?: string;
  //#endregion
}