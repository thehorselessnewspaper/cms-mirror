//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosHomeScreenItem } from './ioshomescreenitem.complex';
import { IosHomeScreenFolderPage } from './ioshomescreenfolderpage.complex';
//#endregion

export interface IosHomeScreenFolder extends IosHomeScreenItem {
  //#region ODataApiGen Properties
  pages: IosHomeScreenFolderPage[];
  //#endregion
}