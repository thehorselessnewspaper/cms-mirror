//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookWorksheetProtectionOptions } from './workbookworksheetprotectionoptions.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookWorksheetProtectionOptionsComplexConfig = {
  name: 'workbookWorksheetProtectionOptions',
  fields: {
    allowAutoFilter: {type: 'Edm.Boolean', nullable: false},
    allowDeleteColumns: {type: 'Edm.Boolean', nullable: false},
    allowDeleteRows: {type: 'Edm.Boolean', nullable: false},
    allowFormatCells: {type: 'Edm.Boolean', nullable: false},
    allowFormatColumns: {type: 'Edm.Boolean', nullable: false},
    allowFormatRows: {type: 'Edm.Boolean', nullable: false},
    allowInsertColumns: {type: 'Edm.Boolean', nullable: false},
    allowInsertHyperlinks: {type: 'Edm.Boolean', nullable: false},
    allowInsertRows: {type: 'Edm.Boolean', nullable: false},
    allowPivotTables: {type: 'Edm.Boolean', nullable: false},
    allowSort: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<WorkbookWorksheetProtectionOptions>;
//#endregion