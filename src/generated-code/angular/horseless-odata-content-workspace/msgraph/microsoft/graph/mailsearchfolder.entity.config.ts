//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MailSearchFolder } from './mailsearchfolder.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MailSearchFolderEntityConfig = {
  name: 'mailSearchFolder',
  base: 'microsoft.graph.mailFolder',
  fields: {
    isSupported: {type: 'Edm.Boolean'},
    includeNestedFolders: {type: 'Edm.Boolean'},
    sourceFolderIds: {type: 'Edm.String', collection: true},
    filterQuery: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<MailSearchFolder>;
//#endregion