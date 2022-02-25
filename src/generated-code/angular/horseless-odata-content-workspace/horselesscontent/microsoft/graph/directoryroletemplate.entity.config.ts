//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryRoleTemplate } from './directoryroletemplate.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DirectoryRoleTemplateEntityConfig = {
  name: 'directoryRoleTemplate',
  base: 'microsoft.graph.directoryObject',
  open: true,
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DirectoryRoleTemplate>;
//#endregion