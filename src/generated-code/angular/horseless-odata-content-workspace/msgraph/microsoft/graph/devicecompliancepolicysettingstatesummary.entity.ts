//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceComplianceSettingState } from './devicecompliancesettingstate.entity';
//#endregion

export interface DeviceCompliancePolicySettingStateSummary extends Entity {
  //#region ODataApiGen Properties
  setting?: string;
  settingName?: string;
  platformType: PolicyPlatformType;
  unknownDeviceCount: number;
  notApplicableDeviceCount: number;
  compliantDeviceCount: number;
  remediatedDeviceCount: number;
  nonCompliantDeviceCount: number;
  errorDeviceCount: number;
  conflictDeviceCount: number;
  deviceComplianceSettingStates?: DeviceComplianceSettingState[];
  //#endregion
}