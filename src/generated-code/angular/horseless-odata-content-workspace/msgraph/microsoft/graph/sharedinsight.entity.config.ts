//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharedInsight } from './sharedinsight.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SharedInsightEntityConfig = {
  name: 'sharedInsight',
  base: 'microsoft.graph.entity',
  fields: {
    lastShared: {type: 'graph.sharingDetail'},
    sharingHistory: {type: 'graph.sharingDetail', collection: true},
    resourceVisualization: {type: 'graph.resourceVisualization'},
    resourceReference: {type: 'graph.resourceReference'},
    lastSharedMethod: {type: 'graph.entity', navigation: true},
    resource: {type: 'graph.entity', navigation: true}
  }
} as StructuredTypeConfig<SharedInsight>;
//#endregion