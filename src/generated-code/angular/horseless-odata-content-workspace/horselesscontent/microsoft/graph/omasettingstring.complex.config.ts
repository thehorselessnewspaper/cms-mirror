//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OmaSettingString } from './omasettingstring.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OmaSettingStringComplexConfig = {
  name: 'omaSettingString',
  base: 'microsoft.graph.omaSetting',
  fields: {
    value: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<OmaSettingString>;
//#endregion