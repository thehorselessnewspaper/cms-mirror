//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ContainerContainer } from './container.container';
//#endregion

//#region ODataApiGen SchemaConfig
export const DefaultSchema = {
  namespace: 'Default',
  enums: [],
  entities: [],
  callables: [],
  containers: [ContainerContainer]
} as SchemaConfig;
//#endregion