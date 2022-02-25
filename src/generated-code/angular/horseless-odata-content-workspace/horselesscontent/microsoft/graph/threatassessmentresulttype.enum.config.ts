//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ThreatAssessmentResultType } from './threatassessmentresulttype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ThreatAssessmentResultTypeConfig = {
  name: 'threatAssessmentResultType',
  members: ThreatAssessmentResultType,
  fields: {
    checkPolicy: {value: 1},
    rescan: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<ThreatAssessmentResultType>;
//#endregion