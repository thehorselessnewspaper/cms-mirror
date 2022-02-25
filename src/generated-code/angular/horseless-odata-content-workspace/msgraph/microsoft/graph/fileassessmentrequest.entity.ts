//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
//#endregion

export interface FileAssessmentRequest extends ThreatAssessmentRequest {
  //#region ODataApiGen Properties
  fileName: string;
  contentData: string;
  //#endregion
}