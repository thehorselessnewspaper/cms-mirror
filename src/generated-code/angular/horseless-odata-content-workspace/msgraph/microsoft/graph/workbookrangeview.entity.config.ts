//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookRangeView } from './workbookrangeview.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookRangeViewEntityConfig = {
  name: 'workbookRangeView',
  base: 'microsoft.graph.entity',
  fields: {
    cellAddresses: {type: 'graph.Json'},
    columnCount: {type: 'Edm.Int32', nullable: false},
    formulas: {type: 'graph.Json'},
    formulasLocal: {type: 'graph.Json'},
    formulasR1C1: {type: 'graph.Json'},
    index: {type: 'Edm.Int32', nullable: false},
    numberFormat: {type: 'graph.Json'},
    rowCount: {type: 'Edm.Int32', nullable: false},
    text: {type: 'graph.Json'},
    valueTypes: {type: 'graph.Json'},
    values: {type: 'graph.Json'},
    rows: {type: 'graph.workbookRangeView', collection: true, navigation: true}
  }
} as StructuredTypeConfig<WorkbookRangeView>;
//#endregion