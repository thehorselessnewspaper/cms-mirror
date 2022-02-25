//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileLobApp } from './mobilelobapp.entity';
import { WindowsArchitecture } from './windowsarchitecture.enum';
import { WindowsDeviceType } from './windowsdevicetype.enum';
import { WindowsMinimumOperatingSystem } from './windowsminimumoperatingsystem.complex';
//#endregion

export interface WindowsUniversalAppX extends MobileLobApp {
  //#region ODataApiGen Properties
  applicableArchitectures: WindowsArchitecture;
  applicableDeviceTypes: WindowsDeviceType;
  identityName?: string;
  identityPublisherHash: string;
  identityResourceIdentifier?: string;
  isBundle: boolean;
  minimumSupportedOperatingSystem: WindowsMinimumOperatingSystem;
  identityVersion?: string;
  //#endregion
}