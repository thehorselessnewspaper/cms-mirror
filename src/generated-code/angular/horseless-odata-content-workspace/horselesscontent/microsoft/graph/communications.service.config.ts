//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CommunicationsService } from './communications.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const CommunicationsServiceEntitySetConfig = {
  name: 'communications',
  entityType: 'microsoft.graph.cloudCommunications',
  service: CommunicationsService
} as EntitySetConfig;
//#endregion