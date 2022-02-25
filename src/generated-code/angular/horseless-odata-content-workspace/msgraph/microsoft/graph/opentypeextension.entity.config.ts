//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OpenTypeExtension } from './opentypeextension.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OpenTypeExtensionEntityConfig = {
  name: 'openTypeExtension',
  base: 'microsoft.graph.extension',
  open: true,
  fields: {
    extensionName: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<OpenTypeExtension>;
//#endregion