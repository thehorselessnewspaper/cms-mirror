//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartAxis } from './workbookchartaxis.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartAxisEntityConfig = {
  name: 'workbookChartAxis',
  base: 'microsoft.graph.entity',
  fields: {
    majorUnit: {type: 'graph.Json'},
    maximum: {type: 'graph.Json'},
    minimum: {type: 'graph.Json'},
    minorUnit: {type: 'graph.Json'},
    format: {type: 'graph.workbookChartAxisFormat', navigation: true},
    majorGridlines: {type: 'graph.workbookChartGridlines', navigation: true},
    minorGridlines: {type: 'graph.workbookChartGridlines', navigation: true},
    title: {type: 'graph.workbookChartAxisTitle', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartAxis>;
//#endregion