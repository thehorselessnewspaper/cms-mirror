//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SpecialFolder } from './specialfolder.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SpecialFolderComplexConfig = {
  name: 'specialFolder',
  fields: {
    name: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SpecialFolder>;
//#endregion