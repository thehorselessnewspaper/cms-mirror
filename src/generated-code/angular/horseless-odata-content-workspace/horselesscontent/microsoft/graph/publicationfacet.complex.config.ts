//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PublicationFacet } from './publicationfacet.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PublicationFacetComplexConfig = {
  name: 'publicationFacet',
  fields: {
    level: {type: 'Edm.String'},
    versionId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PublicationFacet>;
//#endregion