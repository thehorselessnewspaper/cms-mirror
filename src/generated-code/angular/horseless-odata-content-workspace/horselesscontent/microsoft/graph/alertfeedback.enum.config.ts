//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AlertFeedback } from './alertfeedback.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AlertFeedbackConfig = {
  name: 'alertFeedback',
  members: AlertFeedback,
  fields: {
    unknown: {value: 0},
    truePositive: {value: 1},
    falsePositive: {value: 2},
    benignPositive: {value: 3},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<AlertFeedback>;
//#endregion