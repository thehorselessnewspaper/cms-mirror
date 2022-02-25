//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UsersService } from './users.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const UsersServiceEntitySetConfig = {
  name: 'users',
  entityType: 'microsoft.graph.user',
  service: UsersService
} as EntitySetConfig;
//#endregion