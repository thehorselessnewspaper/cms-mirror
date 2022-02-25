//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosHomeScreenApp } from './ioshomescreenapp.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosHomeScreenAppComplexConfig = {
  name: 'iosHomeScreenApp',
  base: 'microsoft.graph.iosHomeScreenItem',
  fields: {
    bundleID: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<IosHomeScreenApp>;
//#endregion