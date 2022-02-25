//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosHomeScreenFolder } from './ioshomescreenfolder.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosHomeScreenFolderComplexConfig = {
  name: 'iosHomeScreenFolder',
  base: 'microsoft.graph.iosHomeScreenItem',
  fields: {
    pages: {type: 'graph.iosHomeScreenFolderPage', nullable: false, collection: true}
  }
} as StructuredTypeConfig<IosHomeScreenFolder>;
//#endregion