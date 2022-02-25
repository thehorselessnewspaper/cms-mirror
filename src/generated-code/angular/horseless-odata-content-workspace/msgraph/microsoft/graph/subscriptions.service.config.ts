//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SubscriptionsService } from './subscriptions.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const SubscriptionsServiceEntitySetConfig = {
  name: 'subscriptions',
  entityType: 'microsoft.graph.subscription',
  service: SubscriptionsService
} as EntitySetConfig;
//#endregion