//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OmaSettingInteger } from './omasettinginteger.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OmaSettingIntegerComplexConfig = {
  name: 'omaSettingInteger',
  base: 'microsoft.graph.omaSetting',
  fields: {
    value: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<OmaSettingInteger>;
//#endregion