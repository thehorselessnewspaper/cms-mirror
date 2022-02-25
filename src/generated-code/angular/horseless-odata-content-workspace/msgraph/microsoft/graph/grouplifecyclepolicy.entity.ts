//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface GroupLifecyclePolicy extends Entity {
  //#region ODataApiGen Properties
  groupLifetimeInDays?: number;
  managedGroupTypes?: string;
  alternateNotificationEmails?: string;
  //#endregion
}