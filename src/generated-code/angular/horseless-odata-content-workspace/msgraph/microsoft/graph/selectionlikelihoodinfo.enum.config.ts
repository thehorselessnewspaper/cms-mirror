//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SelectionLikelihoodInfo } from './selectionlikelihoodinfo.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const SelectionLikelihoodInfoConfig = {
  name: 'selectionLikelihoodInfo',
  members: SelectionLikelihoodInfo,
  fields: {
    notSpecified: {value: 0},
    high: {value: 1}
  }
} as EnumTypeConfig<SelectionLikelihoodInfo>;
//#endregion