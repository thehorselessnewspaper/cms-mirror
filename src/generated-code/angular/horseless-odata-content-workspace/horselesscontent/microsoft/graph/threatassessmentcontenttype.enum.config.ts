//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ThreatAssessmentContentType } from './threatassessmentcontenttype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ThreatAssessmentContentTypeConfig = {
  name: 'threatAssessmentContentType',
  members: ThreatAssessmentContentType,
  fields: {
    mail: {value: 1},
    url: {value: 2},
    file: {value: 3}
  }
} as EnumTypeConfig<ThreatAssessmentContentType>;
//#endregion