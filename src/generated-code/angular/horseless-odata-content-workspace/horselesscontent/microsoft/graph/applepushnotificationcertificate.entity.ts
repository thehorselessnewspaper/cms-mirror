//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface ApplePushNotificationCertificate extends Entity {
  //#region ODataApiGen Properties
  appleIdentifier?: string;
  topicIdentifier?: string;
  lastModifiedDateTime: Date;
  expirationDateTime: Date;
  certificate?: string;
  //#endregion
}