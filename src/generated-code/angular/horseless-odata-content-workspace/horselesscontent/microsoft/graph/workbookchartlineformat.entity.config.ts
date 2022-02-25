//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartLineFormatEntityConfig = {
  name: 'workbookChartLineFormat',
  base: 'microsoft.graph.entity',
  fields: {
    color: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WorkbookChartLineFormat>;
//#endregion