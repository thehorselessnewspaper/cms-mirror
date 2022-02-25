//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface LocalizedNotificationMessage extends Entity {
  //#region ODataApiGen Properties
  lastModifiedDateTime: Date;
  locale: string;
  subject: string;
  messageTemplate: string;
  isDefault: boolean;
  //#endregion
}