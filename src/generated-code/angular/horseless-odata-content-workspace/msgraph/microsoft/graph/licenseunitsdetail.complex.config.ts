//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LicenseUnitsDetail } from './licenseunitsdetail.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LicenseUnitsDetailComplexConfig = {
  name: 'licenseUnitsDetail',
  fields: {
    enabled: {type: 'Edm.Int32'},
    suspended: {type: 'Edm.Int32'},
    warning: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<LicenseUnitsDetail>;
//#endregion