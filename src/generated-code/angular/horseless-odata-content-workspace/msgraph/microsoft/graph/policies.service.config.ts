//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PoliciesService } from './policies.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PoliciesServiceEntitySetConfig = {
  name: 'policies',
  entityType: 'microsoft.graph.policyRoot',
  service: PoliciesService
} as EntitySetConfig;
//#endregion