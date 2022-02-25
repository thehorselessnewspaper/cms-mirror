//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookFormatProtection } from './workbookformatprotection.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookFormatProtectionEntityConfig = {
  name: 'workbookFormatProtection',
  base: 'microsoft.graph.entity',
  fields: {
    formulaHidden: {type: 'Edm.Boolean'},
    locked: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<WorkbookFormatProtection>;
//#endregion