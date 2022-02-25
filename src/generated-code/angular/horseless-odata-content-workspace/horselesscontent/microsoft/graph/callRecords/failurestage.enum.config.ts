//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FailureStage } from './failurestage.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const FailureStageConfig = {
  name: 'failureStage',
  members: FailureStage,
  fields: {
    unknown: {value: 0},
    callSetup: {value: 1},
    midcall: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<FailureStage>;
//#endregion