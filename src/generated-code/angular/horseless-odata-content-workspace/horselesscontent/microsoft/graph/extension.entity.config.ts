//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Extension } from './extension.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ExtensionEntityConfig = {
  name: 'extension',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    
  }
} as StructuredTypeConfig<Extension>;
//#endregion