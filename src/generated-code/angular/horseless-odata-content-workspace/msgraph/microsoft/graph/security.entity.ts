//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Alert } from './alert.entity';
import { SecureScoreControlProfile } from './securescorecontrolprofile.entity';
import { SecureScore } from './securescore.entity';
//#endregion

export interface Security extends Entity {
  //#region ODataApiGen Properties
  alerts?: Alert[];
  secureScoreControlProfiles?: SecureScoreControlProfile[];
  secureScores?: SecureScore[];
  //#endregion
}