//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceCompliancePolicySettingState } from './devicecompliancepolicysettingstate.complex';
//#endregion

export interface DeviceCompliancePolicyState extends Entity {
  //#region ODataApiGen Properties
  settingStates?: DeviceCompliancePolicySettingState[];
  displayName?: string;
  version: number;
  platformType: PolicyPlatformType;
  state: ComplianceStatus;
  settingCount: number;
  //#endregion
}