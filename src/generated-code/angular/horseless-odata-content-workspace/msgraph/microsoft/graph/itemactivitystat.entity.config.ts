//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ItemActivityStat } from './itemactivitystat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ItemActivityStatEntityConfig = {
  name: 'itemActivityStat',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    startDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    access: {type: 'graph.itemActionStat'},
    create: {type: 'graph.itemActionStat'},
    delete: {type: 'graph.itemActionStat'},
    edit: {type: 'graph.itemActionStat'},
    move: {type: 'graph.itemActionStat'},
    isTrending: {type: 'Edm.Boolean'},
    incompleteData: {type: 'graph.incompleteData'},
    activities: {type: 'graph.itemActivity', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ItemActivityStat>;
//#endregion