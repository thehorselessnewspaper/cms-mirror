//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppOperation } from './managedappoperation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedAppOperationEntityConfig = {
  name: 'managedAppOperation',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    state: {type: 'Edm.String'},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedAppOperation>;
//#endregion