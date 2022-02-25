//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ControlScore } from './controlscore.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ControlScoreComplexConfig = {
  name: 'controlScore',
  open: true,
  fields: {
    controlCategory: {type: 'Edm.String'},
    controlName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    score: {type: 'Edm.Double'}
  }
} as StructuredTypeConfig<ControlScore>;
//#endregion