//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { MobileAppIdentifier } from './mobileappidentifier.complex';
//#endregion

export interface ManagedMobileApp extends Entity {
  //#region ODataApiGen Properties
  mobileAppIdentifier?: MobileAppIdentifier;
  version?: string;
  //#endregion
}