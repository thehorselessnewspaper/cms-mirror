//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
//#endregion

export interface DeviceConfigurationDeviceStatus extends Entity {
  //#region ODataApiGen Properties
  deviceDisplayName?: string;
  userName?: string;
  deviceModel?: string;
  complianceGracePeriodExpirationDateTime: Date;
  status: ComplianceStatus;
  lastReportedDateTime: Date;
  userPrincipalName?: string;
  //#endregion
}