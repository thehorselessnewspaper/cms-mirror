//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryRoleTemplatesService } from './directoryroletemplates.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DirectoryRoleTemplatesServiceEntitySetConfig = {
  name: 'directoryRoleTemplates',
  entityType: 'microsoft.graph.directoryRoleTemplate',
  service: DirectoryRoleTemplatesService
} as EntitySetConfig;
//#endregion