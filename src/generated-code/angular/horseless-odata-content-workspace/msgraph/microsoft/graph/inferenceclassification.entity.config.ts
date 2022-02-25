//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InferenceClassification } from './inferenceclassification.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const InferenceClassificationEntityConfig = {
  name: 'inferenceClassification',
  base: 'microsoft.graph.entity',
  fields: {
    overrides: {type: 'graph.inferenceClassificationOverride', collection: true, navigation: true}
  }
} as StructuredTypeConfig<InferenceClassification>;
//#endregion