//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ThreatAssessmentContentType } from './threatassessmentcontenttype.enum';
import { ThreatExpectedAssessment } from './threatexpectedassessment.enum';
import { ThreatCategory } from './threatcategory.enum';
import { ThreatAssessmentStatus } from './threatassessmentstatus.enum';
import { ThreatAssessmentRequestSource } from './threatassessmentrequestsource.enum';
import { IdentitySet } from './identityset.complex';
import { ThreatAssessmentResult } from './threatassessmentresult.entity';
//#endregion

export interface ThreatAssessmentRequest extends Entity {
  //#region ODataApiGen Properties
  createdDateTime?: Date;
  contentType?: ThreatAssessmentContentType;
  expectedAssessment: ThreatExpectedAssessment;
  category: ThreatCategory;
  status?: ThreatAssessmentStatus;
  requestSource?: ThreatAssessmentRequestSource;
  createdBy?: IdentitySet;
  results?: ThreatAssessmentResult[];
  //#endregion
}