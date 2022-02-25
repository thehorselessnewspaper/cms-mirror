//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ThreatAssessmentResultType } from './threatassessmentresulttype.enum';
//#endregion

export interface ThreatAssessmentResult extends Entity {
  //#region ODataApiGen Properties
  createdDateTime?: Date;
  resultType?: ThreatAssessmentResultType;
  message?: string;
  //#endregion
}