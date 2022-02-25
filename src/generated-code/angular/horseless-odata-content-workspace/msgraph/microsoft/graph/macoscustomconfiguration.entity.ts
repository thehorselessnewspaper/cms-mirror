//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
//#endregion

export interface MacOSCustomConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  payloadName: string;
  payloadFileName?: string;
  payload: ArrayBuffer;
  //#endregion
}