//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OmaSettingFloatingPoint } from './omasettingfloatingpoint.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OmaSettingFloatingPointComplexConfig = {
  name: 'omaSettingFloatingPoint',
  base: 'microsoft.graph.omaSetting',
  fields: {
    value: {type: 'Edm.Single', nullable: false}
  }
} as StructuredTypeConfig<OmaSettingFloatingPoint>;
//#endregion