//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AndroidStoreApp } from './androidstoreapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AndroidStoreAppEntityConfig = {
  name: 'androidStoreApp',
  base: 'microsoft.graph.mobileApp',
  fields: {
    packageId: {type: 'Edm.String'},
    appStoreUrl: {type: 'Edm.String'},
    minimumSupportedOperatingSystem: {type: 'graph.androidMinimumOperatingSystem'}
  }
} as StructuredTypeConfig<AndroidStoreApp>;
//#endregion