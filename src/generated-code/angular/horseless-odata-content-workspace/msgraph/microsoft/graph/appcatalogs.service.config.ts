//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppCatalogsService } from './appcatalogs.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const AppCatalogsServiceEntitySetConfig = {
  name: 'appCatalogs',
  entityType: 'microsoft.graph.appCatalogs',
  service: AppCatalogsService
} as EntitySetConfig;
//#endregion