//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { OmaSetting } from './omasetting.complex';
//#endregion

export interface AndroidWorkProfileCustomConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  omaSettings?: OmaSetting[];
  //#endregion
}