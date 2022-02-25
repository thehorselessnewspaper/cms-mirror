//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UsedInsight } from './usedinsight.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UsedInsightEntityConfig = {
  name: 'usedInsight',
  base: 'microsoft.graph.entity',
  fields: {
    lastUsed: {type: 'graph.usageDetails'},
    resourceVisualization: {type: 'graph.resourceVisualization'},
    resourceReference: {type: 'graph.resourceReference'},
    resource: {type: 'graph.entity', navigation: true}
  }
} as StructuredTypeConfig<UsedInsight>;
//#endregion