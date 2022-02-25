//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaDirection } from './mediadirection.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MediaDirectionConfig = {
  name: 'mediaDirection',
  members: MediaDirection,
  fields: {
    inactive: {value: 0},
    sendOnly: {value: 1},
    receiveOnly: {value: 2},
    sendReceive: {value: 3}
  }
} as EnumTypeConfig<MediaDirection>;
//#endregion