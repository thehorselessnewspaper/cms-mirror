//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResponseType } from './responsetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ResponseTypeConfig = {
  name: 'responseType',
  members: ResponseType,
  fields: {
    none: {value: 0},
    organizer: {value: 1},
    tentativelyAccepted: {value: 2},
    accepted: {value: 3},
    declined: {value: 4},
    notResponded: {value: 5}
  }
} as EnumTypeConfig<ResponseType>;
//#endregion