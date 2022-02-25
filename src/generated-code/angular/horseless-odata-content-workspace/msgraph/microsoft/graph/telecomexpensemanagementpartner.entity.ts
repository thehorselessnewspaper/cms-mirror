//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface TelecomExpenseManagementPartner extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  url?: string;
  appAuthorized: boolean;
  enabled: boolean;
  lastConnectionDateTime: Date;
  //#endregion
}