//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AverageComparativeScore } from './averagecomparativescore.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AverageComparativeScoreComplexConfig = {
  name: 'averageComparativeScore',
  open: true,
  fields: {
    averageScore: {type: 'Edm.Double'},
    basis: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AverageComparativeScore>;
//#endregion