//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { NotificationTemplateBrandingOptions } from './notificationtemplatebrandingoptions.enum';
import { LocalizedNotificationMessage } from './localizednotificationmessage.entity';
//#endregion

export interface NotificationMessageTemplate extends Entity {
  //#region ODataApiGen Properties
  lastModifiedDateTime: Date;
  displayName: string;
  defaultLocale?: string;
  brandingOptions: NotificationTemplateBrandingOptions;
  localizedNotificationMessages?: LocalizedNotificationMessage[];
  //#endregion
}