//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.complex';
//#endregion

export interface WindowsInformationProtectionDesktopApp extends WindowsInformationProtectionApp {
  //#region ODataApiGen Properties
  binaryName: string;
  binaryVersionLow?: string;
  binaryVersionHigh?: string;
  //#endregion
}