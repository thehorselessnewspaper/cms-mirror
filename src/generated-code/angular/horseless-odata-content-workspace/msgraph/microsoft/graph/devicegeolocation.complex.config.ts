//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceGeoLocation } from './devicegeolocation.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceGeoLocationComplexConfig = {
  name: 'deviceGeoLocation',
  fields: {
    lastCollectedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    longitude: {type: 'Edm.Double', nullable: false},
    latitude: {type: 'Edm.Double', nullable: false},
    altitude: {type: 'Edm.Double', nullable: false},
    horizontalAccuracy: {type: 'Edm.Double', nullable: false},
    verticalAccuracy: {type: 'Edm.Double', nullable: false},
    heading: {type: 'Edm.Double', nullable: false},
    speed: {type: 'Edm.Double', nullable: false}
  }
} as StructuredTypeConfig<DeviceGeoLocation>;
//#endregion