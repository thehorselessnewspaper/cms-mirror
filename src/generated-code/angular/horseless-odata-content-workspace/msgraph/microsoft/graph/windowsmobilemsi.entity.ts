//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileLobApp } from './mobilelobapp.entity';
//#endregion

export interface WindowsMobileMSI extends MobileLobApp {
  //#region ODataApiGen Properties
  commandLine?: string;
  productCode?: string;
  productVersion?: string;
  ignoreVersionDetection: boolean;
  //#endregion
}