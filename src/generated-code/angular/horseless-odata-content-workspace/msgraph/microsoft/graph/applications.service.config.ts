//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ApplicationsService } from './applications.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const ApplicationsServiceEntitySetConfig = {
  name: 'applications',
  entityType: 'microsoft.graph.application',
  service: ApplicationsService
} as EntitySetConfig;
//#endregion