//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookWorksheetProtection } from './workbookworksheetprotection.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookWorksheetProtectionEntityConfig = {
  name: 'workbookWorksheetProtection',
  base: 'microsoft.graph.entity',
  fields: {
    options: {type: 'graph.workbookWorksheetProtectionOptions'},
    protected: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<WorkbookWorksheetProtection>;
//#endregion