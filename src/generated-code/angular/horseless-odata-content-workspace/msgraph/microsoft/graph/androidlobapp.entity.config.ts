//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AndroidLobApp } from './androidlobapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AndroidLobAppEntityConfig = {
  name: 'androidLobApp',
  base: 'microsoft.graph.mobileLobApp',
  fields: {
    packageId: {type: 'Edm.String'},
    minimumSupportedOperatingSystem: {type: 'graph.androidMinimumOperatingSystem'},
    versionName: {type: 'Edm.String'},
    versionCode: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AndroidLobApp>;
//#endregion