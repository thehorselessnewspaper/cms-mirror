//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeService } from './me.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const MeServiceEntitySetConfig = {
  name: 'me',
  entityType: 'microsoft.graph.user',
  service: MeService
} as EntitySetConfig;
//#endregion