//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BaseItemVersion } from './baseitemversion.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const BaseItemVersionEntityConfig = {
  name: 'baseItemVersion',
  base: 'microsoft.graph.entity',
  fields: {
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    publication: {type: 'graph.publicationFacet'}
  }
} as StructuredTypeConfig<BaseItemVersion>;
//#endregion