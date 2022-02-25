//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SubscribedSkusService } from './subscribedskus.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const SubscribedSkusServiceEntitySetConfig = {
  name: 'subscribedSkus',
  entityType: 'microsoft.graph.subscribedSku',
  service: SubscribedSkusService
} as EntitySetConfig;
//#endregion