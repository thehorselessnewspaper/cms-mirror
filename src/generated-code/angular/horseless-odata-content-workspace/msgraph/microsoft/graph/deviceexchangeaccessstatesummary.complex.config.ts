//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceExchangeAccessStateSummary } from './deviceexchangeaccessstatesummary.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceExchangeAccessStateSummaryComplexConfig = {
  name: 'deviceExchangeAccessStateSummary',
  fields: {
    allowedDeviceCount: {type: 'Edm.Int32', nullable: false},
    blockedDeviceCount: {type: 'Edm.Int32', nullable: false},
    quarantinedDeviceCount: {type: 'Edm.Int32', nullable: false},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false},
    unavailableDeviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceExchangeAccessStateSummary>;
//#endregion