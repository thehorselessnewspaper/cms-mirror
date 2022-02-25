//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Modality } from './modality.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ModalityConfig = {
  name: 'modality',
  members: Modality,
  fields: {
    audio: {value: 0},
    video: {value: 1},
    videoBasedScreenSharing: {value: 2},
    data: {value: 3},
    screenSharing: {value: 4},
    unknownFutureValue: {value: 5}
  }
} as EnumTypeConfig<Modality>;
//#endregion