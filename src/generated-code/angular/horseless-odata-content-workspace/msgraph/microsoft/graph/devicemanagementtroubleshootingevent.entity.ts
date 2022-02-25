//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface DeviceManagementTroubleshootingEvent extends Entity {
  //#region ODataApiGen Properties
  eventDateTime: Date;
  correlationId?: string;
  //#endregion
}