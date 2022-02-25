//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppCatalogs } from './appcatalogs.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AppCatalogsEntityConfig = {
  name: 'appCatalogs',
  base: 'microsoft.graph.entity',
  fields: {
    teamsApps: {type: 'graph.teamsApp', collection: true, navigation: true}
  }
} as StructuredTypeConfig<AppCatalogs>;
//#endregion