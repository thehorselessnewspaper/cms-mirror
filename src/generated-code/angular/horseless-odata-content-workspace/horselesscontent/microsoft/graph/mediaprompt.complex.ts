//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Prompt } from './prompt.complex';
import { MediaInfo } from './mediainfo.complex';
//#endregion

export interface MediaPrompt extends Prompt {
  //#region ODataApiGen Properties
  mediaInfo: MediaInfo;
  //#endregion
}