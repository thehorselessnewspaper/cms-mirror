//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Json } from './json.complex';
import { ImageInfo } from './imageinfo.complex';
//#endregion

export interface VisualInfo {
  //#region ODataApiGen Properties
  attribution?: ImageInfo;
  backgroundColor?: string;
  description?: string;
  displayText: string;
  content?: Json;
  //#endregion
}