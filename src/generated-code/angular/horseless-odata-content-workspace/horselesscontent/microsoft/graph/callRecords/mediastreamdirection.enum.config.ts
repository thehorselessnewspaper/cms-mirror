//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaStreamDirection } from './mediastreamdirection.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MediaStreamDirectionConfig = {
  name: 'mediaStreamDirection',
  members: MediaStreamDirection,
  fields: {
    callerToCallee: {value: 0},
    calleeToCaller: {value: 1}
  }
} as EnumTypeConfig<MediaStreamDirection>;
//#endregion