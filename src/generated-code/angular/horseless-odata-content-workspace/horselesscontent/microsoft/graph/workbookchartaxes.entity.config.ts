//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartAxes } from './workbookchartaxes.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartAxesEntityConfig = {
  name: 'workbookChartAxes',
  base: 'microsoft.graph.entity',
  fields: {
    categoryAxis: {type: 'graph.workbookChartAxis', navigation: true},
    seriesAxis: {type: 'graph.workbookChartAxis', navigation: true},
    valueAxis: {type: 'graph.workbookChartAxis', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartAxes>;
//#endregion