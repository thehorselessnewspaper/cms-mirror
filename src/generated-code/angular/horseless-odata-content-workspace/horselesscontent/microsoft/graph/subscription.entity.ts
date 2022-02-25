//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface Subscription extends Entity {
  //#region ODataApiGen Properties
  resource: string;
  changeType: string;
  clientState?: string;
  notificationUrl: string;
  expirationDateTime: Date;
  applicationId?: string;
  creatorId?: string;
  latestSupportedTlsVersion?: string;
  //#endregion
}