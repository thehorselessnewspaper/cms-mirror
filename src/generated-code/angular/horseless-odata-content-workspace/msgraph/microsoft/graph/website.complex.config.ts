//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Website } from './website.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WebsiteComplexConfig = {
  name: 'website',
  fields: {
    type: {type: 'graph.websiteType'},
    address: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Website>;
//#endregion