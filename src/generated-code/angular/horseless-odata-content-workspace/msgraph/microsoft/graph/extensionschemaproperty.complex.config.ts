//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ExtensionSchemaProperty } from './extensionschemaproperty.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ExtensionSchemaPropertyComplexConfig = {
  name: 'extensionSchemaProperty',
  fields: {
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ExtensionSchemaProperty>;
//#endregion