//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NotificationTemplateBrandingOptions } from './notificationtemplatebrandingoptions.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const NotificationTemplateBrandingOptionsConfig = {
  name: 'notificationTemplateBrandingOptions',
  flags: true,
  members: NotificationTemplateBrandingOptions,
  fields: {
    none: {value: 0},
    includeCompanyLogo: {value: 1},
    includeCompanyName: {value: 2},
    includeContactInformation: {value: 4}
  }
} as EnumTypeConfig<NotificationTemplateBrandingOptions>;
//#endregion