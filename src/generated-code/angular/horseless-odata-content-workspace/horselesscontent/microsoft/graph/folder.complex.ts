//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FolderView } from './folderview.complex';
//#endregion

export interface Folder {
  //#region ODataApiGen Properties
  childCount?: number;
  view?: FolderView;
  //#endregion
}