//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceConfigurationSettingState } from './deviceconfigurationsettingstate.complex';
//#endregion

export interface DeviceConfigurationState extends Entity {
  //#region ODataApiGen Properties
  settingStates?: DeviceConfigurationSettingState[];
  displayName?: string;
  version: number;
  platformType: PolicyPlatformType;
  state: ComplianceStatus;
  settingCount: number;
  //#endregion
}