//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosHomeScreenPage } from './ioshomescreenpage.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosHomeScreenPageComplexConfig = {
  name: 'iosHomeScreenPage',
  fields: {
    displayName: {type: 'Edm.String'},
    icons: {type: 'graph.iosHomeScreenItem', nullable: false, collection: true}
  }
} as StructuredTypeConfig<IosHomeScreenPage>;
//#endregion