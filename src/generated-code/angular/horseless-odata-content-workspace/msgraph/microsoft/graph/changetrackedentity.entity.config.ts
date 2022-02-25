//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ChangeTrackedEntityEntityConfig = {
  name: 'changeTrackedEntity',
  base: 'microsoft.graph.entity',
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedBy: {type: 'graph.identitySet'}
  }
} as StructuredTypeConfig<ChangeTrackedEntity>;
//#endregion