//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartGridlinesFormat } from './workbookchartgridlinesformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartGridlinesFormatEntityConfig = {
  name: 'workbookChartGridlinesFormat',
  base: 'microsoft.graph.entity',
  fields: {
    line: {type: 'graph.workbookChartLineFormat', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartGridlinesFormat>;
//#endregion