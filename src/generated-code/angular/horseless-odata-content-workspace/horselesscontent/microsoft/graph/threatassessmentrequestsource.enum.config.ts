//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ThreatAssessmentRequestSource } from './threatassessmentrequestsource.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ThreatAssessmentRequestSourceConfig = {
  name: 'threatAssessmentRequestSource',
  members: ThreatAssessmentRequestSource,
  fields: {
    undefined: {value: 0},
    user: {value: 1},
    administrator: {value: 2}
  }
} as EnumTypeConfig<ThreatAssessmentRequestSource>;
//#endregion