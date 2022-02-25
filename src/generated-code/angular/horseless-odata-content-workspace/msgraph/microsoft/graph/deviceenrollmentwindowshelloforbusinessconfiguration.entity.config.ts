//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceEnrollmentWindowsHelloForBusinessConfiguration } from './deviceenrollmentwindowshelloforbusinessconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceEnrollmentWindowsHelloForBusinessConfigurationEntityConfig = {
  name: 'deviceEnrollmentWindowsHelloForBusinessConfiguration',
  base: 'microsoft.graph.deviceEnrollmentConfiguration',
  fields: {
    pinMinimumLength: {type: 'Edm.Int32', nullable: false},
    pinMaximumLength: {type: 'Edm.Int32', nullable: false},
    pinUppercaseCharactersUsage: {type: 'graph.windowsHelloForBusinessPinUsage', nullable: false},
    pinLowercaseCharactersUsage: {type: 'graph.windowsHelloForBusinessPinUsage', nullable: false},
    pinSpecialCharactersUsage: {type: 'graph.windowsHelloForBusinessPinUsage', nullable: false},
    state: {type: 'graph.enablement', nullable: false},
    securityDeviceRequired: {type: 'Edm.Boolean', nullable: false},
    unlockWithBiometricsEnabled: {type: 'Edm.Boolean', nullable: false},
    remotePassportEnabled: {type: 'Edm.Boolean', nullable: false},
    pinPreviousBlockCount: {type: 'Edm.Int32', nullable: false},
    pinExpirationInDays: {type: 'Edm.Int32', nullable: false},
    enhancedBiometricsState: {type: 'graph.enablement', nullable: false}
  }
} as StructuredTypeConfig<DeviceEnrollmentWindowsHelloForBusinessConfiguration>;
//#endregion