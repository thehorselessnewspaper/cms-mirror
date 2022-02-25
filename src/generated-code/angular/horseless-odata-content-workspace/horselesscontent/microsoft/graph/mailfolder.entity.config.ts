//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MailFolder } from './mailfolder.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MailFolderEntityConfig = {
  name: 'mailFolder',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    parentFolderId: {type: 'Edm.String'},
    childFolderCount: {type: 'Edm.Int32'},
    unreadItemCount: {type: 'Edm.Int32'},
    totalItemCount: {type: 'Edm.Int32'},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    messages: {type: 'graph.message', collection: true, navigation: true},
    messageRules: {type: 'graph.messageRule', collection: true, navigation: true},
    childFolders: {type: 'graph.mailFolder', collection: true, navigation: true}
  }
} as StructuredTypeConfig<MailFolder>;
//#endregion