//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartPointFormat } from './workbookchartpointformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartPointFormatEntityConfig = {
  name: 'workbookChartPointFormat',
  base: 'microsoft.graph.entity',
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartPointFormat>;
//#endregion