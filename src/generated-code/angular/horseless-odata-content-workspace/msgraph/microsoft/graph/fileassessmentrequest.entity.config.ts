//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FileAssessmentRequest } from './fileassessmentrequest.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FileAssessmentRequestEntityConfig = {
  name: 'fileAssessmentRequest',
  base: 'microsoft.graph.threatAssessmentRequest',
  fields: {
    fileName: {type: 'Edm.String', nullable: false},
    contentData: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<FileAssessmentRequest>;
//#endregion