//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppConfiguration } from './managedappconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedAppConfigurationEntityConfig = {
  name: 'managedAppConfiguration',
  base: 'microsoft.graph.managedAppPolicy',
  fields: {
    customSettings: {type: 'graph.keyValuePair', nullable: false, collection: true}
  }
} as StructuredTypeConfig<ManagedAppConfiguration>;
//#endregion