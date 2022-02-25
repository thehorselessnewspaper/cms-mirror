//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { VppLicensingType } from './vpplicensingtype.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const VppLicensingTypeComplexConfig = {
  name: 'vppLicensingType',
  fields: {
    supportsUserLicensing: {type: 'Edm.Boolean', nullable: false},
    supportsDeviceLicensing: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<VppLicensingType>;
//#endregion