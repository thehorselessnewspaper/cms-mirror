//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ItemActivity } from './itemactivity.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ItemActivityEntityConfig = {
  name: 'itemActivity',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    access: {type: 'graph.accessAction'},
    activityDateTime: {type: 'Edm.DateTimeOffset'},
    actor: {type: 'graph.identitySet'},
    driveItem: {type: 'graph.driveItem', navigation: true}
  }
} as StructuredTypeConfig<ItemActivity>;
//#endregion