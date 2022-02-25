//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedApp } from './managedapp.entity';
import { MobileAppContent } from './mobileappcontent.entity';
//#endregion

export interface ManagedMobileLobApp extends ManagedApp {
  //#region ODataApiGen Properties
  committedContentVersion?: string;
  fileName?: string;
  size: number;
  contentVersions?: MobileAppContent[];
  //#endregion
}