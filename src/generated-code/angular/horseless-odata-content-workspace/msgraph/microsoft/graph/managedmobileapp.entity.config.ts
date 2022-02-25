//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedMobileApp } from './managedmobileapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedMobileAppEntityConfig = {
  name: 'managedMobileApp',
  base: 'microsoft.graph.entity',
  fields: {
    mobileAppIdentifier: {type: 'graph.mobileAppIdentifier'},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedMobileApp>;
//#endregion