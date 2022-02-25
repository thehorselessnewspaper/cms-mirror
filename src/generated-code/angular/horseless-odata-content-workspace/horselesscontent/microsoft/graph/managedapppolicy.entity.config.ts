//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppPolicy } from './managedapppolicy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedAppPolicyEntityConfig = {
  name: 'managedAppPolicy',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedAppPolicy>;
//#endregion