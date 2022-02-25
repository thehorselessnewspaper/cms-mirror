//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { MobileThreatPartnerTenantState } from './mobilethreatpartnertenantstate.enum';
//#endregion

export interface MobileThreatDefenseConnector extends Entity {
  //#region ODataApiGen Properties
  lastHeartbeatDateTime: Date;
  partnerState: MobileThreatPartnerTenantState;
  androidEnabled: boolean;
  iosEnabled: boolean;
  androidDeviceBlockedOnMissingPartnerData: boolean;
  iosDeviceBlockedOnMissingPartnerData: boolean;
  partnerUnsupportedOsVersionBlocked: boolean;
  partnerUnresponsivenessThresholdInDays: number;
  //#endregion
}