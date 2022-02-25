//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RiskState } from './riskstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RiskStateConfig = {
  name: 'riskState',
  members: RiskState,
  fields: {
    none: {value: 0},
    confirmedSafe: {value: 1},
    remediated: {value: 2},
    dismissed: {value: 3},
    atRisk: {value: 4},
    confirmedCompromised: {value: 5},
    unknownFutureValue: {value: 6}
  }
} as EnumTypeConfig<RiskState>;
//#endregion