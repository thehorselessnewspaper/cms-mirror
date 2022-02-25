//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosDeviceType } from './iosdevicetype.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosDeviceTypeComplexConfig = {
  name: 'iosDeviceType',
  fields: {
    iPad: {type: 'Edm.Boolean', nullable: false},
    iPhoneAndIPod: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<IosDeviceType>;
//#endregion