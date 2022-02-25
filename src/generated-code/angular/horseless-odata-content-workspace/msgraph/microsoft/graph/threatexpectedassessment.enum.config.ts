//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ThreatExpectedAssessment } from './threatexpectedassessment.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ThreatExpectedAssessmentConfig = {
  name: 'threatExpectedAssessment',
  members: ThreatExpectedAssessment,
  fields: {
    block: {value: 1},
    unblock: {value: 2}
  }
} as EnumTypeConfig<ThreatExpectedAssessment>;
//#endregion