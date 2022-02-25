//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RiskLevel } from './risklevel.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RiskLevelConfig = {
  name: 'riskLevel',
  members: RiskLevel,
  fields: {
    low: {value: 0},
    medium: {value: 1},
    high: {value: 2},
    hidden: {value: 3},
    none: {value: 4},
    unknownFutureValue: {value: 5}
  }
} as EnumTypeConfig<RiskLevel>;
//#endregion