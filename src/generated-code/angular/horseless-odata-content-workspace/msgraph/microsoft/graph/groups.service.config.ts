//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GroupsService } from './groups.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const GroupsServiceEntitySetConfig = {
  name: 'groups',
  entityType: 'microsoft.graph.group',
  service: GroupsService
} as EntitySetConfig;
//#endregion