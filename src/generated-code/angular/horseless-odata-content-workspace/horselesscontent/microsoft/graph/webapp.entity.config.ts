//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WebApp } from './webapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WebAppEntityConfig = {
  name: 'webApp',
  base: 'microsoft.graph.mobileApp',
  fields: {
    appUrl: {type: 'Edm.String'},
    useManagedBrowser: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<WebApp>;
//#endregion