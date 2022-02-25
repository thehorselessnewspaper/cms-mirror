//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SchemaExtensionsService } from './schemaextensions.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const SchemaExtensionsServiceEntitySetConfig = {
  name: 'schemaExtensions',
  entityType: 'microsoft.graph.schemaExtension',
  service: SchemaExtensionsService
} as EntitySetConfig;
//#endregion