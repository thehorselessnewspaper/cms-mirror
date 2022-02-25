//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAndroidLobApp } from './managedandroidlobapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedAndroidLobAppEntityConfig = {
  name: 'managedAndroidLobApp',
  base: 'microsoft.graph.managedMobileLobApp',
  fields: {
    packageId: {type: 'Edm.String'},
    minimumSupportedOperatingSystem: {type: 'graph.androidMinimumOperatingSystem'},
    versionName: {type: 'Edm.String'},
    versionCode: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedAndroidLobApp>;
//#endregion