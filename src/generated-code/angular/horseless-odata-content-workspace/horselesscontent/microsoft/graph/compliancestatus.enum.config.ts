//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ComplianceStatus } from './compliancestatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ComplianceStatusConfig = {
  name: 'complianceStatus',
  members: ComplianceStatus,
  fields: {
    unknown: {value: 0},
    notApplicable: {value: 1},
    compliant: {value: 2},
    remediated: {value: 3},
    nonCompliant: {value: 4},
    error: {value: 5},
    conflict: {value: 6},
    notAssigned: {value: 7}
  }
} as EnumTypeConfig<ComplianceStatus>;
//#endregion