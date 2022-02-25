//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UrlAssessmentRequest } from './urlassessmentrequest.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UrlAssessmentRequestEntityConfig = {
  name: 'urlAssessmentRequest',
  base: 'microsoft.graph.threatAssessmentRequest',
  fields: {
    url: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<UrlAssessmentRequest>;
//#endregion