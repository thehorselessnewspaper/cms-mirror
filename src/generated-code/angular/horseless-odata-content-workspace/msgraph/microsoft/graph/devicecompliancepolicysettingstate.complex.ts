//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ComplianceStatus } from './compliancestatus.enum';
import { SettingSource } from './settingsource.complex';
//#endregion

export interface DeviceCompliancePolicySettingState {
  //#region ODataApiGen Properties
  setting?: string;
  settingName?: string;
  instanceDisplayName?: string;
  state: ComplianceStatus;
  errorCode: number;
  errorDescription?: string;
  userId?: string;
  userName?: string;
  userEmail?: string;
  userPrincipalName?: string;
  sources?: SettingSource[];
  currentValue?: string;
  //#endregion
}