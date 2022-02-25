//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosHomeScreenItem } from './ioshomescreenitem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosHomeScreenItemComplexConfig = {
  name: 'iosHomeScreenItem',
  fields: {
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IosHomeScreenItem>;
//#endregion