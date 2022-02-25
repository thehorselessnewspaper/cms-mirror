//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookRangeFormat } from './workbookrangeformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookRangeFormatEntityConfig = {
  name: 'workbookRangeFormat',
  base: 'microsoft.graph.entity',
  fields: {
    columnWidth: {type: 'Edm.Double'},
    horizontalAlignment: {type: 'Edm.String'},
    rowHeight: {type: 'Edm.Double'},
    verticalAlignment: {type: 'Edm.String'},
    wrapText: {type: 'Edm.Boolean'},
    borders: {type: 'graph.workbookRangeBorder', collection: true, navigation: true},
    fill: {type: 'graph.workbookRangeFill', navigation: true},
    font: {type: 'graph.workbookRangeFont', navigation: true},
    protection: {type: 'graph.workbookFormatProtection', navigation: true}
  }
} as StructuredTypeConfig<WorkbookRangeFormat>;
//#endregion