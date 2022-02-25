//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Status } from './status.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const StatusConfig = {
  name: 'status',
  members: Status,
  fields: {
    active: {value: 0},
    updated: {value: 1},
    deleted: {value: 2},
    ignored: {value: 3},
    unknownFutureValue: {value: 4}
  }
} as EnumTypeConfig<Status>;
//#endregion