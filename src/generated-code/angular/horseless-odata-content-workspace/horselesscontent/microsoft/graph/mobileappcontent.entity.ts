//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { MobileAppContentFile } from './mobileappcontentfile.entity';
//#endregion

export interface MobileAppContent extends Entity {
  //#region ODataApiGen Properties
  files?: MobileAppContentFile[];
  //#endregion
}