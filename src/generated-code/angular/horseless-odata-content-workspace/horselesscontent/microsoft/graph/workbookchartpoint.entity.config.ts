//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartPoint } from './workbookchartpoint.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartPointEntityConfig = {
  name: 'workbookChartPoint',
  base: 'microsoft.graph.entity',
  fields: {
    value: {type: 'graph.Json'},
    format: {type: 'graph.workbookChartPointFormat', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartPoint>;
//#endregion