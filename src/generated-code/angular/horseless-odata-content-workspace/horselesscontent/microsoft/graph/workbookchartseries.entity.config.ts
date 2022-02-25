//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartSeries } from './workbookchartseries.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartSeriesEntityConfig = {
  name: 'workbookChartSeries',
  base: 'microsoft.graph.entity',
  fields: {
    name: {type: 'Edm.String'},
    format: {type: 'graph.workbookChartSeriesFormat', navigation: true},
    points: {type: 'graph.workbookChartPoint', collection: true, navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartSeries>;
//#endregion