//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OmaSettingBase64 } from './omasettingbase64.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OmaSettingBase64ComplexConfig = {
  name: 'omaSettingBase64',
  base: 'microsoft.graph.omaSetting',
  fields: {
    fileName: {type: 'Edm.String'},
    value: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<OmaSettingBase64>;
//#endregion