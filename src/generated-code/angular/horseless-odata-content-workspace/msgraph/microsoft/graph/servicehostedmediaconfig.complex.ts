//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaConfig } from './mediaconfig.complex';
import { MediaInfo } from './mediainfo.complex';
//#endregion

export interface ServiceHostedMediaConfig extends MediaConfig {
  //#region ODataApiGen Properties
  preFetchMedia?: MediaInfo[];
  //#endregion
}