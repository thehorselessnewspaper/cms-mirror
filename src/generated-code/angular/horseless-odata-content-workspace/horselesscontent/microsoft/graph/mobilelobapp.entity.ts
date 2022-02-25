//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileApp } from './mobileapp.entity';
import { MobileAppContent } from './mobileappcontent.entity';
//#endregion

export interface MobileLobApp extends MobileApp {
  //#region ODataApiGen Properties
  committedContentVersion?: string;
  fileName?: string;
  size: number;
  contentVersions?: MobileAppContent[];
  //#endregion
}