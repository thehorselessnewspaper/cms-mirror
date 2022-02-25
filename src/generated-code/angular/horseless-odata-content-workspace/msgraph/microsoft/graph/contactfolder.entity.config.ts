//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ContactFolder } from './contactfolder.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ContactFolderEntityConfig = {
  name: 'contactFolder',
  base: 'microsoft.graph.entity',
  fields: {
    parentFolderId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    contacts: {type: 'graph.contact', collection: true, navigation: true},
    childFolders: {type: 'graph.contactFolder', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ContactFolder>;
//#endregion