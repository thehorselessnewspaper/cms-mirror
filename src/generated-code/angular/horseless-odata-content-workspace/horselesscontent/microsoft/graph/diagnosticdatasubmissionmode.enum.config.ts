//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DiagnosticDataSubmissionMode } from './diagnosticdatasubmissionmode.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DiagnosticDataSubmissionModeConfig = {
  name: 'diagnosticDataSubmissionMode',
  members: DiagnosticDataSubmissionMode,
  fields: {
    userDefined: {value: 0},
    none: {value: 1},
    basic: {value: 2},
    enhanced: {value: 3},
    full: {value: 4}
  }
} as EnumTypeConfig<DiagnosticDataSubmissionMode>;
//#endregion