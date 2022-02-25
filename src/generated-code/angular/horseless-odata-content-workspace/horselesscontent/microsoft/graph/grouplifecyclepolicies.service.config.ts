//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GroupLifecyclePoliciesService } from './grouplifecyclepolicies.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const GroupLifecyclePoliciesServiceEntitySetConfig = {
  name: 'groupLifecyclePolicies',
  entityType: 'microsoft.graph.groupLifecyclePolicy',
  service: GroupLifecyclePoliciesService
} as EntitySetConfig;
//#endregion