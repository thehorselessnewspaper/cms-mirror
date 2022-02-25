//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NotificationMessageTemplate } from './notificationmessagetemplate.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const NotificationMessageTemplateEntityConfig = {
  name: 'notificationMessageTemplate',
  base: 'microsoft.graph.entity',
  fields: {
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    displayName: {type: 'Edm.String', nullable: false},
    defaultLocale: {type: 'Edm.String'},
    brandingOptions: {type: 'graph.notificationTemplateBrandingOptions', nullable: false},
    localizedNotificationMessages: {type: 'graph.localizedNotificationMessage', collection: true, navigation: true}
  }
} as StructuredTypeConfig<NotificationMessageTemplate>;
//#endregion