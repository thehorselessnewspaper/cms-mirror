//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OfficeGraphInsights } from './officegraphinsights.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OfficeGraphInsightsEntityConfig = {
  name: 'officeGraphInsights',
  base: 'microsoft.graph.entity',
  fields: {
    trending: {type: 'graph.trending', collection: true, navigation: true},
    shared: {type: 'graph.sharedInsight', collection: true, navigation: true},
    used: {type: 'graph.usedInsight', collection: true, navigation: true}
  }
} as StructuredTypeConfig<OfficeGraphInsights>;
//#endregion