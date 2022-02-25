//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaState } from './mediastate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MediaStateConfig = {
  name: 'mediaState',
  members: MediaState,
  fields: {
    active: {value: 0},
    inactive: {value: 1},
    unknownFutureValue: {value: 2}
  }
} as EnumTypeConfig<MediaState>;
//#endregion