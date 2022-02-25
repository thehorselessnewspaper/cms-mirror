//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosHomeScreenApp } from './ioshomescreenapp.complex';
//#endregion

export interface IosHomeScreenFolderPage {
  //#region ODataApiGen Properties
  displayName?: string;
  apps: IosHomeScreenApp[];
  //#endregion
}