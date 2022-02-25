//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Package } from './package.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PackageComplexConfig = {
  name: 'package',
  fields: {
    type: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Package>;
//#endregion