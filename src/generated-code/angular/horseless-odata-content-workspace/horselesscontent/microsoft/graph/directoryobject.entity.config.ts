//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DirectoryObjectEntityConfig = {
  name: 'directoryObject',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    deletedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<DirectoryObject>;
//#endregion