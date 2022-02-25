//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartGridlines } from './workbookchartgridlines.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartGridlinesEntityConfig = {
  name: 'workbookChartGridlines',
  base: 'microsoft.graph.entity',
  fields: {
    visible: {type: 'Edm.Boolean', nullable: false},
    format: {type: 'graph.workbookChartGridlinesFormat', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartGridlines>;
//#endregion