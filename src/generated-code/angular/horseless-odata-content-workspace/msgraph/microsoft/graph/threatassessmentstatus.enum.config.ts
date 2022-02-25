//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ThreatAssessmentStatus } from './threatassessmentstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ThreatAssessmentStatusConfig = {
  name: 'threatAssessmentStatus',
  members: ThreatAssessmentStatus,
  fields: {
    pending: {value: 1},
    completed: {value: 2}
  }
} as EnumTypeConfig<ThreatAssessmentStatus>;
//#endregion