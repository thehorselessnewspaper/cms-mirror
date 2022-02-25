//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppStatusRaw } from './managedappstatusraw.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedAppStatusRawEntityConfig = {
  name: 'managedAppStatusRaw',
  base: 'microsoft.graph.managedAppStatus',
  fields: {
    content: {type: 'graph.Json'}
  }
} as StructuredTypeConfig<ManagedAppStatusRaw>;
//#endregion