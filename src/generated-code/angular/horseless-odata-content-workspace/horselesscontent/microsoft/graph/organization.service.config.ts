//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrganizationService } from './organization.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const OrganizationServiceEntitySetConfig = {
  name: 'organization',
  entityType: 'microsoft.graph.organization',
  service: OrganizationService
} as EntitySetConfig;
//#endregion