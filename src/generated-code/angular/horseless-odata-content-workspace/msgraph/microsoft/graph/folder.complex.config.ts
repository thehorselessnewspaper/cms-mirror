//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Folder } from './folder.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FolderComplexConfig = {
  name: 'folder',
  fields: {
    childCount: {type: 'Edm.Int32'},
    view: {type: 'graph.folderView'}
  }
} as StructuredTypeConfig<Folder>;
//#endregion