//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScoredEmailAddress } from './scoredemailaddress.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ScoredEmailAddressComplexConfig = {
  name: 'scoredEmailAddress',
  fields: {
    address: {type: 'Edm.String'},
    relevanceScore: {type: 'Edm.Double'},
    selectionLikelihood: {type: 'graph.selectionLikelihoodInfo'},
    itemId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ScoredEmailAddress>;
//#endregion