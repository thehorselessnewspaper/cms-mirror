//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MailboxSettings } from './mailboxsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MailboxSettingsComplexConfig = {
  name: 'mailboxSettings',
  fields: {
    automaticRepliesSetting: {type: 'graph.automaticRepliesSetting'},
    archiveFolder: {type: 'Edm.String'},
    timeZone: {type: 'Edm.String'},
    language: {type: 'graph.localeInfo'},
    delegateMeetingMessageDeliveryOptions: {type: 'graph.delegateMeetingMessageDeliveryOptions'},
    workingHours: {type: 'graph.workingHours'},
    dateFormat: {type: 'Edm.String'},
    timeFormat: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<MailboxSettings>;
//#endregion