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
    audio: {value: 1},
    video: {value: 2},
    videoBasedScreenSharing: {value: 3},
    data: {value: 4},
    unknownFutureValue: {value: 5}
  }
} as EnumTypeConfig<Modality>;
//#endregion