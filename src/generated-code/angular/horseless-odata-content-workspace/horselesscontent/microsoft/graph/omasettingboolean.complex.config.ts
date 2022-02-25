//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OmaSettingBoolean } from './omasettingboolean.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OmaSettingBooleanComplexConfig = {
  name: 'omaSettingBoolean',
  base: 'microsoft.graph.omaSetting',
  fields: {
    value: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<OmaSettingBoolean>;
//#endregion