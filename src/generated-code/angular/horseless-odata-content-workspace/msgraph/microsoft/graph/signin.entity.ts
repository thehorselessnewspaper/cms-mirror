//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { RiskLevel } from './risklevel.enum';
import { ConditionalAccessStatus } from './conditionalaccessstatus.enum';
import { RiskState } from './riskstate.enum';
import { RiskDetail } from './riskdetail.enum';
import { RiskEventType } from './riskeventtype.enum';
import { SignInStatus } from './signinstatus.complex';
import { DeviceDetail } from './devicedetail.complex';
import { SignInLocation } from './signinlocation.complex';
import { AppliedConditionalAccessPolicy } from './appliedconditionalaccesspolicy.complex';
//#endregion

export interface SignIn extends Entity {
  //#region ODataApiGen Properties
  createdDateTime: Date;
  userDisplayName?: string;
  userPrincipalName?: string;
  userId: string;
  appId?: string;
  appDisplayName?: string;
  ipAddress?: string;
  status?: SignInStatus;
  clientAppUsed?: string;
  deviceDetail?: DeviceDetail;
  location?: SignInLocation;
  correlationId?: string;
  conditionalAccessStatus?: ConditionalAccessStatus;
  appliedConditionalAccessPolicies?: AppliedConditionalAccessPolicy[];
  isInteractive?: boolean;
  riskDetail?: RiskDetail;
  riskLevelAggregated?: RiskLevel;
  riskLevelDuringSignIn?: RiskLevel;
  riskState?: RiskState;
  riskEventTypes?: RiskEventType;
  riskEventTypes_v2?: string[];
  resourceDisplayName?: string;
  resourceId?: string;
  //#endregion
}