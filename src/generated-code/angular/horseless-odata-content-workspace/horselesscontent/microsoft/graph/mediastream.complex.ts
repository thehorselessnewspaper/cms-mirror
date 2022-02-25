//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaDirection } from './mediadirection.enum';
import { Modality } from './modality.enum';
//#endregion

export interface MediaStream {
  //#region ODataApiGen Properties
  mediaType: Modality;
  label?: string;
  sourceId: string;
  direction: MediaDirection;
  serverMuted: boolean;
  //#endregion
}