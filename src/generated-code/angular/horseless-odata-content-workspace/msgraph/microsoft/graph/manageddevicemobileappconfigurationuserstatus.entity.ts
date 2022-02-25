//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
//#endregion

export interface ManagedDeviceMobileAppConfigurationUserStatus extends Entity {
  //#region ODataApiGen Properties
  userDisplayName?: string;
  devicesCount: number;
  status: ComplianceStatus;
  lastReportedDateTime: Date;
  userPrincipalName?: string;
  //#endregion
}