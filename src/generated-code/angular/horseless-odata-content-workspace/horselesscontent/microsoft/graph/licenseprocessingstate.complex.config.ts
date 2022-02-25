//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LicenseProcessingState } from './licenseprocessingstate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LicenseProcessingStateComplexConfig = {
  name: 'licenseProcessingState',
  fields: {
    state: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<LicenseProcessingState>;
//#endregion