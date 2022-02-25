//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedApp } from './managedapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedAppEntityConfig = {
  name: 'managedApp',
  base: 'microsoft.graph.mobileApp',
  fields: {
    appAvailability: {type: 'graph.managedAppAvailability', nullable: false},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedApp>;
//#endregion