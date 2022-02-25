//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MicrosoftStoreForBusinessLicenseType } from './microsoftstoreforbusinesslicensetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MicrosoftStoreForBusinessLicenseTypeConfig = {
  name: 'microsoftStoreForBusinessLicenseType',
  members: MicrosoftStoreForBusinessLicenseType,
  fields: {
    offline: {value: 0},
    online: {value: 1}
  }
} as EnumTypeConfig<MicrosoftStoreForBusinessLicenseType>;
//#endregion