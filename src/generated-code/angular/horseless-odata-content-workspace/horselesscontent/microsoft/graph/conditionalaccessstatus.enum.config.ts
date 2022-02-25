//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ConditionalAccessStatus } from './conditionalaccessstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ConditionalAccessStatusConfig = {
  name: 'conditionalAccessStatus',
  members: ConditionalAccessStatus,
  fields: {
    success: {value: 0},
    failure: {value: 1},
    notApplied: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<ConditionalAccessStatus>;
//#endregion