//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileThreatDefenseConnector } from './mobilethreatdefenseconnector.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MobileThreatDefenseConnectorEntityConfig = {
  name: 'mobileThreatDefenseConnector',
  base: 'microsoft.graph.entity',
  fields: {
    lastHeartbeatDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    partnerState: {type: 'graph.mobileThreatPartnerTenantState', nullable: false},
    androidEnabled: {type: 'Edm.Boolean', nullable: false},
    iosEnabled: {type: 'Edm.Boolean', nullable: false},
    androidDeviceBlockedOnMissingPartnerData: {type: 'Edm.Boolean', nullable: false},
    iosDeviceBlockedOnMissingPartnerData: {type: 'Edm.Boolean', nullable: false},
    partnerUnsupportedOsVersionBlocked: {type: 'Edm.Boolean', nullable: false},
    partnerUnresponsivenessThresholdInDays: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<MobileThreatDefenseConnector>;
//#endregion