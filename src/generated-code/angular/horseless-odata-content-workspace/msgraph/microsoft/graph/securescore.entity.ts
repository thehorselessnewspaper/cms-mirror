//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { SecurityVendorInformation } from './securityvendorinformation.complex';
import { AverageComparativeScore } from './averagecomparativescore.complex';
import { ControlScore } from './controlscore.complex';
//#endregion

export interface SecureScore extends Entity {
  //#region ODataApiGen Properties
  activeUserCount?: number;
  averageComparativeScores?: AverageComparativeScore[];
  azureTenantId: string;
  controlScores?: ControlScore[];
  createdDateTime?: Date;
  currentScore?: number;
  enabledServices?: string[];
  licensedUserCount?: number;
  maxScore?: number;
  vendorInformation?: SecurityVendorInformation;
  //#endregion
}