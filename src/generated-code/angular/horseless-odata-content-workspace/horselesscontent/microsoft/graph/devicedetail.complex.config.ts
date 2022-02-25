//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceDetail } from './devicedetail.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceDetailComplexConfig = {
  name: 'deviceDetail',
  fields: {
    deviceId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    operatingSystem: {type: 'Edm.String'},
    browser: {type: 'Edm.String'},
    isCompliant: {type: 'Edm.Boolean'},
    isManaged: {type: 'Edm.Boolean'},
    trustType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceDetail>;
//#endregion