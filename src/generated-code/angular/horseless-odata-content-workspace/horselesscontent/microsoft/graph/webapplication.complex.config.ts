//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WebApplication } from './webapplication.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WebApplicationComplexConfig = {
  name: 'webApplication',
  fields: {
    homePageUrl: {type: 'Edm.String'},
    redirectUris: {type: 'Edm.String', nullable: false, collection: true},
    logoutUrl: {type: 'Edm.String'},
    implicitGrantSettings: {type: 'graph.implicitGrantSettings'}
  }
} as StructuredTypeConfig<WebApplication>;
//#endregion