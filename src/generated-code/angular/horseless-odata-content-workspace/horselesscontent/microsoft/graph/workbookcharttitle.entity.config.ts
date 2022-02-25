//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartTitle } from './workbookcharttitle.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartTitleEntityConfig = {
  name: 'workbookChartTitle',
  base: 'microsoft.graph.entity',
  fields: {
    overlay: {type: 'Edm.Boolean'},
    text: {type: 'Edm.String'},
    visible: {type: 'Edm.Boolean', nullable: false},
    format: {type: 'graph.workbookChartTitleFormat', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartTitle>;
//#endregion