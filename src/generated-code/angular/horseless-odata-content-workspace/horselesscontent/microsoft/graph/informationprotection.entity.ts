//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
//#endregion

export interface InformationProtection extends Entity {
  //#region ODataApiGen Properties
  threatAssessmentRequests?: ThreatAssessmentRequest[];
  //#endregion
}