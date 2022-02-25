//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FolderView } from './folderview.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FolderViewComplexConfig = {
  name: 'folderView',
  fields: {
    sortBy: {type: 'Edm.String'},
    sortOrder: {type: 'Edm.String'},
    viewType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<FolderView>;
//#endregion