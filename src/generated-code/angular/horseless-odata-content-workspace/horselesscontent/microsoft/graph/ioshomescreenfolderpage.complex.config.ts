//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosHomeScreenFolderPage } from './ioshomescreenfolderpage.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosHomeScreenFolderPageComplexConfig = {
  name: 'iosHomeScreenFolderPage',
  fields: {
    displayName: {type: 'Edm.String'},
    apps: {type: 'graph.iosHomeScreenApp', nullable: false, collection: true}
  }
} as StructuredTypeConfig<IosHomeScreenFolderPage>;
//#endregion