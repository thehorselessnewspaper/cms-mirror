//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Trending } from './trending.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TrendingEntityConfig = {
  name: 'trending',
  base: 'microsoft.graph.entity',
  fields: {
    weight: {type: 'Edm.Double', nullable: false},
    resourceVisualization: {type: 'graph.resourceVisualization'},
    resourceReference: {type: 'graph.resourceReference'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    resource: {type: 'graph.entity', navigation: true}
  }
} as StructuredTypeConfig<Trending>;
//#endregion