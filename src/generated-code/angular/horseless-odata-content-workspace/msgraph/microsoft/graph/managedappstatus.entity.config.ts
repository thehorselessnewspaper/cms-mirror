//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppStatus } from './managedappstatus.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedAppStatusEntityConfig = {
  name: 'managedAppStatus',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedAppStatus>;
//#endregion