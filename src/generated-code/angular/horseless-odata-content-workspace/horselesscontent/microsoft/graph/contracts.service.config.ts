//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ContractsService } from './contracts.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const ContractsServiceEntitySetConfig = {
  name: 'contracts',
  entityType: 'microsoft.graph.contract',
  service: ContractsService
} as EntitySetConfig;
//#endregion