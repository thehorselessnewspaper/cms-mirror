//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WebsiteType } from './websitetype.enum';
//#endregion

export interface Website {
  //#region ODataApiGen Properties
  type?: WebsiteType;
  address?: string;
  displayName?: string;
  //#endregion
}