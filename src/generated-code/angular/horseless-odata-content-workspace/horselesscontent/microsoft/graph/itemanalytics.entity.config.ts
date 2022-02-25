//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ItemAnalytics } from './itemanalytics.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ItemAnalyticsEntityConfig = {
  name: 'itemAnalytics',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    itemActivityStats: {type: 'graph.itemActivityStat', collection: true, navigation: true},
    allTime: {type: 'graph.itemActivityStat', navigation: true},
    lastSevenDays: {type: 'graph.itemActivityStat', navigation: true}
  }
} as StructuredTypeConfig<ItemAnalytics>;
//#endregion