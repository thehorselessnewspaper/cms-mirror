//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ThreatCategory } from './threatcategory.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ThreatCategoryConfig = {
  name: 'threatCategory',
  members: ThreatCategory,
  fields: {
    undefined: {value: 0},
    spam: {value: 1},
    phishing: {value: 2},
    malware: {value: 3},
    unknownFutureValue: {value: 4}
  }
} as EnumTypeConfig<ThreatCategory>;
//#endregion