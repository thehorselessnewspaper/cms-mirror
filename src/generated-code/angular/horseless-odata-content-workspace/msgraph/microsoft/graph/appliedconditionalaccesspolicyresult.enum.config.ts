//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppliedConditionalAccessPolicyResult } from './appliedconditionalaccesspolicyresult.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AppliedConditionalAccessPolicyResultConfig = {
  name: 'appliedConditionalAccessPolicyResult',
  members: AppliedConditionalAccessPolicyResult,
  fields: {
    success: {value: 0},
    failure: {value: 1},
    notApplied: {value: 2},
    notEnabled: {value: 3},
    unknown: {value: 4},
    unknownFutureValue: {value: 5}
  }
} as EnumTypeConfig<AppliedConditionalAccessPolicyResult>;
//#endregion