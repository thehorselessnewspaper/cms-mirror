//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharepointIds } from './sharepointids.complex';
//#endregion

export interface ItemReference {
  //#region ODataApiGen Properties
  driveId?: string;
  driveType?: string;
  id?: string;
  name?: string;
  path?: string;
  shareId?: string;
  sharepointIds?: SharepointIds;
  siteId?: string;
  //#endregion
}