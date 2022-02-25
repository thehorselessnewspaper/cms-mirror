//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NetworkInfo } from './networkinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const NetworkInfoComplexConfig = {
  name: 'networkInfo',
  fields: {
    ipAddress: {type: 'Edm.String'},
    subnet: {type: 'Edm.String'},
    linkSpeed: {type: 'Edm.Int64'},
    connectionType: {type: 'microsoft.graph.callRecords.networkConnectionType', nullable: false},
    port: {type: 'Edm.Int32'},
    reflexiveIPAddress: {type: 'Edm.String'},
    relayIPAddress: {type: 'Edm.String'},
    relayPort: {type: 'Edm.Int32'},
    macAddress: {type: 'Edm.String'},
    wifiMicrosoftDriver: {type: 'Edm.String'},
    wifiMicrosoftDriverVersion: {type: 'Edm.String'},
    wifiVendorDriver: {type: 'Edm.String'},
    wifiVendorDriverVersion: {type: 'Edm.String'},
    wifiChannel: {type: 'Edm.Int32'},
    wifiBand: {type: 'microsoft.graph.callRecords.wifiBand', nullable: false},
    basicServiceSetIdentifier: {type: 'Edm.String'},
    wifiRadioType: {type: 'microsoft.graph.callRecords.wifiRadioType', nullable: false},
    wifiSignalStrength: {type: 'Edm.Int32'},
    wifiBatteryCharge: {type: 'Edm.Int32'},
    dnsSuffix: {type: 'Edm.String'},
    sentQualityEventRatio: {type: 'Edm.Single'},
    receivedQualityEventRatio: {type: 'Edm.Single'},
    delayEventRatio: {type: 'Edm.Single'},
    bandwidthLowEventRatio: {type: 'Edm.Single'}
  }
} as StructuredTypeConfig<NetworkInfo>;
//#endregion