﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
//#endregion

export interface DeviceComplianceSettingState extends Entity {
  //#region ODataApiGen Properties
  setting?: string;
  settingName?: string;
  deviceId?: string;
  deviceName?: string;
  userId?: string;
  userEmail?: string;
  userName?: string;
  userPrincipalName?: string;
  deviceModel?: string;
  state: ComplianceStatus;
  complianceGracePeriodExpirationDateTime: Date;
  //#endregion
}