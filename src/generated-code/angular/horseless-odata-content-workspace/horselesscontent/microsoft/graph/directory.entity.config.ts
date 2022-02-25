//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Directory } from './directory.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DirectoryEntityConfig = {
  name: 'directory',
  base: 'microsoft.graph.entity',
  fields: {
    deletedItems: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Directory>;
//#endregion