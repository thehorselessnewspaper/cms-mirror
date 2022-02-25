//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppListItem } from './applistitem.complex';
//#endregion

export interface IosNetworkUsageRule {
  //#region ODataApiGen Properties
  managedApps?: AppListItem[];
  cellularDataBlockWhenRoaming: boolean;
  cellularDataBlocked: boolean;
  //#endregion
}