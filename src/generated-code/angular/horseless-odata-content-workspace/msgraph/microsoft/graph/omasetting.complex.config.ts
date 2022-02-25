//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OmaSetting } from './omasetting.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OmaSettingComplexConfig = {
  name: 'omaSetting',
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    omaUri: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<OmaSetting>;
//#endregion