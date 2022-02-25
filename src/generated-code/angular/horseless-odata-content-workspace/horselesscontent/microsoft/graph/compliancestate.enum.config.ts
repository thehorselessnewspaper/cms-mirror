//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ComplianceState } from './compliancestate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ComplianceStateConfig = {
  name: 'complianceState',
  members: ComplianceState,
  fields: {
    unknown: {value: 0},
    compliant: {value: 1},
    noncompliant: {value: 2},
    conflict: {value: 3},
    error: {value: 4},
    inGracePeriod: {value: 254},
    configManager: {value: 255}
  }
} as EnumTypeConfig<ComplianceState>;
//#endregion