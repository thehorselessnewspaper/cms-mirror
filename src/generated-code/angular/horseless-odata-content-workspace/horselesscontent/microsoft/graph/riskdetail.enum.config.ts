//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RiskDetail } from './riskdetail.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RiskDetailConfig = {
  name: 'riskDetail',
  members: RiskDetail,
  fields: {
    none: {value: 0},
    adminGeneratedTemporaryPassword: {value: 1},
    userPerformedSecuredPasswordChange: {value: 2},
    userPerformedSecuredPasswordReset: {value: 3},
    adminConfirmedSigninSafe: {value: 4},
    aiConfirmedSigninSafe: {value: 5},
    userPassedMFADrivenByRiskBasedPolicy: {value: 6},
    adminDismissedAllRiskForUser: {value: 7},
    adminConfirmedSigninCompromised: {value: 8},
    hidden: {value: 9},
    adminConfirmedUserCompromised: {value: 10},
    unknownFutureValue: {value: 11}
  }
} as EnumTypeConfig<RiskDetail>;
//#endregion