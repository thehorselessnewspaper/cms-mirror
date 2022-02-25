//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DataPolicyOperationsService } from './datapolicyoperations.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DataPolicyOperationsServiceEntitySetConfig = {
  name: 'dataPolicyOperations',
  entityType: 'microsoft.graph.dataPolicyOperation',
  service: DataPolicyOperationsService
} as EntitySetConfig;
//#endregion