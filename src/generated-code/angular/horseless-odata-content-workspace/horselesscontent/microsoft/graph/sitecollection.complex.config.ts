//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SiteCollection } from './sitecollection.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SiteCollectionComplexConfig = {
  name: 'siteCollection',
  fields: {
    dataLocationCode: {type: 'Edm.String'},
    hostname: {type: 'Edm.String'},
    root: {type: 'graph.root'}
  }
} as StructuredTypeConfig<SiteCollection>;
//#endregion