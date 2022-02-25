//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SchemaExtension } from './schemaextension.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SchemaExtensionEntityConfig = {
  name: 'schemaExtension',
  base: 'microsoft.graph.entity',
  fields: {
    description: {type: 'Edm.String'},
    targetTypes: {type: 'Edm.String', nullable: false, collection: true},
    properties: {type: 'graph.extensionSchemaProperty', nullable: false, collection: true},
    status: {type: 'Edm.String', nullable: false},
    owner: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<SchemaExtension>;
//#endregion