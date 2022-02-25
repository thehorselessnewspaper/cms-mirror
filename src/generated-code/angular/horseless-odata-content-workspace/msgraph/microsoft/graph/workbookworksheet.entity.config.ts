//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookWorksheet } from './workbookworksheet.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookWorksheetEntityConfig = {
  name: 'workbookWorksheet',
  base: 'microsoft.graph.entity',
  fields: {
    name: {type: 'Edm.String'},
    position: {type: 'Edm.Int32', nullable: false},
    visibility: {type: 'Edm.String', nullable: false},
    charts: {type: 'graph.workbookChart', collection: true, navigation: true},
    names: {type: 'graph.workbookNamedItem', collection: true, navigation: true},
    pivotTables: {type: 'graph.workbookPivotTable', collection: true, navigation: true},
    protection: {type: 'graph.workbookWorksheetProtection', navigation: true},
    tables: {type: 'graph.workbookTable', collection: true, navigation: true}
  }
} as StructuredTypeConfig<WorkbookWorksheet>;
//#endregion