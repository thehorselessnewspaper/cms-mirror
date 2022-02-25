//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const InferenceClassificationTypeConfig = {
  name: 'inferenceClassificationType',
  members: InferenceClassificationType,
  fields: {
    focused: {value: 0},
    other: {value: 1}
  }
} as EnumTypeConfig<InferenceClassificationType>;
//#endregion