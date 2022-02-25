//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
//#endregion

export interface UrlAssessmentRequest extends ThreatAssessmentRequest {
  //#region ODataApiGen Properties
  url: string;
  //#endregion
}