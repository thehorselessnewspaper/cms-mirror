//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryRolesService } from './directoryroles.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DirectoryRolesServiceEntitySetConfig = {
  name: 'directoryRoles',
  entityType: 'microsoft.graph.directoryRole',
  service: DirectoryRolesService
} as EntitySetConfig;
//#endregion