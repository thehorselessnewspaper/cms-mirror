//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RejectReason } from './rejectreason.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RejectReasonConfig = {
  name: 'rejectReason',
  members: RejectReason,
  fields: {
    none: {value: 0},
    busy: {value: 1},
    forbidden: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<RejectReason>;
//#endregion