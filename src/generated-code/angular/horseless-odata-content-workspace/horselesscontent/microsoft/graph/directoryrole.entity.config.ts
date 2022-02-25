//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryRole } from './directoryrole.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DirectoryRoleEntityConfig = {
  name: 'directoryRole',
  base: 'microsoft.graph.directoryObject',
  open: true,
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    roleTemplateId: {type: 'Edm.String'},
    members: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as StructuredTypeConfig<DirectoryRole>;
//#endregion