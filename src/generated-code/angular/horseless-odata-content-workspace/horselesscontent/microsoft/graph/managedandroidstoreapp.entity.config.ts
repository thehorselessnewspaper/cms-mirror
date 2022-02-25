//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAndroidStoreApp } from './managedandroidstoreapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedAndroidStoreAppEntityConfig = {
  name: 'managedAndroidStoreApp',
  base: 'microsoft.graph.managedApp',
  fields: {
    packageId: {type: 'Edm.String'},
    appStoreUrl: {type: 'Edm.String', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.androidMinimumOperatingSystem', nullable: false}
  }
} as StructuredTypeConfig<ManagedAndroidStoreApp>;
//#endregion