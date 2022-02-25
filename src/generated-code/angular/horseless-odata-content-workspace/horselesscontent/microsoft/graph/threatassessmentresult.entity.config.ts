//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ThreatAssessmentResult } from './threatassessmentresult.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ThreatAssessmentResultEntityConfig = {
  name: 'threatAssessmentResult',
  base: 'microsoft.graph.entity',
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    resultType: {type: 'graph.threatAssessmentResultType'},
    message: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ThreatAssessmentResult>;
//#endregion